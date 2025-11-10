<script setup>
import { useModalState } from '~/composables/useModalState';
const isChangeModalOpen = useModalState('ChangeModal');

const closeChangeModal = () => {
    isChangeModalOpen.value = false;
};
</script>
<template>
    <div v-if="isChangeModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
        <div
            class="w-full max-w-[499px] max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0D0D0D] border border-[#C2C2C2]/30 p-6 flex flex-col gap-1">
            <div class="flex items-center justify-between mb-4">
                <h2 class="text-white font-inter text-[20px] font-light">Select Pool To Deposit Liquidity</h2>
                <button @click="closeChangeModal"
                    class="text-white rounded-sm p-1 transition-colors hover:bg-[#C2C2C2]/10"><svg width="20"
                        height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <div class="flex-1 overflow-y-auto">
                <div class="space-y-1"><button
                        class="w-full flex items-center justify-between p-4 hover:bg-[#C2C2C2]/10 rounded-xl transition-colors">
                        <div class="flex items-center space-x-3">
                            <div
                                class="w-6 h-6 rounded-full bg-[#C2C2C2]/20 flex items-center justify-center overflow-hidden">
                                <div class="w-6 h-6 flex items-center justify-center">
                                    <IconsCardano />
                                </div>
                            </div>
                            <div class="text-left">
                                <div class="flex items-center space-x-1"><span class="font-medium text-white">ADA</span>
                                </div>
                                <p class="text-sm text-[#C2C2C2]/60">ADA</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <p class="text-white font-medium text-sm">ADA Pool</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>