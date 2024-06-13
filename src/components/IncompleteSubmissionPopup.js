import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import incompleteSubmissionImage from '../images/retry.png';

const IncompleteSubmissionPopup = ({ open, onClose }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Incomplete Submission</DialogTitle>
    <DialogContent>
      <Typography variant="h6">All questions should be answered to submit.</Typography>
      <img src={incompleteSubmissionImage} alt="Incomplete Submission" style={{ width: '50%', marginTop: 20 }} />
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary" variant="contained">
        OK
      </Button>
    </DialogActions>
  </Dialog>
);

export default IncompleteSubmissionPopup;
