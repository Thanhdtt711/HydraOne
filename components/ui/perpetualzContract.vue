<script setup>
import { useActiveSide } from '~/composables/useActiveSide';
import { useActiveOrderType } from '~/composables/useActiveOrderType';
import RangeInupt from './RangeInupt.vue';
import { ref } from 'vue';
import InfoTooltip from './InfoTooltip.vue';

const activeSide = useActiveSide();
const activeType = useActiveOrderType();

const inputValue = ref('');
const onKeydown = (event) => {
    const key = event.key;
    const isNumber = key >= '0' && key <= '9';
    const allowedKeys = [
        'Backspace',
        'Delete',
        'ArrowLeft',
        'ArrowRight',
        'Tab',
        'Home',
        'End',
    ];
    const isAllowedKey = allowedKeys.includes(key);
    const isModifier = event.ctrlKey || event.metaKey;
    if (!isNumber && !isAllowedKey && !isModifier) {
        event.preventDefault();
    }
};

const onInput = () => {
    inputValue.value = inputValue.value.replace(/[^0-9]/g, '');
};


// ==========================================================
// PHẦN TÍNH TOÁN MỚI (THÊM VÀO)
// ==========================================================

// --- 1. GIÁ TRỊ ĐẦU VÀO KHÁC ---

// 'leverageValue' (number) là giá trị từ thanh trượt
// TODO: Bạn cần liên kết 'ref' này với component RangeInupt
// Ví dụ: <RangeInupt v-model="leverageValue" />
const leverageValue = ref(1.1);

// 'entryPrice' (number) là giá thị trường (ví dụ)
// (Sau này bạn có thể fetch giá này từ API)
const entryPrice = ref(0.5329);

// --- 2. HÀM HỖ TRỢ ĐỊNH DẠNG ---
const formatCurrency = (value, decimals = 2) => {
    if (isNaN(value) || !value || value === 0) return '-';
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    }).format(value);
};

const formatNumber = (value, decimals = 3) => {
    if (isNaN(value) || !value || value === 0) return '-';
    return value.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    });
};

// --- 3. CÁC CÔNG THỨC TÍNH TOÁN (Computed) ---

// 'collateralAmount' (number) - Đây là "cầu nối"
// Nó chuyển đổi 'inputValue' (string) của bạn thành một con số (number)
const collateralAmount = computed(() => parseFloat(inputValue.value) || 0);

// Entry Price (đã định dạng)
const formattedEntryPrice = computed(() => formatCurrency(entryPrice.value, 4));

// Collateral Value (Giá trị tài sản thế chấp)
// Công thức: Collateral Amount * Entry Price
const collateralValue = computed(() => {
    return collateralAmount.value * entryPrice.value;
});
const formattedCollateralValue = computed(() => formatCurrency(collateralValue.value));

// Total Position Size (Tổng kích thước vị thế)
// Công thức: Collateral Value * Leverage
const totalPositionSize = computed(() => {
    return collateralValue.value * leverageValue.value;
});
const totalPositionSizeInADA = computed(() => {
    if (entryPrice.value === 0) return 0;
    return totalPositionSize.value / entryPrice.value;
});
const formattedTotalPositionSize = computed(() => {
    const usd = formatCurrency(totalPositionSize.value);
    if (usd === '-') return '-';
    const ada = formatNumber(totalPositionSizeInADA.value, 3);
    return `${usd} (${ada} ADA)`;
});

// Estimated Liquidation Price (Giá thanh lý ước tính)
const formattedLiquidationPrice = computed(() => {
    if (collateralAmount.value === 0) return '-';
    // TODO: Thay thế bằng công thức tính thanh lý thực tế
    return '~ $0.0499'; // (Đây là giá trị giả)
});

// Hourly Borrow Fee (Phí vay hàng giờ)
const HOURLY_BORROW_RATE = 0.000207; // 0.0207%
const hourlyBorrowFee = computed(() => {
    return totalPositionSize.value * HOURLY_BORROW_RATE;
});
const formattedHourlyBorrowFee = computed(() => {
    const usd = formatCurrency(hourlyBorrowFee.value);
    if (usd === '-') return '-';
    return `${usd} (0.0207%)`;
});

