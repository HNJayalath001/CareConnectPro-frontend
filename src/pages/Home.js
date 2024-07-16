import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css'; // Ensure you have this import
import backgroundImage from '../Assests/background.jpg'; // Import your background image

const Home: FC = () => {
  return (
    <div className="min-h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <main className="max-w-6xl mx-auto px-4 py-48">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-6 gap-y-24">Welcome to MyApp</h1>
          <p className="text-lg text-gray-600">A platform to help you manage your tasks efficiently.</p>
        </div>
        <div className="mt-8">
          {/* Add your additional content here */}
        </div>
        <div className="mt-8 text-center">
          <Link to="/register" className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600">Get Started</Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
