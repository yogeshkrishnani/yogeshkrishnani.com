import { Box, Typography, Chip, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: ['React', 'Angular', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SASS/LESS'],
  },
  {
    title: 'UI Frameworks & Libraries',
    skills: ['Material UI', 'Angular Material', 'Bootstrap', 'Tailwind CSS', 'Nx Monorepo', 'Vite'],
  },
  {
    title: 'Quality Assurance',
    skills: [
      'Playwright',
      'Selenium',
      'Jasmine',
      'Jest',
      'Testing Library',
      'End-to-End Testing',
      'Unit Testing',
    ],
  },
  {
    title: 'Specializations',
    skills: [
      'Accessibility (WCAG & Section 508)',
      'UI Standards',
      'Frontend Infrastructure',
      'Internationalization (i18n)',
      'Localization (l10n)',
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'JIRA', 'Figma', 'IBM MobileFirst', 'CI/CD', 'Webpack', 'npm/yarn'],
  },
  {
    title: 'Soft Skills',
    skills: [
      'Team Leadership',
      'Client Communication',
      'Mentoring',
      'Requirements Analysis',
      'Technical Documentation',
    ],
  },
];

export const SkillsSection = () => {
  return (
    <Box
      id="skills"
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
          Skills
        </Typography>

        <Box
          sx={{
            width: '60px',
            height: '4px',
            backgroundColor: 'primary.main',
            mb: 4,
          }}
        />

        <Typography sx={{ mb: 4 }}>
          Here are some technologies and skills I've been working with recently:
        </Typography>

        <Grid container spacing={3}>
          {skillCategories.map(category => (
            <Grid key={category.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="h6" gutterBottom color="primary">
                  {category.title}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {category.skills.map(skill => (
                    <Chip
                      key={skill}
                      label={skill}
                      variant="outlined"
                      size="medium"
                      sx={{
                        my: 0.5,
                        borderRadius: '4px',
                        backgroundColor: 'background.default',
                        '&:hover': {
                          backgroundColor: 'action.hover',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};
