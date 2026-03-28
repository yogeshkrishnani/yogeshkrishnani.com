import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Box, Typography, Paper, Chip, Link } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Vaccine Slot Notifier',
    description:
      'Built during India\'s COVID-19 vaccination rush when 18+ slots were impossible to find. The tool monitors availability across districts and beeps as soon as a slot opens — giving users a real-time edge over the second-long booking windows. Grew to 100,000+ sessions organically, with volunteers contributing features.',
    impact: '100,000+ sessions',
    tech: ['JavaScript', 'REST APIs', 'Web Notifications'],
    link: 'https://vaccine-notifier-4208a.web.app/',
  },
  {
    title: 'WhatsApp Stock Analysis Bot',
    description:
      'My dad understands Indian markets well but English financial reports were a barrier. So I built him a WhatsApp bot: send a stock name, get back fundamental analysis in Hindi, Gujarati, or English. Expanded to ~100 users helping retail investors get clarity without needing English fluency.',
    impact: '~100 active users',
    tech: ['WhatsApp API', 'AI', 'Python', 'Financial Data APIs'],
    link: 'https://wa.me/917405423161',
  },
];

export const ProjectsSection = () => {
  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: 10,
        scrollMarginTop: '80px',
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
          Projects
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
          Things I built outside of work — for people who needed them.
        </Typography>

        <Grid container spacing={3}>
          {projects.map(project => (
            <Grid key={project.title} size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 0.2s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                  },
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    {project.title}
                  </Typography>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, ml: 1 }}
                  >
                    <OpenInNewIcon fontSize="small" />
                  </Link>
                </Box>

                <Chip
                  label={project.impact}
                  size="small"
                  color="primary"
                  variant="outlined"
                  sx={{ alignSelf: 'flex-start', mb: 2, borderRadius: '4px' }}
                />

                <Typography variant="body1" sx={{ lineHeight: 1.7, flexGrow: 1, mb: 2.5 }}>
                  {project.description}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project.tech.map(t => (
                    <Chip
                      key={t}
                      label={t}
                      variant="outlined"
                      size="small"
                      sx={{
                        borderRadius: '4px',
                        backgroundColor: 'background.default',
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
