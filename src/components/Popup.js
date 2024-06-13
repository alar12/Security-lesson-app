import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import retry from '../images/retry.png';

const Popup = ({ open, onClose, onRetry }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Try Again</DialogTitle>
    <DialogContent>
      <Typography variant="h6">
        You need to score full marks to proceed to the next lesson.
      </Typography>
      <img src={retry} alt="Encouraging" style={{width: '50%', marginTop: 20, marginLeft: 100, }} />
    </DialogContent>
    <DialogActions>
      <Button onClick={onRetry} color="primary" variant="contained">Back</Button>
    </DialogActions>
  </Dialog>
);

export default Popup;
