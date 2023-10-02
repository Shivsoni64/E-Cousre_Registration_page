import React, { useState } from 'react';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // Add state variables for other form fields

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the respective state variable based on the field name
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    }
    // Add other fields' state updates
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Email:', email);
    // Add other fields' data handling
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={name} onChange={handleChange} required />

      <label htmlFor="email">Email ID:</label>
      <input type="email" id="email" name="email" value={email} onChange={handleChange} required />

      {/* Add other form fields here */}

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
