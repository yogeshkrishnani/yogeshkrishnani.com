import { useEffect } from 'react';

import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  Box,
  Container,
  Toolbar,
} from '@mui/material';

import { BackToTop } from './components/common/BackToTop';
import { Footer } from './components/layout/Footer';
import { Navigation } from './components/layout/Navigation';
import { SectionsProvider } from './components/layout/Sections';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { IntroSection } from './components/sections/IntroSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { createAppTheme } from './theme/theme';

const AppContent = () => {
  const { mode } = useTheme();
  const theme = createAppTheme(mode);

  // Update HTML background color when theme changes
  useEffect(() => {
    document.documentElement.style.backgroundColor = mode === 'light' ? '#f5f5f5' : '#121212';
    document.body.style.backgroundColor = mode === 'light' ? '#f5f5f5' : '#121212';
  }, [mode]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <SectionsProvider>
        <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Navigation />
          <Toolbar /> {/* Spacer for fixed navbar */}
          <Container
            maxWidth="xl"
            component="main"
            sx={{
              flexGrow: 1,
              px: { xs: 4, sm: 6, md: 8 },
              mx: 'auto',
              width: '100%',
              maxWidth: '1400px', // Custom max width
            }}
          >
            <IntroSection />
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <ContactSection />
          </Container>
          <Footer />
          <BackToTop />
        </Box>
      </SectionsProvider>
    </MuiThemeProvider>
  );
};

export const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};
