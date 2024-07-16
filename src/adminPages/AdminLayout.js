// AdminLayout.js
import React from 'react';
//import AdminSidebar from './components/adminComponents/AdminSidebar'; // Make sure the path is correct
import AdminSidebar from '../components/adminComponents/AdminSidebar';
const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      {/* Other admin layout content */}
    </div>
  );
};

export default AdminLayout;
