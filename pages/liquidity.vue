<script setup>

const isVolumeModal = useModalState('VolumeModal');
const openVolumeModal = () => {
    isVolumeModal.value = !isVolumeModal.value;
};


</script>

<template>
    <div class="relative min-h-screen bg-black text-white">
        <div class="absolute w-full h-64 flex justify-center items-center">
            <div class="absolute left-5 blur-2xl">
                <svg width="187" height="222" viewBox="0 0 187 222" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M126.341 221.063L30.2511 200.7L0.3125 145.492L30.2511 55.4385L126.341 0.230469L186.398 145.492L126.341 221.063Z"
                        fill="#40bfe2"></path>
                </svg>
            </div>
            <div class="absolute right-2/3 top-2/3 bg-cyan-400 blur-2xl opacity-70 w-48 h-48 rounded-full"></div>
            <div class="absolute right-2/3 top-2/3 blur-2xl">
                <svg width="307" height="222" viewBox="0 0 187 222" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M126.341 221.063L30.2511 200.7L0.3125 145.492L30.2511 55.4385L126.341 0.230469L186.398 145.492L126.341 221.063Z"
                        fill="#40bfe2" fill-opacity="0.8"></path>
                </svg>
            </div>
            <div class="absolute blur-2xl pointer-events-none">
                <svg width="164" height="135" viewBox="0 0 164 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M29.9386 134.507L0 64.8157V21.5096L65.9724 0L99.1379 50.3326L163.676 76.8611L150.051 134.507H29.9386Z"
                        fill="#40bfe2"></path>
                </svg>
            </div>
        </div>
        <div class="absolute inset-0 bg-black/70 z-0"></div>
        <div class="flex flex-col lg:flex-row relative z-10 flex-1 min-h-screen">
            <div class="flex-1 flex flex-col p-4 md:p-8 md:pr-4 lg:border-r border-white/25">
                <div class="flex justify-between items-center mb-6 md:mb-8">
                    <h1 class="text-[#40bfe2] font-inter text-xl md:text-2xl font-light leading-normal">STRIKE
                        PERPETUALS LIQUIDITY
                    </h1>
                </div>
                <div class="lg:hidden">
                    <div class="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-4 md:gap-6 max-w-5xl mb-8 md:mb-14">
                        <div class="flex flex-col items-start gap-1 sm:flex-1 sm:min-w-[140px] sm:max-w-[200px]">
                            <div class="text-[#b7b7b7] font-inter text-xs leading-[120%]">Total
                                Value Locked
                            </div>
                            <div class="flex flex-col items-start gap-0">
                                <div
                                    class="flex items-center h-8 md:h-10 text-white font-inter text-sm font-medium leading-[120%]">
                                    $5,189,501.50</div>
                            </div>
                        </div>
                        <div class="flex flex-col items-start gap-1 sm:flex-1 sm:min-w-[140px] sm:max-w-[200px]">
                            <div class="text-[#b7b7b7] font-inter text-xs leading-[120%]">Total
                                Pool Size
                            </div>
                            <div class="flex flex-col items-start gap-0">
                                <div
                                    class="flex items-center h-8 md:h-10 text-white font-inter text-sm font-medium leading-[120%]">
                                    $5,157,973.21</div>
                            </div>
                        </div>
                        <div class="flex flex-col items-start gap-1 sm:flex-1 sm:min-w-[140px] sm:max-w-[200px]">
                            <div class="relative">
                                <button @click="openVolumeModal"
                                    class="flex items-center gap-1 text-xs text-[#b7b7b7] hover:text-white transition-colors">
                                    <span>Volume</span><span>All
                                        Time</span>
                                    <div class="transition-all duration-200 w-2 h-2 flex-shrink-0"
                                        :style="[ isVolumeModal ? 
                                        'transform: rotateX(180deg); transform-origin: center center;'
                                        :
                                        'transform: rotateX(0deg); transform-origin: center center;'
                                        ]">
                                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" style="fill: currentcolor;">
                                            <path
                                                d="M6.77862 5.76384L1.86662 0.85584C1.73173 0.7218 1.54928 0.646569 1.35912 0.646569C1.16895 0.646569 0.986512 0.7218 0.85162 0.85584L0.42062 1.28284C0.286337 1.4176 0.210938 1.6001 0.210938 1.79034C0.210938 1.98059 0.286337 2.16308 0.42062 2.29784L6.26862 8.14584C6.40423 8.28043 6.58755 8.35596 6.77862 8.35596C6.96968 8.35596 7.153 8.28043 7.28862 8.14584L13.1286 2.30584C13.2627 2.17095 13.3379 1.98851 13.3379 1.79834C13.3379 1.60818 13.2627 1.42573 13.1286 1.29084L12.6976 0.85984C12.5629 0.725557 12.3804 0.650158 12.1901 0.650158C11.9999 0.650158 11.8174 0.725557 11.6826 0.85984L6.77862 5.76384Z"
                                                fill="white"></path>
                                        </svg>
                                    </div>
                                </button>
                                <UiVolume/>
                            </div>
                            <div class="flex flex-col items-start gap-0">
                                <div
                                    class="flex items-center h-8 md:h-10 text-white font-inter text-sm font-medium leading-[120%]">
                                    $357,064,699.34</div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-10 max-w-3xl">
                        <div class="text-[#FFFFFF] font-light font-inter text-xs font-light leading-normal">
                            <p>Liquidity providers receive a share of the platform's revenue, including 100% of
                                liquidated collateral, borrow fees paid by traders, and ~50% of opening fees. Earnings
                                begin accumulating immediately upon deposit, ensuring that capital added to the pool
                                starts working right away.
                            </p>
                            <br>
                            <p>Your deposited assets remain isolated to their specific trading pairs and are exclusively
                                used to facilitate trading of the underlying asset.
                            </p>
                        </div>
                        <div class="text-[#FFFFFF] font-light font-inter text-xs font-light leading-normal">
                            <p class="mb-2 font-semibold text-yellow-400">DISCLAIMER:</p>
                            <p>You can withdraw your liquidity at any time if there are enough assets in the pool. If
                                all funds are currently borrowed, you may submit a withdrawal request, which will be
                                processed as a pending order.<br><br>Providing liquidity involves risk. As a liquidity
                                provider, you take the opposite side of trader's positions and may incur losses. While
                                there are measures to help protect liquidity providers, returns are not guaranteed every
                                day. Past performance is not indicative of future results.
                            </p>
                        </div>
                    </div>
                    <div class="pb-20">
                        <div class="w-full flex-1 text-[#b7b7b7]">
                            <div class="mb-4 flex justify-end">
                                <button
                                    class="flex items-center justify-between gap-2 bg-gray-800 border border-white/20 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-white/50 hover:border-white/30 transition-colors min-w-[120px]">
                                    <span>Weekly</span>
                                    <div class="transform transition-transform ">
                                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.77862 5.76384L1.86662 0.85584C1.73173 0.7218 1.54928 0.646569 1.35912 0.646569C1.16895 0.646569 0.986512 0.7218 0.85162 0.85584L0.42062 1.28284C0.286337 1.4176 0.210938 1.6001 0.210938 1.79034C0.210938 1.98059 0.286337 2.16308 0.42062 2.29784L6.26862 8.14584C6.40423 8.28043 6.58755 8.35596 6.77862 8.35596C6.96968 8.35596 7.153 8.28043 7.28862 8.14584L13.1286 2.30584C13.2627 2.17095 13.3379 1.98851 13.3379 1.79834C13.3379 1.60818 13.2627 1.42573 13.1286 1.29084L12.6976 0.85984C12.5629 0.725557 12.3804 0.650158 12.1901 0.650158C11.9999 0.650158 11.8174 0.725557 11.6826 0.85984L6.77862 5.76384Z"
                                                fill="white"></path>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                            <div class="block md:hidden">
                                <div
                                    class="bg-gray-800/50 rounded-lg p-4 mb-3 border border-white/25 shadow-sm shadow-white/5 cursor-pointer">
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
                                                <div class="flex flex-col"><span
                                                        class="text-white leading-tight">$4,518,803.04</span><span
                                                        class="text-sm text-white leading-tight">8,421,176 ADA</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="h-16">
                                            <div class="text-gray-400 mb-1">Utilization</div>
                                            <div class="text-white h-10 flex items-start">7.95%
                                            </div>
                                        </div>
                                        <div class="h-16">
                                            <div class="text-gray-400 mb-1">APR</div>
                                            <div class="text-white h-10 flex items-start">92.18%
                                            </div>
                                        </div>
                                        <div class="h-16">
                                            <div class="text-gray-400 mb-1">All-Time Asset Return
                                            </div>
                                            <div class="text-white h-10 flex items-start">36.18%
                                            </div>
                                        </div>
                                        <div class="h-16">
                                            <div class="text-gray-400 mb-1 flex items-center gap-1">
                                                Weekly Return
                                                <div class="relative flex items-center">
                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="focus:outline-none focus:ring focus:ring-green-400 cursor-pointer">
                                                        <circle cx="7.5" cy="7.5" r="6.65" stroke="#26FAB0"
                                                            stroke-opacity="0.5" stroke-width="0.7"></circle>
                                                        <text x="50%" y="50%" text-anchor="middle" dy="0.35em"
                                                            fill="#26FAB0" font-size="8"
                                                            font-family="'Inter', sans-serif" font-weight="400"
                                                            font-style="italic">i</text>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="text-white h-10 flex items-start">2.87%
                                            </div>
                                        </div>
                                        <div class="h-16">
                                            <div class="text-gray-400 mb-1 flex items-center gap-1">
                                                Weekly Profit
                                                <div class="relative flex items-center">
                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="focus:outline-none focus:ring focus:ring-green-400 cursor-pointer">
                                                        <circle cx="7.5" cy="7.5" r="6.65" stroke="#26FAB0"
                                                            stroke-opacity="0.5" stroke-width="0.7"></circle>
                                                        <text x="50%" y="50%" text-anchor="middle" dy="0.35em"
                                                            fill="#26FAB0" font-size="8"
                                                            font-family="'Inter', sans-serif" font-weight="400"
                                                            font-style="italic">i</text>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="text-white h-10 flex flex-col justify-start">
                                                <div class="flex flex-col"><span
                                                        class="text-white leading-tight">+$160,901.95</span><span
                                                        class="text-sm text-white leading-tight">299,854.6 ADA</span>
                                                </div>
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
                                    <div
                                        class="flex items-center justify-between self-stretch py-1 px-0 border-b border-white/50 w-full">
                                        <div class="flex justify-start items-center gap-2.5 p-0 w-[14%] h-8">
                                            <div class="text-gray-400 font-inter text-xs font-medium leading-tight">
                                                Asset Name</div>
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
                                            <div
                                                class="text-gray-400 font-inter text-xs font-medium leading-tight flex items-center gap-1">
                                                APR
                                                <div class="relative flex items-center">
                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="focus:outline-none focus:ring focus:ring-green-400 cursor-pointer">
                                                        <circle cx="7.5" cy="7.5" r="6.65" stroke="#26FAB0"
                                                            stroke-opacity="0.5" stroke-width="0.7"></circle>
                                                        <text x="50%" y="50%" text-anchor="middle" dy="0.35em"
                                                            fill="#26FAB0" font-size="8"
                                                            font-family="'Inter', sans-serif" font-weight="400"
                                                            font-style="italic">i</text>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex justify-start items-center gap-2.5 py-0 px-2 h-8 w-[14%]">
                                            <div
                                                class="text-gray-400 font-inter text-xs font-medium leading-tight flex items-center gap-1">
                                                All-Time Asset Return
                                                <div class="relative flex items-center">
                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="focus:outline-none focus:ring focus:ring-green-400 cursor-pointer">
                                                        <circle cx="7.5" cy="7.5" r="6.65" stroke="#26FAB0"
                                                            stroke-opacity="0.5" stroke-width="0.7"></circle>
                                                        <text x="50%" y="50%" text-anchor="middle" dy="0.35em"
                                                            fill="#26FAB0" font-size="8"
                                                            font-family="'Inter', sans-serif" font-weight="400"
                                                            font-style="italic">i</text>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex justify-start items-center gap-2.5 py-0 px-2 h-8 w-[15%]">
                                            <div
                                                class="text-gray-400 font-inter text-xs font-medium leading-tight flex items-center gap-1">
                                                Weekly Return
                                                <div class="relative flex items-center">
                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="focus:outline-none focus:ring focus:ring-green-400 cursor-pointer">
                                                        <circle cx="7.5" cy="7.5" r="6.65" stroke="#26FAB0"
                                                            stroke-opacity="0.5" stroke-width="0.7"></circle>
                                                        <text x="50%" y="50%" text-anchor="middle" dy="0.35em"
                                                            fill="#26FAB0" font-size="8"
                                                            font-family="'Inter', sans-serif" font-weight="400"
                                                            font-style="italic">i</text>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex justify-start items-center gap-2.5 py-0 px-2 h-8 w-[15%]">
                                            <div
                                                class="text-gray-400 font-inter text-xs font-medium leading-tight flex items-center gap-1">
                                                Weekly Profit
                                                <div class="relative flex items-center">
                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="focus:outline-none focus:ring focus:ring-green-400 cursor-pointer">
                                                        <circle cx="7.5" cy="7.5" r="6.65" stroke="#26FAB0"
                                                            stroke-opacity="0.5" stroke-width="0.7"></circle>
                                                        <text x="50%" y="50%" text-anchor="middle" dy="0.35em"
                                                            fill="#26FAB0" font-size="8"
                                                            font-family="'Inter', sans-serif" font-weight="400"
                                                            font-style="italic">i</text>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex justify-between self-stretch py-1 px-0 border-b border-white/20 w-full hover:bg-gray-800">
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
                                                <div class="flex flex-col"><span
                                                        class="text-white leading-tight">$4,518,803.04</span><span
                                                        class="text-xs text-white leading-tight">8,421,176 ADA</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex justify-start items-center gap-2.5 py-0 px-2 h-12 w-[14%]">
                                            <div class="text-white font-inter text-xs leading-tight">7.95%</div>
                                        </div>
                                        <div class="flex justify-start items-center gap-2.5 py-0 px-2 h-12 w-[14%]">
                                            <div class="text-white font-inter text-xs leading-tight">92.18%</div>
                                        </div>
                                        <div class="flex justify-start items-center gap-2.5 py-0 px-2 h-12 w-[14%]">
                                            <div class="text-white font-inter text-xs leading-tight">36.18%</div>
                                        </div>
                                        <div class="flex justify-start items-center gap-2.5 py-0 px-2 h-12 w-[15%]">
                                            <div class="text-white font-inter text-xs leading-tight">2.87%</div>
                                        </div>
                                        <div class="flex justify-start items-center gap-2.5 py-0 px-2 h-12 w-[15%]">
                                            <div class="text-white font-inter text-xs leading-tight">
                                                <div class="flex flex-col"><span
                                                        class="text-white leading-tight">+$160,901.95</span><span
                                                        class="text-xs text-white leading-tight">299,854.6 ADA</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="fixed bottom-0 left-0 right-0 flex justify-center z-50 px-4 py-3 bg-black/80 backdrop-blur-sm border-t border-white/10 w-full">
                        <div class="flex w-full max-w-md"><button
                                class="transition-all transform focus:scale-[0.97] focus:shadow-sm active:scale-[0.95] bg-transparent border border-[#26fab0] text-[#26fab0] px-6 py-3 rounded-lg font-medium shadow-lg flex-1 relative inline-flex items-center justify-center h-[40px]">View
                                History</button>
                        </div>
                    </div>
                </div>
                <div class="hidden lg:block">
                    <div class="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-4 md:gap-6 max-w-5xl mb-8 md:mb-14">
                        <div class="flex flex-col items-start gap-1 sm:flex-1 sm:min-w-[140px] sm:max-w-[200px]">
                            <div class="text-[#b7b7b7] font-inter text-xs leading-[120%]">Total
                                Value Locked
                            </div>
                            <div class="flex flex-col items-start gap-0">
                                <div
                                    class="flex items-center h-8 md:h-10 text-white font-inter text-sm font-medium leading-[120%]">
                                    $5,189,501.50</div>
                            </div>
                        </div>
                        <div class="flex flex-col items-start gap-1 sm:flex-1 sm:min-w-[140px] sm:max-w-[200px]">
                            <div class="text-[#b7b7b7] font-inter text-xs leading-[120%]">Total
                                Pool Size
                            </div>
                            <div class="flex flex-col items-start gap-0">
                                <div
                                    class="flex items-center h-8 md:h-10 text-white font-inter text-sm font-medium leading-[120%]">
                                    $5,157,973.21</div>
                            </div>
                        </div>
                        <div class="flex flex-col items-start gap-1 sm:flex-1 sm:min-w-[140px] sm:max-w-[200px]">
                            <div class="relative">
                                <button @click="openVolumeModal"
                                    class="flex items-center gap-1 text-xs text-[#b7b7b7] hover:text-white transition-colors">
                                    <span>Volume</span><span>All
                                        Time</span>
                                    <div class="transition-all duration-200 w-2 h-2 flex-shrink-0"
                                        :style="[ isVolumeModal ? 
                                        'transform: rotateX(180deg); transform-origin: center center;'
                                        :
                                        'transform: rotateX(0deg); transform-origin: center center;'
                                        ]">
                                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" style="fill: currentcolor;">
                                            <path
                                                d="M6.77862 5.76384L1.86662 0.85584C1.73173 0.7218 1.54928 0.646569 1.35912 0.646569C1.16895 0.646569 0.986512 0.7218 0.85162 0.85584L0.42062 1.28284C0.286337 1.4176 0.210938 1.6001 0.210938 1.79034C0.210938 1.98059 0.286337 2.16308 0.42062 2.29784L6.26862 8.14584C6.40423 8.28043 6.58755 8.35596 6.77862 8.35596C6.96968 8.35596 7.153 8.28043 7.28862 8.14584L13.1286 2.30584C13.2627 2.17095 13.3379 1.98851 13.3379 1.79834C13.3379 1.60818 13.2627 1.42573 13.1286 1.29084L12.6976 0.85984C12.5629 0.725557 12.3804 0.650158 12.1901 0.650158C11.9999 0.650158 11.8174 0.725557 11.6826 0.85984L6.77862 5.76384Z"
                                                fill="white"></path>
                                        </svg>
                                    </div>
                                </button>
                                <UiVolume/>
                            </div>
                            <div class="flex flex-col items-start gap-0">
                                <div
                                    class="flex items-center h-8 md:h-10 text-white font-inter text-sm font-medium leading-[120%]">
                                    $357,064,699.34</div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-10 max-w-3xl">
                        <div class="text-[#FFFFFF] font-light font-inter text-xs font-light leading-normal">
                            <p>Liquidity providers receive a share of the platform's revenue, including 100% of
                                liquidated collateral, borrow fees paid by traders, and ~50% of opening fees. Earnings
                                begin accumulating immediately upon deposit, ensuring that capital added to the pool
                                starts working right away.
                            </p>
                            <br>
                            <p>Your deposited assets remain isolated to their specific trading pairs and are exclusively
                                used to facilitate trading of the underlying asset.
                            </p>
                        </div>
                        <div class="text-[#FFFFFF] font-light font-inter text-xs font-light leading-normal">
                            <p class="mb-2 font-semibold text-yellow-400">DISCLAIMER:</p>
                            <p>You can withdraw your liquidity at any time if there are enough assets in the pool. If
                                all funds are currently borrowed, you may submit a withdrawal request, which will be
                                processed as a pending order.<br><br>Providing liquidity involves risk. As a liquidity
                                provider, you take the opposite side of trader's positions and may incur losses. While
                                there are measures to help protect liquidity providers, returns are not guaranteed every
                                day. Past performance is not indicative of future results.
                            </p>
                        </div>
                    </div>
                    <div class="w-full flex-1 text-[#b7b7b7]">
                        


                        <UiTableLiquidity/>


                    </div>
                </div>
            </div>



            <UiLiquidityManagement />


        </div>
    </div>
</template>