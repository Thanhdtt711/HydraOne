<script setup lang="ts">
import InfoTooltip from './InfoTooltip.vue';

</script>

<template>
    <div class="mb-4 flex justify-end">
        <button
            class="flex items-center justify-between gap-2 bg-gray-800 border border-white/20 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-white/50 hover:border-white/30 transition-colors min-w-[120px]">
            <span>Daily</span>
            <div class="transform transition-transform ">
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.77862 5.76384L1.86662 0.85584C1.73173 0.7218 1.54928 0.646569 1.35912 0.646569C1.16895 0.646569 0.986512 0.7218 0.85162 0.85584L0.42062 1.28284C0.286337 1.4176 0.210938 1.6001 0.210938 1.79034C0.210938 1.98059 0.286337 2.16308 0.42062 2.29784L6.26862 8.14584C6.40423 8.28043 6.58755 8.35596 6.77862 8.35596C6.96968 8.35596 7.153 8.28043 7.28862 8.14584L13.1286 2.30584C13.2627 2.17095 13.3379 1.98851 13.3379 1.79834C13.3379 1.60818 13.2627 1.42573 13.1286 1.29084L12.6976 0.85984C12.5629 0.725557 12.3804 0.650158 12.1901 0.650158C11.9999 0.650158 11.8174 0.725557 11.6826 0.85984L6.77862 5.76384Z"
                        fill="white"></path>
                </svg>
            </div>
        </button>
    </div>
    <div class="block md:hidden">
        <div class="bg-gray-800/50 rounded-lg p-4 mb-3 border border-white/25 shadow-sm shadow-white/5 cursor-pointer">
            <div class="flex items-center mb-3">
                <div class="mr-3">
                    <div class="w-6 h-6 flex items-center justify-center">
                        <IconsCardano />
                    </div>
                </div>
                <h3 class="text-white font-roboto text-lg font-medium">ADA</h3>
            </div>
            <div class="grid grid-cols-2 gap-3 text-sm">
                <div class="h-16">
                    <div class="text-gray-400 mb-1">Pool Size</div>
                    <div class="text-white h-10 flex flex-col justify-start">
                        <div class="flex flex-col"><span class="text-white leading-tight">$4,518,803.04</span><span
                                class="text-sm text-white leading-tight">8,421,176 ADA</span></div>
                    </div>
                </div>
                <div class="h-16">
                    <div class="text-gray-400 mb-1">Utilization</div>
                    <div class="text-white h-10 flex items-start">7.95%</div>
                </div>
                <div class="h-16">
                    <div class="text-gray-400 mb-1">APR</div>
                    <div class="text-white h-10 flex items-start">92.18%</div>
                </div>
                <div class="h-16">
                    <div class="text-gray-400 mb-1">All-Time Asset Return</div>
                    <div class="text-white h-10 flex items-start">36.18%</div>
                </div>
                <div class="h-16">
                    <div class="text-gray-400 mb-1 flex items-center gap-1">
                        Daily Return
                        <div class="relative flex items-center">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="focus:outline-none focus:ring focus:ring-green-400 cursor-pointer">
                                <circle cx="7.5" cy="7.5" r="6.65" stroke="#26FAB0" stroke-opacity="0.5"
                                    stroke-width="0.7"></circle>
                                <text x="50%" y="50%" text-anchor="middle" dy="0.35em" fill="#26FAB0" font-size="8"
                                    font-family="'Inter', sans-serif" font-weight="400" font-style="italic">i</text>
                            </svg>
                        </div>
                    </div>
                    <div class="text-white h-10 flex items-start">-0.05%</div>
                </div>
                <div class="h-16">
                    <div class="text-gray-400 mb-1 flex items-center gap-1">
                        Daily Profit
                        <div class="relative flex items-center">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="focus:outline-none focus:ring focus:ring-green-400 cursor-pointer">
                                <circle cx="7.5" cy="7.5" r="6.65" stroke="#26FAB0" stroke-opacity="0.5"
                                    stroke-width="0.7"></circle>
                                <text x="50%" y="50%" text-anchor="middle" dy="0.35em" fill="#26FAB0" font-size="8"
                                    font-family="'Inter', sans-serif" font-weight="400" font-style="italic">i</text>
                            </svg>
                        </div>
                    </div>
                    <div class="text-white h-10 flex flex-col justify-start">
                        <div class="flex flex-col"><span class="text-white leading-tight">+$1,410.31</span><span
                                class="text-sm text-white leading-tight">2,628.2 ADA</span></div>
                    </div>
                </div>
            </div>
            <div class="flex gap-3 mt-4"><button
                    class="bg-[#26fab0] text-[#212121] px-4 py-2 rounded-lg font-medium flex-1 text-sm hover:bg-[#1fd49a] transition-colors">Supply</button><button
                    class="bg-transparent border border-[#26fab0] text-[#26fab0] px-4 py-2 rounded-lg font-medium flex-1 text-sm hover:bg-[#26fab0]/10 transition-colors">Withdraw</button>
            </div>
            <div class="mt-3">
                <button
                    class="w-full bg-transparent border border-gray-500 text-gray-300 px-4 py-2 rounded-lg font-medium text-sm hover:border-gray-400 hover:text-gray-200 transition-colors flex items-center justify-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
                        </path>
                    </svg>
                    ADA Position Analytics
                </button>
            </div>
        </div>
    </div>
    <div class="hidden md:block overflow-x-auto overflow-y-auto">
        <div class="flex flex-col items-start w-full min-w-[1000px]">
            <div class="flex items-center justify-between self-stretch py-1 px-0 border-b border-white/50 w-full">
                <div class="flex justify-start items-center gap-2.5 p-0 w-[14%] h-8">
                    <div class="text-gray-400 font-inter text-xs font-medium leading-tight">Asset
                        Name</div>
                </div>
                <div class="flex justify-start items-center gap-2.5 py-0 px-2 h-8 w-[14%]">
                    <div class="text-gray-400 font-inter text-xs font-medium leading-tight">Pool
                        Size</div>
                </div>
                <div class="flex justify-start items-center gap-2.5 py-0 px-2 h-8 w-[14%]">
                    <div class="text-gray-400 font-inter text-xs font-medium leading-tight">
                        Utilization</div>
                </div>
                <div class="flex justify-start items-center gap-2.5 py-0 px-2 h-8 w-[14%]">
                    <div class="text-gray-400 font-inter text-xs font-medium leading-tight flex items-center gap-1">
                        APR
                        <InfoTooltip text="Annualized return rate based on actual time running" />
                    </div>
                </div>
                <div class="flex justify-start items-center gap-2.5 py-0 px-2 h-8 w-[14%]">
                    <div class="text-gray-400 font-inter text-xs font-medium leading-tight flex items-center gap-1">
                        All-Time Asset Return
                        <InfoTooltip
                            text="Total asset return since pool launch" />
                    </div>
                </div>
                <div class="flex justify-start items-center gap-2.5 py-0 px-2 h-8 w-[15%]">
                    <div class="text-gray-400 font-inter text-xs font-medium leading-tight flex items-center gap-1">
                        Daily Return
                        <InfoTooltip
                            text="Return for the past week" />
                    </div>
                </div>
                <div class="flex justify-start items-center gap-2.5 py-0 px-2 h-8 w-[15%]">
                    <div class="text-gray-400 font-inter text-xs font-medium leading-tight flex items-center gap-1">
                        Daily Profit
                        <InfoTooltip
                            text="Profit for the past week" />
                    </div>
                </div>
            </div>
            <div class="flex justify-between self-stretch py-1 px-0 border-b border-white/20 w-full hover:bg-gray-800">
                <div class="flex justify-start items-center gap-2.5 pr-4 w-[14%] h-12">
                    <div class="mr-2">
                        <div class="w-6 h-6 flex items-center justify-center">
                            <IconsCardano />
                        </div>
                    </div>
                    <div class="flex flex-col justify-center self-stretch">
                        <div class="text-white font-roboto text-xs leading-normal">ADA</div>
                        <button
                            class="text-[#26fab0] hover:text-[#1fd49a] font-inter text-xs leading-tight text-left transition-colors">Analytics
                            ↗</button>
                    </div>
                </div>
                <div class="flex justify-start items-center gap-2.5 py-0 px-2 h-12 w-[14%]">
                    <div class="text-white font-inter text-xs leading-tight">
                        <div class="flex flex-col"><span class="text-white leading-tight">$4,518,803.04</span><span
                                class="text-xs text-white leading-tight">8,421,176 ADA</span></div>
                    </div>
                </div>
                <div class="flex justify-start items-center gap-2.5 py-0 px-2 h-12 w-[14%]">
                    <div class="text-white font-inter text-xs leading-tight">
                        7.95%
                    </div>
                </div>
                <div class="flex justify-start items-center gap-2.5 py-0 px-2 h-12 w-[14%]">
                    <div class="text-white font-inter text-xs leading-tight">
                        92.18%
                    </div>
                </div>
                <div class="flex justify-start items-center gap-2.5 py-0 px-2 h-12 w-[14%]">
                    <div class="text-white font-inter text-xs leading-tight">
                        36.18%
                    </div>
                </div>
                <div class="flex justify-start items-center gap-2.5 py-0 px-2 h-12 w-[15%]">
                    <div class="text-white font-inter text-xs leading-tight">
                        -0.05%
                    </div>
                </div>
                <div class="flex justify-start items-center gap-2.5 py-0 px-2 h-12 w-[15%]">
                    <div class="text-white font-inter text-xs leading-tight">
                        <div class="flex flex-col"><span class="text-white leading-tight">+$1,410.31</span><span
                                class="text-xs text-white leading-tight">2,628.2 ADA</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>