// Opening Fee Platform (Phí mở - Nền tảng)
const PLATFORM_FEE_RATE = 0.00375; // 0.375%
const openingFeePlatform = computed(() => {
    return totalPositionSize.value * PLATFORM_FEE_RATE;
});
const openingFeePlatformInADA = computed(() => {
    if (entryPrice.value === 0) return 0;
    return openingFeePlatform.value / entryPrice.value;
});
const formattedOpeningFeePlatform = computed(() => {
    const usd = formatCurrency(openingFeePlatform.value);
    if (usd === '-') return '-';
    const ada = formatNumber(openingFeePlatformInADA.value, 2);
    return `${usd} (${ada} ADA)`;
});

// Opening Fee LP (Phí mở - LP)
const LP_FEE_RATE = 0.002; // 0.2%
const openingFeeLP = computed(() => {
    return totalPositionSize.value * LP_FEE_RATE;
});
const openingFeeLPInADA = computed(() => {
    if (entryPrice.value === 0) return 0;
    return openingFeeLP.value / entryPrice.value;
});
const formattedOpeningFeeLP = computed(() => {
    const usd = formatCurrency(openingFeeLP.value);
    if (usd === '-') return '-';
    const ada = formatNumber(openingFeeLPInADA.value, 2);
    return `${usd} (${ada} ADA)`;
});

// Batcher Fee (Phí Batcher)
const batcherFee = ref(1.5); // 1.5 ADA
const formattedBatcherFee = computed(() => {
    // Chỉ hiển thị phí này khi có giao dịch
    if (collateralAmount.value === 0) return '-';
    return `${batcherFee.value} ADA`;
});
// ===============================================
// PHẦN MỚI CHO TAKE PROFIT & STOP LOSS
// ===============================================

// 1. Refs cho 2 input mới
const takeProfitPrice = ref('');
const stopLossPrice = ref('');

// 2. Hàm helper để lọc giá (cho phép dấu chấm)
const cleanPrice = (val) => {
    if (!val) return '';
    let str = String(val);
    str = str.replace(/[^0-9.]/g, ''); // Xóa ký tự lạ
    str = str.replace(/(\..*)\./g, '$1'); // Chỉ cho phép 1 dấu chấm
    return str;
};

// 3. Hàm xử lý input
const onTpInput = () => { takeProfitPrice.value = cleanPrice(takeProfitPrice.value); };
const onSlInput = () => { stopLossPrice.value = cleanPrice(stopLossPrice.value); };

// 4. Hàm xử lý keydown (cho phép gõ dấu chấm)
const onPriceKeydown = (event) => {
    const key = event.key;
    const value = event.target.value;
    const isNumber = key >= '0' && key <= '9';
    const isDot = key === '.' && !value.includes('.'); // Chỉ cho phép 1 dấu chấm
    const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Home', 'End'];
    const isAllowedKey = allowedKeys.includes(key);
    const isModifier = event.ctrlKey || event.metaKey;

    if (!isNumber && !isDot && !isAllowedKey && !isModifier) {
        event.preventDefault();
    }
};

// 5. Computed để tính toán PnL cho Take Profit
const takeProfitPnL = computed(() => {
    const tp = parseFloat(takeProfitPrice.value);
    const ep = entryPrice.value;
    const size = totalPositionSizeInADA.value;
    const colVal = collateralValue.value;

    if (!tp || !ep || !size || !colVal) return null;

    let usdPnL = 0;
    if (activeSide.value === 'long') {
        usdPnL = (tp - ep) * size;
    } else {
        // (Giả sử cho vị thế Short)
        usdPnL = (ep - tp) * size;
    }

    // PnL % = (Lợi nhuận USD / Tổng giá trị thế chấp)
    const percentPnL = (usdPnL / colVal) * 100;

    const sign = usdPnL >= 0 ? '+' : '';
    const formattedUsd = formatCurrency(usdPnL, 4).replace('$', ''); // Xóa $
    const formattedPercent = formatNumber(percentPnL, 2);

    return `PnL: ${sign}$${formattedUsd} (${sign}${formattedPercent}%)`;
});

