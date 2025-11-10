// composables/useModalState.js

/**
 * Tạo một state (trạng thái) chung cho modal.
 * @param {string} key - Tên định danh duy nhất cho state này (ví dụ: 'wallet', 'chart')
 * @param {boolean} [initialValue=false] - Giá trị khởi tạo (mặc định là 'false')
 */
export const useModalState = (key, initialValue = false) => {
  // useState sẽ tạo ra một state riêng biệt cho mỗi 'key'
  // Ví dụ: key 'walletModal' -> state riêng
  //         key 'chartModal' -> state riêng
  return useState(key, () => initialValue);
};