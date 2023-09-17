import React from 'react';

function ValidationForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Gather OTP value
    const formData = new FormData(e.target);
    const otp = formData.get('otp');
    
    // Perform validation (you need to implement this)
    // After successful validation, navigate to the Loan page
    // using React Router or any navigation library
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        OTP:
        <input type="text" name="otp" required />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ValidationForm;
