import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleMenuClick = (index) => setSelectedMenu(index);
  const handleProfileClick = () => setProfileDropdownOpen(!isProfileDropdownOpen);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  // Get initials from name
  const initials = user?.name
    ? user.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
    : 'TX';

  return (
    <div className='menu-container'>
      <img src='Trade_X-logo.png' style={{ width: "150px" }} alt="TradeX" />

      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/App" onClick={() => handleMenuClick(5)}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>

        <hr />

        {/* Profile + Logout dropdown */}
        <div style={{ position: 'relative' }}>
          <div className='profile' onClick={handleProfileClick}>
            <div className='avatar'>{initials}</div>
            <p className='username'>{user?.name || 'User'}</p>
          </div>

          {isProfileDropdownOpen && (
            <div style={dropdownStyle}>
              <div style={dropdownItemStyle}>
                <span style={{ fontSize: '0.78rem', color: '#999' }}>{user?.email}</span>
              </div>
              <hr style={{ margin: '6px 0', border: 'none', borderTop: '1px solid #f0f0f0' }} />
              <button onClick={handleLogout} style={logoutBtnStyle}>
                🔒 Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const dropdownStyle = {
  position: 'absolute',
  top: '110%',
  right: 0,
  background: '#fff',
  border: '1px solid #eee',
  borderRadius: '10px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  padding: '10px',
  minWidth: '180px',
  zIndex: 100,
};

const dropdownItemStyle = {
  padding: '4px 6px',
};

const logoutBtnStyle = {
  width: '100%',
  background: 'none',
  border: 'none',
  textAlign: 'left',
  padding: '8px 6px',
  fontSize: '0.85rem',
  color: '#e53935',
  fontWeight: 500,
  cursor: 'pointer',
  borderRadius: '6px',
};

export default Menu;
