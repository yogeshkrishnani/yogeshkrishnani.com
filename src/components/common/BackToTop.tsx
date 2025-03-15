import { useState, useEffect } from 'react';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fab, Zoom } from '@mui/material';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event handler
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={isVisible}>
      <Fab
        color="primary"
        size="small"
        aria-label="scroll back to top"
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1000,
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};
