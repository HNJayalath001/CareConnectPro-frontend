import React from 'react';

const Information = () => {
  return (
    <div style={{ backgroundColor: '#ebf8ff', minHeight: '100vh', padding: '32px' }}>
      <div style={{ maxWidth: '96rem', margin: '0 auto', backgroundColor: '#ffffff', padding: '32px', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: '700', color: '#3182ce', marginBottom: '32px', textAlign: 'center' }}>Welcome to Our Medical Practice</h1>
        
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: '600', color: '#2d3748', marginBottom: '16px' }}>Our Mission</h2>
          <p style={{ color: '#4a5568', lineHeight: '1.625' }}>
            Our mission is to provide the highest quality healthcare to our community with compassion and dedication. 
            We are committed to improving the well-being of our patients through innovative medical practices, 
            comprehensive treatment plans, and personalized care.
          </p>
        </section>
        
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: '600', color: '#2d3748', marginBottom: '16px' }}>Services We Offer</h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#4a5568' }}>
            <li>General Health Check-ups</li>
            <li>Cardiology Services</li>
            <li>Dermatology Services</li>
            <li>Neurology Services</li>
            <li>Orthopedic Services</li>
            <li>Pediatric Care</li>
            <li>Emergency Services</li>
          </ul>
        </section>
        
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: '600', color: '#2d3748', marginBottom: '16px' }}>Contact Us</h2>
          <p style={{ color: '#4a5568' }}>
            If you have any questions or would like to schedule an appointment, please do not hesitate to contact us:
          </p>
          <div style={{ marginTop: '16px' }}>
            <p style={{ color: '#4a5568' }}><strong>Phone:</strong> (+94) 112564260</p>
            <p style={{ color: '#4a5568' }}><strong>Email:</strong> careconnectpro@gmail.com</p>
            <p style={{ color: '#4a5568' }}><strong>Address:</strong> 123 Health Street, Negambo</p>
          </div>
        </section>
        
        <section style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: '600', color: '#2d3748', marginBottom: '16px' }}>Visit Us</h2>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d506645.9068238979!2d79.27391047343752!3d7.2213104999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2eebf4821ccbd%3A0xae13d2bd6880f90e!2sNegombo%20Bus%20Stand!5e0!3m2!1sen!2slk!4v1721092851063!5m2!1sen!2slk"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </div>
    </div>
  );
};

export default Information;
