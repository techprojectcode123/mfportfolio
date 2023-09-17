import React from 'react';
import { useNavigate } from 'react-router-dom'; // Update the import statement
import Form from '../components/Form';

function Home() {
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const handleFormSubmit = () => {
    // You can make an API call here before navigating to the Validation page
    // For simplicity, we'll navigate to the Validation page directly
    navigate('/validation'); // Use navigate function for navigation
  };

  return (
    <div>
      <h2>Home Page</h2>
      <Form onSubmit={handleFormSubmit} />
    </div>
  );
}

export default Home;
