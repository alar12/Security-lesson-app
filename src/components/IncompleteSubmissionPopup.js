import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

//popup for Incomplete Submission
const IncompleteSubmissionPopup = ({ open, onClose }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Incomplete Submission</DialogTitle>
    <DialogContent>
      <Typography variant="h6">All questions should be answered to submit.</Typography>
      <img src="https://www.freepnglogos.com/uploads/doraemon-png/gambar-doraemon-png-nangri-13.png" alt="Incomplete Submission" style={{ width: '40%', marginTop: 20, marginLeft: 100 }} />
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary" variant="contained">
        OK
      </Button>
    </DialogActions>
  </Dialog>
);

export default IncompleteSubmissionPopup;
