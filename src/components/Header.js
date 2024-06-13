import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = ({ onBack, onNext, onMain }) => (
  <AppBar position="static">
    <Toolbar>
      <Button color="inherit" onClick={onMain}>Main</Button>
      <Button color="inherit" onClick={onBack}>Back</Button>
      <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
        Security for Kids
      </Typography>
      <Button color="inherit" onClick={onNext}>Next</Button>
    </Toolbar>
  </AppBar>
);

export default Header;
