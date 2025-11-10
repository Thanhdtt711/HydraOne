<template>
    <div class="jsx-3478383214 flex-1 overflow-hidden border-t border-white/25" style="min-height: 240px;">
        <div class="w-full h-full flex flex-col">
            <div class="bg-black sticky top-0 z-10">
                <div class="flex items-center justify-between px-2">
                    <div class="flex h-[40px]">
                        <div @click="openisPositions" :class="[
                            'px-4 py-2 cursor-pointer transition-colors duration-200 text-sm border-b-2', // <-- Class chung
                            activeTab === 'Positions'
                                ? 'border-[#40bfe2] text-white' // <-- Class Active
                                : 'border-transparent text-white/25 hover:text-white/50' // <-- Class Inactive
                        ]">
                            Positions
                        </div>

                        <div @click="openisLimitOrders" :class="[
                            'px-4 py-2 cursor-pointer transition-colors duration-200 text-sm border-b-2', // <-- Class chung
                            activeTab === 'LimitOrders'
                                ? 'border-[#40bfe2] text-white' // <-- Class Active
                                : 'border-transparent text-white/25 hover:text-white/50' // <-- Class Inactive
                        ]">
                            Limit Orders
                        </div>

                        <div @click="openisHistory" :class="[
                            'px-4 py-2 cursor-pointer transition-colors duration-200 text-sm border-b-2', // <-- Class chung
                            activeTab === 'History'
                                ? 'border-[#40bfe2] text-white' // <-- Class Active
                                : 'border-transparent text-white/25 hover:text-white/50' // <-- Class Inactive
                        ]">
                            History
                        </div>
                    </div>
                    <div class="hidden md:flex items-center gap-4 px-4 py-2 h-[48px]">
                        <button
                            class="px-2 py-1 md:px-3 md:py-1.5 bg-[#40bfe2]/10 text-[#40bfe2] hover:bg-[#40bfe2]/20 transition-colors rounded-md text-xs font-medium border border-[#40bfe2]/20 hover:border-[#40bfe2]/40">View
                            All Positions</button>
                        <div class="flex items-center gap-2"><span class="text-xs text-gray-300 md:text-white">Include
                                Fees</span><button
                                class="relative inline-flex h-4 w-8 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-[#40bfe2] focus:ring-offset-1 focus:ring-offset-black bg-[#40bfe2]"
                                aria-label="Toggle include fees"><span
                                    class="inline-block h-3 w-3 transform rounded-full bg-white transition-transform duration-200 translate-x-4"></span></button>
                        </div>
                        <button
                            class="px-3 py-1.5 rounded-md transition-colors text-xs font-medium bg-[#636363] text-[#212121] cursor-not-allowed">Close
                            All Positions</button>
                    </div>
                </div>
                <div class="md:hidden flex items-center justify-start border-t border-gray-700 px-4 py-2 bg-gray-900">
                    <div class="flex items-center gap-4 w-full">
                        <button
                            class="px-3 py-1.5 bg-[#40bfe2]/10 text-[#40bfe2] hover:bg-[#40bfe2]/20 transition-colors rounded-md text-xs font-medium border border-[#40bfe2]/20 hover:border-[#40bfe2]/40">View
                            All</button>
                        <div class="flex items-center gap-2"><span class="text-xs text-gray-300 md:text-white">Include
                                Fees</span><button
                                class="relative inline-flex h-4 w-8 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-[#40bfe2] focus:ring-offset-1 focus:ring-offset-black bg-[#40bfe2]"
                                aria-label="Toggle include fees"><span
                                    class="inline-block h-3 w-3 transform rounded-full bg-white transition-transform duration-200 translate-x-4"></span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="isPositions" class="flex-1 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-265px)]">
                <div class="jsx-7bd0bdb6dd1752e5 md:hidden overflow-y-auto max-h-[calc(100vh-235px)]">
                    <div class="bg-[#FFFFFF0D] border-y border-white/10 p-6 text-center text-gray-500">
                        Please connect your wallet to view your positions
                    </div>
                </div>
                <div
                    class="md:min-w-[724px] gap-3 w-auto table_container text-white custom-scrollbar font-roboto hidden md:block p-0 mt-0 bg-black h-[600px] overflow-hidden max-w-full">
                    <div
                        class="jsx-7bd0bdb6dd1752e5 h-full overflow-y-auto overflow-x-auto pb-8 md:overflow-x-scroll lg:overflow-x-auto">
                        <div class="relative w-full">
                            <table
                                class="w-full caption-bottom border-collapse overflow-x-auto overflow-y-auto animate-fadeIn font-roboto relative min-w-full md:min-w-[800px] lg:min-w-full">
                                <thead
                                    class="text-center text-[12px] font-roboto sticky top-0 z-20 bg-black border-b border-white/10">
                                    <tr
                                        class="border-b border-[#FFFFFF1A] transition-colors data-[state=selected]:bg-muted text-[12px] font-roboto pl-2">
                                        <th class="w-fill h-12 px-2 align-middle [&amp;:has([role=checkbox])]:pr-0 font-normal text-[12px] text-white/40 text-center group font-roboto w-[14%] pl-4 bg-black whitespace-nowrap"
                                            style="text-align: left;">
                                            <div class="inline-flex items-center justify-center gap-1">
                                                <div class="jsx-7bd0bdb6dd1752e5 flex items-center">
                                                    Position
                                                </div>
                                            </div>
                                        </th>
                                        <th class="w-fill h-12 px-2 align-middle [&amp;:has([role=checkbox])]:pr-0 font-normal text-[12px] text-white/40 text-center group font-roboto w-[16%] bg-black whitespace-nowrap cursor-pointer hover:bg-gray-800/50"
                                            style="text-align: left;">
                                            <div class="inline-flex items-center justify-center gap-1">
                                                <div class="jsx-7bd0bdb6dd1752e5 flex items-center">
                                                    Current Position Value
                                                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg" class="ml-1">
                                                        <path d="M6 2L9 6H3L6 2Z" fill="#666" class="transition-colors">
                                                        </path>
                                                        <path d="M6 12L3 8H9L6 12Z" fill="#666"
                                                            class="transition-colors"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </th>
                                        <th class="w-fill h-12 px-2 align-middle [&amp;:has([role=checkbox])]:pr-0 font-normal text-[12px] text-white/40 text-center group font-roboto w-[13%] bg-black whitespace-nowrap cursor-pointer hover:bg-gray-800/50"
                                            style="text-align: left;">
                                            <div class="inline-flex items-center justify-center gap-1">
                                                <div class="jsx-7bd0bdb6dd1752e5 flex items-center">
                                                    Total Position Size
                                                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg" class="ml-1">
                                                        <path d="M6 2L9 6H3L6 2Z" fill="#666" class="transition-colors">
                                                        </path>
                                                        <path d="M6 12L3 8H9L6 12Z" fill="#666"
                                                            class="transition-colors"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </th>
                                        <th class="w-fill h-12 px-2 align-middle [&amp;:has([role=checkbox])]:pr-0 font-normal text-[12px] text-white/40 text-center group font-roboto w-[13%] bg-black whitespace-nowrap cursor-pointer hover:bg-gray-800/50"
                                            style="text-align: left;">
                                            <div class="inline-flex items-center justify-center gap-1">
                                                <div class="jsx-7bd0bdb6dd1752e5 flex items-center">
                                                    Entry / Current Price
                                                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg" class="ml-1">
                                                        <path d="M6 2L9 6H3L6 2Z" fill="#666" class="transition-colors">
                                                        </path>
                                                        <path d="M6 12L3 8H9L6 12Z" fill="#666"
                                                            class="transition-colors"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </th>
                                        <th class="w-fill h-12 px-2 align-middle [&amp;:has([role=checkbox])]:pr-0 font-normal text-[12px] text-white/40 text-center group font-roboto w-[11%] bg-black whitespace-nowrap cursor-pointer hover:bg-gray-800/50"
                                            style="text-align: left;">
                                            <div class="inline-flex items-center justify-center gap-1">
                                                <div class="jsx-7bd0bdb6dd1752e5 flex items-center">
                                                    Liquidation Price
                                                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg" class="ml-1">
                                                        <path d="M6 2L9 6H3L6 2Z" fill="#666" class="transition-colors">
                                                        </path>
                                                        <path d="M6 12L3 8H9L6 12Z" fill="#666"
                                                            class="transition-colors"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </th>
                                        <th class="w-fill h-12 px-2 align-middle [&amp;:has([role=checkbox])]:pr-0 font-normal text-[12px] text-white/40 text-center group font-roboto w-[10%] bg-black whitespace-nowrap cursor-pointer hover:bg-gray-800/50"
                                            style="text-align: left;">
                                            <div class="inline-flex items-center justify-center gap-1">
                                                <div class="jsx-7bd0bdb6dd1752e5 flex items-center">
                                                    Collateral
                                                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg" class="ml-1">
                                                        <path d="M6 2L9 6H3L6 2Z" fill="#666" class="transition-colors">
                                                        </path>
                                                        <path d="M6 12L3 8H9L6 12Z" fill="#666"
                                                            class="transition-colors"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </th>
                                        <th class="w-fill h-12 px-2 align-middle [&amp;:has([role=checkbox])]:pr-0 font-normal text-[12px] text-white/40 text-center group font-roboto w-[12%] bg-black whitespace-nowrap"
                                            style="text-align: left;">
                                            <div class="inline-flex items-center justify-center gap-1">
                                                <div class="jsx-7bd0bdb6dd1752e5 flex items-center">
                                                    TP/SL
                                                </div>
                                            </div>
                                        </th>
                                        <th class="w-fill h-12 px-2 align-middle [&amp;:has([role=checkbox])]:pr-0 font-normal text-[12px] text-white/40 text-center group font-roboto w-[11%] bg-black whitespace-nowrap"
                                            style="text-align: left;">
                                            <div class="inline-flex items-center justify-center gap-1">
                                                <div class="jsx-7bd0bdb6dd1752e5 flex items-center">
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="[&amp;_tr:last-child]:border-0 text-center text-[12px] font-roboto">
                                    <tr
                                        class="border-b border-[#FFFFFF1A] transition-colors data-[state=selected]:bg-muted text-[12px] font-roboto hover:bg-[#FFFFFF0D]">
                                        <td class="px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-center py-4 text-gray-500"
                                            colspan="8">Please connect your wallet to view your
                                            positionsssss
                                        </td>
                                    </tr>
                                    <tr
                                        class="border-b border-[#FFFFFF1A] data-[state=selected]:bg-muted text-[12px] font-roboto transition-opacity duration-300 opacity-100">
                                        <td class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] text-center font-roboto w-[14%]"
                                            style="text-align: left;">
                                            <div class="flex items-center gap-2 pl-2">
                                                <IconsCardano />
                                                <div class="flex flex-col flex-start"><span><span
                                                            class="text-primary">Long</span> ADA</span><span
                                                        class="text-xs text-gray-500">5.0x Leverage</span></div>
                                            </div>
                                        </td>
                                        <td class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] text-center font-roboto w-[16%]"
                                            style="text-align: left;">
                                            <div class="flex flex-col">
                                                <div class="relative group flex items-center"><span
                                                        class="text-white border-b border-dotted border-gray-400 cursor-help">$23.27
                                                        (39.51 ADA)</span>
                                                    <div class="relative group ml-2">
                                                        <svg width="12" height="12" viewBox="0 0 15 15" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg" class="cursor-help">
                                                            <circle cx="7.5" cy="7.5" r="6.65" stroke="#26FAB0"
                                                                stroke-opacity="0.5" stroke-width="0.7"></circle><text
                                                                x="50%" y="50%" text-anchor="middle" dy="0.35em"
                                                                fill="#26FAB0" font-size="6"
                                                                font-family="'Inter', sans-serif" font-weight="400"
                                                                font-style="italic">i</text>
                                                        </svg>
                                                        <div
                                                            class="absolute left-0 top-full mt-2 w-[250px] p-3 rounded-lg bg-[#212121CC] backdrop-blur-[30px] shadow-[0px_4px_19.6px_0px_rgba(0,0,0,0.25),0px_4px_54.8px_0px_rgba(0,0,0,0.5)] transition-opacity duration-200 opacity-0 group-hover:opacity-100 pointer-events-none z-50 ">
                                                            <div class="space-y-2">
                                                                <div class="flex justify-between"><span
                                                                        class="text-white font-inter text-xs font-light leading-[120%]">Opening
                                                                        Fee:</span><span
                                                                        class="text-white font-inter text-xs font-medium leading-[120%]">$1.38</span>
                                                                </div>
                                                                <div class="flex justify-between"><span
                                                                        class="text-white font-inter text-xs font-light leading-[120%]">Hourly
                                                                        Borrow Fee:</span><span
                                                                        class="text-white font-inter text-xs font-medium leading-[120%]">$0.01
                                                                        <span
                                                                            class="text-[10px] text-gray-400">(0.01%)</span></span>
                                                                </div>
                                                                <div class="flex justify-between"><span
                                                                        class="text-white font-inter text-xs font-light leading-[120%]">Next
                                                                        Hourly Fee Update:</span><span
                                                                        class="text-[#26FAB0] font-inter text-xs font-medium leading-[120%]">
                                                                        45m 40s</span></div>
                                                                <div class="flex justify-between"><span
                                                                        class="text-white font-inter text-xs font-light leading-[120%]">Liquidation
                                                                        After Hourly:</span><span
                                                                        class="text-white font-inter text-xs font-medium leading-[120%]">$0.4872</span>
                                                                </div>
                                                                <div class="flex justify-between"><span
                                                                        class="text-white font-inter text-xs font-light leading-[120%]">Accumulated
                                                                        Borrow Fee:</span><span
                                                                        class="text-white font-inter text-xs font-medium leading-[120%]">$2.35</span>
                                                                </div>
                                                                <div class="flex justify-between"><span
                                                                        class="text-white font-inter text-xs font-light leading-[120%]">PNL:</span><span
                                                                        class="font-inter text-xs font-medium leading-[120%] text-primary">$2.58</span>
                                                                </div>
                                                                <div class="flex justify-between"><span
                                                                        class="text-white font-inter text-xs font-light leading-[120%]">PNL
                                                                        With Fees:</span><span
                                                                        class="font-inter text-xs font-medium leading-[120%] text-red">-$1.15</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div><span class="text-xs text-red">-$1.15 (-4.30%)</span>
                                            </div>
                                        </td>
                                        <td class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] text-center font-roboto w-[13%]"
                                            style="text-align: left;">
                                            <div class="flex flex-col"><span
                                                    class="text-xs text-gray-500">$113.82</span><span
                                                    class="text-white">200.00 ADA</span></div>
                                        </td>
                                        <td class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] text-center font-roboto w-[13%]"
                                            style="text-align: left;">
                                            <div class="flex flex-col"><span class="text-white">$0.5760 / $0.5889</span>
                                            </div>
                                        </td>
                                        <td class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] text-center font-roboto w-[11%]"
                                            style="text-align: left;"><span class="text-white">$0.4871</span></td>
                                        <td class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] text-center font-roboto w-[10%]"
                                            style="text-align: left;">
                                            <div class="flex flex-col"><span class="text-xs text-gray-500">$23.04</span>
                                            </div>
                                        </td>
                                        <td class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] text-center font-roboto w-[12%]"
                                            style="text-align: left;">
                                            <div class="flex items-center">
                                                <div class="flex flex-col"><span class="text-white">N/A</span></div>
                                                <div class="relative flex items-center">
                                                    <button @click="opensTpsl"
                                                        class="flex items-center justify-center w-8 h-8 text-gray-400 hover:text-white hover:bg-white/10 transition-colors rounded-md ml-2 "
                                                        aria-label="Edit Long position on ADA"><svg class="w-4 h-4"
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="none" stroke="currentColor" stroke-width="2"
                                                            stroke-linecap="round" stroke-linejoin="round">
                                                            <path
                                                                d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z">
                                                            </path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td
                                            class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] text-center font-roboto w-[11%]">
                                            <div class="flex justify-end items-center pr-4">
                                                <div class="relative flex items-center">
                                                    <button
                                                        class="flex items-center justify-center w-8 h-8 text-gray-400 hover:text-white hover:bg-white/10 transition-colors rounded-md "
                                                        aria-label="Show chart lines for Long position on ADA"><svg
                                                            width="14" height="14" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            class="w-3.5 h-3.5 eye-icon">
                                                            <path d="m1 1 22 22" stroke="currentColor" stroke-width="2">
                                                            </path>
                                                            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                                                                stroke="currentColor" stroke-width="2" fill="none">
                                                            </path>
                                                            <path
                                                                d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 11 8 11 8a13.16 13.16 0 0 1-1.67 2.68"
                                                                stroke="currentColor" stroke-width="2" fill="none">
                                                            </path>
                                                            <path
                                                                d="M6.61 6.61A13.526 13.526 0 0 0 1 12s4 8 11 8a9.74 9.74 0 0 0 5.39-1.61"
                                                                stroke="currentColor" stroke-width="2" fill="none">
                                                            </path>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div class="relative flex items-center">
                                                    <button
                                                        class="flex items-center justify-center w-8 h-8 text-gray-400 hover:text-white hover:bg-white/10 transition-colors rounded-md "
                                                        aria-label="Share Long position on ADA"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="none" stroke="currentColor" stroke-width="2"
                                                            stroke-linecap="round" stroke-linejoin="round"
                                                            class="w-4 h-4">
                                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                                            <polyline points="7 7 17 7 17 17"></polyline>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <button
                                                    class="p-2 rounded-md transition-colors text-xs font-medium w-20 bg-primary hover:bg-primary/80 text-black">
                                                    Close
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="isLimitOrders" class="flex-1 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-265px)]">
                <div class="md:hidden overflow-y-auto max-h-[calc(100vh-235px)]">
                    <div class="bg-[#FFFFFF0D] border-y border-white/10 p-6 text-center text-gray-500">Please connect
                        your wallet to view your open orders</div>
                </div>
                <div
                    class="md:min-w-[724px] gap-3 w-auto table_container text-white custom-scrollbar font-roboto hidden md:block p-0 mt-0 bg-black h-[600px] overflow-hidden max-w-full">
                    <div class="h-full overflow-y-auto overflow-x-auto pb-8 md:overflow-x-scroll lg:overflow-x-auto">
                        <div class="relative w-full">
                            <table
                                class="w-full caption-bottom border-collapse overflow-x-auto overflow-y-auto animate-fadeIn font-roboto relative min-w-full md:min-w-[800px] lg:min-w-full">
                                <thead
                                    class="text-center text-[12px] font-roboto sticky top-0 z-20 bg-black border-b border-white/10">
                                    <tr
                                        class="border-b border-[#FFFFFF1A] transition-colors data-[state=selected]:bg-muted text-[12px] font-roboto pl-2">
                                        <th class="w-fill h-12 px-2 align-middle [&amp;:has([role=checkbox])]:pr-0 font-normal text-[12px] text-white/40 text-center group font-roboto w-[18%] pl-4 bg-black whitespace-nowrap"
                                            style="text-align: left;">
                                            <div class="inline-flex items-center justify-center gap-1">Position</div>
                                        </th>
                                        <th class="w-fill h-12 px-2 align-middle [&amp;:has([role=checkbox])]:pr-0 font-normal text-[12px] text-white/40 text-center group font-roboto w-[18%] bg-black whitespace-nowrap"
                                            style="text-align: left;">
                                            <div class="inline-flex items-center justify-center gap-1">Total Position
                                                Size</div>
                                        </th>
                                        <th class="w-fill h-12 px-2 align-middle [&amp;:has([role=checkbox])]:pr-0 font-normal text-[12px] text-white/40 text-center group font-roboto w-[16%] bg-black whitespace-nowrap"
                                            style="text-align: left;">
                                            <div class="inline-flex items-center justify-center gap-1">Order Price</div>
                                        </th>
                                        <th class="w-fill h-12 px-2 align-middle [&amp;:has([role=checkbox])]:pr-0 font-normal text-[12px] text-white/40 text-center group font-roboto w-[16%] bg-black whitespace-nowrap"
                                            style="text-align: left;">
                                            <div class="inline-flex items-center justify-center gap-1">Collateral</div>
                                        </th>
                                        <th class="w-fill h-12 px-2 align-middle [&amp;:has([role=checkbox])]:pr-0 font-normal text-[12px] text-white/40 text-center group font-roboto w-[16%] bg-black whitespace-nowrap"
                                            style="text-align: left;">
                                            <div class="inline-flex items-center justify-center gap-1">TP/SL</div>
                                        </th>
                                        <th class="w-fill h-12 px-2 align-middle [&amp;:has([role=checkbox])]:pr-0 font-normal text-[12px] text-white/40 text-center group font-roboto w-[16%] bg-black whitespace-nowrap"
                                            style="text-align: left;">
                                            <div class="inline-flex items-center justify-center gap-1"></div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="[&amp;_tr:last-child]:border-0 text-center text-[12px] font-roboto">
                                    <tr
                                        class="border-b border-[#FFFFFF1A] transition-colors data-[state=selected]:bg-muted text-[12px] font-roboto hover:bg-[#FFFFFF0D]">
                                        <td class="px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-center py-4 text-gray-500"
                                            colspan="6">Please connect your wallet to view your open orders</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="isHistory" class="flex-1 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-265px)]">
                <div class="md:hidden rounded-md overflow-hidden bg-[#FFFFFF0D]">
                    <div class="bg-[#FFFFFF0D] border-b border-white/10 p-6 text-center text-gray-500">Please connect
                        your wallet to view your trade history</div>
                </div>
                <div
                    class="md:min-w-[724px] px-4 gap-3 w-auto table_container text-white overflow-x-auto custom-scrollbar font-roboto hidden md:block pl-2 mt-0 h-[600px]">
                    <div class="relative w-full">
                        <table
                            class="w-full caption-bottom border-collapse overflow-x-auto min-w-[724px] overflow-y-auto animate-fadeIn font-roboto">
                            <thead class="text-center text-[12px] font-roboto sticky top-0 z-10 bg-black">
                                <tr
                                    class="border-b border-[#FFFFFF1A] transition-colors data-[state=selected]:bg-muted text-[12px] font-roboto hover:bg-transparent">
                                    <th
                                        class="w-fill h-12 px-2 align-middle [&amp;:has([role=checkbox])]:pr-0 font-normal text-[12px] text-white/40 whitespace-nowrap group font-roboto text-left">
                                        <div class="inline-flex items-center justify-center gap-1">
                                            Position Type</div>
                                    </th>
                                    <th
                                        class="w-fill h-12 px-2 align-middle [&amp;:has([role=checkbox])]:pr-0 font-normal text-[12px] text-white/40 whitespace-nowrap group font-roboto text-left">
                                        <div class="inline-flex items-center justify-center gap-1">
                                            Asset</div>
                                    </th>
                                    <th
                                        class="w-fill h-12 px-2 align-middle [&amp;:has([role=checkbox])]:pr-0 font-normal text-[12px] text-white/40 whitespace-nowrap group font-roboto text-left">
                                        <div class="inline-flex items-center justify-center gap-1">
                                            Price</div>
                                    </th>
                                    <th
                                        class="w-fill h-12 px-2 align-middle [&amp;:has([role=checkbox])]:pr-0 font-normal text-[12px] text-white/40 whitespace-nowrap group font-roboto text-left">
                                        <div class="inline-flex items-center justify-center gap-1">
                                            Total Position Size</div>
                                    </th>
                                    <th
                                        class="w-fill h-12 px-2 align-middle [&amp;:has([role=checkbox])]:pr-0 font-normal text-[12px] text-white/40 whitespace-nowrap group font-roboto text-left">
                                        <div class="inline-flex items-center justify-center gap-1">
                                            Collateral</div>
                                    </th>
                                    <th
                                        class="w-fill h-12 px-2 align-middle [&amp;:has([role=checkbox])]:pr-0 font-normal text-[12px] text-white/40 whitespace-nowrap group font-roboto text-left">
                                        <div class="inline-flex items-center justify-center gap-1">
                                            PNL</div>
                                    </th>
                                    <th
                                        class="w-fill h-12 px-2 align-middle [&amp;:has([role=checkbox])]:pr-0 font-normal text-[12px] text-white/40 whitespace-nowrap group font-roboto text-left underline">
                                        <div class="inline-flex items-center justify-center gap-1">
                                            Transaction</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="[&amp;_tr:last-child]:border-0 text-center text-[12px] font-roboto">
                                <tr
                                    class="border-b border-[#FFFFFF1A] transition-colors data-[state=selected]:bg-muted text-[12px] font-roboto hover:bg-[#FFFFFF0D]">
                                    <td class="px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto py-4 text-gray-500 text-center"
                                        colspan="8">Please connect your wallet to view your trade history</td>
                                </tr>
                            </tbody>
                            <tbody class="[&amp;_tr:last-child]:border-0 text-center text-[12px] font-roboto">
                                <tr
                                    class="border-b border-[#FFFFFF1A] transition-colors data-[state=selected]:bg-muted text-[12px] font-roboto hover:bg-[#FFFFFF0D]">
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left text-primary">
                                        Open Long Position</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        ADA</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        $0.5760</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        200.00 ADA</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        $23.04 </td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left text-white">
                                        $0.00</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        <a href="https://cexplorer.io/tx/c652b852084f76f30885fdc9db306e7a9313faea555dd02a646d4cda64993d8c"
                                            target="_blank" rel="noopener noreferrer"
                                            class="underline hover:text-primary">Nov 3, 2025 (5:10 PM)</a></td>
                                </tr>
                                <tr
                                    class="border-b border-[#FFFFFF1A] transition-colors data-[state=selected]:bg-muted text-[12px] font-roboto hover:bg-[#FFFFFF0D]">
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left text-red">
                                        Cancel Short Limit Order</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        ADA</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        $0.6064</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        200.00 ADA</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        $24.80 </td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left text-white">
                                        $0.00</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        <a href="https://cexplorer.io/tx/330d08c056ff7a0e7391fa025688dc1cbafbff4dde602af8ada69f25f4d3b9cc"
                                            target="_blank" rel="noopener noreferrer"
                                            class="underline hover:text-primary">Nov 1, 2025 (11:38 PM)</a></td>
                                </tr>
                                <tr
                                    class="border-b border-[#FFFFFF1A] transition-colors data-[state=selected]:bg-muted text-[12px] font-roboto hover:bg-[#FFFFFF0D]">
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left text-red">
                                        Take Profit Short Position</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        ADA</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        $0.6000</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        240.00 ADA</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        $24.59 </td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left text-primary">
                                        +$3.53</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        <a href="https://cexplorer.io/tx/0b6bb9098295801fb8974a2ce4c8e839693504e1e3146367f7563ab0a121b5d4"
                                            target="_blank" rel="noopener noreferrer"
                                            class="underline hover:text-primary">Nov 1, 2025 (12:00 AM)</a></td>
                                </tr>
                                <tr
                                    class="border-b border-[#FFFFFF1A] transition-colors data-[state=selected]:bg-muted text-[12px] font-roboto hover:bg-[#FFFFFF0D]">
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left text-red">
                                        Open Short Limit Order</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        ADA</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        $0.6200</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        200.00 ADA</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        $24.80 </td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left text-white">
                                        $0.00</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        <a href="https://cexplorer.io/tx/5ba588aa835b1ce511dc4ab6b7eaa31cad88a905f57912ceffe71615db659434"
                                            target="_blank" rel="noopener noreferrer"
                                            class="underline hover:text-primary">Oct 31, 2025 (11:39 AM)</a></td>
                                </tr>
                                <tr
                                    class="border-b border-[#FFFFFF1A] transition-colors data-[state=selected]:bg-muted text-[12px] font-roboto hover:bg-[#FFFFFF0D]">
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left text-red">
                                        Open Short Position</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        ADA</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        $0.6141</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        240.00 ADA</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        $24.57 </td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left text-white">
                                        $0.00</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        <a href="https://cexplorer.io/tx/2174fd26c198a3e82df066df815d7a2f8b286b1bdf3032b5b591f214d0cfb67e"
                                            target="_blank" rel="noopener noreferrer"
                                            class="underline hover:text-primary">Oct 31, 2025 (11:24 AM)</a></td>
                                </tr>
                                <tr
                                    class="border-b border-[#FFFFFF1A] transition-colors data-[state=selected]:bg-muted text-[12px] font-roboto hover:bg-[#FFFFFF0D]">
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left text-primary">
                                        Stop Loss Long Position</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        ADA</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        $0.6700</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        500.00 ADA</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        $34.31 </td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left text-red">
                                        -$8.10</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        <a href="https://cexplorer.io/tx/15acd5c0f65bc8cab8654cf8905c00a04c38e4e7d7737e086604deca7aaa857e"
                                            target="_blank" rel="noopener noreferrer"
                                            class="underline hover:text-primary">Oct 14, 2025 (5:18 PM)</a></td>
                                </tr>
                                <tr
                                    class="border-b border-[#FFFFFF1A] transition-colors data-[state=selected]:bg-muted text-[12px] font-roboto hover:bg-[#FFFFFF0D]">
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left text-primary">
                                        Open Long Position</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        ADA</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        $0.6864</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        500.00 ADA</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        $34.32 </td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left text-white">
                                        $0.00</td>
                                    <td
                                        class="py-[0.3rem] px-2 lg:py-[0.5rem] align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-[12px] font-roboto text-left">
                                        <a href="https://cexplorer.io/tx/7209e92ffb2347460ef35935b08e216e4df2c74361bfd894de75b5cf3e01f689"
                                            target="_blank" rel="noopener noreferrer"
                                            class="underline hover:text-primary">Oct 14, 2025 (3:43 PM)</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <EditTPSL />
</template>
<script setup>
import { useModalState } from '~/composables/useModalState';
import { computed } from 'vue'; // Thêm 'computed'
import EditTPSL from './EditTPSL.vue';

const EditsTpsl = useModalState('EditsTpsl');

const opensTpsl = ()=>{
    EditsTpsl.value = true
}

// 1. TẠO 1 STATE DUY NHẤT (key: 'activeTradeTab', giá trị mặc định: 'Positions')
const activeTab = useModalState('activeTradeTab', 'Positions');

// 2. TẠO CÁC HÀM (giờ chúng chỉ cần set 1 giá trị)
const openisPositions = () => {
    activeTab.value = 'Positions';
};
const openisLimitOrders = () => {
    activeTab.value = 'LimitOrders';
};
const openisHistory = () => {
    activeTab.value = 'History';
};

// 3. (TÙY CHỌN) Nếu bạn vẫn cần các biến true/false (cho v-if)
//    Hãy dùng 'computed' để tự động tính toán
const isPositions = computed(() => activeTab.value === 'Positions');
const isLimitOrders = computed(() => activeTab.value === 'LimitOrders');
const isHistory = computed(() => activeTab.value === 'History');
</script>