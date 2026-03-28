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
              Hello! I'm Yogesh, a full-stack engineer building AI-native products at Alation —
              where the goal is making enterprise data trustworthy and useful, for both humans and
              AI systems.
            </Typography>

            <Typography paragraph>
              I started as a frontend engineer in 2014 and have since expanded across the stack.
              Today I work with React, TypeScript, Python, Go, and CI/CD — using AI tools (Claude,
              Cursor, Copilot) daily to move faster and ship more reliably across the entire
              codebase.
            </Typography>

            <Typography paragraph>
              Outside of work, I build things that matter to me: a vaccine slot notifier used by
              100,000+ people during India's COVID rush, and a WhatsApp stock analysis bot in Hindi
              and Gujarati — because my dad understands markets but not English financial jargon.
            </Typography>

            <Typography>
              When I'm not at the computer, I'm usually playing badminton or spending time with
              family.
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
                  12+ years of engineering experience
                </Typography>
                <Typography component="li" sx={{ mb: 1 }}>
                  Full-stack: React, TypeScript, Python, Go
                </Typography>
                <Typography component="li" sx={{ mb: 1 }}>
                  AI-native workflow: Claude, Cursor, Copilot
                </Typography>
                <Typography component="li" sx={{ mb: 1 }}>
                  Building data governance products at Alation
                </Typography>
                <Typography component="li">
                  MCA from Gujarat University
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
};
