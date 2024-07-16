import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PharmacistM() {
  const [messages, setMessages] = useState(() => {
    // Retrieve messages from local storage or initialize with empty array
    const storedMessages = localStorage.getItem('pharmacistMessages');
    return storedMessages ? JSON.parse(storedMessages) : [...Array(4)].map(() => ({ name: '', description: '' }));
  });

  // Save messages to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('pharmacistMessages', JSON.stringify(messages));
  }, [messages]);

  const handleNameChange = (index, value) => {
    const updatedMessages = [...messages];
    updatedMessages[index].name = value;
    setMessages(updatedMessages);
  };

  const handleDescriptionChange = (index, value) => {
    const updatedMessages = [...messages];
    updatedMessages[index].description = value;
    setMessages(updatedMessages);
  };

  const handleSave = async (index) => {
    try {
      await axios.post('/api/pharmacists', messages[index]);
      console.log('Message saved:', messages[index]);
      // Optionally, you can update the state after successful save
    } catch (error) {
      console.error('Error saving message:', error);
    }
  };

  const handleClear = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index] = { name: '', description: '' };
    setMessages(updatedMessages);
  };

  return (
    <div style={{ margin: '20px', textAlign: 'center' }}>
   <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Message Pharmacist<br/><br/></h2>
      <table style={{ margin: '0 auto' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  style={{ width: '250px', height: '40px', fontSize: '18px', padding: '8px' }}
                  value={message.name}
                  onChange={(e) => handleNameChange(index, e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  style={{ width: '350px', height: '40px', fontSize: '18px', padding: '8px' }}
                  value={message.description}
                  onChange={(e) => handleDescriptionChange(index, e.target.value)}
                />
              </td>
              <td>
                <button style={{ backgroundColor: 'blue', color: 'white', padding: '12px 24px', fontSize: '18px', marginRight: '20px' }} onClick={() => handleSave(index)}>Save</button>
                <button style={{ backgroundColor: 'blue', color: 'white', padding: '12px 24px', fontSize: '18px' }} onClick={() => handleClear(index)}>Clear</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PharmacistM;
