import React from 'react';
import { Button, Typography, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/survey');
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '20vh' }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Our Survey!
        </Typography>
        <Typography variant="body1" gutterBottom>
          We appreciate your time. Please take a moment to answer our quick survey.
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleStart}
        size="large"
        sx={{ px: 4, py: 1 }}
      >
        Start Survey
      </Button>
    </Container>
  );
};

export default Welcome;
