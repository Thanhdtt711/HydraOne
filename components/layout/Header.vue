<template>
    <nav
        class="flex justify-between items-center py-0 px-4 md:px-6 w-full h-16 lg:border-b-[0.5px] border-white/25 mx-auto">
        <div class="flex items-center gap-4 md:gap-8" ><img alt="" loading="lazy"
                width="120" height="30" decoding="async" data-nimg="1" class="w-auto h-[42px] object-contain"
                :src="logo" style="color: transparent;">
            <div class="hidden md:flex items-center gap-4 lg:gap-8" >
                    <NuxtLink to="/"
                        class="flex justify-center items-center gap-2.5 p-2 w-20 h-8 text-xs font-medium leading-[normal] hover:text-[#40bfe2] transition-all ease-linear text-white"
                        exact-active-class="!text-[#40bfe2] underline">
                        PERPETUALS
                    </NuxtLink>

                    <NuxtLink to="/liquidity"
                        class="flex justify-center items-center gap-2.5 p-2 w-20 h-8 text-xs font-medium leading-[normal] hover:text-[#40bfe2] transition-all ease-linear text-white"
                        exact-active-class="!text-[#40bfe2] underline">
                        LIQUIDITY
                    </NuxtLink>
            </div>
        </div>
        <div class="flex items-center gap-4" >
            <div class="hidden lg:flex items-center gap-2 px-3 py-1.5 border border-white/25 rounded-full"
                >
                <span class="text-[#b7b7b7] text-xs font-medium">24H Volume:</span><span
                    class="text-white text-xs font-medium">$2.66M</span>
            </div>
            <div class="text-[#40bfe2] text-xs font-medium capitalize cursor-pointer" >
                <div >
                    <div class="hidden lg:flex" >

                        <button v-if="isConnected"
                         @click="openWalletModals"
                            class="transform bg-[#40bfe2] focus:scale-[0.97] focus:shadow-sm active:scale-[0.95] px-4 py-2 rounded-full text-[11px] lg:text-[14px] text-white transition-all duration-300 w-[180px] hover:opacity-80 bg-gradient-to-r from-primary to-primary relative inline-flex items-center justify-center h-[40px]">
                            <div class="flex items-center justify-center h-full gap-2 text-black" >
                                {{ truncatedAddress }}
                            </div>
                        </button>
                        <button v-else
                        @click="openWalletModal"
                            class="transform bg-[#40bfe2] focus:scale-[0.97] focus:shadow-sm active:scale-[0.95] px-4 py-2 rounded-full text-[11px] lg:text-[14px] text-white transition-all duration-300 w-[180px] hover:opacity-80 bg-gradient-to-r from-primary to-primary relative inline-flex items-center justify-center h-[40px]">
                            <div class="flex items-center justify-center h-full gap-2 text-black" >
                                Connect Wallet</div>
                        </button>

                    </div>
                    <div class="lg:hidden" ><button
                            class="transition-all transform focus:scale-[0.97] focus:shadow-sm active:scale-[0.95] text-white border border-white/25 px-4 py-2 rounded-full text-[13px] lg:text-[16px] hover:opacity-80 hover:text-primary relative inline-flex items-center justify-center h-[40px]">
                            <div class="flex items-center justify-center h-full gap-2" >Connect
                            </div>
                        </button></div>
                </div>
                <div class="fixed right-0 top-0 h-full w-full max-w-md bg-lighter-black border-l border-white/10 text-white z-50 transform transition-transform duration-300 ease-in-out translate-x-full"
                    >
                    <div class="flex flex-col h-full cursor-default" >
                        <div class="flex items-center justify-between p-6" >
                            <div class="flex items-center gap-3" >
                                <div class="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden"
                                    >
                                    <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                                        ><span class="text-sm font-semibold">W</span></div>
                                </div>
                                <div class="flex items-center gap-2" >
                                    <div class="font-mono text-lg cursor-text" ></div><button
                                        class="p-1 hover:bg-white/10 rounded transition-colors text-gray-400 hover:text-white"
                                        title="Copy full address"><svg class="w-4 h-4" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z">
                                            </path>
                                        </svg></button>
                                </div>
                            </div><button class="p-2 hover:bg-white/10 rounded-full transition-colors"><svg width="20"
                                    height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg></button>
                        </div>
                        <div class="px-6 pb-6" >
                            <div class="flex items-center justify-between" >
                                <div >
                                    <div class="text-2xl font-bold cursor-text" >$0,00</div>
                                    <div class="text-sm text-gray-400 cursor-text" >0,00 ₳</div>
                                </div><button
                                    class="p-2 hover:bg-red-500/20 rounded-full transition-colors text-red-400"
                                    title="Disconnect Wallet"><svg width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="">
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                        <polyline points="16,17 21,12 16,7"></polyline>
                                        <line x1="21" x2="9" y1="12" y2="12"></line>
                                    </svg></button>
                            </div>
                            <div class="mt-4 flex items-center justify-between" ><span
                                    class="text-sm text-gray-400 cursor-text">Hardware Wallet</span><button
                                    class="relative inline-flex h-5 w-9 items-center rounded-full transition-colors bg-white/10"><span
                                        class="inline-block h-3 w-3 transform rounded-full bg-white transition-transform translate-x-1"></span></button>
                            </div>
                        </div>
                        <div class="flex items-center bg-lighter-black w-full" >
                            <div class="flex h-[48px] w-full" >
                                <div class="flex-1 flex items-center justify-center cursor-pointer transition-colors border-b-2 text-sm font-medium border-[#40bfe2] text-[#40bfe2]"
                                    ><span class="cursor-text">Tokens</span></div>
                                <div class="flex-1 flex items-center justify-center cursor-pointer transition-colors border-b-2 text-sm font-medium border-white/10 text-white hover:text-[#40bfe2]"
                                    ><span class="cursor-text">LP</span></div>
                                <div class="flex-1 flex items-center justify-center cursor-pointer transition-colors border-b-2 text-sm font-medium border-white/10 text-white hover:text-[#40bfe2]"
                                    ><span class="cursor-text">Positions</span></div>
                            </div>
                        </div>
                        <div class="flex-1 overflow-y-auto" >
                            <div class="p-4 space-y-3" >
                                <div class="space-y-3" >
                                    <div class="text-center text-gray-400 py-8 cursor-text" >No
                                        tokens found</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><button
                class="md:hidden p-1.5 rounded-full border-2 border-white/25 hover:border-[#40bfe2] transition-colors"
                aria-expanded="false" aria-label="Toggle menu" type="button"><svg width="18" height="18"
                    viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4">
                    <path
                        d="M16.611 0.167918H1.762C1.56298 0.118705 1.35537 0.115434 1.15489 0.15835C0.95442 0.201267 0.766343 0.289245 0.604911 0.415621C0.443479 0.541997 0.312927 0.703456 0.223143 0.887766C0.13336 1.07208 0.0867004 1.2744 0.0867004 1.47942C0.0867004 1.68443 0.13336 1.88676 0.223143 2.07107C0.312927 2.25538 0.443479 2.41684 0.604911 2.54322C0.766343 2.66959 0.95442 2.75757 1.15489 2.80049C1.35537 2.8434 1.56298 2.84013 1.762 2.79092H16.611C16.81 2.84013 17.0176 2.8434 17.2181 2.80049C17.4186 2.75757 17.6067 2.66959 17.7681 2.54322C17.9295 2.41684 18.0601 2.25538 18.1499 2.07107C18.2396 1.88676 18.2863 1.68443 18.2863 1.47942C18.2863 1.2744 18.2396 1.07208 18.1499 0.887766C18.0601 0.703456 17.9295 0.541997 17.7681 0.415621C17.6067 0.289245 17.4186 0.201267 17.2181 0.15835C17.0176 0.115434 16.81 0.118705 16.611 0.167918Z"
                        fill="white"></path>
                    <path
                        d="M16.611 6.72407H1.762C1.56298 6.67486 1.35537 6.67159 1.15489 6.7145C0.95442 6.75742 0.766343 6.84539 0.604911 6.97177C0.443479 7.09814 0.312927 7.25961 0.223143 7.44392C0.13336 7.62823 0.0867004 7.83055 0.0867004 8.03556C0.0867004 8.24058 0.13336 8.44291 0.223143 8.62722C0.312927 8.81153 0.443479 8.97298 0.604911 9.09936C0.766343 9.22574 0.95442 9.31372 1.15489 9.35664C1.35537 9.39955 1.56298 9.39628 1.762 9.34707H16.611C16.81 9.39628 17.0176 9.39955 17.2181 9.35664C17.4186 9.31372 17.6067 9.22574 17.7681 9.09936C17.9295 8.97298 18.0601 8.81153 18.1499 8.62722C18.2396 8.44291 18.2863 8.24058 18.2863 8.03556C18.2863 7.83055 18.2396 7.62823 18.1499 7.44392C18.0601 7.25961 17.9295 7.09814 17.7681 6.97177C17.6067 6.84539 17.4186 6.75742 17.2181 6.7145C17.0176 6.67159 16.81 6.67486 16.611 6.72407Z"
                        fill="white"></path>
                    <path
                        d="M16.611 13.2817H1.762C1.56298 13.2325 1.35537 13.2292 1.15489 13.2721C0.95442 13.315 0.766343 13.403 0.604911 13.5294C0.443479 13.6558 0.312927 13.8172 0.223143 14.0015C0.13336 14.1859 0.0867004 14.3882 0.0867004 14.5932C0.0867004 14.7982 0.13336 15.0005 0.223143 15.1848C0.312927 15.3691 0.443479 15.5306 0.604911 15.657C0.766343 15.7833 0.95442 15.8713 1.15489 15.9143C1.35537 15.9572 1.56298 15.9539 1.762 15.9047H16.611C16.81 15.9539 17.0176 15.9572 17.2181 15.9143C17.4186 15.8713 17.6067 15.7833 17.7681 15.657C17.9295 15.5306 18.0601 15.3691 18.1499 15.1848C18.2396 15.0005 18.2863 14.7982 18.2863 14.5932C18.2863 14.3882 18.2396 14.1859 18.1499 14.0015C18.0601 13.8172 17.9295 13.6558 17.7681 13.5294C17.6067 13.403 17.4186 13.315 17.2181 13.2721C17.0176 13.2292 16.81 13.2325 16.611 13.2817Z"
                        fill="white"></path>
                </svg></button>
            <div class="fixed left-0 top-0 w-full h-full bg-lighter-black shadow-xl md:hidden z-50 transform transition-transform duration-300 ease-in-out flex flex-col -translate-y-full"
                >
                <div class="flex flex-col h-full" >
                    <div class="flex justify-end p-4" ><button
                            class="p-2 rounded-full border-2 border-gray rotate-45 hover:border-[#40bfe2] transition-colors"
                            type="button" aria-label="Close menu"><svg width="24" height="24" viewBox="0 0 25 25"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.5981 24.0702C12.052 24.0668 11.5286 23.8514 11.1383 23.4695C10.748 23.0876 10.5213 22.5691 10.5061 22.0232V14.9082C10.5061 14.7965 10.4617 14.6893 10.3828 14.6102C10.3039 14.5311 10.1968 14.4865 10.0851 14.4862H2.91905C2.64028 14.4923 2.3631 14.4427 2.10377 14.3402C1.84445 14.2377 1.60819 14.0845 1.40888 13.8895C1.20957 13.6945 1.05121 13.4616 0.9431 13.2046C0.834987 12.9476 0.779297 12.6716 0.779297 12.3927C0.779297 12.1139 0.834987 11.8379 0.9431 11.5808C1.05121 11.3238 1.20957 11.091 1.40888 10.896C1.60819 10.7009 1.84445 10.5477 2.10377 10.4452C2.3631 10.3428 2.64028 10.2931 2.91905 10.2992H10.0801C10.1916 10.299 10.2986 10.2545 10.3775 10.1756C10.4564 10.0967 10.5008 9.9898 10.5011 9.87822V2.76222C10.4924 2.48192 10.5401 2.20274 10.6414 1.94123C10.7427 1.67973 10.8955 1.44123 11.0907 1.23989C11.2859 1.03855 11.5195 0.878477 11.7778 0.769161C12.036 0.659845 12.3136 0.603516 12.5941 0.603516C12.8745 0.603516 13.1521 0.659845 13.4103 0.769161C13.6686 0.878477 13.9022 1.03855 14.0974 1.23989C14.2926 1.44123 14.4454 1.67973 14.5467 1.94123C14.648 2.20274 14.6957 2.48192 14.6871 2.76222V9.87222C14.6871 9.98414 14.7315 10.0915 14.8107 10.1706C14.8898 10.2498 14.9971 10.2942 15.1091 10.2942H22.2261C22.77 10.311 23.2859 10.5389 23.6647 10.9296C24.0435 11.3203 24.2553 11.8431 24.2553 12.3872C24.2553 12.9314 24.0435 13.4542 23.6647 13.8448C23.2859 14.2355 22.77 14.4634 22.2261 14.4802H15.1131C15.0011 14.4802 14.8938 14.5247 14.8147 14.6038C14.7355 14.683 14.6911 14.7903 14.6911 14.9022V22.0222C14.676 22.5682 14.4494 23.0871 14.0591 23.4692C13.6688 23.8513 13.1443 24.0668 12.5981 24.0702Z"
                                    fill="#333333"></path>
                            </svg></button></div>
                    <div class="mt-8 flex-grow" >
                        <div class="flex flex-col text-white gap-4 pl-6 font-inter mb-4 text-[18px]"
                            ><a
                                class="text-lg items-center gap-1.5 p-2 font-medium transition-colors duration-100 block min-h-[48px] min-w-[48px] active:bg-white/10 relative z-50 text-[#40bfe2]"
                                href="/perpetuals"
                                style="-webkit-tap-highlight-color: rgba(38, 250, 176, 0.3); touch-action: manipulation; user-select: none;">PERPETUALS</a><a
                                class="text-lg items-center gap-1.5 p-2 font-medium transition-colors duration-100 block min-h-[48px] min-w-[48px] active:bg-white/10 relative z-50 text-white hover:text-[#40bfe2]"
                                href="/liquidity"
                                style="-webkit-tap-highlight-color: rgba(38, 250, 176, 0.3); touch-action: manipulation; user-select: none;">LIQUIDITY</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <ModalConnectWallet />
</template>
<script setup>
import logo from "~/assets/images/Group1.png";
import { useCardano } from '~/composables/useCardano';
import ModalConnectWallet from '../ui/ModalConnectWallet.vue';
// 1. Import composable chung
import { useModalState } from '~/composables/useModalState';

// 2. Lấy state với key 'walletModal'
const isWalletModalOpen = useModalState('walletModal');
const isWalletModalOpens = useModalState('walletModals');

const openWalletModal = () => {
  isWalletModalOpen.value = true;
};
const openWalletModals = () => {
  isWalletModalOpens.value = true;
};
// Lấy state kết nối từ useCardano
const { walletAddress, isConnected } = useCardano(); // <-- 2. Lấy state

// 3. Tạo địa chỉ rút gọn (ví dụ: addr1...q59p)
const truncatedAddress = computed(() => {
  if (!walletAddress.value) return '';
  return `${walletAddress.value.substring(0, 8)}...${walletAddress.value.substring(walletAddress.value.length - 4)}`;
});
</script>