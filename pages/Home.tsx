import React from 'react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';
import Icon from '../components/Icon';
import { RECENT_TRANSACTIONS, HOME_CHART_DATA } from '../constants';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark pb-24 overflow-x-hidden font-display">
      {/* Header */}
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur z-20">
        <div className="flex gap-3 items-center">
          <div className="h-10 w-10 rounded-full bg-cover bg-center border-2 border-white/10" style={{ backgroundImage: 'url(https://picsum.photos/100)' }}></div>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Chào buổi sáng, Alex!</h2>
        </div>
        <button onClick={() => navigate('/notifications')} className="flex size-10 items-center justify-center rounded-full bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white">
          <Icon name="notifications" className="text-xl" />
        </button>
      </div>

      {/* Search */}
      <div className="px-4 py-2">
        <div className="relative flex items-center">
          <Icon name="search" className="absolute left-3 text-slate-500" />
          <input 
            className="w-full rounded-xl border-none bg-slate-100 dark:bg-[#1C2C21] py-3 pl-10 pr-4 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary" 
            placeholder="Tìm kiếm giao dịch..." 
            type="text" 
          />
        </div>
      </div>

      {/* Main Card */}
      <div className="px-4 py-4">
        <div className="flex flex-col gap-2 p-6 rounded-2xl bg-slate-100 dark:bg-[#1C2C21]">
          <p className="text-slate-600 dark:text-gray-400 text-sm font-medium">Số dư hiện tại</p>
          <p className="text-slate-900 dark:text-white text-3xl font-bold">15.800.000₫</p>
          <div className="flex gap-1 items-center mb-2">
            <span className="text-slate-500 dark:text-gray-400 text-sm">Tháng này</span>
            <span className="text-primary text-sm font-bold bg-primary/10 px-1 rounded">+5.2%</span>
          </div>
          
          <div className="h-[120px] w-full mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={HOME_CHART_DATA}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#34C759" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#34C759" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Tooltip contentStyle={{ backgroundColor: '#1C2C21', border: 'none', borderRadius: '8px', color: '#fff' }} />
                <Area type="monotone" dataKey="value" stroke="#34C759" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
           <div className="flex justify-between px-2 mt-[-10px]">
            {['T1', 'T2', 'T3', 'T4'].map((t) => (
                <span key={t} className="text-xs font-bold text-slate-400">{t}</span>
            ))}
           </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="flex gap-4 px-4 pb-4">
        <div className="flex-1 flex flex-col gap-2 rounded-2xl p-4 bg-slate-100 dark:bg-[#1C2C21]">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center size-8 rounded-full bg-primary/20">
              <Icon name="arrow_downward" className="text-primary text-lg" />
            </div>
            <p className="text-slate-600 dark:text-gray-400 text-sm font-medium">Tổng thu</p>
          </div>
          <p className="text-slate-900 dark:text-white text-xl font-bold truncate">25.0M ₫</p>
        </div>
        <div className="flex-1 flex flex-col gap-2 rounded-2xl p-4 bg-slate-100 dark:bg-[#1C2C21]">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center size-8 rounded-full bg-danger/20">
              <Icon name="arrow_upward" className="text-danger text-lg" />
            </div>
            <p className="text-slate-600 dark:text-gray-400 text-sm font-medium">Tổng chi</p>
          </div>
          <p className="text-slate-900 dark:text-white text-xl font-bold truncate">9.2M ₫</p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="flex items-center justify-between px-4 pb-2 pt-2">
        <h3 className="text-slate-900 dark:text-white text-lg font-bold">Giao dịch gần đây</h3>
        <button onClick={() => navigate('/transactions')} className="text-primary text-sm font-medium">Xem tất cả</button>
      </div>

      <div className="flex flex-col">
        {RECENT_TRANSACTIONS.map((tx) => (
          <div key={tx.id} onClick={() => navigate(`/transactions/${tx.id}`)} className="flex items-center gap-4 px-4 py-3 hover:bg-white/5 active:scale-95 transition-all cursor-pointer">
            <div className="flex items-center justify-center rounded-xl bg-slate-200 dark:bg-[#2A3C30] shrink-0 size-12">
              <Icon name={tx.categoryIcon} className="text-slate-900 dark:text-white text-2xl" />
            </div>
            <div className="flex flex-col justify-center flex-1">
              <p className="text-slate-900 dark:text-white text-base font-semibold line-clamp-1">{tx.category}</p>
              <p className="text-slate-500 dark:text-gray-400 text-xs">{tx.note}</p>
            </div>
            <p className={`text-base font-bold ${tx.type === 'income' ? 'text-primary' : 'text-danger'}`}>
              {tx.type === 'expense' ? '- ' : '+ '}
              {Math.abs(tx.amount).toLocaleString('vi-VN')}₫
            </p>
          </div>
        ))}
      </div>

      {/* Upcoming Bills (Static for Demo) */}
      <h3 className="text-slate-900 dark:text-white text-lg font-bold px-4 pb-2 pt-6">Chi tiêu sắp tới</h3>
      <div className="px-4 pb-4">
        <div className="flex flex-col gap-4 p-4 rounded-2xl bg-slate-100 dark:bg-[#1C2C21]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-xl bg-slate-200 dark:bg-[#2A3C30] shrink-0 size-10">
                <Icon name="wifi" className="text-slate-900 dark:text-white" />
              </div>
              <div className="flex flex-col">
                <p className="text-slate-900 dark:text-white text-sm font-semibold">Tiền Internet</p>
                <p className="text-slate-500 dark:text-gray-400 text-xs">Hạn: 3 ngày</p>
              </div>
            </div>
            <p className="text-slate-900 dark:text-white text-sm font-bold">- 250.000₫</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
               <div className="flex items-center justify-center rounded-xl bg-slate-200 dark:bg-[#2A3C30] shrink-0 size-10">
                <Icon name="movie" className="text-slate-900 dark:text-white" />
              </div>
              <div className="flex flex-col">
                <p className="text-slate-900 dark:text-white text-sm font-semibold">Netflix</p>
                <p className="text-slate-500 dark:text-gray-400 text-xs">Hạn: 5 ngày</p>
              </div>
            </div>
            <p className="text-slate-900 dark:text-white text-sm font-bold">- 180.000₫</p>
          </div>
        </div>
      </div>

      {/* FAB */}
      <div className="fixed bottom-24 right-4 z-40">
        <button 
          onClick={() => navigate('/add-transaction')}
          className="flex size-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/40 hover:scale-110 transition-transform"
        >
          <Icon name="add" className="text-3xl font-bold" />
        </button>
      </div>
    </div>
  );
};

export default Home;