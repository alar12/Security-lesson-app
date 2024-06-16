import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system'; 
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '70vh',
  width: '50%',
  textAlign: 'center',
  background: 'linear-gradient(45deg, #FF3366 30%, #FFCC33 90%)',
  padding: '20px',
  borderRadius: '70%',
  position: 'absolute',
  top: '55%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

const Title = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '3rem',
  fontFamily: 'Comic Sans MS, sans-serif',
  color: '#FFF',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
});

const Subtitle = styled(Typography)({
  fontSize: '1.5rem',
  color: '#FFF',
  marginBottom: '30px',
});

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

const ArrowIcon = styled(ArrowForwardIcon)({
  marginLeft: '10px',
  fontSize: '2rem',
  verticalAlign: 'middle',
});

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
      Welcome to Security Lessons
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
