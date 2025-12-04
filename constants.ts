import { Transaction, Budget, Asset, Notification } from './types';

export const RECENT_TRANSACTIONS: Transaction[] = [
  { id: '1', category: 'Mua sắm tạp hóa', categoryIcon: 'shopping_cart', note: 'Hôm nay', amount: -550000, date: '2024-05-25', type: 'expense', account: 'Tiền mặt' },
  { id: '2', category: 'Tiền lương tháng 5', categoryIcon: 'receipt_long', note: 'Hôm qua', amount: 25000000, date: '2024-05-24', type: 'income', account: 'VCB' },
  { id: '3', category: 'Ăn tối cùng bạn bè', categoryIcon: 'restaurant', note: '28 Tháng 5, 2024', amount: -850000, date: '2024-05-28', type: 'expense', account: 'Tiền mặt' },
];

export const ALL_TRANSACTIONS: Transaction[] = [
  { id: '4', category: 'Ăn uống', categoryIcon: 'restaurant', note: 'Cà phê Highland', amount: -50000, date: '2024-05-25', type: 'expense', account: 'Tiền mặt' },
  { id: '5', category: 'Đi lại', categoryIcon: 'directions_car', note: 'Đổ xăng', amount: -500000, date: '2024-05-25', type: 'expense', account: 'Tiền mặt' },
  { id: '6', category: 'Lương', categoryIcon: 'credit_card', note: 'Lương tháng 5', amount: 30000000, date: '2024-05-21', type: 'income', account: 'VCB' },
  { id: '7', category: 'Mua sắm', categoryIcon: 'shopping_bag', note: 'Quần áo mới', amount: -1250000, date: '2024-05-20', type: 'expense', account: 'Tiền mặt' },
  { id: '8', category: 'Đầu tư', categoryIcon: 'account_balance', note: 'Chuyển vào tài khoản', amount: 5000000, date: '2024-05-20', type: 'income', account: 'VNDIRECT' },
];

export const BUDGETS: Budget[] = [
  { id: '1', category: 'Ăn uống', icon: 'restaurant', spent: 11250000, total: 15000000, color: '#34C759' }, // 75%
  { id: '2', category: 'Mua sắm', icon: 'shopping_bag', spent: 4900000, total: 5000000, color: '#EAB308', alert: 'Còn 100.000đ - Gần hết!' }, // 98%
  { id: '3', category: 'Hóa đơn', icon: 'receipt_long', spent: 2750000, total: 2500000, color: '#FF3B30', alert: 'Vượt 250.000đ' }, // 110%
  { id: '4', category: 'Di chuyển', icon: 'directions_car', spent: 450000, total: 1000000, color: '#3B82F6' }, // 45%
];

export const ASSETS: Asset[] = [
  { id: '1', name: 'Tài khoản tiết kiệm VCB', type: 'Tiền mặt', value: 500000000, icon: 'savings', category: 'asset' },
  { id: '2', name: 'Cổ phiếu VNM', type: 'Đầu tư', value: 350000000, icon: 'candlestick_chart', category: 'asset' },
  { id: '3', name: 'Căn hộ Vinhomes', type: 'Bất động sản', value: 650000000, icon: 'home', category: 'asset' },
  { id: '4', name: 'Vay thế chấp', type: 'Vay thế chấp', value: 200000000, icon: 'real_estate_agent', category: 'debt' },
  { id: '5', name: 'Thẻ tín dụng', type: 'Thẻ tín dụng', value: 50000000, icon: 'credit_card', category: 'debt' },
];

export const NOTIFICATIONS: Notification[] = [
  { id: '1', title: "Bạn sắp vượt ngân sách 'Ăn uống'", message: 'Bạn đã chi 95% ngân sách tháng này.', time: '5 phút', type: 'warning', isRead: false },
  { id: '2', title: "Giao dịch bất thường tại Shopee", message: 'Phát hiện giao dịch 1.250.000đ.', time: '1 giờ', type: 'alert', isRead: false },
  { id: '3', title: "Đạt 50% mục tiêu 'Mua xe mới'", message: 'Chúc mừng! Bạn đang đi đúng hướng.', time: 'Hôm qua', type: 'success', isRead: true },
  { id: '4', title: "Nhắc nhở: Tiền điện sắp đến hạn", message: 'Hóa đơn 850.000đ sẽ hết hạn trong 3 ngày.', time: '2 ngày', type: 'info', isRead: true },
];

export const HOME_CHART_DATA = [
  { name: 'T1', value: 4000 },
  { name: 'T2', value: 3000 },
  { name: 'T3', value: 2000 },
  { name: 'T4', value: 2780 },
  { name: 'T5', value: 1890 },
  { name: 'T6', value: 2390 },
  { name: 'T7', value: 3490 },
];
