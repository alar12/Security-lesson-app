import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Lesson = ({ title, content, image, slides }) => {
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>{title}</h2>
      <p>{content}</p>
      {image && <img src={image} alt={title} style={{ width: '100%', height: 'auto' }} />}
      {slides && slides.length > 0 && (
        <div>
          <p>{slides[currentSlide]}</p>
          <button onClick={handlePreviousSlide} disabled={currentSlide === 0}>
            Previous
          </button>
          <button onClick={handleNextSlide} disabled={currentSlide === slides.length - 1}>
            Next
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default Lesson;
