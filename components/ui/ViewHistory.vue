<template>
    <div v-if="isHistoryModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 ">
        <div
            class="w-full max-w-[499px] max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0D0D0D] border border-[#C2C2C2]/30 p-6 flex flex-col gap-1 max-w-4xl w-full">
            <div class="flex items-center justify-between">
                <h2 class="text-white font-inter text-[20px] font-light">Overall Liquidity Performance</h2>
                <div class="flex items-center gap-2">
                    <button @click="closeHistoryModal"
                        class="transform focus:scale-[0.97] focus:shadow-sm active:scale-[0.95] text-white rounded-sm p-1 transition-colors relative inline-flex items-center justify-center h-[40px]"><svg
                            width="13" height="30" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4">
                            <path
                                d="M14 1.91L12.59 0.5L7 6.09L1.41 0.5L0 1.91L5.59 7.5L0 13.09L1.41 14.5L7 8.91L12.59 14.5L14 13.09L8.41 7.5L14 1.91Z"
                                fill="white"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="flex items-center justify-center h-24 text-gray-400 text-sm">No liquidity activity found. Start
                by providing liquidity to track your performance.</div>
        </div>
    </div>
</template>
<script setup>
import { useModalState } from '~/composables/useModalState';
const isHistoryModalOpen = useModalState('HistoryModal');
  console.log(isHistoryModalOpen.value)

const closeHistoryModal = () => {
  isHistoryModalOpen.value = false;
};
</script>