import React from 'react';


const DoctorCard = ({ name, age, specialization, experience,price, imageUrl }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
      <img
        src={imageUrl}
        alt={`${name}'s photo`}
        className="w-32 h-32 rounded-full mb-4 object-cover"
      />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-700"><strong>Age:</strong> {age}</p>
      <p className="text-gray-700"><strong>Price</strong> {price}</p>
      <p className="text-gray-700"><strong>Specialization:</strong> {specialization}</p>
      <p className="text-gray-700"><strong>Experience:</strong> {experience} years</p>
      <button
       
        style={{
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        Apply Doctor
      </button>
     
    </div>
  );
};

export default DoctorCard;
