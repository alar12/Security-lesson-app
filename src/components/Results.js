import React from 'react';
import { Button, Typography } from '@mui/material';

const Results = ({ score, totalQuestions, reviewQuiz, canProceed, onNextLesson, onRetry }) => (
  <div style={{ textAlign: 'center', marginTop: 50 }}>
    <Typography variant="h4">Quiz Results</Typography>
    <Typography variant="h5">{`Score: ${score} / ${totalQuestions}`}</Typography>
    <div style={{ margin: '20px auto', width: '80%', textAlign: 'left' }}>
      {reviewQuiz.map((question, index) => (
        <div key={index}>
          <Typography variant="h6">{question.question}</Typography>
          <Typography>{`Your answer: ${question.selected}`}</Typography>
          <Typography>{`Correct answer: ${question.correct}`}</Typography>
          <hr />
        </div>
      ))}
    </div>
    {!canProceed && (
      <Button onClick={onRetry} color="primary" variant="contained" style={{ marginTop: 20 }}>
        Retry Quiz
      </Button>
    )}
    {canProceed && (
      <Button onClick={onNextLesson} color="primary" variant="contained" style={{ marginTop: 20 }}>
        Next Lesson
      </Button>
    )}
  </div>
);

export default Results;
