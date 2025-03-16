// src/components/layout/Navigation.tsx
import { useState, useEffect } from 'react';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Container,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';

import { useSections, SectionId } from './Sections';
import { useTheme as useAppTheme } from '../../context/ThemeContext';

const navigationLinks = [
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
  { name: 'Contact', id: 'contact' },
];

export const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const { mode, toggleTheme } = useAppTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { activeSection, setActiveSection } = useSections();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId: SectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      if (mobileOpen) setMobileOpen(false);
    }
  };

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={0}
      sx={{
        transition: 'all 0.3s ease',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.05)' : 'none',
        width: '100%',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 4, sm: 6, md: 8 },
          maxWidth: '1400px',
        }}
      >
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Button
            color="inherit"
            onClick={() => scrollToSection('intro')}
            sx={{
              fontWeight: 700,
              textDecoration: 'none',
              color: 'text.primary',
              letterSpacing: '-0.02em',
            }}
          >
            <Typography
              variant="h6"
              component="span"
              sx={{ fontFamily: '"SF Mono", "Fira Code", monospace' }}
            >
              {'<YK/>'}
            </Typography>
          </Button>

          {/* Navigation Links */}
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {navigationLinks.map(item => (
                <Button
                  color="inherit"
                  onClick={() => scrollToSection(item.id as SectionId)}
                  key={item.id}
                  sx={{
                    mx: 1.5,
                    color: activeSection === item.id ? 'primary.main' : 'text.secondary',
                    position: 'relative',
                    fontWeight: 500,
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: activeSection === item.id ? '100%' : '0%',
                      height: '2px',
                      bottom: -4,
                      left: 0,
                      backgroundColor: 'primary.main',
                      transition: 'width 0.2s ease',
                    },
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'transparent',
                      '&::after': {
                        width: '100%',
                      },
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}

              <IconButton
                sx={{ ml: 2 }}
                onClick={toggleTheme}
                color="inherit"
                aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
              >
                {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
              </IconButton>

              <Button
                variant="outlined"
                color="primary"
                component="a"
                href="/Yogesh_Krishnani_Resume.pdf"
                target="_blank"
                sx={{ ml: 2 }}
              >
                Resume
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              borderRadius: 0,
              width: 240,
              boxShadow: 3,
              background: theme => theme.palette.background.paper,
            },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ width: '100%' }}>
            <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Yogesh Krishnani
              </Typography>
            </Box>

            <List sx={{ py: 0 }}>
              {navigationLinks.map(item => (
                <ListItem
                  key={item.id}
                  component="div"
                  disablePadding
                  sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                  }}
                >
                  <ListItemButton
                    onClick={() => {
                      scrollToSection(item.id as SectionId);
                      handleDrawerToggle();
                    }}
                    sx={{
                      py: 2,
                      color: activeSection === item.id ? 'primary.main' : 'inherit',
                    }}
                  >
                    <ListItemText
                      primary={item.name}
                      slotProps={{
                        primary: {
                          fontWeight: activeSection === item.id ? 600 : 400,
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}

              <ListItem
                component="div"
                disablePadding
                sx={{
                  borderBottom: 1,
                  borderColor: 'divider',
                }}
              >
                <ListItemButton onClick={toggleTheme} sx={{ py: 2 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
                  </ListItemIcon>
                  <ListItemText primary={`Toggle ${mode === 'light' ? 'Dark' : 'Light'} Mode`} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>
    </AppBar>
  );
};
