import React from 'react';
import styles from '../App.module.css';

function Form({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const panCard = formData.get('panCard');
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.nameDiv}>
        <label className={styles.flexContainer}>
          Name:
          <input className={styles.nameInput} type="text" name="name" required />  {/* Custom class applied here */}
        </label>
        <br />
      </div>
      <div className={styles.panCardDiv}>
      <label className={styles.flexContainer}>
          PAN Card:
          <div className={styles.panCard}>
            <input type="text" name="panCard" required />
          </div>
        </label>
        <br />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
