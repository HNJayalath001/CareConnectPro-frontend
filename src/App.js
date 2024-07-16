// src/App.js
import React from "react";
import { Toaster } from "react-hot-toast";
import ErrorBoundary from "./components/ErrorBoundary";
import Router from "./Router";
import { AuthProvider } from './components/userComponents/AuthContext';

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <ErrorBoundary>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
