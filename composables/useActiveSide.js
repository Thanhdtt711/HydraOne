/**
 * Tạo một state (trạng thái) chung để lưu lựa chọn Long/Short
 * Giá trị mặc định là 'long'.
 */
export const useActiveSide = () => {
  return useState('activeSide', () => 'long');
};
export const useActiveliquidity = () => {
  return useState('activeliquidity', () => 'deposit');
};