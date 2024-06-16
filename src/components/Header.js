import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#3F51B5', // Dark blue background color
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow
  },
  toolbar: {
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.5rem', // Larger font size
    color: '#FFF', // White text color
    textTransform: 'uppercase', // Uppercase text
    letterSpacing: '1px', // Letter spacing
  },
  button: {
    color: '#FFF', // White text color
    backgroundColor: '#2196F3', // Bright blue background color
    borderRadius: '25px', // Rounded corners
    padding: '10px 20px', // Larger padding
    '&:hover': {
      backgroundColor: '#1976D2', // Darker blue on hover
    },
  },
  iconButton: {
    color: '#FFF', // White icon color
    '&:hover': {
      backgroundColor: '#1976D2', // Darker blue on hover
    },
  },
}));

const Header = ({ onBack, onNext, onMain }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton className={classes.button} onClick={onMain}>
          Main
        </IconButton>
        <IconButton className={classes.iconButton} onClick={onBack}>
          <ArrowBackIcon />
          Back
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Security for Kids
        </Typography>
        <IconButton className={classes.iconButton} onClick={onNext}>
          Next
          <ArrowForwardIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
