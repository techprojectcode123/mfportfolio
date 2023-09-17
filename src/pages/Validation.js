import React from 'react';
import { useNavigate } from 'react-router-dom'; // Update the import statement
import ValidationForm from '../components/ValidationForm';
import '../App.css'; // Import the CSS file at the top of your component or page file

function Validation() {
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const handleFormSubmit = () => {
    // You can make an API call here to perform OTP validation
    // For simplicity, we'll navigate to the Loan page directly
    navigate('/loan'); // Use navigate function for navigation
  };

  return (
<div className="container">
  <h2>Validation Page</h2>
  <ValidationForm onSubmit={handleFormSubmit} />
</div>

  );
}

export default Validation;
