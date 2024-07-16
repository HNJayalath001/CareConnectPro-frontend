import React, { useState } from 'react';
import axios from 'axios';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phoneNumber: '',
    gender: '',
    bloodType: '',
    bloodPressure: false,
    cholesterol: false,
    sugar: false,
    dateTime: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/appointments', formData);
      alert(`Appointment booked! Your token number is ${response.data.token}`);
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
      <select name="gender" value={formData.gender} onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <select name="bloodType" value={formData.bloodType} onChange={handleChange} required>
        <option value="">Select Blood Type</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
      </select>
      <label>
        <input type="checkbox" name="bloodPressure" checked={formData.bloodPressure} onChange={handleChange} /> Blood Pressure
      </label>
      <label>
        <input type="checkbox" name="cholesterol" checked={formData.cholesterol} onChange={handleChange} /> Cholesterol
      </label>
      <label>
        <input type="checkbox" name="sugar" checked={formData.sugar} onChange={handleChange} /> Sugar
      </label>
      <input type="datetime-local" name="dateTime" value={formData.dateTime} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AppointmentForm;
