import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/userComponents/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import About from './pages/About';
import Information from './pages/Information';

import Appointment from './pages/Appoinment';
import Bot from './pages/Bot';
import DoctorDetails from './pages/DoctorDetails';
import AppointmentForm from './pages/AppointmentForm';

import Dashboard from './adminPages/Dashbord';
import Feedbacks from './adminPages/Feedbacks';
import AdminLayout from './adminPages/AdminLayout';
import AdminAppointments from './adminPages/AdminAppointments';
import Pharmacist from './adminPages/PharmacistM';
import Pharmacistdb from './pharmacist/Pharmacistdb';
import Owner from './owner/Owner';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* User routes */}
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="bot" element={<Bot />} />
          <Route path="doctorDetails" element={<DoctorDetails />} />
          <Route path="appointmentform" element={<AppointmentForm />} />
          <Route path="about" element={<About />} />
          <Route path = "Information" element={<Information />} />
        </Route>

        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="feedbacks" element={<Feedbacks />} />
          <Route path="appointments" element={<AdminAppointments />} />
          <Route path="pharmacist" element={<Pharmacist />} />
        </Route>

        {/* Pharmacist routes */}
        <Route path="/pharmacistdb" element={<Pharmacistdb />} />

        {/* Owner routes */}
        <Route path="/owner" element={<Owner />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
