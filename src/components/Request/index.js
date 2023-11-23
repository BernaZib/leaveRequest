import React, { useState, useEffect } from 'react';
import './index.css';
import Axios from 'axios';




const Request = () => {
  // State variables to store form data
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [id, setId] = useState(0);
  const [reason, setReason] = useState('');
  const [adminMessage, setAdminMessage] = useState('');

  useEffect(() => { 
    const message = localStorage.getItem('adminMessage');
    // const color = localStorage.getItem('messageStyle');
    if (message) {
      setAdminMessage(message);
      // setMessageStyle(color);
      // Clear the message from localStorage after retrieval
      localStorage.removeItem('adminMessage');
      // localStorage.removeItem('messageStyle');
    }
  }, []);
  

  const createLRequest = () => {
    Axios.post('http://localhost:3001/createLRequest', { name, lastname, id, reason })
      .then((response) => {
        alert('Leave request created');
        // setlistoflrequests([...listoflrequests,{name,lastname,id,reason}])
      })
      .catch((error) => {
        console.error('Error creating leave request:', error);
      });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    createLRequest();
    // You can handle the form submission logic here
    console.log('Form submitted:', { name, lastname, id, reason });
  };

  const handleReturn=()=>{
    window.location.href = '/';
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
    <h1>Leave Request</h1>
    <div>
      <label htmlFor="name">First Name:</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="lastName">Last Name:</label>
      <input
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="id">ID:</label>
      <input
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="reason">Reason for Leave:</label>
      <select
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      >
        <option value="">Select a reason</option>
        <option value="work">Work</option>
        <option value="travel">Travel</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div>
      <button type="submit">Submit</button>
      <span style={{ marginLeft: '10px' }}></span> 
      <button type="button" onClick={handleReturn}>Return</button>
    </div>
    {adminMessage && (
  <div style={{ color: adminMessage.includes('Rejected') ? 'red' : 'blue' }}>
    {adminMessage}
  </div>
)}

  </form>

    </>
  );
};

export default Request;
