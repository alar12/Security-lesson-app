import React, { useState } from 'react';
import { Button, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import IncompleteSubmissionPopup from './IncompleteSubmissionPopup'; // Import the new popup component

const Quiz = ({ questions, onComplete }) => {
  const [answers, setAnswers] = useState({});
  const [incompleteSubmissionPopupOpen, setIncompleteSubmissionPopupOpen] = useState(false); // State for controlling incomplete submission popup

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    setAnswers(prevAnswers => ({
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
    <div style={{ marginLeft: 50 , marginTop: 50 }}>
      <Typography variant="h4">Quiz</Typography>
      {questions.map((question, index) => (
        <div key={index} style={{ marginBottom: 20 }}>
          <Typography variant="h6">{question.question}</Typography>
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
      <Button onClick={handleSubmit} color="primary" variant="contained" style={{ marginTop: 20 }}>
        Submit
      </Button>
      <IncompleteSubmissionPopup open={incompleteSubmissionPopupOpen} onClose={handleCloseIncompleteSubmissionPopup} />
    </div>
  );
};

export default Quiz;
