// src/components/userComponents/Header.js
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="header-layout">
      <header className="header">
        <div style={headerStyle}>
          <nav style={navStyle}>
            <ul style={navLinksStyle}>
              <li style={navItemStyle}><Link to="/" style={linkStyle}>Home</Link></li>
              <li style={navItemStyle}><Link to="/appointment" style={linkStyle}>Appointment</Link></li>
              <li style={navItemStyle}><Link to="/bot" style={linkStyle}>Bot</Link></li>
              <li style={navItemStyle}><Link to="/doctorDetails" style={linkStyle}>Doctor Details</Link></li>
              <li style={navItemStyle}><Link to="/about" style={linkStyle}>About</Link></li>
              <li style={navItemStyle}><Link to="/information" style={linkStyle}>Information</Link></li>

              {user ? (
                <>
                  <span style={emailStyle}>{user.email}</span>
                  <button onClick={logout} className="bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-600 mr-4">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-600 mr-4">
                    Login
                  </Link>
                  <Link to="/register" className="bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-600 mr-4">
                    Register
                  </Link>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

// Inline styles
const headerStyle = {
  backgroundColor: '#333',
  padding: '10px 20px',
};

const navStyle = {
  display: 'inline-block',
  marginLeft: '20px',
};

const navLinksStyle = {
  listStyle: 'none',
  padding: 0,
  display: 'flex',
};

const navItemStyle = {
  margin: '0 10px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
};

const emailStyle = {
  color: 'white',
  marginRight: '10px',
};

export default Header;
