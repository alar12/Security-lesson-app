import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const Home = ({ onStart }) => (
  <Container>
    <Typography variant="h2" gutterBottom>Welcome to Security for Kids</Typography>
    <Typography variant="h6">Learn how to stay safe online!</Typography>
    <Button variant="contained" color="primary" onClick={onStart}>Start Learning</Button>
  </Container>
);

export default Home;