// 6. Computed để hiển thị cảnh báo cho Stop Loss
const stopLossWarning = computed(() => {
    const sl = parseFloat(stopLossPrice.value);
    const ep = entryPrice.value;

    if (!ep) return ''; // Chưa có giá vào lệnh

    const formattedEp = formatCurrency(ep, 4);

    if (activeSide.value === 'long') {
        if (sl && sl >= ep) {
            return 'Price must be lower than Entry Price.';
        }
        return `For Long positions, must be lower than ${formattedEp}.`;
    }

    if (activeSide.value === 'short') {
        if (sl && sl <= ep) {
            return 'Price must be higher than Entry Price.';
        }
        return `For Short positions, must be higher than ${formattedEp}.`;
    }

    return ''; // Không có phe nào được chọn
});
</script>

<template>
    <div
        class="jsx-3478383214 flex-shrink-0 min-w-[250px] max-w-[400px] w-full border-l border-white/25 overflow-x-auto">
        <div class="relative flex bg-black flex-col h-[876px] w-full max-w-lg bg-[#010101]">
            <div class="w-full">
                <div class="relative h-full flex flex-col">
                    <div class="absolute inset-0 z-0">
                        <img alt="Background" loading="lazy" width="476" height="100" decoding="async" data-nimg="1"
                            class="w-[476px] h-[100px] object-cover" src="" style="color: transparent;">
                        <div class="absolute inset-0">
                            <div class="absolute inset-0 bg-black/50"></div>
                            <div
                                class="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black backdrop-blur-md">
                            </div>
                        </div>
                    </div>
                    <div class="relative z-10 p-4 flex flex-col h-full">
                        <div class="flex-1 space-y-6 overflow-y-auto">
                            <h2 class="text-2xl font-medium text-white">New Perpetual Contract</h2>
                            <div class="space-y-2">
                                <div class="flex justify-between items-center"><span
                                        class="text-sm font-medium text-white">Choose your
                                        Position</span></div>
                                <div class="flex flex-col flex-shrink-0 items-start w-full">
                                    <div class="flex rounded-lg bg-[#212121] m-0 w-full">
                                        <button @click="activeSide = 'long'" :class="[
                                            'transform focus:scale-[0.97] focus:shadow-sm active:scale-[0.95] flex-1 min-w-[80px]  text-[#40bfe2] text-[16px] transition-colors duration-200 py-2 rounded-[0.3125rem] relative inline-flex items-center justify-center h-[40px]',
                                            activeSide === 'long'
                                                ? 'bg-[#40bfe2]/[.15] !text-[#40bfe2]' // Active
                                                : 'text-white hover:bg-[#40bfe2]/[.15] hover:text-[#40bfe2]'
                                        ]">
                                            <span class="flex items-center justify-center w-full">Long</span>
                                        </button>

                                        <button @click="activeSide = 'short'" :class="[
                                            'transform focus:scale-[0.97] focus:shadow-sm active:scale-[0.95] flex-1 min-w-[80px] text-white hover:bg-[#ff4d4d]/[.15] hover:text-[#ff4d4d] text-[16px] transition-colors duration-200 py-2 rounded-[0.3125rem] relative inline-flex items-center justify-center h-[40px]',
                                            activeSide === 'short'
                                                ? 'bg-[#ff4d4d]/[.15] !text-[#ff4d4d]' // Active
                                                : 'text-white hover:bg-[#ff4d4d]/[.15] hover:text-[#ff4d4d]'
                                        ]">
                                            <span class="flex items-center justify-center w-full">Short</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center border-b border-gray-700 bg-black w-full">
                                <div class="flex h-[48px] w-full">
                                    <div @click="activeType = 'market'" :class="[
                                        'flex-1 flex items-center justify-center cursor-pointer transition-colors border-b-2 text-sm font-medium',
                                        activeType === 'market'
                                            ? 'border-[#40bfe2] text-[#40bfe2]' // <-- Class Active
                                            : 'border-transparent text-white hover:text-[#40bfe2]'
                                    ]">
                                        Market
                                    </div>

                                    <div @click="activeType = 'limit'" :class="[
                                        'flex-1 flex items-center justify-center cursor-pointer transition-colors border-b-2 text-sm font-medium',
                                        activeType === 'limit'
                                            ? 'border-[#40bfe2] text-[#40bfe2]' // <-- Class Active
                                            : 'border-transparent text-white hover:text-[#40bfe2]'
                                    ]">
                                        Limit
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <div class="flex justify-between items-center">
                                    <span class="text-sm font-medium text-white">Collateral</span>
                                    <div class="flex items-center gap-1 text-xs font-light"><span
                                            class="text-white/60">Available:</span>
                                        <span class="text-white/60">0ADA</span>
                                    </div>
                                </div>
                                <div class="relative">
                                    <input type="text" inputmode="numeric" placeholder="0"
                                        class="w-full h-10 pl-4 pr-24 bg-[#FFFFFF14] rounded-lg text-white text-sm font-light outline-none"
                                        aria-label="Payment amount" v-model="inputValue" @keydown="onKeydown"
                                        @input="onInput" />
                                    <button
                                        class="absolute right-2 top-1/2 transform -translate-y-1/4 flex items-center space-x-2 px-2 py-1 bg-[#C2C2C2]/10 hover:bg-[#C2C2C2]/20 rounded-lg transition-colors">

                                        <IconsCardano />

                                        <span class="text-white font-medium text-xs">ADA</span>
                                        <svg class="text-[#C2C2C2]/60" width="12" height="12" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <polyline points="6,9 12,15 18,9"></polyline>
                                        </svg>
                                    </button>
                                </div>
                            </div>


                            <div v-if="activeType === 'limit'" class="space-y-2">
                                <div class="flex justify-between items-center"><span
                                        class="text-neutral-400 font-inter inline-flex items-center gap-1 text-sm font-medium text-white"><span>Limit
                                            Price</span>
                                        <div class="relative flex items-center"><svg width="15" height="15"
                                                viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                class="focus:outline-none focus:ring focus:ring-green-400 cursor-pointer">
                                                <circle cx="7.5" cy="7.5" r="6.65" stroke="#40bfe2" stroke-opacity="0.5"
                                                    stroke-width="0.7"></circle><text x="50%" y="50%"
                                                    text-anchor="middle" dy="0.35em" fill="#40bfe2" font-size="8"
                                                    font-family="'Inter', sans-serif" font-weight="400"
                                                    font-style="italic">i</text>
                                            </svg></div>
                                    </span>
                                    <div class="text-xs text-neutral-400">Market: $0.5407</div>
                                </div>
                                <div class="flex justify-between items-center px-2 h-10 rounded-lg bg-[#FFFFFF14]">
                                    <input type="text" inputmode="decimal" placeholder="0.00"
                                        class="bg-transparent text-white text-sm font-light outline-none w-full"
                                        aria-label="Limit price" value=""><span
                                        class="text-white text-xs ml-2">USD</span>
                                </div>
                                <div class="h-4"></div>
                            </div>



                            <RangeInupt v-model="leverageValue" />



                            <div class="space-y-4">
                                <div class="flex gap-4">

                                    <div class="flex-1 space-y-2">
                                        <span
                                            class="text-neutral-400 font-inter inline-flex items-center gap-1 text-xs">
                                            <span>Take Profit</span>
                                            <InfoTooltip
                                                text="The price at which your position will be automatically closed to secure profits. This is optional and can be left empty." />
                                        </span>
                                        <div
                                            class="flex justify-between items-center px-2 h-10 rounded-lg bg-[#FFFFFF14]">
                                            <input type="text" inputmode="decimal" placeholder="Optional"
                                                class="bg-transparent text-white text-sm font-light outline-none w-full placeholder-neutral-500"
                                                aria-label="Take profit price" v-model="takeProfitPrice"
                                                @keydown="onPriceKeydown" @input="onTpInput" />
                                            <span class="text-white text-xs ml-2">USD</span>
                                        </div>

                                        <div class="h-8 mt-1">
                                            <span v-if="takeProfitPnL" class="text-green-400 text-xs font-medium">
                                                {{ takeProfitPnL }}
                                            </span>
                                        </div>
                                    </div>

                                    <div class="flex-1 space-y-2">
                                        <span
                                            class="text-neutral-400 font-inter inline-flex items-center gap-1 text-xs">
                                            <span>Stop Loss</span>
                                            <InfoTooltip
                                                text="The price at which your position will be automatically closed to limit losses. This is optional and can be left empty." />
                                        </span>
                                        <div
                                            class="flex justify-between items-center px-2 h-10 rounded-lg bg-[#FFFFFF14]">
                                            <input type="text" inputmode="decimal" placeholder="Optional"
                                                class="bg-transparent text-white text-sm font-light outline-none w-full placeholder-neutral-500"
                                                aria-label="Stop loss price" v-model="stopLossPrice"
                                                @keydown="onPriceKeydown" @input="onSlInput" />
                                            <span class="text-white text-xs ml-2">USD</span>
                                        </div>

                                        <div class="h-8 mt-1">
                                            <span v-if="stopLossPrice" class="text-yellow-400 text-xs font-medium">
                                                {{ stopLossWarning }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col items-start self-stretch pb-2">
                                <button
                                    class="transition-all transform focus:scale-[0.97] focus:shadow-sm active:scale-[0.95] bg-[#40bfe2] text-[#0D0D0D] px-6 py-3 rounded-lg font-medium w-full relative inline-flex items-center justify-center h-[40px]">Connect
                                    Wallet</button>
                            </div>
                            <div class="flex mb-4">
                                <div class="flex flex-col text-[12px] space-y-1 flex-1">
                                    <span class="text-neutral-400 font-inter inline-flex items-center gap-1 ">
                                        <span>Max
                                            Position Size</span>
                                        <InfoTooltip
                                            text="The maximum position size allowed on the platform. This limit helps maintain market stability and manage risk." />
                                    </span>
                                    <span class="text-white font-medium font-inter">$250.000</span>
                                </div>
                                <div class="flex flex-col text-[12px] space-y-1 flex-1  fpl-4 whitespace-nowrap">
                                    <span class="text-neutral-400 font-inter inline-flex items-center gap-1 ">
                                        <span>Liquidity
                                            Available</span>
                                        <InfoTooltip
                                            text="The current liquidity available for borrowing. This amount is based on the total pool size and the amount already borrowed." />
                                    </span>
                                    <span class="text-white font-medium font-inter">$4,479,427.68 (8.6%
                                        utilized)</span>
                                </div>
                            </div>
                            <div class="space-y-2">

                                <div class="flex justify-between items-center text-[12px]">
                                    <span class="text-neutral-400 font-inter inline-flex items-center gap-1">
                                        <span>Entry Price</span>
                                        <InfoTooltip text="Giá thị trường hiện tại của tài sản." />
                                    </span>
                                    <input type="text" readonly
                                        class="text-white font-medium font-inter bg-transparent border-none outline-none text-right w-36 placeholder-neutral-600"
                                        :value="formattedEntryPrice">
                                </div>

                                <div class="flex justify-between items-center text-[12px]">
                                    <span class="text-neutral-400 font-inter inline-flex items-center gap-1">
                                        <span>Collateral Value</span>
                                        <InfoTooltip text="Tổng giá trị USD của tài sản thế chấp bạn cung cấp." />
                                    </span>
                                    <input type="text" readonly
                                        class="text-white font-medium font-inter bg-transparent border-none outline-none text-right w-36 placeholder-neutral-600"
                                        :value="formattedCollateralValue">
                                </div>

                                <div class="flex justify-between items-center text-[12px]">
                                    <span class="text-neutral-400 font-inter inline-flex items-center gap-1">
                                        <span>Estimated Liquidation Price</span>
                                        <InfoTooltip text="Giá ước tính mà vị thế của bạn sẽ bị thanh lý." />
                                    </span>
                                    <input type="text" readonly
                                        class="text-white font-medium font-inter bg-transparent border-none outline-none text-right w-36 placeholder-neutral-600"
                                        :value="formattedLiquidationPrice">
                                </div>

                                <div class="flex justify-between items-center text-[12px]">
                                    <span class="text-neutral-400 font-inter inline-flex items-center gap-1">
                                        <span>Total Position Size</span>
                                        <InfoTooltip text="Tổng giá trị vị thế của bạn sau khi áp dụng đòn bẩy." />
                                    </span>
                                    <input type="text" readonly
                                        class="text-white font-medium font-inter bg-transparent border-none outline-none text-right w-36 placeholder-neutral-600"
                                        :value="formattedTotalPositionSize">
                                </div>

                                <div class="flex justify-between items-center text-[12px]">
                                    <span class="text-neutral-400 font-inter inline-flex items-center gap-1">
                                        <span>Hourly Borrow Fee</span>
                                        <InfoTooltip
                                            text="Phí ước tính bạn phải trả hàng giờ để duy trì phần vị thế đã vay." />
                                    </span>
                                    <input type="text" readonly
                                        class="text-white font-medium font-inter bg-transparent border-none outline-none text-right w-36 placeholder-neutral-600"
                                        :value="formattedHourlyBorrowFee">
                                </div>

                                <div class="flex justify-between items-center text-[12px]">
                                    <span class="text-neutral-400 font-inter inline-flex items-center gap-1">
                                        <span>Opening Fee Platform</span>
                                        <InfoTooltip text="Phí một lần trả cho nền tảng để mở vị thế." />
                                    </span>
                                    <input type="text" readonly
                                        class="text-white font-medium font-inter bg-transparent border-none outline-none text-right w-36 placeholder-neutral-600"
                                        :value="formattedOpeningFeePlatform">
                                </div>

                                <div class="flex justify-between items-center text-[12px]">
                                    <span class="text-neutral-400 font-inter inline-flex items-center gap-1">
                                        <span>Opening Fee LP</span>
                                        <InfoTooltip
                                            text="Phí một lần trả cho nhà cung cấp thanh khoản (LP) để mở vị thế." />
                                    </span>
                                    <input type="text" readonly
                                        class="text-white font-medium font-inter bg-transparent border-none outline-none text-right w-36 placeholder-neutral-600"
                                        :value="formattedOpeningFeeLP">
                                </div>

                                <div class="flex justify-between items-center text-[12px]">
                                    <span class="text-neutral-400 font-inter inline-flex items-center gap-1">
                                        <span>Batcher Fee</span>
                                        <InfoTooltip text="Phí cố định cho mỗi giao dịch." />
                                    </span>
                                    <input type="text" readonly
                                        class="text-white font-medium font-inter bg-transparent border-none outline-none text-right w-36 placeholder-neutral-600"
                                        :value="formattedBatcherFee">
                                </div>
                            </div>
                            <div class="mt-4"><a href="https://docs.strikefinance.org/perpetuals/parameters"
                                    target="_blank" rel="noopener noreferrer"
                                    class="text-neutral-400 text-xs underline hover:text-neutral-300 transition-colors">View
                                    Fee Parameters</a>
                            </div>
                            <div class="mt-2">
                                <div class="text-neutral-400 text-xs leading-relaxed">
                                    <strong>Disclaimer:</strong> When setting stop loss, please keep in mind
                                    liquidation price may change due to ongoing interest rate. Please check
                                    liquidation price frequently to set stop loss above liquidation price and
                                    add a large buffer.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>