import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');

  // Fetch appointments from the server when the component mounts
  useEffect(() => {
    fetchAppointments();
  }, []);

  // Function to fetch appointments from the server
  const fetchAppointments = async () => {
    try {
      const response = await axios.get('/api/appointments');
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  // Handler function to update search term state
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handler function to update selected specialization
  const handleSpecializationChange = (e) => {
    setSelectedSpecialization(e.target.value);
  };

  // Handler function to submit comments for appointments
  const handleCommentSubmit = async (id, comment) => {
    try {
      await axios.put(`/api/appointments/${id}`, { comment });
      fetchAppointments(); // Refetch appointments to update the UI
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  // Filter appointments based on search term and selected specialization
  const filteredAppointments = appointments.filter((appointment) =>
    appointment.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!selectedSpecialization || appointment.specialization === selectedSpecialization)
  );

  return (
    <div>
      {/* Search input for filtering appointments by name */}
      <input type="text" placeholder="Search by name" value={searchTerm} onChange={handleSearch} />

      {/* Select bar for filtering appointments by specialization */}
      <select value={selectedSpecialization} onChange={handleSpecializationChange}>
        <option value="">All Specializations</option>
        <option value="Cardiologist">Cardiologist</option>
        <option value="Dermatologist">Dermatologist</option>
        <option value="Neurologist">Neurologist</option>
        <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
        <option value="ENT">ENT</option>
      </select>

      {/* Table to display appointments */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Blood Type</th>
            <th>Specialization</th>
            <th>Blood Pressure</th>
            <th>Cholesterol</th>
            <th>Sugar</th>
            <th>DateTime</th>
            <th>Sick Description</th>
            <th>Token</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through filtered appointments and render table rows */}
          {filteredAppointments.map((appointment) => (
            <tr key={appointment._id}>
              <td>{appointment.name}</td>
              <td>{appointment.age}</td>
              <td>{appointment.email}</td>
              <td>{appointment.phoneNumber}</td>
              <td>{appointment.gender}</td>
              <td>{appointment.bloodType}</td>
              <td>{appointment.specialization}</td>
              <td>{appointment.bloodPressure ? 'Yes' : 'No'}</td>
              <td>{appointment.cholesterol ? 'Yes' : 'No'}</td>
              <td>{appointment.sugar ? 'Yes' : 'No'}</td>
              <td>{new Date(appointment.dateTime).toLocaleString()}</td>
              <td>{appointment.sickDescription}</td>
              <td>{appointment.token}</td>
              <td>
                <input
                  type="text"
                  value={appointment.comment || ''}
                  onChange={(e) => handleCommentSubmit(appointment._id, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAppointments;
