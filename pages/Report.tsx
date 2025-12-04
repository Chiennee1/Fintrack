
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Icon from '../components/Icon';

const Report: React.FC = () => {
  const navigate = useNavigate();
  const [period, setPeriod] = useState('Tháng');

  const DATA = [
    { name: 'Ăn uống', value: 5000000, color: '#3B82F6' },
    { name: 'Di chuyển', value: 2500000, color: '#F97316' },
    { name: 'Mua sắm', value: 2000000, color: '#A855F7' },
    { name: 'Nhà ở', value: 3000000, color: '#14B8A6' },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display pb-24">
      <header className="sticky top-0 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
        <div className="flex items-center p-4 justify-between">
          <button onClick={() => navigate('/')}>
             <Icon name="arrow_back_ios_new" className="text-slate-800 dark:text-white" />
          </button>
          <h1 className="text-slate-900 dark:text-white text-lg font-bold">Báo cáo</h1>
          <button>
             <Icon name="more_vert" className="text-slate-800 dark:text-white" />
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* Period Selector */}
        <div className="px-4 py-2">
             <div className="flex bg-slate-200 dark:bg-white/10 p-1 rounded-lg">
                {['Tuần', 'Tháng', 'Năm'].map(p => (
                    <button 
                        key={p} 
                        onClick={() => setPeriod(p)}
                        className={`flex-1 py-1.5 text-sm font-bold rounded-md transition-all ${period === p ? 'bg-white dark:bg-white/20 shadow text-slate-900 dark:text-white' : 'text-slate-500'}`}
                    >
                        {p}
                    </button>
                ))}
             </div>
        </div>

        {/* Date Navigation */}
        <div className="flex items-center justify-between px-8 py-2">
            <button><Icon name="chevron_left" className="text-slate-500" /></button>
            <span className="font-bold text-slate-900 dark:text-white">Tháng 11, 2023</span>
            <button><Icon name="chevron_right" className="text-slate-500" /></button>
        </div>

        {/* Summary Grid */}
        <div className="grid grid-cols-2 gap-3 px-4 mb-6">
            <div className="bg-slate-100 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/5">
                <p className="text-xs text-slate-500 font-bold uppercase mb-1">Tổng thu</p>
                <p className="text-income font-bold text-lg">20.000.000đ</p>
            </div>
             <div className="bg-slate-100 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/5">
                <p className="text-xs text-slate-500 font-bold uppercase mb-1">Tổng chi</p>
                <p className="text-danger font-bold text-lg">12.500.000đ</p>
            </div>
             <div className="col-span-2 bg-slate-100 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/5 flex justify-between items-center">
                <p className="text-xs text-slate-500 font-bold uppercase">Số dư</p>
                <p className="text-slate-900 dark:text-white font-bold text-xl">7.500.000đ</p>
            </div>
        </div>

        {/* Pie Chart */}
        <h2 className="px-4 text-lg font-bold text-slate-900 dark:text-white mb-2">Cơ cấu chi tiêu</h2>
        <div className="h-64 w-full flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={DATA}
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {DATA.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            {/* Center Label Overlay */}
            <div className="absolute flex flex-col items-center pointer-events-none mt-6">
                <span className="text-xs text-slate-500">Tổng chi</span>
                <span className="text-slate-900 dark:text-white font-bold">12.5M</span>
            </div>
        </div>

        {/* Category List */}
        <h2 className="px-4 text-lg font-bold text-slate-900 dark:text-white mb-4 mt-2">Chi tiêu theo Danh mục</h2>
        <div className="flex flex-col gap-3 px-4">
            {DATA.map((item) => (
                <div key={item.name} className="flex items-center gap-4 bg-slate-50 dark:bg-white/5 p-3 rounded-xl">
                    <div className="size-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${item.color}20`, color: item.color }}>
                        <Icon name={item.name === 'Ăn uống' ? 'restaurant' : item.name === 'Di chuyển' ? 'commute' : item.name === 'Mua sắm' ? 'shopping_bag' : 'home'} />
                    </div>
                    <div className="flex-1">
                        <p className="font-bold text-slate-900 dark:text-white">{item.name}</p>
                        <p className="text-xs text-slate-500">{(item.value / 12500000 * 100).toFixed(0)}%</p>
                    </div>
                    <p className="font-bold text-slate-900 dark:text-white">{item.value.toLocaleString()}đ</p>
                </div>
            ))}
        </div>

      </main>
    </div>
  );
};

export default Report;
