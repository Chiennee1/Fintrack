
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';
import { ALL_TRANSACTIONS } from '../constants';

const Transactions: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('Tháng');
  
  // Search State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter Logic
  const filteredTransactions = useMemo(() => {
    if (!searchQuery) return ALL_TRANSACTIONS;
    const lowerQuery = searchQuery.toLowerCase();
    return ALL_TRANSACTIONS.filter(tx => 
      tx.category.toLowerCase().includes(lowerQuery) ||
      tx.note.toLowerCase().includes(lowerQuery) ||
      tx.amount.toString().includes(lowerQuery)
    );
  }, [searchQuery]);

  const handleSearchClose = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display pb-24">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-slate-200/10 h-[72px] flex flex-col justify-center">
        {!isSearchOpen ? (
          <div className="flex items-center px-4 justify-between w-full">
            <button onClick={() => navigate('/')} className="flex size-10 items-center justify-center rounded-full hover:bg-white/10">
              <Icon name="arrow_back_ios_new" className="text-slate-800 dark:text-white" />
            </button>
            <h1 className="text-slate-900 dark:text-white text-lg font-bold">Giao dịch</h1>
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="flex size-10 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
            >
              <Icon name="search" className="text-slate-800 dark:text-white text-2xl" />
            </button>
          </div>
        ) : (
          <div className="flex items-center px-4 gap-3 w-full animate-in fade-in slide-in-from-right-2 duration-200">
            <div className="relative flex-1">
              <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input 
                autoFocus
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm giao dịch..."
                className="w-full h-10 pl-10 pr-4 rounded-xl bg-slate-200 dark:bg-white/10 border-none focus:ring-2 focus:ring-primary text-slate-900 dark:text-white placeholder:text-slate-500"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-slate-300 dark:bg-white/20 text-slate-600 dark:text-white"
                >
                  <Icon name="close" className="text-sm" />
                </button>
              )}
            </div>
            <button 
              onClick={handleSearchClose}
              className="text-slate-900 dark:text-white font-bold text-sm whitespace-nowrap"
            >
              Hủy
            </button>
          </div>
        )}
      </header>

      {/* Summary Cards - Hide when searching to give more space */}
      {!isSearchOpen && (
        <section className="p-4 grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1 rounded-2xl bg-primary/10 p-4 border border-primary/20">
            <p className="text-slate-600 dark:text-primary/80 text-xs font-bold uppercase">Tổng Thu</p>
            <p className="text-slate-900 dark:text-white text-lg font-bold">+35.000.000đ</p>
          </div>
          <div className="flex flex-col gap-1 rounded-2xl bg-danger/10 p-4 border border-danger/20">
            <p className="text-slate-600 dark:text-danger/80 text-xs font-bold uppercase">Tổng Chi</p>
            <p className="text-slate-900 dark:text-white text-lg font-bold">-15.000.000đ</p>
          </div>
          <div className="col-span-2 rounded-2xl bg-slate-100 dark:bg-white/5 p-4 flex justify-between items-center">
             <p className="text-slate-600 dark:text-gray-400 text-sm font-bold">Số dư</p>
             <p className="text-slate-900 dark:text-white text-2xl font-bold">20.000.000đ</p>
          </div>
        </section>
      )}

      {/* Time Filter - Hide when searching */}
      {!isSearchOpen && (
        <section className="px-4 pb-4">
          <div className="flex bg-slate-200 dark:bg-black/40 p-1 rounded-xl">
            {['Ngày', 'Tuần', 'Tháng', 'Năm'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex-1 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                  filter === f 
                  ? 'bg-white dark:bg-primary/20 text-slate-900 dark:text-white shadow-sm' 
                  : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Transaction List */}
      <section className="flex flex-col px-2 gap-4 pt-2">
        {/* SEARCH RESULTS VIEW */}
        {isSearchOpen ? (
          <div className="flex flex-col gap-1">
             <h3 className="px-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
               {searchQuery ? 'Kết quả tìm kiếm' : 'Gần đây'}
             </h3>
             {filteredTransactions.length > 0 ? (
               filteredTransactions.map((tx) => (
                <div key={tx.id} onClick={() => navigate(`/transactions/${tx.id}`)} className="flex items-center gap-4 px-4 py-3 hover:bg-white/5 rounded-xl cursor-pointer">
                  <div className="flex items-center justify-center rounded-full bg-slate-200 dark:bg-white/10 shrink-0 size-10">
                    <Icon name={tx.categoryIcon} className="text-slate-800 dark:text-white" />
                  </div>
                  <div className="flex flex-col flex-1">
                    <p className="text-slate-900 dark:text-white text-base font-semibold">{tx.category}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{tx.note}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className={`text-base font-bold ${tx.type === 'income' ? 'text-income' : 'text-danger'}`}>
                      {tx.type === 'expense' ? '-' : '+'}{Math.abs(tx.amount).toLocaleString()}đ
                    </p>
                    <p className="text-xs text-slate-500">{tx.date}</p>
                  </div>
                </div>
               ))
             ) : (
               <div className="flex flex-col items-center justify-center py-12 opacity-50">
                  <Icon name="search_off" className="text-4xl mb-2" />
                  <p>Không tìm thấy giao dịch nào</p>
               </div>
             )}
          </div>
        ) : (
          /* DEFAULT VIEW (Grouped manually as per original design) */
          <>
            <div className="flex flex-col gap-1">
              <h3 className="px-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Hôm nay, 25 Tháng 5</h3>
              {ALL_TRANSACTIONS.slice(0, 2).map((tx) => (
                <div key={tx.id} onClick={() => navigate(`/transactions/${tx.id}`)} className="flex items-center gap-4 px-4 py-3 hover:bg-white/5 rounded-xl cursor-pointer">
                  <div className="flex items-center justify-center rounded-full bg-slate-200 dark:bg-white/10 shrink-0 size-10">
                    <Icon name={tx.categoryIcon} className="text-slate-800 dark:text-white" />
                  </div>
                  <div className="flex flex-col flex-1">
                    <p className="text-slate-900 dark:text-white text-base font-semibold">{tx.category}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{tx.note}</p>
                  </div>
                  <p className={`text-base font-bold ${tx.type === 'income' ? 'text-income' : 'text-danger'}`}>
                    {tx.type === 'expense' ? '-' : '+'}{Math.abs(tx.amount).toLocaleString()}đ
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1">
               <h3 className="px-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Thứ Ba, 21 Tháng 5</h3>
               {ALL_TRANSACTIONS.slice(2, 5).map((tx) => (
                <div key={tx.id} onClick={() => navigate(`/transactions/${tx.id}`)} className="flex items-center gap-4 px-4 py-3 hover:bg-white/5 rounded-xl cursor-pointer">
                  <div className="flex items-center justify-center rounded-full bg-slate-200 dark:bg-white/10 shrink-0 size-10">
                    <Icon name={tx.categoryIcon} className="text-slate-800 dark:text-white" />
                  </div>
                  <div className="flex flex-col flex-1">
                    <p className="text-slate-900 dark:text-white text-base font-semibold">{tx.category}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{tx.note}</p>
                  </div>
                  <p className={`text-base font-bold ${tx.type === 'income' ? 'text-income' : 'text-danger'}`}>
                    {tx.type === 'expense' ? '-' : '+'}{Math.abs(tx.amount).toLocaleString()}đ
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      {/* FAB (Hide in search mode to prevent overlap) */}
      {!isSearchOpen && (
        <div className="fixed bottom-24 right-4 z-40">
          <button 
            onClick={() => navigate('/add-transaction')}
            className="flex size-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/40 hover:scale-110 transition-transform"
          >
            <Icon name="add" className="text-3xl font-bold" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Transactions;
