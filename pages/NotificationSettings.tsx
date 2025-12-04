
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';

const NotificationSettings: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display">
      <header className="sticky top-0 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
        <div className="flex items-center p-4 justify-between">
          <button onClick={() => navigate('/notifications')}>
             <Icon name="arrow_back_ios_new" className="text-slate-800 dark:text-white" />
          </button>
          <h1 className="text-slate-900 dark:text-white text-lg font-bold">Cài đặt Thông báo</h1>
          <div className="w-6"></div>
        </div>
      </header>

      <main className="p-4 space-y-6">
        <div className="bg-white dark:bg-white/5 p-4 rounded-xl flex items-center justify-between">
            <div>
                <p className="font-bold text-slate-900 dark:text-white">Thông báo đẩy</p>
                <p className="text-sm text-slate-500">Bật để nhận thông báo.</p>
            </div>
            <Toggle checked />
        </div>

        <div className="bg-white dark:bg-white/5 rounded-xl overflow-hidden">
            <div className="p-4 flex items-center justify-between border-b border-slate-100 dark:border-white/5">
                <div>
                    <p className="font-bold text-slate-900 dark:text-white">Nhắc nhở ngân sách</p>
                    <p className="text-sm text-slate-500">Cảnh báo giới hạn.</p>
                </div>
                <Toggle checked />
            </div>
             <div className="p-4 flex items-center justify-between border-b border-slate-100 dark:border-white/5">
                <div>
                    <p className="font-bold text-slate-900 dark:text-white">Giao dịch bất thường</p>
                    <p className="text-sm text-slate-500">Hoạt động đáng ngờ.</p>
                </div>
                <Toggle checked />
            </div>
             <div className="p-4 flex items-center justify-between">
                <div>
                    <p className="font-bold text-slate-900 dark:text-white">Cập nhật ứng dụng</p>
                    <p className="text-sm text-slate-500">Tính năng mới.</p>
                </div>
                <Toggle checked={false} />
            </div>
        </div>

        <div className="bg-white dark:bg-white/5 p-4 rounded-xl">
             <p className="font-bold text-slate-900 dark:text-white mb-4">Mức độ ưu tiên</p>
             <div className="space-y-4">
                <div className="flex gap-3">
                    <input type="radio" name="prio" defaultChecked className="mt-1 text-primary focus:ring-primary" />
                    <div>
                        <p className="font-medium text-slate-900 dark:text-white text-sm">Quan trọng (Khẩn cấp)</p>
                        <p className="text-xs text-slate-500">Luôn phát âm thanh.</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <input type="radio" name="prio" className="mt-1 text-primary focus:ring-primary" />
                    <div>
                        <p className="font-medium text-slate-900 dark:text-white text-sm">Mặc định</p>
                        <p className="text-xs text-slate-500">Phát âm thanh nếu được phép.</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <input type="radio" name="prio" className="mt-1 text-primary focus:ring-primary" />
                    <div>
                        <p className="font-medium text-slate-900 dark:text-white text-sm">Không ưu tiên (Im lặng)</p>
                        <p className="text-xs text-slate-500">Không phát âm thanh hoặc rung.</p>
                    </div>
                </div>
             </div>
        </div>
      </main>
    </div>
  );
};

const Toggle: React.FC<{ checked?: boolean }> = ({ checked }) => (
    <div className={`w-12 h-7 rounded-full relative transition-colors ${checked ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'}`}>
        <div className={`absolute top-1 left-1 bg-white h-5 w-5 rounded-full transition-transform ${checked ? 'translate-x-5' : ''}`}></div>
    </div>
);

export default NotificationSettings;
