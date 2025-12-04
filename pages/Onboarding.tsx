
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      navigate('/login');
    }
  };

  const handleSkip = () => {
    navigate('/login');
  };

  return (
    <div className="relative flex h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display overflow-hidden text-slate-900 dark:text-white">
      {/* Header with Skip Button */}
      <header className="absolute top-0 left-0 right-0 z-20 p-4">
        <div className="flex justify-end">
          <button 
            onClick={handleSkip}
            className="cursor-pointer rounded-full h-10 px-4 bg-black/10 dark:bg-white/10 text-slate-900 dark:text-white text-sm font-bold backdrop-blur-sm hover:bg-black/20 dark:hover:bg-white/20 transition-colors"
          >
            Bỏ qua
          </button>
        </div>
      </header>

      {/* Step 1: Tracking */}
      {step === 0 && (
        <div className="flex-grow flex flex-col h-full relative animate-in fade-in duration-500">
           <div className="absolute top-0 left-0 w-full h-[60vh]">
            <div 
                className="h-full w-full bg-cover bg-center" 
                style={{ 
                    backgroundImage: 'linear-gradient(0deg, #102216 0%, rgba(16, 34, 22, 0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7Aj27oY_uKGiM3IBrqHvWIYlqMZbZWd-TfpmmDRxN3dsIC2BWZpTi7CuhnlD-dM9cA-69AiHl_wJzDMYBc8UkDxvgJi3ObLXqbTNONwJLMsdxdNJ8I-TQ8dPqy0IwmoDG4ZUv2RIaYHu0rTa4SJbd9buhaU13jpljRmxAn0A2dAYcwLwM5uWUdTWpXcs8occWVQ3QF6NyDS1bg-OdtcloeKJTtsktULum-TU3P7wZ076VdQFeKYnYWeHQxmKHSY6bfpcwK6QiQw")' 
                }}
            ></div>
          </div>
          
          <div className="relative z-10 flex flex-col justify-end flex-grow bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark dark:to-transparent pt-20 pb-8 mt-[45vh]">
            <h1 className="text-3xl font-bold leading-tight px-6 text-center pb-3">Theo dõi Chi tiêu Dễ dàng</h1>
            <p className="text-slate-600 dark:text-slate-300 text-base font-normal px-6 text-center">
                Ghi lại mọi khoản thu chi hàng ngày một cách nhanh chóng và không bỏ sót.
            </p>
          </div>
        </div>
      )}

      {/* Step 2: Budgeting */}
      {step === 1 && (
        <div className="flex-grow flex flex-col justify-center items-center px-4 animate-in fade-in slide-in-from-right-10 duration-500">
            <div className="w-full max-w-sm aspect-square mb-8 rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                <div 
                    className="w-full h-full bg-cover bg-center" 
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOtICcxFzShUYnrg1a7VIdnIYf8w_pHWMj74Go1F7Sl8ku0yldx1wF6cvyZ2J5OGcwQS5rc86AQeBiMqGB-6YubSC0Vv2Z4ERWnUU3JvybEj4hT5uz4foIvS4O-12nhWW5csYNKVlM40lZ_XBKe3RHE7WO77Sry-qTks5ZEi-PIPb-TJYDbfz5MhfzjFpRlVN0FOpUnXCblyigW6jmfhNWQiuTXrUNqWW_hpNuI8LHL3WsbAA7M5P9aT0V-v_ka9jV9EH5F81hUw")' }}
                ></div>
            </div>
            <h1 className="text-3xl font-bold leading-tight text-center pb-3">Lập ngân sách hiệu quả</h1>
            <p className="text-slate-600 dark:text-slate-300 text-base font-normal text-center max-w-xs">
                Kiểm soát chi tiêu và đạt được các mục tiêu tài chính của bạn bằng cách thiết lập các ngân sách thông minh.
            </p>
        </div>
      )}

      {/* Step 3: Reporting */}
      {step === 2 && (
        <div className="flex-grow flex flex-col justify-center items-center px-4 animate-in fade-in slide-in-from-right-10 duration-500">
             <div className="w-full max-w-sm aspect-square mb-8 p-6">
                <div 
                    className="w-full h-full bg-contain bg-center bg-no-repeat" 
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHVksjrltfr88rl2mqkTVzE7V7aQJDrQqoYGGt4Br-qQhZXUU9N_EpU7H7_uCxjdpeRVk4M9FPcz9oECaEXcagYzvrK83I5cyT1WLHMjec9dectmeCUJsmDNhjEEATVm0li_g5uggvyyRg0elIf-OprSumgGfQSz9jBSLZpQ0Lmx9DAlLEH3-5zkdoF9_MoMonznOVSVqVRYCCP_QRv2pZVPo_hTJuOWzhFMQ3NUnE6471GbS0EGDO-o40aPpRcBOloxcaXA2abA")' }}
                ></div>
            </div>
            <h1 className="text-3xl font-bold leading-tight text-center pb-3">Báo cáo tài chính rõ ràng</h1>
            <p className="text-slate-600 dark:text-slate-300 text-base font-normal text-center max-w-xs">
                Hiểu rõ hơn về thói quen tài chính của bạn thông qua các báo cáo trực quan, dễ hiểu.
            </p>
        </div>
      )}

      {/* Footer: Indicators and Button */}
      <div className="pb-8 pt-4 w-full flex flex-col items-center z-20 bg-background-light dark:bg-background-dark">
        <div className="flex gap-3 mb-6">
            <div className={`h-2 w-2 rounded-full transition-all duration-300 ${step === 0 ? 'bg-primary w-6' : 'bg-slate-300 dark:bg-slate-700'}`}></div>
            <div className={`h-2 w-2 rounded-full transition-all duration-300 ${step === 1 ? 'bg-primary w-6' : 'bg-slate-300 dark:bg-slate-700'}`}></div>
            <div className={`h-2 w-2 rounded-full transition-all duration-300 ${step === 2 ? 'bg-primary w-6' : 'bg-slate-300 dark:bg-slate-700'}`}></div>
        </div>
        
        <div className="w-full px-6 max-w-md">
            <button 
                onClick={handleNext}
                className="w-full h-12 bg-primary text-white dark:text-background-dark text-base font-bold rounded-xl shadow-lg shadow-primary/25 active:scale-95 transition-transform"
            >
                {step === 2 ? 'Bắt đầu' : 'Tiếp tục'}
            </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
