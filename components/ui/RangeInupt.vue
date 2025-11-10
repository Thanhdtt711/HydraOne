<template>
    <div class="space-y-4">
        <div class="flex justify-between items-center"><span class="text-sm font-medium text-white">Leverage</span>
        </div>
        <div class="flex items-center gap-4">

            <div class="flex-1">
                <div>
                    <div class="w-full mb-10 relative px-2">

                        <div class="relative w-full h-0.5 my-4">

                            <div class="absolute left-0 right-0 h-full bg-white/30"></div>

                            <div class="absolute left-0 h-full bg-[#40bfe2]" :style="{ width: internalSliderValue + '%' }">
                            </div>

                            <div v-for="tick in displayTicks" :key="tick.label" class="absolute"
                                :style="{ left: tick.pos + '%' }">
                                <div :class="[
                                    'absolute w-[2.5px] h-2.5 -mt-2.5 transform -translate-x-1/2 rounded-t-full',
                                    tick.barClass
                                ]"></div>
                                <div :class="[
                                    'absolute w-[2.5px] h-2.5 mt-0.5 transform -translate-x-1/2 rounded-b-full',
                                    tick.barClass
                                ]"></div>
                                <div :class="[
                                    'absolute -bottom-8 transform -translate-x-1/2 text-xs font-medium',
                                    tick.colorClass
                                ]">
                                    {{ tick.label }}
                                </div>
                            </div>

                            <div class="absolute w-3 h-3 bg-[#40bfe2] rounded-full -mt-[5px] transform -translate-x-1/2 border-2 border-[#1A1B1E]"
                                :style="{ left: internalSliderValue + '%' }"></div>
                        </div>

                        <input type="range" min="0" max="100" step="0.1"
                            class="absolute top-0 left-0 w-full h-8 opacity-0 cursor-pointer z-20"
                            :value="internalSliderValue" 
                            @input="internalSliderValue = $event.target.value"
                            />

                    </div>
                </div>
            </div>

            <div class="flex items-center justify-center bg-[#1A1B1E] rounded-lg p-2 w-14 h-10 cursor-pointer">
                <span class="text-sm font-medium text-[#40bfe2]">{{ leverage }}x</span>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// 1. ĐỊNH NGHĨA PROPS VÀ EMITS CHO V-MODEL
const props = defineProps({
  modelValue: { // v-model sẽ truyền giá trị qua prop này
    type: [String, Number],
    default: 0
  }
});
const emit = defineEmits(['update:modelValue']); // v-model sẽ lắng nghe event này

// 2. TẠO COMPUTED ĐỂ LIÊN KẾT V-MODEL VỚI INPUT
//    Đây là cách chuẩn để dùng v-model trên component con
const internalSliderValue = computed({
  get: () => props.modelValue, // Đọc giá trị từ cha
  set: (newValue) => {
    emit('update:modelValue', newValue); // Gửi giá trị mới lên cha
  }
});

// 2. CÁC MỐC (TICKS): Định nghĩa các mốc giá trị
// Dựa trên code HTML của bạn, các mốc này được chia ĐỀU
// (0%, 11.11%, 22.22%... 100%)
const ticks = [
    { pos: 0, lev: 1 },
    { pos: 11.1111, lev: 3 },
    { pos: 22.2222, lev: 5 },
    { pos: 33.3333, lev: 7 },
    { pos: 44.4444, lev: 9 },
    { pos: 55.5556, lev: 10 },
    { pos: 66.6667, lev: 12 },
    { pos: 77.7778, lev: 15 },
    { pos: 88.8889, lev: 20 },
    { pos: 100, lev: 30 },
];

// 3. STATE TÍNH TOÁN (LEVERAGE):
// Tính toán giá trị đòn bẩy (ví dụ: 15.8x) dựa trên vị trí slider
const leverage = computed(() => {
    const val = parseFloat(internalSliderValue.value);

    // Tìm xem slider đang ở đoạn nào (ví dụ: giữa 15x và 20x)
    for (let i = 0; i < ticks.length - 1; i++) {
        const start = ticks[i];
        const end = ticks[i + 1];

        if (val >= start.pos && val <= end.pos) {
            // Nội suy tuyến tính (linear interpolation) trong đoạn đó
            // 1. Tính % slider đã đi được trong đoạn này
            const segmentPercent = (val - start.pos) / (end.pos - start.pos);
            // 2. Tính giá trị đòn bẩy tương ứng
            const segmentLev = segmentPercent * (end.lev - start.lev);
            const currentLev = start.lev + segmentLev;

            return currentLev.toFixed(1); // Làm tròn 1 chữ số thập phân
        }
    }
    return ticks[0].lev.toFixed(1); // Mặc định
});

// 4. STATE TÍNH TOÁN (DISPLAY TICKS):
// Quyết định màu sắc cho các vạch và nhãn
const displayTicks = computed(() => {
    const currentLev = parseFloat(leverage.value);
    return ticks.map(tick => {
        const isActive = currentLev >= tick.lev;
        return {
            label: `${tick.lev}x`,
            pos: tick.pos,
            colorClass: isActive ? 'text-[#40bfe2]' : 'text-white/50',
            barClass: isActive ? 'bg-[#40bfe2]' : 'bg-white/30',
        };
    });
});
</script>