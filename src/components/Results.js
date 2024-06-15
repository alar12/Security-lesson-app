import React from 'react';
import { Button, Typography, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

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
    '& hr': {
      border: 'none',
      borderBottom: '1px solid #FFFFFF',
      marginBottom: theme.spacing(2),
    },
  },
  scoreText: {
    color: '#FFFFFF',
    marginBottom: theme.spacing(2),
  },
  questionText: {
    marginBottom: theme.spacing(1),
    color: '#FFFFFF',
  },
  button: {
    marginTop: theme.spacing(3),
    backgroundColor: '#FFFFFF',
    color: '#333333',
    '&:hover': {
      backgroundColor: '#CCCCCC',
    },
  },
}));

const Results = ({ score, totalQuestions, reviewQuiz, canProceed, onNextLesson, onRetry }) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.root}>
      <Typography variant="h4" className={classes.scoreText}>
        Quiz Results
      </Typography>
      <Typography variant="h5" className={classes.scoreText}>
        {`Score: ${score} / ${totalQuestions}`}
      </Typography>
      <div style={{ margin: '20px auto', width: '80%', textAlign: 'left' }}>
        {reviewQuiz.map((question, index) => (
          <div key={index}>
            <Typography variant="h6" className={classes.questionText}>
              {question.question}
            </Typography>
            <Typography className={classes.questionText}>
              {`Your answer: ${question.selected}`}
            </Typography>
            <Typography className={classes.questionText}>
              {`Correct answer: ${question.correct}`}
            </Typography>
            <hr />
          </div>
        ))}
      </div>
      {!canProceed && (
        <Button onClick={onRetry} variant="contained" className={classes.button}>
          Retry Quiz
        </Button>
      )}
      {canProceed && (
        <Button onClick={onNextLesson} variant="contained" className={classes.button}>
          Next Lesson
        </Button>
      )}
    </Paper>
  );
};

export default Results;
