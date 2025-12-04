import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';

const AddTransaction: React.FC = () => {
  const navigate = useNavigate();
  const [type, setType] = useState<'expense' | 'income'>('expense');

  return (
    <div className="flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display">
      <header className="sticky top-0 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
        <div className="flex items-center p-4 justify-between">
          <button onClick={() => navigate(-1)}>
             <Icon name="close" className="text-slate-800 dark:text-white text-2xl" />
          </button>
          <h1 className="text-slate-900 dark:text-white text-lg font-bold">Tạo Giao dịch</h1>
          <button className="text-primary text-base font-bold">Lưu</button>
        </div>
      </header>

      <main className="flex-1 p-4 pb-10">
        {/* Toggle Type */}
        <div className="flex h-12 rounded-xl bg-slate-200 dark:bg-white/10 p-1 mb-8">
            <button 
                onClick={() => setType('expense')}
                className={`flex-1 rounded-lg text-sm font-bold transition-all ${type === 'expense' ? 'bg-danger text-white shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}
            >
                Chi phí
            </button>
             <button 
                onClick={() => setType('income')}
                className={`flex-1 rounded-lg text-sm font-bold transition-all ${type === 'income' ? 'bg-income text-white shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}
            >
                Thu nhập
            </button>
        </div>

        <div className="flex flex-col gap-8">
            {/* Amount */}
            <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                    <Icon name="paid" className="text-3xl" />
                </div>
                <div className="flex-1 border-b border-slate-200 dark:border-white/10 pb-2">
                     <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Số tiền</p>
                     <input 
                        type="text" 
                        placeholder="0đ" 
                        className={`w-full bg-transparent text-3xl font-bold focus:outline-none placeholder:text-slate-400 ${type === 'expense' ? 'text-danger' : 'text-income'}`}
                    />
                </div>
            </div>

            {/* Category */}
            <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                    <Icon name="category" className="text-3xl" />
                </div>
                <div className="flex flex-1 items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4 cursor-pointer">
                    <div className="flex flex-col">
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Danh mục</p>
                        <p className="text-base font-medium text-slate-900 dark:text-white">Chọn danh mục</p>
                    </div>
                    <Icon name="chevron_right" className="text-slate-400" />
                </div>
            </div>

             {/* Date */}
            <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                    <Icon name="edit_calendar" className="text-3xl" />
                </div>
                <div className="flex flex-1 items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4 cursor-pointer">
                    <div className="flex flex-col">
                         <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Ngày</p>
                        <p className="text-base font-medium text-slate-900 dark:text-white">Hôm nay</p>
                    </div>
                    <Icon name="chevron_right" className="text-slate-400" />
                </div>
            </div>

             {/* Note */}
            <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                    <Icon name="description" className="text-3xl" />
                </div>
                 <div className="flex-1 border-b border-slate-200 dark:border-white/10 pb-2">
                     <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Mô tả</p>
                     <input 
                        type="text" 
                        placeholder="Thêm mô tả" 
                        className="w-full bg-transparent text-base font-medium text-slate-900 dark:text-white focus:outline-none placeholder:text-slate-500"
                    />
                </div>
            </div>

             {/* Account */}
            <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                    <Icon name="account_balance_wallet" className="text-3xl" />
                </div>
                <div className="flex flex-1 items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4 cursor-pointer">
                    <div className="flex flex-col">
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Tài khoản</p>
                        <p className="text-base font-medium text-slate-900 dark:text-white">Tiền mặt</p>
                    </div>
                    <Icon name="chevron_right" className="text-slate-400" />
                </div>
            </div>

        </div>
      </main>
    </div>
  );
};

export default AddTransaction;