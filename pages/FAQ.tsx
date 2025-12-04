import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';

const FAQ: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display">
      <header className="sticky top-0 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
        <div className="flex items-center p-4 justify-between">
          <button onClick={() => navigate(-1)}>
             <Icon name="arrow_back_ios_new" className="text-slate-800 dark:text-white" />
          </button>
          <h1 className="text-slate-900 dark:text-white text-lg font-bold">Hỗ trợ & FAQ</h1>
          <div className="w-6"></div>
        </div>
      </header>

      <main className="flex-1 p-4 space-y-6">
        <div className="relative">
            <Icon name="search" className="absolute left-3 top-3 text-slate-400" />
            <input 
                type="text" 
                placeholder="Tìm kiếm câu hỏi..." 
                className="w-full pl-10 py-3 rounded-full bg-white dark:bg-white/5 border-none focus:ring-2 focus:ring-primary text-slate-900 dark:text-white placeholder:text-slate-400"
            />
        </div>

        <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase mb-3 pl-2">Tài khoản & Bảo mật</h3>
            <div className="bg-white dark:bg-white/5 rounded-2xl overflow-hidden">
                <FAQItem question="Làm thế nào để thay đổi mật khẩu?" answer="Vào mục Cài đặt > Bảo mật để đổi." />
                <FAQItem question="Tôi quên mật khẩu, phải làm sao?" answer="Nhấn 'Quên mật khẩu' ở màn hình đăng nhập." last />
            </div>
        </div>

         <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase mb-3 pl-2">Giao dịch</h3>
            <div className="bg-white dark:bg-white/5 rounded-2xl overflow-hidden">
                <FAQItem question="Làm sao để thêm giao dịch?" answer="Nhấn nút (+) ở màn hình chính." />
                <FAQItem question="Xuất báo cáo được không?" answer="Có, trong mục Báo cáo." last />
            </div>
        </div>
      </main>
    </div>
  );
};

const FAQItem: React.FC<{ question: string; answer: string; last?: boolean }> = ({ question, answer, last }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={`${!last ? 'border-b border-slate-100 dark:border-white/5' : ''}`}>
            <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 text-left">
                <span className="font-medium text-slate-900 dark:text-white">{question}</span>
                <Icon name="chevron_right" className={`text-slate-400 transition-transform ${open ? 'rotate-90' : ''}`} />
            </button>
            {open && (
                <div className="px-4 pb-4 text-sm text-slate-600 dark:text-slate-300">
                    {answer}
                </div>
            )}
        </div>
    );
}

export default FAQ;