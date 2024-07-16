import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import './Appoinments.css'; // Import the CSS file
import '../css/appointments.css';
const AppointmentTable = () => {
  const [appointments, setAppointments] = useState([]);

  // Function to fetch appointments from the API
  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/appointments/');
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  useEffect(() => {
    fetchAppointments(); // Fetch appointments when component mounts
  }, []); // Empty dependency array ensures it only runs once

  // Function to handle delete appointment
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/appointments/${id}`);
      // Remove the deleted appointment from the state
      setAppointments(appointments.filter(appointment => appointment._id !== id));
      alert('Appointment deleted successfully');
    } catch (error) {
      console.error('Error deleting appointment:', error);
      alert('Failed to delete appointment');
    }
  };

  // Function to handle edit appointment
  const handleEdit = (id) => {
    // Implement edit functionality as needed
    alert(`Edit appointment with ID: ${id}`);
  };

  return (
    <div className="container">
    
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Blood Type</th>
            <th>Blood Pressure</th>
            <th>Cholesterol</th>
            <th>Sugar</th>
            <th>Heart Problems</th>
            <th>Previous Medicine</th>
            <th>Date & Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment._id}>
              <td>{appointment.name}</td>
              <td>{appointment.age}</td>
              <td>{appointment.phoneNumber}</td>
              <td>{appointment.gender}</td>
              <td>{appointment.bloodType}</td>
              <td>{appointment.bloodPressure ? 'Yes' : 'No'}</td>
              <td>{appointment.cholesterol ? 'Yes' : 'No'}</td>
              <td>{appointment.sugar ? 'Yes' : 'No'}</td>
              <td>{appointment.heartProblems ? 'Yes' : 'No'}</td>
              <td>{appointment.previousMedicine ? 'Yes' : 'No'}</td>
              <td>{new Date(appointment.dateTime).toLocaleString()}</td>
              <td>
                <button onClick={() => handleEdit(appointment._id)}>Edit</button>
                <button className="delete" onClick={() => handleDelete(appointment._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentTable;
