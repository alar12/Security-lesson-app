import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system'; // Import styled from @mui/system for Material-UI styled components
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Styled Container with vibrant background and centered content
const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  textAlign: 'center',
  background: 'linear-gradient(45deg, #FF3366 30%, #FFCC33 90%)',
  padding: '20px',
});

// Styled Title with vibrant color, bold font, and playful font family
const Title = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '3rem',
  fontFamily: 'Comic Sans MS, sans-serif',
  color: '#FFF',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
});

// Styled Subtitle with larger font size, vibrant color, and margin
const Subtitle = styled(Typography)({
  fontSize: '1.5rem',
  color: '#FFF',
  marginBottom: '30px',
});

// Styled StartButton with vibrant background, large padding, hover effect, and scale transformation
const StartButton = styled(Button)({
  padding: '15px 30px',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  borderRadius: '30px',
  background: '#FF6633',
  color: '#FFF',
  transition: 'background-color 0.3s, transform 0.2s',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    backgroundColor: '#FF3300',
    transform: 'scale(1.1)',
  },
});

// Styled ArrowIcon with vibrant color and larger size
const ArrowIcon = styled(ArrowForwardIcon)({
  marginLeft: '10px',
  fontSize: '2rem',
  verticalAlign: 'middle',
});

// Animated Text for Let's goooo!
const AnimatedText = styled('span')({
  animation: 'blink 1s infinite',
  '@keyframes blink': {
    '0%, 100%': { opacity: 1 },
    '50%': { opacity: 0.5 },
  },
});

const Home = ({ onStart }) => (
  <StyledContainer>
    <Title variant="h1">
      Welcome to Security for Kids
    </Title>
    <Subtitle variant="h4">
      Learn how to stay safe online!
    </Subtitle>
    <Box display="flex" alignItems="center">
      <StartButton
        variant="contained"
        onClick={onStart}
        endIcon={<ArrowIcon />}
      >
        Start Learning
      </StartButton>
      <AnimatedText>
        <i style={{ marginLeft: '10px', fontSize: '1.5rem', color: '#FFF' }}>Let's goooo!</i>
      </AnimatedText>
    </Box>
  </StyledContainer>
);

export default Home;
