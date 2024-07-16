// AdminSidebar.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="admin-layout" style={layoutStyle}>
      <aside className="admin-sidebar" style={sidebarStyle}>
        <nav style={navStyle}>
          <ul style={navLinksStyle}>
            <li style={navItemStyle}><Link to="/admin/dashboard" style={linkStyle}>Dashboard</Link></li>
            <li style={navItemStyle}><Link to="/admin/feedbacks" style={linkStyle}>Feedback</Link></li>
            <li style={navItemStyle}><Link to="/admin/appointments" style={linkStyle}>Appointments</Link></li>
            <li style={navItemStyle}><Link to="/admin/pharmacist" style={linkStyle}>Pharmacist</Link></li>

            
          </ul>
        </nav>
      </aside>
      <main className="admin-content" style={contentStyle}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminSidebar;

// CSS styles
const layoutStyle = {
  display: 'flex',
  height: '100vh', // Ensure the layout takes full height of the viewport
};

const sidebarStyle = {
  backgroundColor: '#333',
  width: '250px',
  padding: '20px',
  boxSizing: 'border-box',
};

const navStyle = {
  marginTop: '20px',
};

const navLinksStyle = {
  listStyle: 'none',
  padding: 0,
};

const navItemStyle = {
  marginBottom: '10px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
};

const contentStyle = {
  flex: 1,
  padding: '20px',
  boxSizing: 'border-box',
  overflowY: 'auto', // Allows scrolling if the content overflows
};
