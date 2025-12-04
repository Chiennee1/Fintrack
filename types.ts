export interface Transaction {
  id: string;
  category: string;
  categoryIcon: string;
  note: string;
  amount: number;
  date: string; // ISO date string or display string
  type: 'income' | 'expense';
  account: string;
}

export interface Budget {
  id: string;
  category: string;
  icon: string;
  spent: number;
  total: number;
  color: string;
  alert?: string;
}

export interface Asset {
  id: string;
  name: string;
  type: string;
  value: number;
  icon: string;
  category: 'asset' | 'debt';
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'warning' | 'info' | 'success' | 'alert';
  isRead: boolean;
}