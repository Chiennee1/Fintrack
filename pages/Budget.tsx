import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';
import { BUDGETS } from '../constants';

const Budget: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display pb-24">
      <header className="sticky top-0 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
        <div className="flex items-center p-4 justify-between">
          <Icon name="calendar_today" className="text-slate-800 dark:text-white text-2xl" />
          <h1 className="text-slate-900 dark:text-white text-lg font-bold">Ngân sách</h1>
          <button onClick={() => navigate('/create-budget')} className="flex size-10 items-center justify-center">
            <Icon name="add" className="text-slate-800 dark:text-white text-2xl" />
          </button>
        </div>
      </header>

      <main className="flex-1 p-4 space-y-4">
        {/* Total Budget Card */}
        <div className="flex flex-col rounded-2xl bg-gradient-to-br from-[#1b4d32] to-[#102216] p-6 shadow-lg border border-white/5">
            <p className="text-lg font-bold text-white mb-2">Tổng ngân sách tháng này</p>
            <p className="text-primary/90 text-sm mb-1">Đã chi 10.500.000đ / 15.000.000đ</p>
            <div className="h-2.5 w-full bg-white/20 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-primary" style={{ width: '70%' }}></div>
            </div>
            <p className="text-white font-medium text-sm">Còn lại 4.500.000đ</p>
        </div>

        <h2 className="text-base font-bold text-slate-600 dark:text-slate-300 px-1 mt-4">Danh sách ngân sách</h2>
        
        <div className="flex flex-col gap-3">
            {BUDGETS.map((budget) => {
                const percentage = Math.min(100, Math.round((budget.spent / budget.total) * 100));
                return (
                    <div key={budget.id} className="flex flex-col gap-3 rounded-2xl bg-white dark:bg-white/5 p-4 shadow-sm border border-slate-100 dark:border-white/5">
                        <div className="flex items-center gap-4">
                             <div className="flex size-10 items-center justify-center rounded-full bg-slate-100 dark:bg-white/10" style={{ color: budget.color }}>
                                <Icon name={budget.icon} />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-1">
                                    <p className="text-slate-900 dark:text-white font-bold">{budget.category}</p>
                                    <p className="text-slate-600 dark:text-slate-300 font-bold text-sm">{percentage}%</p>
                                </div>
                                <div className="h-2 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full rounded-full transition-all duration-500" style={{ width: `${percentage}%`, backgroundColor: budget.color }}></div>
                                </div>
                            </div>
                        </div>
                        
                        {budget.alert ? (
                             <div className="flex items-center gap-2 mt-1">
                                <Icon name="warning" className="text-yellow-500 text-sm" filled />
                                <p className="text-xs font-bold" style={{ color: budget.color }}>{budget.alert}</p>
                             </div>
                        ) : (
                             <p className="text-xs text-slate-500 dark:text-slate-400 pl-[56px]">Còn lại {(budget.total - budget.spent).toLocaleString()}đ</p>
                        )}
                    </div>
                );
            })}
        </div>

      </main>
    </div>
  );
};

export default Budget;