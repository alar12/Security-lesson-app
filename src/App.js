import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Lesson from './components/Lesson';
import Quiz from './components/Quiz';
import Results from './components/Results';
import Popup from './components/Popup';
import IncompleteQuizPopup from './components/IncompleteQuizPopup';
import lessons from './lessons';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentLesson, setCurrentLesson] = useState(0);
  const [isQuiz, setIsQuiz] = useState(false);
  const [isResults, setIsResults] = useState(false);
  const [score, setScore] = useState(0);
  const [canProceed, setCanProceed] = useState(false);
  const [reviewQuiz, setReviewQuiz] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [incompleteQuizPopupOpen, setIncompleteQuizPopupOpen] = useState(false);

  const handleStart = () => {
    setCurrentPage('lesson');
    setIsQuiz(false);
    setIsResults(false);
  };

  const handleNext = () => {
    if (isResults) {
      if (canProceed) {
        if (currentLesson < lessons.length - 1) {
          setCurrentLesson(currentLesson + 1);
          setIsQuiz(false);
          setIsResults(false);
          setCanProceed(false);
          setReviewQuiz(null);
        } else {
          setCurrentPage('home');
        }
      } else {
        setPopupOpen(true);
      }
    } else if (isQuiz) {
      const allQuestionsAnswered = reviewQuiz && reviewQuiz.every((question) => question.selected !== '');
      if (allQuestionsAnswered) {
        setIsResults(true);
      } else {
        setIncompleteQuizPopupOpen(true);
      }
    } else {
      setIsQuiz(true);
    }
  };

  const handleBack = () => {
    if (isResults) {
      setIsResults(false);
      setIsQuiz(true);
      setReviewQuiz(null);
    } else if (isQuiz) {
      setIsQuiz(false);
    } else {
      if (currentLesson > 0) {
        setCurrentLesson(currentLesson - 1);
        setIsQuiz(true);
        setReviewQuiz(null);
      } else {
        setCurrentPage('home');
      }
    }
  };

  const handleQuizComplete = (answers) => {
    let correctAnswers = 0;
    let reviewData = [];

    lessons[currentLesson].quiz.forEach((question) => {
      const answer = answers[question.question];
      if (answer === question.correct) {
        correctAnswers += 1;
      }
      reviewData.push({
        question: question.question,
        selected: answer,
        correct: question.correct,
      });
    });

    setScore(correctAnswers);
    setReviewQuiz(reviewData);
    setIsResults(true);
    setCanProceed(correctAnswers === lessons[currentLesson].quiz.length);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const handleCloseIncompleteQuizPopup = () => {
    setIncompleteQuizPopupOpen(false);
  };

  const handleRetryQuiz = () => {
    setPopupOpen(false);
    setIsResults(false);
    setIsQuiz(true);
    setReviewQuiz(null);
  };

  return (
    <div>
      <Header onBack={handleBack} onNext={handleNext} onMain={() => setCurrentPage('home')} />
      {currentPage === 'home' && <Home onStart={handleStart} />}
      {currentPage === 'lesson' && (
        <>
          {isResults ? (
            <Results
              score={score}
              totalQuestions={lessons[currentLesson].quiz.length}
              reviewQuiz={reviewQuiz}
              canProceed={canProceed}
              onNextLesson={handleNext}
              onRetry={handleRetryQuiz}
            />
          ) : isQuiz ? (
            <Quiz questions={lessons[currentLesson].quiz} onComplete={handleQuizComplete} />
          ) : (
            <Lesson
              title={lessons[currentLesson].title}
              content={lessons[currentLesson].content}
              image={lessons[currentLesson].image}
              slides={lessons[currentLesson].slides}
            />
          )}
        </>
      )}
      <Popup open={popupOpen} onClose={handleClosePopup} onRetry={handleRetryQuiz} />
      <IncompleteQuizPopup open={incompleteQuizPopupOpen} onClose={handleCloseIncompleteQuizPopup} />
    </div>
  );
};

export default App;
