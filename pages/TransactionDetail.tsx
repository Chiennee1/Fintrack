
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';

const TransactionDetail: React.FC = () => {
  const navigate = useNavigate();

  const handleDelete = () => {
    // In a real app, this would delete the transaction
    if (window.confirm("Bạn có chắc chắn muốn xóa giao dịch này?")) {
      navigate('/transactions');
    }
  };

  const handleEdit = () => {
    // Navigate to edit page (using add-transaction for demo)
    navigate('/add-transaction');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display pb-24">
      <header className="sticky top-0 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
        <div className="flex items-center p-4 justify-between">
          <button 
            onClick={() => navigate('/transactions')} 
            className="flex size-10 items-center justify-center -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            <Icon name="arrow_back_ios_new" className="text-slate-800 dark:text-white" />
          </button>
          <h1 className="text-slate-900 dark:text-white text-lg font-bold">Chi tiết Giao dịch</h1>
          <div className="flex gap-2">
            <button 
              onClick={handleDelete}
              className="flex size-10 items-center justify-center rounded-full hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
              title="Xóa"
            >
                <Icon name="delete" className="text-danger" />
            </button>
             <button 
              onClick={handleEdit}
              className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              title="Chỉnh sửa"
            >
                <Icon name="edit" className="text-slate-800 dark:text-white" />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 space-y-4">
        {/* Main Info */}
        <div className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-slate-200 dark:bg-white/5 p-8 border border-slate-300 dark:border-white/10">
            <div className="flex size-16 items-center justify-center rounded-full bg-primary/20 text-slate-800 dark:text-white mb-2">
                <Icon name="restaurant" className="text-4xl" />
            </div>
            <p className="text-slate-900 dark:text-white text-xl font-bold">Ăn uống</p>
            <p className="text-danger text-4xl font-bold tracking-tight">-50.000đ</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">25 Tháng 5, 2024 - 08:30</p>
        </div>

        {/* Details List */}
        <div className="rounded-2xl bg-slate-100 dark:bg-white/5 overflow-hidden">
            <div className="flex items-start gap-4 p-4 border-b border-slate-200 dark:border-white/10">
                <Icon name="notes" className="text-slate-500 mt-1" />
                <div className="flex flex-col">
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase">Mô tả</p>
                    <p className="text-slate-900 dark:text-white text-base">Cà phê Highland với bạn bè</p>
                </div>
            </div>
            <div className="flex items-start gap-4 p-4">
                <Icon name="account_balance_wallet" className="text-slate-500 mt-1" />
                <div className="flex flex-col">
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase">Tài khoản</p>
                    <p className="text-slate-900 dark:text-white text-base">Tiền mặt</p>
                </div>
            </div>
        </div>

        {/* Location */}
        <div className="rounded-2xl bg-slate-100 dark:bg-white/5 overflow-hidden">
             <div className="flex items-start gap-4 p-4">
                <Icon name="location_on" className="text-slate-500 mt-1" />
                <div className="flex flex-col">
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase">Vị trí</p>
                    <p className="text-slate-900 dark:text-white text-base">Highlands Coffee, Vincom Center</p>
                </div>
            </div>
            <div className="h-40 bg-slate-300 dark:bg-slate-700 w-full relative">
                {/* Placeholder for map */}
                 <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                    Map Preview
                 </div>
                 <img src="https://picsum.photos/600/300" className="w-full h-full object-cover opacity-60" alt="map" />
            </div>
        </div>

        {/* Receipt Image */}
        <div className="rounded-2xl bg-slate-100 dark:bg-white/5 overflow-hidden">
             <div className="flex items-start gap-4 p-4">
                <Icon name="image" className="text-slate-500 mt-1" />
                <div className="flex flex-col">
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase">Ảnh đính kèm</p>
                </div>
            </div>
            <div className="px-4 pb-4">
                <img src="https://picsum.photos/400/300" alt="Receipt" className="w-full h-48 object-cover rounded-xl" />
            </div>
        </div>
      </main>
    </div>
  );
};

export default TransactionDetail;
