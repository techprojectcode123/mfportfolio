import React from 'react';

function Form({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Gather form data
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const panCard = formData.get('panCard');
    
    // Perform API call (you need to implement this)
    // After successful API call, navigate to the Validation page
    // using React Router or any navigation library
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <br />
      <label>
        PAN Card:
        <input type="text" name="panCard" required />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
