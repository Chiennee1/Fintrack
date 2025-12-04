
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Mock validation state
  const passwordMismatch = false; 

  return (
    <div className="min-h-screen w-full flex flex-col bg-background-light dark:bg-background-dark font-display overflow-hidden text-slate-900 dark:text-white">
      {/* Header */}
      <div className="p-4 sticky top-0 z-10 bg-background-light dark:bg-background-dark">
        <button 
            onClick={() => navigate(-1)}
            className="size-10 flex items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
        >
            <Icon name="arrow_back" className="text-2xl" />
        </button>
      </div>

      <div className="flex-grow px-6 pb-8 flex flex-col max-w-md mx-auto w-full">
        {/* App Logo Small */}
        <div className="flex items-center gap-3 mb-6">
             <div className="bg-primary shadow-lg shadow-primary/20 p-2 rounded-xl">
                <Icon name="account_balance_wallet" className="text-background-dark text-2xl" />
            </div>
             <span className="text-xl font-extrabold tracking-tight">FinTrack</span>
        </div>

        <h1 className="text-3xl font-bold mb-8">Tạo tài khoản mới</h1>

        <div className="space-y-4">
             <div className="space-y-1.5">
                <label className="block text-sm font-medium ml-1">Họ và Tên</label>
                <div className="relative">
                    <Icon name="badge" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                    <input 
                        type="text" 
                        placeholder="Nhập họ và tên"
                        className="w-full h-14 pl-12 pr-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-primary focus:outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all font-medium"
                    />
                </div>
            </div>

            <div className="space-y-1.5">
                <label className="block text-sm font-medium ml-1">Email hoặc Số điện thoại</label>
                <div className="relative">
                    <Icon name="mail" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                    <input 
                        type="text" 
                        placeholder="Nhập email/SĐT"
                        className="w-full h-14 pl-12 pr-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-primary focus:outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all font-medium"
                    />
                </div>
            </div>

            <div className="space-y-1.5">
                <label className="block text-sm font-medium ml-1">Mật khẩu</label>
                <div className="relative">
                    <Icon name="lock" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                    <input 
                        type={showPassword ? "text" : "password"}
                        placeholder="Nhập mật khẩu"
                        className="w-full h-14 pl-12 pr-12 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-primary focus:outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all font-medium"
                    />
                     <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-0 top-0 h-14 w-14 flex items-center justify-center text-slate-400 hover:text-primary transition-colors"
                    >
                        <Icon name={showPassword ? "visibility" : "visibility_off"} />
                    </button>
                </div>
            </div>

            <div className="space-y-1.5">
                <label className="block text-sm font-medium ml-1">Xác nhận Mật khẩu</label>
                <div className="relative">
                    <Icon name="lock_reset" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                    <input 
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Nhập lại mật khẩu"
                        className={`w-full h-14 pl-12 pr-12 rounded-2xl bg-white dark:bg-white/5 border ${passwordMismatch ? 'border-red-500' : 'border-slate-200 dark:border-white/10'} focus:ring-2 focus:ring-primary focus:outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all font-medium`}
                    />
                    <button 
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-0 top-0 h-14 w-14 flex items-center justify-center text-slate-400 hover:text-primary transition-colors"
                    >
                        <Icon name={showConfirmPassword ? "visibility" : "visibility_off"} />
                    </button>
                </div>
                {passwordMismatch && (
                    <p className="text-red-500 text-sm mt-1 ml-1 flex items-center gap-1">
                        <Icon name="error" className="text-sm" /> Mật khẩu không khớp
                    </p>
                )}
            </div>
        </div>

        <div className="pt-6 pb-8 text-center">
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Bằng việc đăng ký, bạn đồng ý với <a href="#" className="font-bold text-primary hover:underline">Điều khoản sử dụng</a> và <a href="#" className="font-bold text-primary hover:underline">Chính sách bảo mật</a> của chúng tôi.
            </p>
        </div>

        <button className="w-full h-14 bg-primary text-white dark:text-background-dark text-lg font-bold rounded-2xl shadow-lg shadow-primary/25 active:scale-95 transition-transform">
            Đăng ký
        </button>

        <div className="text-center mt-8">
            <p className="text-slate-600 dark:text-slate-400">
                Đã có tài khoản?{" "}
                <button onClick={() => navigate('/login')} className="text-primary font-bold hover:underline">Đăng nhập</button>
            </p>
        </div>

      </div>
    </div>
  );
};

export default Register;
