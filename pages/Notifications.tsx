
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';
import { NOTIFICATIONS } from '../constants';

const Notifications: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display">
      <header className="sticky top-0 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
        <div className="flex items-center p-4 justify-between">
          <button onClick={() => navigate('/')}>
             <Icon name="arrow_back_ios_new" className="text-slate-800 dark:text-white" />
          </button>
          <h1 className="text-slate-900 dark:text-white text-lg font-bold">Thông báo</h1>
          <button onClick={() => navigate('/notification-settings')}>
             <Icon name="settings" className="text-slate-800 dark:text-white" />
          </button>
        </div>
      </header>

      {/* Filter Chips */}
      <div className="flex gap-2 px-4 pb-4 overflow-x-auto">
        {['Tất cả', 'Ngân sách', 'Giao dịch'].map((f, i) => (
            <button key={f} className={`px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap ${i === 0 ? 'bg-primary text-background-dark' : 'bg-primary/20 text-primary'}`}>
                {f}
            </button>
        ))}
        <div className="flex-1 text-right">
             <button className="text-primary font-bold text-sm">Đã đọc</button>
        </div>
      </div>

      <main className="flex-1">
        <h3 className="px-4 py-2 font-bold text-lg text-slate-900 dark:text-white">Hôm nay</h3>
        <div className="flex flex-col">
            {NOTIFICATIONS.filter(n => !n.isRead).map(n => (
                <div key={n.id} className="flex gap-4 p-4 bg-primary/10 dark:bg-primary/5 border-l-4 border-primary mb-1">
                    <div className={`size-12 rounded-full flex items-center justify-center text-white shrink-0 ${n.type === 'warning' ? 'bg-yellow-500' : 'bg-red-500'}`}>
                        <Icon name={n.type === 'warning' ? 'warning' : 'credit_card_off'} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="font-bold text-slate-900 dark:text-white truncate">{n.title}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">{n.message}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                        <span className="text-xs text-slate-500">{n.time}</span>
                        <div className="size-2 rounded-full bg-primary"></div>
                    </div>
                </div>
            ))}
        </div>

        <h3 className="px-4 py-2 font-bold text-lg text-slate-900 dark:text-white mt-4">Tuần này</h3>
        <div className="flex flex-col">
             {NOTIFICATIONS.filter(n => n.isRead).map(n => (
                <div key={n.id} className="flex gap-4 p-4 bg-transparent mb-1">
                    <div className={`size-12 rounded-full flex items-center justify-center text-white shrink-0 ${n.type === 'success' ? 'bg-green-500' : n.type === 'info' ? 'bg-blue-500' : 'bg-purple-500'}`}>
                        <Icon name={n.type === 'success' ? 'savings' : n.type === 'info' ? 'receipt_long' : 'tips_and_updates'} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="font-medium text-slate-900 dark:text-white truncate">{n.title}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">{n.message}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                        <span className="text-xs text-slate-500">{n.time}</span>
                    </div>
                </div>
            ))}
        </div>
      </main>
    </div>
  );
};

export default Notifications;
