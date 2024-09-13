
import { useEffect } from 'react';
import { Typography, Container, Box, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Thankyou: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set a timer to navigate back to the welcome screen after 5 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer); // Clear timer on component unmount
  }, [navigate]);

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: '20vh' }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Thank you for your time!
        </Typography>
        <Typography variant="h6" gutterBottom>
          Redirecting to the welcome screen...
        </Typography>
        {/* Optional: Adding a loading spinner */}
        <CircularProgress sx={{ mt: 2 }} />
      </Box>
    </Container>
  );
};

export default Thankyou;