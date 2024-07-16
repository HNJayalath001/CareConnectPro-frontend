import React from 'react';
import DoctorCard from './DoctorCard';

const DoctorDetails = () => {
  // Click event handler for Doctor 1
  const handleApplyClickDoctor1 = (name) => {
    console.log(`Applied for ${name}`);
    // Add your logic here
  };

  // Click event handler for Doctor 2
  const handleApplyClickDoctor2 = (name) => {
    console.log(`Applied for ${name}`);
    // Add your logic here
  };

  return (
    <div>
      <DoctorCard
        name="Doctor 1"
        age={30}
        specialization="Cardiology"
        experience={10}
        imageUrl="doctor1.jpg"
        onApplyClick={handleApplyClickDoctor1} // Pass the click event handler as a prop
      />
      <DoctorCard
        name="Doctor 2"
        age={35}
        specialization="Orthopedics"
        experience={8}
        imageUrl="doctor2.jpg"
        onApplyClick={handleApplyClickDoctor2} // Pass the click event handler as a prop
      />
    </div>
  );
};

export default DoctorDetails;
