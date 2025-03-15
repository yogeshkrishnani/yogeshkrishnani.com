import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, Typography, Button, Link, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { motion } from 'framer-motion';

export const ContactSection = () => {
  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: 10,
        scrollMarginTop: '80px',
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: { xs: '100%', md: '85%' },
        mx: 'auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h2" sx={{ mb: 1 }}>
          Get In Touch
        </Typography>

        <Box
          sx={{
            width: '60px',
            height: '4px',
            backgroundColor: 'primary.main',
            mb: 4,
          }}
        />

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography paragraph sx={{ fontSize: '1.1rem' }}>
              I'm currently open to new opportunities where I can leverage my skills in frontend
              development and UI architecture. Whether you have a question or just want to say hi,
              I'll try my best to get back to you!
            </Typography>

            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<EmailIcon />}
              href="mailto:yogesh.h.krishnani@gmail.com"
              sx={{ mt: 2 }}
            >
              Email Me
            </Button>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ mr: 2, fontSize: 24 }} color="primary" />
                <Box>
                  <Typography variant="subtitle1" fontWeight="medium">
                    Email
                  </Typography>
                  <Link
                    href="mailto:yogesh.h.krishnani@gmail.com"
                    color="inherit"
                    sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                  >
                    yogesh.h.krishnani@gmail.com
                  </Link>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LinkedInIcon sx={{ mr: 2, fontSize: 24 }} color="primary" />
                <Box>
                  <Typography variant="subtitle1" fontWeight="medium">
                    LinkedIn
                  </Typography>
                  <Link
                    href="https://linkedin.com/in/yogeshkrishnani"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                  >
                    linkedin.com/in/yogeshkrishnani
                  </Link>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <GitHubIcon sx={{ mr: 2, fontSize: 24 }} color="primary" />
                <Box>
                  <Typography variant="subtitle1" fontWeight="medium">
                    GitHub
                  </Typography>
                  <Link
                    href="https://github.com/yogeshkrishnani"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                  >
                    github.com/yogeshkrishnani
                  </Link>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneIcon sx={{ mr: 2, fontSize: 24 }} color="primary" />
                <Box>
                  <Typography variant="subtitle1" fontWeight="medium">
                    Phone
                  </Typography>
                  <Link
                    href="tel:+919898619162"
                    color="inherit"
                    sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                  >
                    +91 9898619162
                  </Link>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
};
