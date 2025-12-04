
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';

const Settings: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, you would clear authentication tokens/state here
    navigate('/onboarding');
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display pb-24">
      <header className="sticky top-0 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
        <div className="flex items-center p-4 justify-between">
          <button onClick={() => navigate(-1)}>
             <Icon name="arrow_back_ios_new" className="text-slate-800 dark:text-white" />
          </button>
          <h1 className="text-slate-900 dark:text-white text-lg font-bold">Cài đặt</h1>
          <div className="w-6"></div>
        </div>
      </header>

      <main className="flex-1 px-4 py-4 space-y-6">
        {/* Profile Card */}
        <div onClick={() => navigate('/profile')} className="flex items-center gap-4 bg-white dark:bg-white/5 p-4 rounded-2xl shadow-sm cursor-pointer hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
             <div className="h-16 w-16 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/200)' }}></div>
             <div className="flex-1">
                <p className="text-lg font-bold text-slate-900 dark:text-white">Nguyễn Văn A</p>
                <p className="text-slate-500 text-sm">nguyenvana@email.com</p>
             </div>
             <Icon name="chevron_right" className="text-slate-400" />
        </div>

        {/* Account Section */}
        <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase mb-3 pl-2">Tài khoản</h3>
            <div className="bg-white dark:bg-white/5 rounded-2xl overflow-hidden">
                <SettingItem icon="person" color="bg-green-500" label="Hồ sơ cá nhân" onClick={() => navigate('/profile')} />
                <SettingItem icon="lock" color="bg-blue-500" label="Bảo mật & Mật khẩu" />
                <SettingItem icon="account_balance_wallet" color="bg-purple-500" label="Quản lý tài khoản/ví" last />
            </div>
        </div>

        {/* General Section */}
        <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase mb-3 pl-2">Chung</h3>
            <div className="bg-white dark:bg-white/5 rounded-2xl overflow-hidden">
                <SettingItem icon="notifications" color="bg-red-500" label="Thông báo" onClick={() => navigate('/notifications')} />
                <SettingItem icon="contrast" color="bg-indigo-500" label="Giao diện & Ngôn ngữ" />
                <SettingItem icon="payments" color="bg-teal-500" label="Đơn vị tiền tệ" last />
            </div>
        </div>

         {/* Support Section */}
        <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase mb-3 pl-2">Hỗ trợ & Giới thiệu</h3>
            <div className="bg-white dark:bg-white/5 rounded-2xl overflow-hidden">
                <SettingItem icon="help" color="bg-orange-500" label="Trợ giúp & Phản hồi" onClick={() => navigate('/faq')} />
                <SettingItem icon="gavel" color="bg-gray-500" label="Điều khoản dịch vụ" />
                <SettingItem icon="info" color="bg-cyan-500" label="Giới thiệu ứng dụng" onClick={() => navigate('/about')} last />
            </div>
        </div>

        <button 
            onClick={handleLogout}
            className="w-full bg-white dark:bg-white/5 p-4 rounded-2xl text-danger font-bold hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
        >
            Đăng xuất
        </button>

      </main>
    </div>
  );
};

const SettingItem: React.FC<{ icon: string; color: string; label: string; last?: boolean; onClick?: () => void }> = ({ icon, color, label, last, onClick }) => (
    <div onClick={onClick} className={`flex items-center justify-between p-4 cursor-pointer hover:bg-black/5 dark:hover:bg-white/10 transition-colors ${!last ? 'border-b border-slate-100 dark:border-white/5' : ''}`}>
        <div className="flex items-center gap-4">
            <div className={`size-8 rounded-lg ${color} flex items-center justify-center text-white`}>
                <Icon name={icon} className="text-lg" />
            </div>
            <span className="text-slate-900 dark:text-white font-medium">{label}</span>
        </div>
        <Icon name="chevron_right" className="text-slate-400" />
    </div>
);

export default Settings;
