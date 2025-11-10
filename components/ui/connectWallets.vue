<script setup>
import { computed } from 'vue'; // 1. Import 'computed'
import { useCardano } from '~/composables/useCardano';

const isWalletModalOpens = useModalState('walletModals');

const closeWalletModals = () => {
    isWalletModalOpens.value = false;
};

const {
    connectWallet,
    disconnectWallet,
    isConnected,
    walletAddress,
    // --- DỮ LIỆU GIẢ ĐỊNH BẠN CẦN LẤY TỪ useCardano ---
    // Bạn cần cập nhật composable 'useCardano' để cung cấp các giá trị này
    balanceUSD,  // Ví dụ: 0.60
    totalADA,    // Ví dụ: 1.10
    tokens       // Ví dụ: [ { id: 'ada', name: 'ADA', amount: 1.1044, valueADA: 1.10, valueUSD: 0.60, icon: 'IconsCardano' }, ... ]
} = useCardano();
// 2. Tạo một computed để rút gọn địa chỉ ví
const truncatedAddress = computed(() => {
    if (!walletAddress.value) return '';
    const start = walletAddress.value.substring(0, 8);
    const end = walletAddress.value.substring(walletAddress.value.length - 8);
    return `${start}...${end}`;
});
</script>
<template>
    <div v-if="isWalletModalOpens" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 cursor-default"></div>
    <div :class="[
        'fixed top-0 right-0 h-full w-full max-w-md bg-lighter-black border-l border-white/10 text-white z-50 transform transition-transform duration-300 ease-in-out',
        isWalletModalOpens ? 'translate-x-0' : 'translate-x-full'
    ]">
        <div class="flex flex-col h-full cursor-default">
            <div class="flex items-center justify-between p-6">
                <div class="flex items-center gap-3">
                    <div class="flex items-center gap-2">

                        <div class="font-mono text-lg cursor-text">{{ truncatedAddress }}</div>

                        <button class="p-1 hover:bg-white/10 rounded transition-colors text-gray-400 hover:text-white"
                            title=""><svg class="w-4 h-4" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z">
                                </path>
                            </svg></button>

                    </div>
                </div><button @click="closeWalletModals"
                    class="p-2 hover:bg-white/10 rounded-full transition-colors"><svg width="20" height="20"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg></button>
            </div>
            <div class="px-6 pb-6">
                <div class="flex items-center justify-between">
                    <div>
                        <div class="text-2xl font-bold cursor-text">${{ balanceUSD }}</div>
                        <div class="text-sm text-gray-400 cursor-text">{{ totalADA }} ₳</div>
                    </div>

                    <button @click="disconnectWallet(); closeWalletModals()"
                        class="p-2 hover:bg-red-500/20 rounded-full transition-colors text-red-400"
                        title="Disconnect Wallet"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            <polyline points="16,17 21,12 16,7"></polyline>
                            <line x1="21" x2="9" y1="12" y2="12"></line>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="flex-1 overflow-y-auto">
                <div class="p-4 space-y-3">
                    <div class="space-y-3" v-for="token in tokens" :key="token.id">
                        <div class="flex items-center justify-between p-3 bg-white/5 rounded-lg cursor-default ">
                            <div class="flex items-center gap-3">
                                <div class="w-6 h-6 rounded-full flex items-center justify-center overflow-hidden">
                                    <div class="w-full h-full flex items-center justify-center">

                                        <IconsCardano v-if="token.name === 'ADA'" />

                                    </div>
                                </div>
                                <div>
                                    <div class="flex items-center gap-1">
                                        <span class="font-medium cursor-text">{{ token.name }}</span>

                                    </div>
                                    <div class="text-sm text-gray-400 cursor-text">
                                        {{ token.amount }}</div>
                                </div>
                            </div>
                            <div class="text-right">
                                <div class="text-sm text-gray-400 cursor-text">{{
                                    token.valueADA }} ₳</div>
                                <div class="text-sm text-gray-500 cursor-text">${{
                                    token.valueUSD }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>