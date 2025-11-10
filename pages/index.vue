<template>
    <div class="jsx-3478383214 hidden md:flex min-h-screen bg-black">
        <div class="jsx-3478383214 flex-1 flex min-w-0">

        <TradingViewChart />

        <perpetualzContract />

        </div>
    </div>
</template>
<script setup>
import perpetualzContract from '~/components/ui/perpetualzContract.vue';
import TradingViewChart from '~/components/ui/TradingViewChart.vue';
</script>