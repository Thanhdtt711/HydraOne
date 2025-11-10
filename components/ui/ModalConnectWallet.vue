<template>
    <div v-if="isWalletModalOpen" @click="closeWalletModal" class="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm">
    </div>
    <div v-if="isWalletModalOpen" role="dialog" data-state="open" id="radix-:r1:" aria-describedby="radix-:r3:"
        aria-labelledby="radix-:r2:"
        class="fixed left-[50%] top-[50%] z-[9999] grid w-full translate-x-[-25%] translate-y-[-50%] gap-4 border-2 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-2xl max-w-[90%] max-h-[95vh] overflow-auto sm:max-w-[425px] bg-main dark:bg-primary/10 dark:border-primary/15 text-white"
        tabindex="-1" style="pointer-events: auto;">
        <div class="flex flex-col space-y-1.5 text-center sm:text-left">
            <h2 class="text-lg font-semibold leading-none tracking-tight">
                {{ isConnected ? 'Wallet Connected' : 'Connect Wallet' }}
            </h2>
        </div>

        <ul class="text-white space-y-3">
            <ul class="text-white space-y-3">
                <button @click="handleConnect('lace')"
                    class="transition-all transform focus:scale-[0.97] focus:shadow-sm active:scale-[0.95] backdrop-blur-sm border border-neutral-200 bg-white hover:bg-neutral-100 dark:border-primary/50 dark:bg-primary/10 dark:hover:bg-primary/20 w-full py-2 px-5 dark rounded-full !h-auto cursor-pointer relative inline-flex items-center justify-center h-[40px]">
                    <span class="text-[18px]">Lace Wallet</span>
                </button>

                <button @click="handleConnect('eternl')"
                    class="transition-all transform focus:scale-[0.97] focus:shadow-sm active:scale-[0.95] backdrop-blur-sm border border-neutral-200 bg-white hover:bg-neutral-100 dark:border-primary/50 dark:bg-primary/10 dark:hover:bg-primary/20 w-full py-2 px-5 dark rounded-full !h-auto cursor-pointer relative inline-flex items-center justify-center h-[40px]">
                    <span class="text-[18px]">Eternl Wallet</span>
                </button>

                <button @click="handleConnect('flint')"
                    class="transition-all transform focus:scale-[0.97] focus:shadow-sm active:scale-[0.95] backdrop-blur-sm border border-neutral-200 bg-white hover:bg-neutral-100 dark:border-primary/50 dark:bg-primary/10 dark:hover:bg-primary/20 w-full py-2 px-5 dark rounded-full !h-auto cursor-pointer relative inline-flex items-center justify-center h-[40px]">
                    <span class="text-[18px]">Flint Wallet</span>
                </button>
            </ul>
        </ul>
        <button type="button" @click="closeWalletModal"
            class="absolute right-4 top-4 rounded-sm border-none outline-none ring-0 transition-opacity focus:outline-none disabled:pointer-events-none data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-500 dark:ring-offset-neutral-950 dark:focus:ring-neutral-300 dark:data-[state=open]:bg-neutral-800 dark:data-[state=open]:text-neutral-400"><svg
                width="13" height="30" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14 1.91L12.59 0.5L7 6.09L1.41 0.5L0 1.91L5.59 7.5L0 13.09L1.41 14.5L7 8.91L12.59 14.5L14 13.09L8.41 7.5L14 1.91Z"
                    fill="white"></path>
            </svg><span class="sr-only">Close</span>
        </button>
    </div>
    <connectWallets />
</template>
<script setup>
// 1. Import composable chung
import connectWallets from './connectWallets.vue'; 
import { useModalState } from '~/composables/useModalState';
import { useCardano } from '~/composables/useCardano';
// --- Lấy State & Hàm của Cardano (CẬP NHẬT) ---
const {
    connectWallet,
    disconnectWallet,  // <-- Lấy hàm disconnect
    isConnected,       // <-- Lấy state
    walletAddress      // <-- Lấy địa chỉ
} = useCardano();

const handleDisconnect = () => {
    disconnectWallet(); // Gọi hàm từ composable
    closeModal();       // Đóng modal
};
// 2. Lấy state với CÙNG key 'walletModal'
const isWalletModalOpen = useModalState('walletModal');

const closeWalletModal = () => {
    isWalletModalOpen.value = false;
};

const handleConnect = async (walletName) => {
    // 3. Kiểm tra xem ví có tồn tại không
    if (!window.cardano || !window.cardano[walletName]) {
        alert(`Vui lòng cài đặt ${walletName} Wallet!`);
        return;
    }
    const success = await connectWallet(walletName);

    // 4. Nếu kết nối thành công, đóng modal
    if (success) {
        closeWalletModal();
    } else {
        alert("Kết nối ví thất bại.");
    }
};
</script>