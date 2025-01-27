import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import { RootState } from '../store/store';

import './Navbar.css';

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav>
      <div>
        <Link to='/'>MyApp</Link>
      </div>
      <div>
        {isAuthenticated && (
          <>
            <Link to='/dashboard'>Dashboard</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
        {!isAuthenticated && <Link to='/login'>Login</Link>}
      </div>
    </nav>
  );
};

export default Navbar;
