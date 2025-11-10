<script setup>
import { useActiveliquidity } from '~/composables/useActiveSide';
import ChangeLiquidity from './ChangeLiquidity.vue';
import { useModalState } from '~/composables/useModalState';
import ViewHistory from './ViewHistory.vue';

const isChangeModalOpen = useModalState('ChangeModal');

const openChangeModal = () => {
  isChangeModalOpen.value = true;

};
const isHistoryModalOpen = useModalState('HistoryModal');

const openHistoryModal = () => {
  isHistoryModalOpen.value = true;
  console.log(isHistoryModalOpen.value)
};
const activeliquidity = useActiveliquidity();

</script>
<template>
    <div class="hidden lg:flex lg:flex-col w-[450px] min-w-[250px] min-h-screen backdrop-blur-sm">
        <div class="flex flex-col w-full border-b border-white/25">
            <div class="flex flex-col flex-1 items-start gap-6 py-6 px-6">
                <div class="flex gap-2.5 self-stretch text-white text-xl  leading-[normal]">Liquidity Management
                </div>
                <div class="flex flex-col items-start gap-2 self-stretch">
                    <div class="flex flex-col flex-shrink-0 items-start w-full">
                        <div class="flex rounded-lg bg-[#212121] m-0 w-full">

                            <button @click="activeliquidity = 'deposit'" :class="[
                                'transform focus:scale-[0.97] focus:shadow-sm active:scale-[0.95] flex-1 min-w-[80px]  text-[#40bfe2] text-[16px] transition-colors duration-200 py-2 rounded-[0.3125rem] relative inline-flex items-center justify-center h-[40px]',
                                activeliquidity === 'deposit'
                                    ? 'bg-[#40bfe2]/[.15] !text-[#40bfe2]' // Active
                                    : 'text-white hover:bg-[#40bfe2]/[.15] hover:text-[#40bfe2]'
                            ]">
                                <span class="flex items-center justify-center w-full">Deposit</span>
                            </button>

                            <button @click="activeliquidity = 'withdraw'" :class="[
                                'transform focus:scale-[0.97] focus:shadow-sm active:scale-[0.95] flex-1 min-w-[80px] text-white hover:bg-[#ff4d4d]/[.15] hover:text-[#ff4d4d] text-[16px] transition-colors duration-200 py-2 rounded-[0.3125rem] relative inline-flex items-center justify-center h-[40px]',
                                activeliquidity === 'withdraw'
                                    ? 'bg-[#ff4d4d]/[.15] !text-[#ff4d4d]' // Active
                                    : 'text-white hover:bg-[#ff4d4d]/[.15] hover:text-[#ff4d4d]'
                            ]">
                                <span class="flex items-center justify-center w-full">Withdraw</span>
                            </button>

                        </div>
                    </div>
                </div>
                <div class="flex flex-col items-start gap-2 self-stretch">
                    <div class="text-white text-sm ">Select Pool To Withdraw Liquidity
                    </div>
                    <button @click="openChangeModal"
                        class="w-full flex items-center justify-between px-3 py-2 h-[40px] bg-[#212121] rounded-lg hover:bg-[#2a2a2a] transition-colors border border-transparent hover:border-[#C2C2C2]/20">
                        <div class="flex items-center gap-2">
                            <div class="w-6 h-6 flex items-center justify-center">
                                <IconsCardano />
                            </div>
                            <span class="text-white text-xs">ADA</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-white/60 text-xs">Change</span>
                            <svg class="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                                </path>
                            </svg>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col items-start gap-2.5 self-stretch">
                    <div v-if="activeliquidity === 'deposit'" class="flex flex-col items-start gap-2 self-stretch">
                        <div class="flex justify-between items-center self-stretch">
                            <div class="text-white text-sm  mb-2">Pay</div>
                            <div class="flex items-center gap-2"><span class="text-white/50 text-xs">Available:
                                    0.00 ADA</span><button
                                    class="text-[#40bfe2] text-xs hover:text-[#1fd49a] transition-colors cursor-pointer"
                                    type="button">MAX</button></div>
                        </div>
                        <div
                            class="flex justify-between items-center gap-3 h-[40px] self-stretch p-1 rounded-lg bg-[#212121]">
                            <input type="text" inputmode="decimal"
                                class="bg-transparent text-white font-inter text-sm outline-none w-full ml-1"
                                placeholder="0" value="">
                            <div class="flex items-center gap-2 px-2 flex-shrink-0">
                                <div class="w-6 h-6 flex items-center justify-center">
                                    <IconsCardano />
                                </div>
                                <span class="text-white text-xs whitespace-nowrap">ADA</span>
                            </div>
                        </div>
                        <div class="text-orange-400 text-xs mt-1">
                            Minimum 5.000 ADA required to provide liquidity
                        </div>
                    </div>
                    <div v-if="activeliquidity === 'withdraw'" class="flex flex-col items-start gap-2 self-stretch">
                        <div class="flex justify-between items-center self-stretch">
                            <div class="text-white text-sm  mb-2">Withdraw</div>
                            <div class="flex items-center gap-2"><span class="text-white/50 text-xs">Available:
                                    0,000000 ADA LP</span><button
                                    class="text-[#40bfe2] text-xs hover:text-[#1fd49a] transition-colors cursor-pointer"
                                    type="button">MAX</button></div>
                        </div>
                        <div
                            class="flex justify-between items-center gap-3 h-[40px] self-stretch p-1 rounded-lg bg-[#212121]">
                            <input type="text" inputmode="decimal"
                                class="bg-transparent text-white font-inter text-sm outline-none w-full ml-1"
                                placeholder="0" value="">
                            <div class="flex items-center gap-2 px-2 flex-shrink-0">
                                <div class="w-6 h-6 flex items-center justify-center">
                                    <IconsCardano />
                                </div>
                                <span class="text-white text-xs whitespace-nowrap">ADA LP</span>
                            </div>
                        </div>
                        <div class="text-orange-400 text-xs mt-1">
                            Minimum 500 ADA LP required to withdraw liquidity
                        </div>
                    </div>
                    <div class="flex justify-between items-center text-[12px] mt-2 w-full">
                        <span class="text-white/70">Conversion Rate</span><span
                            class="text-white  font-inter bg-transparent border-none outline-none text-right">1
                            LP = ~ 1.361790 ADA</span>
                    </div>
                    <div class="flex justify-between items-center text-[12px] mt-2 w-full">
                        <span class="text-white/70">Expected Receive</span><span
                            class="text-white  font-inter bg-transparent border-none outline-none text-right">~</span>
                    </div>
                </div>
                <div class="flex justify-between items-center text-[12px] w-full"><span class="text-white/70">Batcher
                        Fee</span><span
                        class="text-white  font-inter bg-transparent border-none outline-none text-right">2
                        ADA</span>
                </div>
                <div class="text-white/50 text-[10px] mt-2 h-[36px]">* Less than ~0.25%
                    slippage may be applied when withdrawing
                </div>
                <div class="flex flex-col items-start gap-2.5 self-stretch mt-auto"><button
                        class="transform focus:scale-[0.97] focus:shadow-sm active:scale-[0.95] gap-2.5 self-stretch p-2.5 rounded-lg bg-[#636363] text-[#a0a0a0] cursor-not-allowed text-center leading-[120%] transition-colors duration-200 relative inline-flex items-center justify-center h-[40px]">Enter
                        an amount</button>
                </div>
            </div>
        </div>
        <div class="flex flex-col w-full h-full py-6 px-2">
            <div class="flex flex-col h-full">
                <div class="flex-1">
                    <div class="flex flex-col h-full">
                        <div class="flex items-center justify-between mb-8 px-4">
                            <h3 class="text-white font-inter text-lg font-medium">Transaction History</h3>
                            <button @click="openHistoryModal"
                                class="px-3 py-1.5 bg-primary/10 text-[#40bfe2] hover:bg-primary/20 rounded-md transition-colors text-sm font-medium">View
                                Liquidity Stats</button>
                        </div>
                        <div class="flex-1 overflow-y-auto max-h-96">
                            <div class="flex items-center justify-center h-32 text-gray-400 text-sm">No
                                transaction history found</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ChangeLiquidity/>
    <ViewHistory/>
</template>