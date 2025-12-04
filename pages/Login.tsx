
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-background-light dark:bg-background-dark font-display overflow-hidden text-slate-900 dark:text-white">
      <div className="flex flex-col justify-center w-full max-w-md mx-auto p-6 flex-grow py-12">
        
        {/* App Logo */}
        <div className="flex flex-col items-center mb-10">
            <div className="bg-primary shadow-2xl shadow-primary/30 p-5 rounded-[2rem] mb-4">
                <Icon name="account_balance_wallet" className="text-background-dark text-6xl" />
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight">FinTrack</h1>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center">Đăng nhập</h2>

        {/* Form */}
        <div className="space-y-5">
            <div className="space-y-1.5">
                <label className="block text-sm font-medium ml-1">Email hoặc Số điện thoại</label>
                <div className="relative">
                    <Icon name="person" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
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

            <div className="flex justify-end pt-1">
                <button className="text-primary text-sm font-bold hover:underline">Quên mật khẩu?</button>
            </div>
        </div>

        <div className="mt-8">
            <button 
                onClick={() => navigate('/')}
                className="w-full h-14 bg-primary text-white dark:text-background-dark text-lg font-bold rounded-2xl shadow-lg shadow-primary/25 active:scale-95 transition-transform"
            >
                Đăng nhập
            </button>
        </div>

        <div className="flex items-center gap-4 py-8">
            <div className="h-px bg-slate-200 dark:bg-white/10 flex-1"></div>
            <span className="text-slate-500 text-xs font-bold uppercase tracking-wide">Hoặc tiếp tục với</span>
            <div className="h-px bg-slate-200 dark:bg-white/10 flex-1"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
            <button className="h-14 flex items-center justify-center bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/10 transition-colors">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlvDcyIwFUx-b8wGQUQ5wMhBTeK6qsfnTfOAUP2YX_Lx1B954JZN1vKsosHm1Ri40Rxkgkb3hG3b5m0-JjCSM0fr23S_C1-MJs9O4Ivcet2n8020JR1FGiZ8jsoc6uLumbN2w1IcLVkqrhClrLp6RXNI3S5Y354yZGCFc4ORMCKyq0bXR9VD-VNgyvu-L1Djgj00VUehVCWC-ohnz3eTyY11jde2Q7bQLPTS7cTSr8TU6Nt6OGt7ZNgJnDEQWB9p9UHbiBxWbYiQ" alt="Google" className="w-6 h-6" />
            </button>
            <button className="h-14 flex items-center justify-center bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/10 transition-colors">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQSxoKnNFOmwFqNgT5M1aP0vz0mBN_d1Jds0ySb1yGnAKiVMzqNFsMHd1o8-dEtWzKbGAirT6VYnpjdRgO8QkS63tI0eGBYEzMCVCLUqy8xlgQL0j1StK55Lpygw3jLeigtijEWSOu0ctKKYGq9rhVh0cSW8gZKOWadbkztIllG7hCVgMpCd4HKnrfm6zMjVuV8_WudbrmtDDOK6QL_6ipNXV0bE-hbvVkMA5w9XNG_SWV4ySsDggjElNYFBZymxeq9OsY0FeWjQ" alt="Facebook" className="w-6 h-6" />
            </button>
        </div>

        <div className="text-center mt-auto pt-8">
            <p className="text-slate-600 dark:text-slate-400">
                Chưa có tài khoản?{" "}
                <button onClick={() => navigate('/register')} className="text-primary font-bold hover:underline">Đăng ký ngay</button>
            </p>
        </div>

      </div>
    </div>
  );
};

export default Login;
