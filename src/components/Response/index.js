// AdminPanel.js

import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Response = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch leave requests from the server
    Axios.get('http://localhost:3001/getLRequests')
      .then((response) => {
        setRequests(response.data);
      })
      .catch((error) => {
        console.error('Error fetching leave requests:', error);
      });
  }, []);


  const processRequest = (index, decision) => {
    const request = requests[index];
    const requestId = request._id;
    setRequests(requests.filter((_, i) => i !== index));
  
    Axios.delete(`http://localhost:3001/deleteRequest/${requestId}`).then((response) => {
      // Store the message in localStorage
      localStorage.setItem('adminMessage', `${decision}: ${request.name} ${request.lastname}`);
      // localStorage.setItem('messageStyle', (decision === 'Accepted' ? 'green' : 'red'));
      alert('Response sent');
    });
  };

  return (
    <div>
      <h1>Admin Panel - Leave Requests</h1>
      {requests.map((request,index) => (
        <LeaveRequestCard
          key={index}
          request={request}
          onAccept={() => processRequest(index, 'Accepted')}
          onReject={() => processRequest(index, 'Rejected')}
        />
      ))}
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button onClick={()=>window.location.href='/'}>Return</button>
        </div>
    </div>
  );
};

const LeaveRequestCard = ({ request, onAccept, onReject }) => {
  const { _id, name, lastname, id, reason } = request;

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{`${name} ${lastname} (${id})`}</h3>
      <p>Reason: {reason}</p>
      <div>
        <button onClick={onAccept}>Accept</button>
        <button onClick={onReject}>Reject</button>
      </div>
    </div>
      
  );
};

export default Response;
