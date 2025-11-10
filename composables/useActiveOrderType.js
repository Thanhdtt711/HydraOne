/**
 * Tạo một state (trạng thái) chung để lưu loại order (Market/Limit)
 * Giá trị mặc định là 'market'.
 */
export const useActiveOrderType = () => {
  return useState('activeOrderType', () => 'market');
};