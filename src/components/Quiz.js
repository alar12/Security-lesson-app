import React, { useState } from 'react';
import { Button, FormControl, FormControlLabel, Radio, RadioGroup, Typography, Paper, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { motion } from 'framer-motion'; 
import IncompleteSubmissionPopup from './IncompleteSubmissionPopup'; 

//Quiz page renders quiz section from lessons.js file
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    margin: '0 auto',
    marginTop: theme.spacing(4),
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.1)',
    background: `linear-gradient(45deg, #FF5252, #FF1744, #FFD600)`,
    backgroundImage: `radial-gradient(circle at top left, #2196F3, #F44336, #009688)`,
    position: 'relative',
    overflow: 'hidden',
    transition: 'background-color 0.3s ease-in-out',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-50%',
      left: '-50%',
      width: '200%',
      height: '200%',
      backgroundImage: `radial-gradient(circle, #FFEB3B, #E91E63, #03A9F4)`,
      transform: 'rotate(45deg)',
      zIndex: -1,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '-20%',
      right: '-20%',
      width: '200%',
      height: '200%',
      backgroundImage: `radial-gradient(circle, #4CAF50, #FF9800, #9C27B0)`,
      transform: 'rotate(-45deg)',
      zIndex: -1,
    },
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
  question: {
    marginBottom: theme.spacing(2),
    color: '#FFFFFF',
  },
  submitButton: {
    marginTop: theme.spacing(3),
    backgroundColor: '#FFFFFF',
    color: '#333333',
    '&:hover': {
      backgroundColor: '#CCCCCC',
    },
  },
}));

const Quiz = ({ questions, onComplete }) => {
  const classes = useStyles();
  const [answers, setAnswers] = useState({});
  const [incompleteSubmissionPopupOpen, setIncompleteSubmissionPopupOpen] = useState(false); // State for controlling incomplete submission popup

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const allQuestionsAnswered = Object.keys(answers).length === questions.length;
    if (allQuestionsAnswered) {
      onComplete(answers);
    } else {
      setIncompleteSubmissionPopupOpen(true); // Show incomplete submission popup
    }
  };

  const handleCloseIncompleteSubmissionPopup = () => {
    setIncompleteSubmissionPopupOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className={classes.root}
    >
      <Typography variant="h4" gutterBottom>
        Quiz
      </Typography>
      {questions.map((question, index) => (
        <div key={index} className={classes.question}>
          <Typography variant="h6" gutterBottom>
            {question.question}
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label={question.question}
              name={question.question}
              value={answers[question.question] || ''}
              onChange={(event) => handleChange(event, index)}
            >
              {question.options.map((option, optionIndex) => (
                <FormControlLabel key={optionIndex} value={option} control={<Radio />} label={option} />
              ))}
            </RadioGroup>
          </FormControl>
        </div>
      ))}
      <Grid container justifyContent="center">
        <Grid item>
          <Button onClick={handleSubmit} variant="contained" className={classes.submitButton}>
            Submit
          </Button>
        </Grid>
      </Grid>
      <IncompleteSubmissionPopup open={incompleteSubmissionPopupOpen} onClose={handleCloseIncompleteSubmissionPopup} />
    </motion.div>
  );
};

export default Quiz;
