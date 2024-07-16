import React, { useState } from 'react';
import axios from 'axios';
import '../css/form.css';
import getMinimumTime from '../components/userComponents/getMinimumTime'; // Importing the getMinimumTime function

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '', // Name of the patient
    age: '', // Age of the patient
    phoneNumber: '', // Phone number of the patient
    gender: '', // Gender of the patient
    bloodType: '', // Blood type of the patient
    bloodPressure: false, // Whether the patient has high blood pressure
    cholesterol: false, // Whether the patient has cholesterol issues
    sugar: false, // Whether the patient has sugar-related issues
    heartProblems: false, // Whether the patient has heart problems
    previousMedicine: false, // Whether the patient has taken medicine from the clinic before
    dateTime: '', // Date and time of the appointment
    sickDescription: '', // Description of the patient's sickness
    specialization: '', // Specialization of the doctor
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError('');

    const {
      name, age, phoneNumber, gender, bloodType, dateTime, sickDescription, specialization
    } = formData;

    if (!name || !age || !phoneNumber || !gender || !bloodType || !dateTime || !specialization) {
      setError('Please fill in all required fields.');
      setSubmitting(false);
      return;
    }

    try {
      const accessToken = localStorage.getItem('accessToken'); // Get the token from local storage or state
      await axios.post('http://localhost:5000/api/appointments', formData, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      alert('Appointment created successfully');
      setFormData({
        name: '',
        age: '',
        phoneNumber: '',
        gender: '',
        bloodType: '',
        bloodPressure: false,
        cholesterol: false,
        sugar: false,
        heartProblems: false,
        previousMedicine: false,
        dateTime: '',
        sickDescription: '', // Clear sick description after submission
        specialization: '', // Clear specialization after submission
      });
    } catch (error) {
      alert('Failed to create appointment');
      console.error('Error creating appointment:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="form-title">Appointment</h1>
        <form onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}

          {/* Name and Age on the same line */}
          <div className="form-group-inline">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="age" className="form-label">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                className="form-input"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Phone Number and Gender on the same line */}
          <div className="form-group-inline">
            <div className="form-group">
              <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                pattern="[0-9]{10}"
                className="form-input"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender" className="form-label">Gender:</label>
              <select
                id="gender"
                name="gender"
                className="form-input"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="bloodType" className="form-label">Blood Type:</label>
            <select
              id="bloodType"
              name="bloodType"
              className="form-input"
              value={formData.bloodType}
              onChange={handleChange}
              required
            >
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
          </div>

          {/* Blood Pressure and Cholesterol on the same line */}
          <div className="form-group-inline">
            <div className="form-group">
              <label className="form-label">Blood Pressure:</label>
              <input
                type="checkbox"
                name="bloodPressure"
                className="checkbox-input"
                checked={formData.bloodPressure}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Cholesterol:</label>
              <input
                type="checkbox"
                name="cholesterol"
                className="checkbox-input"
                checked={formData.cholesterol}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Sugar and Heart Problems on the same line */}
          <div className="form-group-inline">
            <div className="form-group">
              <label className="form-label">Sugar:</label>
              <input
                type="checkbox"
                name="sugar"
                className="checkbox-input"
                checked={formData.sugar}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Heart Problems:</label>
              <input
                type="checkbox"
                name="heartProblems"
                className="checkbox-input"
                checked={formData.heartProblems}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Previous Medicine from Us:</label>
            <input
              type="checkbox"
              name="previousMedicine"
              className="checkbox-input"
              checked={formData.previousMedicine}
              onChange={handleChange}
            />
          </div>

          {/* Specialization and Date & Time on the same line */}
          <div className="form-group-inline">
            <div className="form-group">
              <label htmlFor="specialization" className="form-label">Specialization:</label>
              <select
                id="specialization"
                name="specialization"
                className="form-input"
                value={formData.specialization}
                onChange={handleChange}
                required
              >
                <option value="">Select Specialization</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
                <option value="ENT">ENT</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="dateTime" className="form-label">Date & Time:</label>
              <input
                type="datetime-local"
                id="dateTime"
                name="dateTime"
                className="form-input"
                value={formData.dateTime}
                onChange={handleChange}
                required
                min={getMinimumTime().toISOString().slice(0, 16)} // Using the getMinimumTime function to set min dynamically
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="sickDescription" className="form-label">Description of Sickness:</label>
            <textarea
              id="sickDescription"
              name="sickDescription"
              className="form-textarea"
              value={formData.sickDescription}
              onChange={handleChange}
            />
          </div>

          <div className="form-group" style={{ textAlign: 'center' }}>
            <button
              type="submit"
              className="submit-button"
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
