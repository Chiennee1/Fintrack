import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display">
      <header className="sticky top-0 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
        <div className="flex items-center p-4 justify-between">
          <button onClick={() => navigate(-1)}>
             <Icon name="arrow_back_ios_new" className="text-slate-800 dark:text-white" />
          </button>
          <h1 className="text-slate-900 dark:text-white text-lg font-bold">Giới thiệu</h1>
          <div className="w-6"></div>
        </div>
      </header>

      <main className="flex-1 p-4 pb-10 flex flex-col items-center">
        <div className="bg-primary p-6 rounded-3xl mb-6 shadow-xl shadow-primary/20 mt-8">
            <Icon name="account_balance_wallet" className="text-6xl text-[#102216]" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">FinTrack</h1>
        <p className="text-slate-500 mb-8">Phiên bản 1.0.0</p>

        <div className="bg-white dark:bg-white/5 p-6 rounded-2xl text-center mb-8">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                FinTrack là người bạn đồng hành đáng tin cậy giúp bạn quản lý thu chi, lập ngân sách và đạt được các mục tiêu tài chính một cách thông minh.
            </p>
        </div>

        <div className="w-full bg-white dark:bg-white/5 rounded-2xl overflow-hidden">
             <FeatureItem icon="request_quote" color="bg-green-500" title="Ghi chép giao dịch" desc="Nhanh chóng, dễ dàng." />
             <FeatureItem icon="bar_chart" color="bg-blue-500" title="Báo cáo trực quan" desc="Biểu đồ sinh động." />
             <FeatureItem icon="pie_chart" color="bg-purple-500" title="Lập ngân sách" desc="Kiểm soát chi tiêu." last />
        </div>

        <p className="mt-auto text-xs text-slate-400 text-center pt-8">
            © 2024 FinTrack Team. All Rights Reserved.
        </p>
      </main>
    </div>
  );
};

const FeatureItem: React.FC<{ icon: string; color: string; title: string; desc: string; last?: boolean }> = ({ icon, color, title, desc, last }) => (
    <div className={`flex gap-4 p-4 ${!last ? 'border-b border-slate-100 dark:border-white/5' : ''}`}>
        <div className={`size-10 rounded-lg ${color} flex items-center justify-center text-white shrink-0`}>
            <Icon name={icon} />
        </div>
        <div>
            <p className="font-bold text-slate-900 dark:text-white">{title}</p>
            <p className="text-sm text-slate-500">{desc}</p>
        </div>
    </div>
);

export default About;