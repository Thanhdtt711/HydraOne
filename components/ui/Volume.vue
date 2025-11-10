<template>
    <div v-if="isVolumeModal" class="fixed bg-black border border-white/25 rounded-md shadow-lg z-[999999] w-[120px]"
        style="top: 96px; left: 601px;" bis_skin_checked="1"><button
            class="w-full text-left px-2 py-1.5 text-xs hover:bg-white/10 transition-colors first:rounded-t-md last:rounded-b-md text-primary bg-primary/10">24H</button><button
            class="w-full text-left px-2 py-1.5 text-xs hover:bg-white/10 transition-colors first:rounded-t-md last:rounded-b-md text-[#b7b7b7]">7
            Days</button><button
            class="w-full text-left px-2 py-1.5 text-xs hover:bg-white/10 transition-colors first:rounded-t-md last:rounded-b-md text-[#b7b7b7]">1
            Month</button><button
            class="w-full text-left px-2 py-1.5 text-xs hover:bg-white/10 transition-colors first:rounded-t-md last:rounded-b-md text-[#b7b7b7]">1
            Year</button><button
            class="w-full text-left px-2 py-1.5 text-xs hover:bg-white/10 transition-colors first:rounded-t-md last:rounded-b-md text-[#b7b7b7]">All
            Time</button>
    </div>
</template>
<script setup>
import { useModalState } from '~/composables/useModalState';

const isVolumeModal = useModalState('VolumeModal');

</script>