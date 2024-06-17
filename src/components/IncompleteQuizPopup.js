import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

//popup for Incomplete Quiz
const IncompleteQuizPopup = ({ open, onClose }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Incomplete Quiz</DialogTitle>
    <DialogContent>
      <Typography variant="h6">You should complete the quiz first.</Typography>
      <img src="https://www.freepnglogos.com/uploads/doraemon-png/doraemon-characters-png-picture-16.png" alt="Incomplete Quiz" style={{ width: '50%', marginTop: 20, marginLeft: 100 }} />
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary" variant="contained">
        OK
      </Button>
    </DialogActions>
  </Dialog>
);

export default IncompleteQuizPopup;
