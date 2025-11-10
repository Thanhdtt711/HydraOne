<template>
    <div v-if="EditsTpsl" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 ">
        <div
            class="w-full max-w-[499px] max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0D0D0D] border border-[#C2C2C2]/30 p-6 flex flex-col gap-1 w-[520px] font-light flex flex-col">
            <div class="flex items-center justify-between">
                <h2 class="text-white font-inter text-[20px] font-light">Edit Long Position</h2>
                <div class="flex items-center gap-2">
                    <button @click="CloseTpsl"
                        class="transform focus:scale-[0.97] focus:shadow-sm active:scale-[0.95] text-white rounded-sm p-1 transition-colors relative inline-flex items-center justify-center h-[40px]">
                        <svg
                            width="13" height="30" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4">
                            <path
                                d="M14 1.91L12.59 0.5L7 6.09L1.41 0.5L0 1.91L5.59 7.5L0 13.09L1.41 14.5L7 8.91L12.59 14.5L14 13.09L8.41 7.5L14 1.91Z"
                                fill="white"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="flex flex-col gap-8">
                <div class="flex flex-col gap-4 mt-4">
                    <div class="flex justify-between items-center self-stretch">
                        <div class="text-white/70 font-inter text-sm font-light leading-[120%]">Current Price</div>
                        <div class="text-white font-inter text-sm font-medium leading-[120%]">$0.5888</div>
                    </div>
                    <div class="flex justify-between items-center self-stretch">
                        <div class="text-white/70 font-inter text-sm font-light leading-[120%]">Liquidation Price</div>
                        <div class="text-white font-inter text-sm font-medium leading-[120%]">$0.4871</div>
                    </div>
                </div>
                <div class="flex flex-col items-start gap-2 self-stretch">
                    <div class="flex justify-between items-center self-stretch">
                        <div class="flex items-center gap-3">
                            <div class="text-white font-inter text-sm font-light leading-[120%]">Take Profit</div>
                            <div class="relative flex bg-white/10 rounded-md p-0.5"><button
                                    class="relative z-10 px-3 py-1 text-xs font-medium transition-colors duration-200 rounded-sm w-12 text-gray-900">USD</button><button
                                    class="relative z-10 px-3 py-1 text-xs font-medium transition-colors duration-200 rounded-sm w-12 text-white/70 hover:text-white">%</button>
                                <div
                                    class="absolute top-0.5 bottom-0.5 bg-emerald-400 rounded transition-all duration-200 ease-out w-12 left-0.5">
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col items-end"></div>
                    </div>
                    <div class="flex flex-col items-start gap-1 self-stretch">
                        <div
                            class="flex justify-center items-center gap-3 py-0 px-2 h-10 w-full rounded-lg bg-white/[.08]">
                            <input type="text" placeholder="Enter Take Profit"
                                class="bg-transparent text-white/50 font-inter text-sm font-light leading-[120%] outline-none w-full"
                                value="">
                            <div class="text-white font-inter text-xs leading-[120%]">USD</div>
                        </div>
                        <div class="h-2 mt-1"></div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-start gap-2 self-stretch pt-2">
                <div class="flex justify-between items-center self-stretch">
                    <div class="flex items-center gap-3">
                        <div class="text-white font-inter text-sm font-light leading-[120%]">Stop Loss</div>
                        <div class="relative flex bg-white/10 rounded-md p-0.5"><button
                                class="relative z-10 px-3 py-1 text-xs font-medium transition-colors duration-200 rounded-sm w-12 text-gray-900">USD</button><button
                                class="relative z-10 px-3 py-1 text-xs font-medium transition-colors duration-200 rounded-sm w-12 text-white/70 hover:text-white">%</button>
                            <div
                                class="absolute top-0.5 bottom-0.5 bg-emerald-400 rounded transition-all duration-200 ease-out w-12 left-0.5">
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col items-end"></div>
                </div>
                <div class="flex flex-col items-start gap-1 self-stretch">
                    <div class="flex justify-center items-center gap-3 py-0 px-2 h-10 w-full rounded-lg bg-white/[.08]">
                        <input type="text" placeholder="Enter Stop Loss"
                            class="bg-transparent text-white/50 font-inter text-sm font-light leading-[120%] outline-none w-full"
                            value="">
                        <div class="text-white font-inter text-xs leading-[120%]">USD</div>
                    </div>
                    <div class="h-2 mt-1"></div>
                </div>
            </div>
            <div class="mt-4">
                <div class="text-neutral-400 text-xs leading-relaxed"><strong>Disclaimer:</strong> When setting stop
                    loss, please keep in mind liquidation price may change due to ongoing interest rate. Please check
                    liquidation price frequently to set stop loss above liquidation price and add a large buffer.</div>
            </div>
            <button
                class="transform focus:scale-[0.97] focus:shadow-sm active:scale-[0.95] w-full mt-8 rounded-lg font-medium transition-colors bg-[#636363] text-[#212121] cursor-not-allowed relative inline-flex items-center justify-center h-[40px]">Make
                Changes
            </button>
        </div>
    </div>
</template>

<script setup>
import { useModalState } from '~/composables/useModalState';
const EditsTpsl = useModalState('EditsTpsl');

const CloseTpsl = () => {
    EditsTpsl.value = false
}
</script>