import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';

import './Dashboard.css';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
  };

  return (
    <div className='dashboard'>
      <h1>Welcome to the Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
