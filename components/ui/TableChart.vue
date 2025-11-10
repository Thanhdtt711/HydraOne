<template>
    <div v-if="isChartModal"
        class="fixed bg-black border border-white/25 rounded-lg shadow-lg z-[99999] sm:max-h-none max-h-[60vh] overflow-y-auto"
        style="top: 128px; left: 6px; width: 800px;" bis_skin_checked="1">
        <div class="hidden sm:grid gap-4 px-4 py-3 text-xs text-[#b7b7b7] font-medium"
            style="grid-template-columns: 2.5fr 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr;" bis_skin_checked="1">
            <div class="text-left" bis_skin_checked="1">Pair</div>
            <div class="text-left" bis_skin_checked="1">Market Value</div>
            <div class="text-left" bis_skin_checked="1">Volume 24H</div>
            <div class="text-left" bis_skin_checked="1">Long Interest</div>
            <div class="text-left" bis_skin_checked="1">Short Interest</div>
            <div class="text-left text-nowrap" bis_skin_checked="1">Liquidity Available</div>
        </div>
        <div class="sm:hidden grid gap-4 px-4 py-3 text-xs text-[#b7b7b7] leading-[120%] font-medium sticky top-0 bg-black border-b border-white/25 z-10"
            style="grid-template-columns: 2.5fr 1.5fr 1.5fr;" bis_skin_checked="1">
            <div class="text-left" bis_skin_checked="1">Pair</div>
            <div class="text-left" bis_skin_checked="1">Volume</div>
            <div class="text-left" bis_skin_checked="1">Price</div>
        </div>
        <a class="hidden sm:grid gap-4 items-center w-full px-4 py-4 text-white hover:bg-white/10 active:bg-white/20 transition-colors duration-100 touch-manipulation "
            href="/perpetuals/ada"
            style="grid-template-columns: 2.5fr 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr; touch-action: manipulation; -webkit-tap-highlight-color: rgba(38, 250, 176, 0.2);">
            <div class="flex items-center gap-3 text-left" bis_skin_checked="1">
                <div class="w-5 h-5 flex items-center justify-center flex-shrink-0" bis_skin_checked="1">
                   <IconsCardano/>
                </div><span class="text-sm font-medium w-20 whitespace-nowrap">ADA-USD</span><span
                    class="bg-primary/50 text-primary text-xs px-2 py-1 rounded font-medium">30x</span>
            </div>
            <div class="text-left text-sm" bis_skin_checked="1">$0.5318</div>
            <div class="text-left text-sm" bis_skin_checked="1">$4.014.334,07</div>
            <div class="text-left text-sm" bis_skin_checked="1">$425.532,00</div>
            <div class="text-left text-sm" bis_skin_checked="1">$36.885,12</div>
            <div class="text-left text-sm" bis_skin_checked="1">$4.253.856,50</div>
        </a>
        <a class="sm:hidden grid gap-4 items-center w-full px-4 py-4 text-white hover:bg-white/10 transition-colors "
            href="/perpetuals/ada"
            style="grid-template-columns: 2.5fr 1.5fr 1.5fr; touch-action: manipulation; -webkit-tap-highlight-color: rgba(38, 250, 176, 0.2);">
            <div class="flex items-center gap-3 text-left" bis_skin_checked="1">
                <div class="w-5 h-5 flex items-center justify-center flex-shrink-0" bis_skin_checked="1">
                    <IconsCardano/>
                </div>
                <div class="flex flex-col" bis_skin_checked="1"><span
                        class="text-xs font-medium w-16 whitespace-nowrap">ADA-USD</span><span
                        class="bg-primary/50 text-primary text-[10px] px-1.5 py-0.5 rounded font-medium mt-1 self-start">30x</span>
                </div>
            </div>
            <div class="text-left text-xs" bis_skin_checked="1">$4.014.334,07</div>
            <div class="text-left text-xs" bis_skin_checked="1">$0.5318</div>
        </a>
    </div>
</template>
<script setup>
import { useModalState } from '~/composables/useModalState';

const isChartModal = useModalState('ChartModal');

</script>