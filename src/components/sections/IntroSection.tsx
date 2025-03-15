import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';

export const IntroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="intro"
      component={motion.section}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        minHeight: { xs: 'auto', md: '100vh' }, // Remove full-height requirement on mobile
        display: 'flex',
        flexDirection: 'column',
        justifyContent: { xs: 'flex-start', md: 'center' }, // Start from top on mobile
        pt: { xs: 2, md: 0 }, // Much less padding on top for mobile
        pb: { xs: 4, md: 0 },
        px: { xs: 2, md: 0 }, // Add some horizontal padding on mobile
        maxWidth: { xs: '100%', md: '85%' },
        mx: 'auto',
        alignItems: { xs: 'flex-start', md: 'center' }, // Left-align on mobile
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: { xs: 4, md: 5 },
        }}
      >
        <Box
          component="img"
          src="/yk_avatar.png"
          alt="Yogesh Krishnani"
          sx={{
            width: { xs: 180, md: 220 },
            height: 'auto',
            objectFit: 'cover',
            borderRadius: '50%',
            border: '2px solid',
            borderColor: 'transparent',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            mr: { md: 5 },
          }}
        />

        <Box>
          <Typography
            variant="h6"
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            color="primary"
            sx={{ mb: 1, fontWeight: 500 }}
          >
            Hi, my name is
          </Typography>

          <Typography
            variant="h1"
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            sx={{
              fontSize: { xs: '2.5rem', md: '4.5rem' },
              lineHeight: 1.1,
              mb: 2,
              color: 'text.primary',
            }}
          >
            Yogesh Krishnani.
          </Typography>

          <Typography
            variant="h2"
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            color="text.secondary"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.8rem' },
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            I build exceptional digital experiences.
          </Typography>

          <Typography
            variant="body1"
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            color="text.secondary"
            sx={{
              maxWidth: '600px',
              mb: 4,
              fontSize: '1.1rem',
            }}
          >
            I'm a Senior Software Engineer specializing in building user-friendly enterprise
            applications that solve real-world problems. Currently, I'm focused on creating scalable
            and accessible frontend experiences at{' '}
            <Box component="span" sx={{ color: 'primary.main', fontWeight: 500 }}>
              Alation
            </Box>
            .
          </Typography>

          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            direction="row"
            spacing={2}
          >
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={scrollToContact}
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                },
              }}
            >
              Get In Touch
            </Button>
            <Button
              variant="text"
              color="primary"
              size="large"
              component="a"
              href="/Yogesh_Krishnani_Resume.pdf"
              target="_blank"
            >
              View Resume
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
