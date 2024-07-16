import React from 'react';
import img1 from '../Assests/c2.jpg';
import img2 from '../Assests/c3.jpg';
import img3 from '../Assests/c7.jpg';

const About = () => {
  const teamMembers = [
    { name: "Kumara Nanayakkara", role: "CEO", img: img1 },
    { name: "Sumith Jayawardhana", role: "CTO", img: img2 },
    { name: "Kamal De Silwa", role: "CFO", img: img3 },
  ];
  

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(to right, #63b3ed, #90cdf4, #bee3f8)',
      padding: '32px',
    },
    content: {
      width: '100%',
      maxWidth: '1024px',
      padding: '32px',
      background: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      fontSize: '2.25rem',
      fontWeight: '700',
      textAlign: 'center',
      color: '#2d3748',
    },
    section: {
      marginBottom: '24px',
    },
    subHeading: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#2d3748',
    },
    paragraph: {
      color: '#4a5568',
    },
    list: {
      listStyleType: 'disc',
      paddingLeft: '16px',
      color: '#4a5568',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '24px',
    },
    gridMedium: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '24px',
    },
    gridLarge: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '24px',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '16px',
      background: '#f7fafc',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    image: {
      borderRadius: '50%',
      width: '128px',
      height: '128px',
      objectFit: 'cover',
    },
    name: {
      marginTop: '16px',
      fontSize: '1.125rem',
      fontWeight: '500',
      color: '#2d3748',
    },
    role: {
      marginTop: '8px',
      color: '#4a5568',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>About Us</h1>
        <section style={styles.section}>
          <h2 style={styles.subHeading}>Our Mission</h2>
          <p style={styles.paragraph}>
            Our mission is to provide innovative solutions that empower businesses to achieve their full potential. We strive to deliver exceptional services that exceed our clients' expectations and contribute to their success.
          </p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.subHeading}>Our Values</h2>
          <ul style={styles.list}>
            <li>Integrity: We uphold the highest standards of integrity in all our actions.</li>
            <li>Quality: We provide outstanding products and unsurpassed service that deliver premium value to our customers.</li>
            <li>Innovation: We constantly seek to innovate and improve our services.</li>
            <li>Teamwork: We work together across boundaries to meet the needs of our customers and to help our company win.</li>
            <li>Customer Commitment: We develop relationships that make a positive difference in our customers' lives.</li>
          </ul>
        </section>
        <section style={styles.section}>
          <h2 style={styles.subHeading}>Meet Our Team</h2>
          <div
            style={window.innerWidth >= 1024 ? styles.gridLarge : window.innerWidth >= 640 ? styles.gridMedium : styles.grid}
          >
            {teamMembers.map((member, index) => (
              <div key={index} style={styles.card}>
                <img
                  src={member.img}
                  alt={`${member.name} photo`}
                  style={styles.image}
                />
                <h3 style={styles.name}>{member.name}</h3>
                <p style={styles.role}>{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
