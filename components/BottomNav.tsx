import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from './Icon';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Trang chủ', icon: 'home', path: '/' },
    { name: 'Giao dịch', icon: 'sync_alt', path: '/transactions' },
    { name: 'Báo cáo', icon: 'bar_chart', path: '/report' },
    { name: 'Ngân sách', icon: 'account_balance_wallet', path: '/budget' },
    { name: 'Cài đặt', icon: 'settings', path: '/settings' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-[80px] border-t border-slate-200/20 bg-background-light/95 backdrop-blur-md dark:bg-background-dark/95 dark:border-white/10">
      <div className="flex h-full items-center justify-around pb-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center gap-1 w-1/5 ${
                isActive ? 'text-primary' : 'text-slate-500 dark:text-gray-400'
              }`}
            >
              <Icon name={item.icon} filled={isActive} className="text-2xl" />
              <span className={`text-[10px] ${isActive ? 'font-bold' : 'font-medium'}`}>
                {item.name}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;