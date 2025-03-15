import { ReactNode, SyntheticEvent, useState } from 'react';

import CircleIcon from '@mui/icons-material/Circle';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Paper,
  ListItemIcon,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`job-tabpanel-${index}`}
      aria-labelledby={`job-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export const ExperienceSection = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      id="experience"
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        scrollMarginTop: '80px',
        maxWidth: { xs: '100%', md: '85%' },
        mx: 'auto',
      }}
    >
      <Typography variant="h3" component="h2" sx={{ mb: 1 }}>
        Experience
      </Typography>

      <Box
        sx={{
          width: '60px',
          height: '4px',
          backgroundColor: 'primary.main',
          mb: 4,
        }}
      />

      {/* Mobile-optimized tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="company tabs"
          sx={{
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: 500,
              fontSize: '1rem',
              py: 2,
              px: 3,
              minWidth: 'auto',
            },
            '& .Mui-selected': {
              fontWeight: 600,
            },
          }}
        >
          {experiences.map((job, index) => (
            <Tab
              key={job.company}
              label={job.company}
              id={`job-tab-${index}`}
              aria-controls={`job-tabpanel-${index}`}
              sx={{
                borderBottom: 2,
                borderColor: value === index ? 'primary.main' : 'transparent',
              }}
            />
          ))}
        </Tabs>
      </Box>

      {/* Job content in TabPanels */}
      {experiences.map((job, index) => (
        <TabPanel key={job.company} value={value} index={index}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2.5, md: 3 },
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
            }}
          >
            <Typography variant="h5" sx={{ color: 'text.primary', mb: 1 }}>
              {job.title}
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                color: 'primary.main',
                fontWeight: 500,
                mb: 2,
              }}
            >
              @ {job.company}
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              {job.period}
            </Typography>

            <List sx={{ pl: 0.5 }}>
              {job.responsibilities.map((responsibility, idx) => (
                <ListItem
                  key={idx}
                  alignItems="flex-start"
                  sx={{
                    px: 0,
                    py: 1.5,
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 28, mt: 0.5 }}>
                    <CircleIcon sx={{ fontSize: 8, color: 'primary.main' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={responsibility}
                    primaryTypographyProps={{
                      variant: 'body1',
                      sx: { lineHeight: 1.6 },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </TabPanel>
      ))}
    </Box>
  );
};

const experiences = [
  {
    company: 'Alation',
    title: 'Senior Software Engineer',
    period: 'July 2021 — Present',
    responsibilities: [
      'Established and enforced UI standards & best practices to build a scalable, maintainable platform, ensuring consistent UX across features.',
      'Optimized front-end infrastructure for speed, stability, and delivery, leveraging TypeScript, Nx Monorepo, React, Material UI, and Vite.',
      'Ensured WCAG & Section 508 compliance, improving accessibility and usability, leading to a better user experience.',
      'Implemented internationalization (i18n) & localization (l10n), expanding platform reach to multiple markets.',
      'Led the adoption of end-to-end testing with Playwright, increasing test reliability and coverage, enhancing product quality and trust.',
    ],
  },
  {
    company: 'Infor',
    title: 'Senior Software Engineer',
    period: 'August 2018 — July 2021',
    responsibilities: [
      'Developed and maintained Birst, a BI & data analytics platform, focusing on dash-boarding and data visualization using Angular & AngularJS.',
      'Built and optimized an in-house data visualization engine capable of handling 100,000+ data points, improving performance and scalability.',
      'Developed and maintained Selenium & Jasmine automation suites with 1,000+ test cases, ensuring product stability and reducing regression bugs by 30%.',
    ],
  },
  {
    company: 'Streebo',
    title: 'Software Engineer',
    period: 'January 2014 — July 2018',
    responsibilities: [
      'Led a team of developers to design and implement scalable enterprise applications using Angular, Ionic, and IBM MobileFirst.',
      'Worked directly with clients across Chile, Singapore, UAE, the U.S., and the Philippines, traveling onsite for requirement gathering, production releases, and knowledge transfer.',
      'Set up and optimized IBM MobileFirst 8.0 infrastructure, including clustering, load balancing, and integration with backend systems for major enterprises like Etihad Airways and Dubai Health Authority.',
    ],
  },
];
