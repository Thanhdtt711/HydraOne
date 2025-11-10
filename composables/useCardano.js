import { ref, computed } from 'vue';

// -- CẤU HÌNH --
// Bạn cần API Key của Blockfrost.
// 1. Đăng ký tài khoản miễn phí tại: https://blockfrost.io
// 2. Tạo một project "Mainnet" và copy API Key
const BLOCKFROST_API_KEY = 'mainnetk5GMRKnLb4rpgqX2lcckMmR2J655pXNO'; // <-- THAY BẰNG KEY CỦA BẠN
const NETWORK = 'Mainnet';

// API để lấy giá ADA/USD (miễn phí, không cần key)
const COINGECKO_API = 'https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=usd';

// === CÁC STATE TOÀN CỤC ===
const lucid = ref(null);
const walletAddress = ref(null);
const walletName = ref(null);

// -- BỔ SUNG: State cho dữ liệu ví --
const isLoading = ref(false); // State để biết đang tải dữ liệu hay không
const totalADA = ref(0);      // Tổng số ADA (ví dụ: 1.10)
const balanceUSD = ref(0);    // Tổng giá trị USD (ví dụ: 0.60)
const tokens = ref([]);       // Mảng chứa các token (ví dụ: [{ name: 'ADA', ... }])
// ---------------------------------


export const useCardano = () => {
 
 // Hàm khởi tạo Lucid (nếu chưa có)
 const initLucid = async (walletApi) => {
  if (lucid.value) return; // Chỉ khởi tạo một lần

  try {
   const { Lucid, Blockfrost } = await import('lucid-cardano');
   const provider = new Blockfrost(
    'https://cardano-mainnet.blockfrost.io/api/v0',
    BLOCKFROST_API_KEY
   );
   
   const newLucid = await Lucid.new(provider, NETWORK);
   newLucid.selectWallet(walletApi);
   
   lucid.value = newLucid;
   walletAddress.value = await newLucid.wallet.address();
  } catch (e) {
   console.error("Lỗi khi khởi tạo Lucid:", e);
  }
 };

  // --- BỔ SUNG: Hàm lấy số dư và token ---
  const fetchWalletData = async () => {
    if (!lucid.value) return; // Cần Lucid để lấy dữ liệu
    isLoading.value = true;
    
    try {
      // 1. Lấy giá ADA -> USD từ Coingecko
      const priceData = await fetch(COINGECKO_API).then(res => res.json());
      const adaPriceUSD = priceData.cardano.usd;

      // 2. Lấy tất cả UTXOs (Unspent Transaction Outputs) trong ví
      const utxos = await lucid.value.wallet.getUtxos();
      
      let totalLovelace = 0n; // Dùng BigInt cho an toàn
      const otherAssets = {}; // Nơi chứa các token khác

      // 3. Duyệt qua tất cả UTXOs để tính toán số dư
      utxos.forEach(utxo => {
        // Cộng dồn Lovelace (1 ADA = 1,000,000 Lovelace)
        totalLovelace += utxo.assets.lovelace;

        // Xử lý các token khác (Native Tokens/NFTs)
        Object.keys(utxo.assets).forEach(assetId => {
          if (assetId !== 'lovelace') {
            const amount = utxo.assets[assetId];
            otherAssets[assetId] = (otherAssets[assetId] || 0n) + amount;
          }
        });
      });

      // 4. Gán giá trị vào các state 'ref'
      const adaAmount = Number(totalLovelace) / 1_000_000;
      
      totalADA.value = adaAmount;
      balanceUSD.value = adaAmount * adaPriceUSD;

      // 5. Định dạng danh sách token cho modal
      const formattedTokens = [];

      // Thêm ADA làm token đầu tiên
      formattedTokens.push({
        id: 'ada',
        name: 'ADA',
        amount: adaAmount.toFixed(6), // Hiển thị 6 chữ số thập phân
        valueADA: adaAmount.toFixed(2), // Làm tròn 2 chữ số
        valueUSD: balanceUSD.value.toFixed(2), // Làm tròn 2 chữ số
        icon: 'IconsCardano' // Tên component icon (như trong modal)
      });
      
      // (Nâng cao) Thêm các token khác
      // TODO: Bạn sẽ cần một logic phức tạp hơn để lấy 'name', 'icon'
      // từ 'assetId' (ví dụ: 'policyId' + 'assetName')
      // Tạm thời, chúng ta chỉ hiển thị ADA như modal yêu cầu
      /*
      Object.keys(otherAssets).forEach(assetId => {
         formattedTokens.push({
           id: assetId,
           name: assetId.slice(56), // Tạm lấy tên asset (hex)
           amount: Number(otherAssets[assetId]),
           valueADA: 0, // Cần logic định giá
           valueUSD: 0, // Cần logic định giá
           icon: 'IconsDefaultToken' 
         });
      });
      */
      
      tokens.value = formattedTokens;

    } catch (e) {
      console.error("Lỗi khi lấy dữ liệu ví (Blockfrost/Coingecko):", e);
      // Reset nếu có lỗi
      totalADA.value = 0;
      balanceUSD.value = 0;
      tokens.value = [];
    } finally {
      isLoading.value = false;
    }
  };
  // -------------------------------------

 // Hàm kết nối ví
 const connectWallet = async (wallet) => {
  walletName.value = wallet;
  try {
   if (window.cardano && (await window.cardano[wallet].isEnabled())) {
    const walletApi = await window.cardano[wallet].enable();
    await initLucid(walletApi);
   } else {
    const walletApi = await window.cardano[wallet].enable();
    await initLucid(walletApi);
   }

      // -- BỔ SUNG: Tự động lấy số dư sau khi kết nối --
      if (lucid.value) {
        await fetchWalletData();
      }
      // -----------------------------------------------

   return true;
  } catch (e) {
   console.error("Lỗi kết nối ví:", e);
   walletName.value = null;
   return false;
  }
 };

 // Hàm ngắt kết nối
 const disconnectWallet = () => {
  lucid.value = null;
  walletAddress.value = null;
  walletName.value = null;

    // -- BỔ SUNG: Reset số dư khi ngắt kết nối --
    isLoading.value = false;
    totalADA.value = 0;
    balanceUSD.value = 0;
    tokens.value = [];
    // ----------------------------------------
 };

 // Trả về các state và hàm để component khác sử dụng
 return {
  lucid,
  walletAddress, // (dùng để hiển thị địa chỉ)
  walletName,
  isConnected: computed(() => !!walletAddress.value),
  connectWallet,
  disconnectWallet,

    // -- BỔ SUNG: Trả về các state và hàm mới --
    isLoading,
    totalADA,
    balanceUSD,
    tokens,
    fetchWalletData // Trả về hàm này để có thể refresh
    // ---------------------------------------
 };
};