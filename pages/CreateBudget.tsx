
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';

const CreateBudget: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display">
      <header className="sticky top-0 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
        <div className="flex items-center p-4 justify-between">
          <button onClick={() => navigate('/budget')}>
             <Icon name="close" className="text-slate-800 dark:text-white text-2xl" />
          </button>
          <h1 className="text-slate-900 dark:text-white text-lg font-bold">Tạo Ngân sách mới</h1>
          <div className="w-6"></div>
        </div>
      </header>

      <main className="flex-1 p-4 flex flex-col gap-6">
        <div className="space-y-4">
             <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Tên ngân sách</label>
                <input 
                    type="text" 
                    placeholder="Ví dụ: Ngân sách ăn uống" 
                    className="w-full rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:outline-none"
                />
             </div>
             <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Số tiền</label>
                <input 
                    type="text" 
                    placeholder="5.000.000₫" 
                    className="w-full rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:outline-none"
                />
             </div>
        </div>

        <div className="rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 overflow-hidden">
             <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-white/10 cursor-pointer">
                <div className="flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                        <Icon name="category" />
                    </div>
                    <p className="text-slate-900 dark:text-white">Danh mục</p>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                    <span>Chọn</span>
                    <Icon name="arrow_forward_ios" className="text-sm" />
                </div>
             </div>
             <div className="flex items-center justify-between p-4 cursor-pointer">
                <div className="flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                        <Icon name="autorenew" />
                    </div>
                    <p className="text-slate-900 dark:text-white">Chu kỳ</p>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                    <span>Hàng tháng</span>
                    <Icon name="arrow_forward_ios" className="text-sm" />
                </div>
             </div>
        </div>

         <div className="rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 overflow-hidden p-4">
             <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                        <Icon name="notifications" />
                    </div>
                    <p className="text-slate-900 dark:text-white">Thông báo</p>
                </div>
                <div className="relative inline-block w-12 h-7 cursor-pointer">
                     <input type="checkbox" className="peer sr-only" defaultChecked />
                     <div className="w-full h-full bg-slate-200 dark:bg-white/20 rounded-full peer-checked:bg-primary transition-colors"></div>
                     <div className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
                </div>
             </div>
             
             <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-900 dark:text-white">Ngưỡng thông báo</span>
                <span className="text-primary font-bold">90%</span>
             </div>
             <input type="range" className="w-full h-2 bg-slate-200 dark:bg-white/20 rounded-lg appearance-none cursor-pointer accent-primary" min="1" max="100" defaultValue="90" />
         </div>

         <button className="mt-auto w-full bg-primary text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-primary/30">
            Lưu ngân sách
         </button>
      </main>
    </div>
  );
};

export default CreateBudget;
