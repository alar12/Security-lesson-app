import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Typography, IconButton, Paper, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
  title: {
    color: '#FFFFFF',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    textTransform: 'uppercase',
  },
  content: {
    fontSize: '1.2rem',
    marginBottom: theme.spacing(3),
    lineHeight: 1.6,
    color: '#FFFFFF',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: theme.spacing(2),
    marginTop: theme.spacing(3),
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  slidesContainer: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(4),
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: theme.spacing(2),
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  slidesText: {
    marginBottom: theme.spacing(3),
    textAlign: 'center',
    fontSize: '1.4rem',
    color: '#333333',
  },
  navigationButtons: {
    marginTop: theme.spacing(3),
  },
  navigationButton: {
    margin: theme.spacing(2),
    backgroundColor: '#FFFFFF',
    color: '#333333',
    '&:hover': {
      backgroundColor: '#CCCCCC',
    },
  },
}));

const Lesson = ({ title, content, image, slides }) => {
  const classes = useStyles();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className={classes.root}
    >
      <Typography variant="h2" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="body1" className={classes.content}>
        {content}
      </Typography>
      {image && (
        <img src={image} alt={title} className={classes.image} />
      )}
      {slides && slides.length > 0 && (
        <Paper elevation={3} className={classes.slidesContainer}>
          <Typography variant="body1" className={classes.slidesText}>
            {slides[currentSlide]}
          </Typography>
          <Grid container justifyContent="center" className={classes.navigationButtons}>
            <Grid item>
              <IconButton
                color="primary"
                aria-label="Previous Slide"
                onClick={handlePreviousSlide}
                disabled={currentSlide === 0}
                className={classes.navigationButton}
              >
                <ArrowBackIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                color="primary"
                aria-label="Next Slide"
                onClick={handleNextSlide}
                disabled={currentSlide === slides.length - 1}
                className={classes.navigationButton}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
      )}
    </motion.div>
  );
};

export default Lesson;
