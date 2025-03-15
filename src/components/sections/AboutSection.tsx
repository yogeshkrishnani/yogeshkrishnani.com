// src/components/sections/AboutSection.tsx
import { Box, Typography, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: 10,
        scrollMarginTop: '80px', // Offset for sticky header
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
          About Me
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
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography paragraph>
              Hello! I'm Yogesh, a Senior Software Engineer with a passion for crafting intuitive,
              high-performing front-end experiences. My journey in software development started back
              in 2014 when I began working with enterprise clients at Streebo.
            </Typography>

            <Typography paragraph>
              Fast-forward to today, and I've had the privilege of working at a BI & data analytics
              company, a digital transformation agency, and now at Alation where I focus on building
              scalable, user-friendly enterprise applications that solve real-world problems and
              make a tangible difference.
            </Typography>

            <Typography paragraph>
              My main focus these days is establishing UI standards and optimizing infrastructure to
              ensure scalable and maintainable platforms that deliver consistent and engaging user
              experiences. I'm also a strong advocate for accessibility, committed to improving
              usability through compliance with WCAG and Section 508 standards.
            </Typography>

            <Typography>
              When I'm not at the computer, I'm usually playing badminton, exploring new
              technologies, or spending time with family.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                backgroundColor: 'background.default',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography variant="h6" gutterBottom>
                Quick Facts
              </Typography>

              <Box component="ul" sx={{ pl: 2 }}>
                <Typography component="li" sx={{ mb: 1 }}>
                  Based in Ahmedabad, India
                </Typography>
                <Typography component="li" sx={{ mb: 1 }}>
                  10+ years of experience in frontend development
                </Typography>
                <Typography component="li" sx={{ mb: 1 }}>
                  Specialized in React, Angular, and TypeScript
                </Typography>
                <Typography component="li" sx={{ mb: 1 }}>
                  Expert in accessibility and UI standards
                </Typography>
                <Typography component="li" sx={{ mb: 1 }}>
                  Experience working with global clients across multiple industries
                </Typography>
                <Typography component="li">
                  Master of Computer Applications (MCA) from Gujarat University
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
};
