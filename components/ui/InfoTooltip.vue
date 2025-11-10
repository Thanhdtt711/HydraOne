<template>
  <UTooltip 
    :text="text"
    :popper="{ 
      placement: 'top',
      class: '!bg-gray-900 text-white p-3 rounded-lg text-xs w-64 shadow-lg',
      // style: { zIndex: 9999999 }
     }" 
  >
    <div class="relative flex items-center">
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="focus:outline-none focus:ring focus:ring-green-400 cursor-pointer">
        <circle cx="7.5" cy="7.5" r="6.65" stroke="#26FAB0"
          stroke-opacity="0.5" stroke-width="0.7"></circle>
        <text x="50%" y="50%" text-anchor="middle" dy="0.35em"
          fill="#26FAB0" font-size="8" font-family="'Inter', sans-serif"
          font-weight="400" font-style="italic">i</text>
      </svg>
    </div>
  </UTooltip>
</template>

<script setup>
// 1. Định nghĩa một prop tên là 'text'
// 2. Yêu cầu nó là kiểu String và bắt buộc (required)
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>
<style>
.ring-default {
  background-color: #111827 !important;
  color: #fff !important;
  border-radius: 10px;
  width: 100%;
  max-width: 175px;
  height: max-content;
  white-space: normal;
  padding: 10px;
}
.ring-default .truncate{
  white-space: normal;
}
</style>