import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';

const UserDataForm = () => {
  const [userData, setUserData] = useState({
    id: Math.random().toString(36).substring(7), // Autogenerate user ID
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save data to local storage or RTK
    localStorage.setItem('userData', JSON.stringify(userData));
    // Reset form after submission
    setUserData({
      id: Math.random().toString(36).substring(7),
      name: '',
      address: '',
      email: '',
      phone: '',
    });
  };

  const handleBeforeUnload = (e) => {
    e.preventDefault();
    const confirmationMessage = 'You have unsaved changes. Are you sure you want to leave?';
    e.returnValue = confirmationMessage;
    return confirmationMessage;
  };

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []); // Add event listener to warn about unsaved changes

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', justifyContent:'center', alignItems:"center"  }} // Using MUI for styling
    >
      <Box
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 , width: '70vw', textAlign: 'center' }}
      >
        <h1>User Data</h1>
      <TextField
        label="Name"
        name="name"
        value={userData.name}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Address"
        name="address"
        value={userData.address}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Email"
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Phone"
        type="tel"
        name="phone"
        value={userData.phone}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
      <Button variant="contained" type="submit">Submit</Button> 
      </Box> 
    </Box>
  );
};

export default UserDataForm;
