<template>
    <div class="jsx-3478383214 flex flex-col flex-1 min-w-0">
        <div class="jsx-3478383214 w-full">
            <menuChart />
        </div>
        <div class="jsx-3478383214 flex flex-col flex-1 min-h-0 bg-black">
            <div class="jsx-3478383214 perp-chart-area w-full flex-shrink-0">
                <div class="jsx-f2937aeeb76f656f tv-chart-dark relative w-full h-[536px] bg-black z-10 ">
                    <div class="jsx-f2937aeeb76f656f w-full h-full" style="background-color: rgb(0, 0, 0);">
                        <div ref="chartContainer" class="tradingview-widget-container" style="height:100%;width:100%">
                            <div class="tradingview-widget-container__widget"
                                style="height:calc(100% - 32px);width:100%"></div>
                        </div>
                    </div>
                </div>
            </div>
            <positionsMain />
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

import menuChart from './menuChart.vue';
import positionsMain from './positionsMain.vue';

// 2. Tạo một ref để liên kết với div trong template
const chartContainer = ref(null);
const scriptInstance = ref(null); // Dùng để dọn dẹp

// 3. Sao chép toàn bộ cấu hình JSON của bạn vào đây
const config = {
  "allow_symbol_change": true,
  "calendar": false,
  "details": false,
  "hide_side_toolbar": true,
  "hide_top_toolbar": false,
  "hide_legend": false,
  "hide_volume": false,
  "hotlist": false,
  "interval": "H",
  "locale": "en",
  "save_image": true,
  "style": "1",
  "symbol": "BINANCE:ADAUSD",
  "theme": "dark",
  "timezone": "Etc/UTC",
  "backgroundColor": "#000",
  "gridColor": "rgba(242, 242, 242, 0.06)",
  "watchlist": [],
  "withdateranges": false,
  "compareSymbols": [],
  "studies": [],
  "autosize": true
};

// 4. Dùng 'onMounted' để đảm bảo code chỉ chạy ở phía client (trình duyệt)
onMounted(() => {
  if (chartContainer.value) {
    // Tạo thẻ <script>
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    
    // Đây là phần quan trọng: Gán JSON config vào nội dung script
    script.innerHTML = JSON.stringify(config);
    
    // Chèn script vào div container
    chartContainer.value.appendChild(script);
    
    // Lưu lại thẻ script để dọn dẹp
    scriptInstance.value = script;
  }
});
</script>