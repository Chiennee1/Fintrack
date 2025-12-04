
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import BottomNav from './components/BottomNav';

// Pages
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import TransactionDetail from './pages/TransactionDetail';
import AddTransaction from './pages/AddTransaction';
import Budget from './pages/Budget';
import CreateBudget from './pages/CreateBudget';
import Report from './pages/Report';
import Settings from './pages/Settings';
import Notifications from './pages/Notifications';
import NotificationSettings from './pages/NotificationSettings';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Onboarding from './pages/Onboarding';
import Profile from './pages/Profile';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const hideNavPaths = [
    '/add-transaction', 
    '/create-budget', 
    '/notifications', 
    '/notification-settings',
    '/faq',
    '/about',
    '/login',
    '/register',
    '/onboarding',
    '/profile'
  ];
  
  // Also hide nav for dynamic paths like /transactions/:id
  const isDetailView = location.pathname.startsWith('/transactions/') && location.pathname !== '/transactions';
  
  const showNav = !hideNavPaths.includes(location.pathname) && !isDetailView;

  return (
    <>
      {children}
      {showNav && <BottomNav />}
    </>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/transactions/:id" element={<TransactionDetail />} />
          <Route path="/add-transaction" element={<AddTransaction />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/create-budget" element={<CreateBudget />} />
          <Route path="/report" element={<Report />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/notification-settings" element={<NotificationSettings />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
