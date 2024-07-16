// src/pages/Login.js
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

import { AuthContext } from '../components/userComponents/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'user' // Default role is user
  });

  const { email, password, role } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/login', formData);
      if (response.data.success) {
        toast.success(response.data.message);
        toast('Redirecting...');

        const userData = { email: response.data.email, role: response.data.role };
        login(userData);

        // Redirect to appropriate dashboard based on role
        switch (role) {
          case 'admin':
            navigate('/admin');
            break;
          case 'user':
            navigate('/');
            break;
          case 'pharmacist':
            navigate('/pharmacistdb');
            break;
          case 'owner':
            navigate('/owner');
            break;
          default:
            navigate('/');
            break;
        }
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="authentication">
      <div className="authentication-form card p-5">
        <h1 className="card-title">Login</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={onChange}
              minLength="6"
              required
            />
          </div>
          <div className="form-group">
            <label>Role</label>
            <select
              className="form-control"
              name="role"
              value={role}
              onChange={onChange}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="pharmacist">Pharmacist</option>
              <option value="owner">Owner</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary btn-block">Login</button>
        </form>
        <p className="mt-3">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
