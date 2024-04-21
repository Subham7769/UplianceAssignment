import React from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent, CardActions } from '@mui/material';
import { Link } from 'react-router-dom'; // Link to other routes

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, textAlign: 'center' }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          padding: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h2">Welcome to Our App!</Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          A simple and intuitive app for all your needs.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 3 }}
          component={Link}
          to="/user-data"
        >
          Get Started
        </Button>
      </Box>

      {/* Features Section */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4">Features</Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">Counter</Typography>
                <Typography variant="body2" color="text.secondary">
                  A simple counter with increment, decrement, and reset functionality.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} to="/counter">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">User Data Form</Typography>
                <Typography variant="body2" color="text.secondary">
                  Collect user data with a customizable form.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} to="/user-data">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">Rich Text Editor</Typography>
                <Typography variant="body2" color="text.secondary">
                  Create and edit rich text content with ease.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} to="/rich-text-editor">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
