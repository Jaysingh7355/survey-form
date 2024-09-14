import { useEffect } from 'react';
import { Typography, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ThankYouScreen: React.FC = () => {
  const navigate = useNavigate(); // Re-add the useNavigate hook

  useEffect(() => {
    // Set a timer to navigate back to the welcome screen after 5 seconds
    const timer = setTimeout(() => {
      navigate('/'); // Redirects after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // Clear timer on component unmount
  }, [navigate]);

  return (
    <Container
      maxWidth={false} 
      disableGutters 
      sx={{
        bgcolor: "#bdd1f2",
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Thank you for your time!
        </Typography>
        <Typography variant="h6" gutterBottom>
          Redirecting to the welcome screen...
        </Typography>
      </Box>
    </Container>
  );
};

export default ThankYouScreen;
