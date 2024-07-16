// src/context/AuthProvider.js
import React, { createContext, useState, useEffect } from 'react';

// Create a context object
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  // State to hold user information
  const [user, setUser] = useState(null);

  // Effect to check if user data is stored in localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Function to handle user login
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Function to handle user logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Value object to be provided by the context
  const authContextValue = {
    user,
    login,
    logout,
  };

  // Provide the context value to the children components
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
