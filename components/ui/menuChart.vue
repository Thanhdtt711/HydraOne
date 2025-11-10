<template>
    <div
        class="flex flex-col lg:flex-row flex-shrink-0 items-start lg:items-center py-4 lg:py-6 px-4 w-full h-auto lg:h-20 gap-4 overflow-hidden">
        <div class="w-full lg:w-auto flex-shrink-0">
            <div class="flex items-center gap-2 mb-2 lg:mb-0 lg:gap-4 w-full sm:w-auto flex-shrink-0">
                <button @click="openChartModal"
                    class="flex items-center gap-3 lg:gap-5 text-white hover:text-gray-300 transition-colors">
                    <div class="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center flex-shrink-0">
                        <IconsCardano />
                    </div>
                    <span class="text-white text-sm lg:text-lg whitespace-nowrap mr-3 w-20 lg:w-24">ADA-USD</span>
                    <div class="transition-all duration-200 flex-shrink-0"
                        style="transform: rotateX(0deg); transform-origin: center center;">
                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"
                            style="fill: currentcolor;">
                            <path
                                d="M6.77862 5.76384L1.86662 0.85584C1.73173 0.7218 1.54928 0.646569 1.35912 0.646569C1.16895 0.646569 0.986512 0.7218 0.85162 0.85584L0.42062 1.28284C0.286337 1.4176 0.210938 1.6001 0.210938 1.79034C0.210938 1.98059 0.286337 2.16308 0.42062 2.29784L6.26862 8.14584C6.40423 8.28043 6.58755 8.35596 6.77862 8.35596C6.96968 8.35596 7.153 8.28043 7.28862 8.14584L13.1286 2.30584C13.2627 2.17095 13.3379 1.98851 13.3379 1.79834C13.3379 1.60818 13.2627 1.42573 13.1286 1.29084L12.6976 0.85984C12.5629 0.725557 12.3804 0.650158 12.1901 0.650158C11.9999 0.650158 11.8174 0.725557 11.6826 0.85984L6.77862 5.76384Z"
                                fill="white"></path>
                        </svg>
                    </div>
                </button>
                <div class="lg:hidden mr-4"><span class="text-white text-base ">{{ formattedMarketValue }}</span></div>
            </div>
        </div>
        <div class="w-full lg:w-auto flex-grow min-w-0 lg:ml-[135px]">
            <div class="hidden lg:flex lg:gap-[40px] w-full">
                <div class="flex flex-col items-start gap-2 min-w-0 w-[200px] mt-2">
                    <div class="text-[#b7b7b7] text-xs leading-[120%] whitespace-nowrap">Market Value
                    </div>
                    <div class="flex justify-start items-center h-10 text-sm font-medium w-full  text-white min-w-0">
                        <span class="truncate">{{ formattedMarketValue }}</span>
                    </div>
                </div>
                <div class="flex flex-col items-start gap-2 min-w-0 w-[200px] mt-2">
                    <div class="relative">
                        <button @click="openVolumeModal"
                            class="flex items-center gap-1 text-xs text-[#b7b7b7] hover:text-white transition-colors">
                            <span>Volume</span><span>24H</span>
                            <div class="transition-all duration-200 w-2 h-2 flex-shrink-0"
                                style="transform: rotateX(0deg); transform-origin: center center;">
                                <svg width="14" height="9" viewBox="0 0 14 9" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" style="fill: currentcolor;">
                                    <path
                                        d="M6.77862 5.76384L1.86662 0.85584C1.73173 0.7218 1.54928 0.646569 1.35912 0.646569C1.16895 0.646569 0.986512 0.7218 0.85162 0.85584L0.42062 1.28284C0.286337 1.4176 0.210938 1.6001 0.210938 1.79034C0.210938 1.98059 0.286337 2.16308 0.42062 2.29784L6.26862 8.14584C6.40423 8.28043 6.58755 8.35596 6.77862 8.35596C6.96968 8.35596 7.153 8.28043 7.28862 8.14584L13.1286 2.30584C13.2627 2.17095 13.3379 1.98851 13.3379 1.79834C13.3379 1.60818 13.2627 1.42573 13.1286 1.29084L12.6976 0.85984C12.5629 0.725557 12.3804 0.650158 12.1901 0.650158C11.9999 0.650158 11.8174 0.725557 11.6826 0.85984L6.77862 5.76384Z"
                                        fill="white"></path>
                                </svg>
                            </div>
                        </button>

                        <Volume />
                    </div>
                    <div class="flex justify-start text-white items-center h-10 text-sm font-medium w-full min-w-0">
                        <span class="truncate">{{ formattedVolume24h }}</span>
                    </div>
                </div>
                <div class="flex flex-col items-start gap-2 min-w-0 w-[200px] mt-2">
                    <div class="text-[#b7b7b7] text-xs leading-[120%] whitespace-nowrap">Long Interest
                    </div>
                    <div class="flex justify-start text-white items-center h-10 text-sm font-medium w-full min-w-0">
                        <span class="truncate">{{ longInterest }}</span>
                    </div>
                </div>
                <div class="flex flex-col items-start gap-2 min-w-0 w-[200px] mt-2">
                    <div class="text-[#b7b7b7] text-xs leading-[120%] whitespace-nowrap">Short Interest
                    </div>
                    <div class="flex justify-start text-white items-center h-10 text-sm font-medium w-full min-w-0">
                        <span class="truncate">{{ shortInterest }}</span>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-4 lg:hidden w-full">
                <div class="flex flex-col items-start gap-1 min-w-0">
                    <div class="relative">
                        <button
                            class="flex items-center gap-1 text-xs text-[#b7b7b7] hover:text-white transition-colors">
                            <span>Volume</span><span>24H</span>
                            <div class="transition-all duration-200 w-2 h-2 flex-shrink-0"
                                style="transform: rotateX(0deg); transform-origin: center center;">
                                <svg width="14" height="9" viewBox="0 0 14 9" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" style="fill: currentcolor;">
                                    <path
                                        d="M6.77862 5.76384L1.86662 0.85584C1.73173 0.7218 1.54928 0.646569 1.35912 0.646569C1.16895 0.646569 0.986512 0.7218 0.85162 0.85584L0.42062 1.28284C0.286337 1.4176 0.210938 1.6001 0.210938 1.79034C0.210938 1.98059 0.286337 2.16308 0.42062 2.29784L6.26862 8.14584C6.40423 8.28043 6.58755 8.35596 6.77862 8.35596C6.96968 8.35596 7.153 8.28043 7.28862 8.14584L13.1286 2.30584C13.2627 2.17095 13.3379 1.98851 13.3379 1.79834C13.3379 1.60818 13.2627 1.42573 13.1286 1.29084L12.6976 0.85984C12.5629 0.725557 12.3804 0.650158 12.1901 0.650158C11.9999 0.650158 11.8174 0.725557 11.6826 0.85984L6.77862 5.76384Z"
                                        fill="white"></path>
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div class="flex justify-start text-white items-center h-8 text-xs font-medium w-full min-w-0">
                        <span class="truncate">{{ formattedVolume24h }}</span>
                    </div>
                </div>
                <div class="flex flex-col items-start gap-1 min-w-0">
                    <div class="text-[#b7b7b7] text-xs leading-[120%] whitespace-nowrap">Long Interest
                    </div>
                    <div class="flex justify-start text-white items-center h-8 text-xs font-medium w-full min-w-0">
                        <span class="truncate">{{ longInterest }}</span>
                    </div>
                </div>
                <div class="flex flex-col items-start gap-1 min-w-0">
                    <div class="text-[#b7b7b7] text-xs leading-[120%] whitespace-nowrap">Short Interest
                    </div>
                    <div class="flex justify-start text-white items-center h-8 text-xs font-medium w-full min-w-0">
                        <span class="truncate">{{ shortInterest }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <TableChart />
</template>
<script setup>
import TableChart from './TableChart.vue';
import Volume from './Volume.vue';
import { useModalState } from '~/composables/useModalState';
// 1. Thêm ref, computed, onMounted, onBeforeUnmount
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const isVolumeModal = useModalState('VolumeModal');
const isChartModal = useModalState('ChartModal');
const openChartModal = () => {
    isChartModal.value = !isChartModal.value;
};
const openVolumeModal = () => {
    isVolumeModal.value = !isVolumeModal.value;
};

// --- LOGIC MỚI: LẤY DỮ LIỆU ĐỘNG ---

// 2. Hàm helper để định dạng tiền tệ (USD)
const formatCurrency = (value, decimals = 2) => {
  // Kiểm tra nếu giá trị không hợp lệ hoặc bằng 0
  if (!value || isNaN(value)) {
    return 'Loading...'; // Hoặc trả về một giá trị mặc định như '$0.00'
  }
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
};

// 3. Gọi API của CoinGecko để lấy giá và khối lượng 24h
//    (useFetch sẽ tự động chạy ở cả server và client)
const { data, refresh } = await useFetch('https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=usd&include_24hr_vol=true');

// 4. Tạo các 'computed' để lấy dữ liệu từ API
const marketValue = computed(() => data.value?.cardano?.usd);
const volume24h = computed(() => data.value?.cardano?.usd_24h_vol);

// 5. Tạo các 'computed' đã định dạng để hiển thị trên UI
const formattedMarketValue = computed(() => formatCurrency(marketValue.value, 4)); // $0.5600
const formattedVolume24h = computed(() => formatCurrency(volume24h.value, 2)); // $4,227,203.99

// --- Dữ liệu về Lãi suất Long/Short (Open Interest) ---
// Ghi chú: Dữ liệu này (Long/Short Interest) phức tạp hơn
// và thường phải lấy từ API riêng của sàn giao dịch (ví dụ: Binance Futures).
// API của CoinGecko không cung cấp dữ liệu này.
// Tạm thời chúng ta sẽ giữ tĩnh hoặc bạn cần tìm API riêng cho nó.
const longInterest = ref('$448.096,88');
const shortInterest = ref('$38.841,04');


// 6. Tự động làm mới dữ liệu (để nó "động")
let refreshInterval;
onMounted(() => {
  // Cứ mỗi 30 giây, gọi lại hàm 'refresh' của useFetch
  refreshInterval = setInterval(() => {
    refresh();
  }, 30000); // 30,000 ms = 30 giây
});

onBeforeUnmount(() => {
  // Dọn dẹp interval khi component bị hủy (chuyển trang)
  if (refreshInterval) {
    clearInterval(refreshInterval);
  }
});
</script>