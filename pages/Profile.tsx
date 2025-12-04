
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';

const Profile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display pb-10">
      <header className="sticky top-0 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
        <div className="flex items-center p-4 justify-between">
          <button onClick={() => navigate(-1)}>
             <Icon name="arrow_back_ios_new" className="text-slate-800 dark:text-white" />
          </button>
          <h1 className="text-slate-900 dark:text-white text-lg font-bold">Hồ sơ cá nhân</h1>
          <button className="text-primary font-bold text-sm">Lưu</button>
        </div>
      </header>

      <main className="flex-1 p-4">
        {/* Avatar Section */}
        <div className="flex flex-col items-center mb-8">
            <div className="relative">
                <div className="size-28 rounded-full bg-cover bg-center border-4 border-white dark:border-white/10 shadow-xl" style={{ backgroundImage: 'url(https://picsum.photos/200)' }}></div>
                <button className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full shadow-lg border-2 border-white dark:border-background-dark">
                    <Icon name="photo_camera" className="text-xl" />
                </button>
            </div>
            <h2 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">Nguyễn Văn A</h2>
            <p className="text-slate-500 text-sm">Thành viên từ 2024</p>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
            <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Họ và Tên</label>
                <div className="relative">
                    <Icon name="person" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                        type="text" 
                        defaultValue="Nguyễn Văn A"
                        className="w-full h-14 pl-12 pr-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-primary focus:outline-none text-slate-900 dark:text-white placeholder:text-slate-400 transition-colors"
                    />
                </div>
            </div>

            <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Email</label>
                <div className="relative">
                    <Icon name="mail" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                        type="email" 
                        defaultValue="nguyenvana@email.com"
                        className="w-full h-14 pl-12 pr-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-primary focus:outline-none text-slate-900 dark:text-white placeholder:text-slate-400 transition-colors"
                    />
                </div>
            </div>

            <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Số điện thoại</label>
                <div className="relative">
                    <Icon name="call" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                        type="tel" 
                        defaultValue="0912 345 678"
                        className="w-full h-14 pl-12 pr-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-primary focus:outline-none text-slate-900 dark:text-white placeholder:text-slate-400 transition-colors"
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Ngày sinh</label>
                    <div className="relative">
                        <input 
                            type="date" 
                            className="w-full h-14 px-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-primary focus:outline-none text-slate-900 dark:text-white transition-colors"
                        />
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Giới tính</label>
                    <div className="relative">
                        <select className="w-full h-14 px-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-primary focus:outline-none text-slate-900 dark:text-white transition-colors appearance-none">
                            <option>Nam</option>
                            <option>Nữ</option>
                            <option>Khác</option>
                        </select>
                        <Icon name="expand_more" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
