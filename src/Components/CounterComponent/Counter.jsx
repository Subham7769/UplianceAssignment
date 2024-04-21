import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material'; // Use MUI components
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Default white background

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) { // Prevent decrementing below zero
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  useEffect(() => {
    // Map count to a color value. Here, the higher the count, the darker the background.
    const intensity = Math.min(count * 10, 255); // Limiting intensity to 255
    const newBackgroundColor = `rgb(${255 - intensity}, ${255 - intensity}, ${255 - intensity})`; // Darker as count increases
    setBackgroundColor(newBackgroundColor);
  }, [count]);

  return (
    <Box  sx={{
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
    <Box
      className="Counter"
      sx={{
        textAlign: 'center',
        padding: 2,
        backgroundColor, // Set background color based on count
        transition: 'background-color 0.3s', // Smooth transition for background color
      }}
    >
      <Typography variant="h4">Counter: {count}</Typography>
      <Box
        className="buttonContainer"
        sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}
      >
        <Button variant="contained" onClick={increment}>
          +
        </Button>
        <Button variant="outlined" onClick={reset}>
          Reset
        </Button>
        <Button variant="contained" color="error" onClick={decrement}>
          -
        </Button>
      </Box>
    </Box>
    </Box>
  );
};

export default Counter;
