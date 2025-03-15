// src/theme/theme.ts
import { createTheme, Theme } from '@mui/material/styles';

export const createAppTheme = (mode: 'light' | 'dark'): Theme => {
  return createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // Light mode
            primary: { main: '#007acc' }, // Blue accent
            secondary: { main: '#6d28d9' }, // Purple accent
            background: {
              default: '#f5f5f5', // Very light gray
              paper: '#ffffff', // White
            },
            text: {
              primary: '#222222', // Near black
              secondary: '#555555', // Dark gray
            },
            divider: 'rgba(0, 0, 0, 0.1)',
          }
        : {
            // Dark mode
            primary: { main: '#4dabf5' }, // Lighter blue for dark mode
            secondary: { main: '#9d71ea' }, // Lighter purple for dark mode
            background: {
              default: '#121212', // Dark background
              paper: '#1e1e1e', // Slightly lighter dark background
            },
            text: {
              primary: '#e0e0e0', // Light gray text
              secondary: '#a0a0a0', // Medium gray text
            },
            divider: 'rgba(255, 255, 255, 0.1)',
          }),
    },
    typography: {
      fontFamily: '"Helvetica Neue", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontWeight: 600,
        letterSpacing: '-0.01em',
      },
      h3: {
        fontWeight: 600,
        letterSpacing: '-0.01em',
      },
      h4: {
        fontWeight: 500,
        letterSpacing: '-0.01em',
      },
      h5: {
        fontWeight: 500,
      },
      h6: {
        fontWeight: 500,
      },
      body1: {
        lineHeight: 1.7,
      },
      body2: {
        lineHeight: 1.6,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 500,
            padding: '10px 24px',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow:
              mode === 'light' ? '0 4px 20px rgba(0,0,0,0.05)' : '0 4px 20px rgba(0,0,0,0.3)',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow:
              mode === 'light' ? '0 2px 10px rgba(0,0,0,0.05)' : '0 2px 10px rgba(0,0,0,0.2)',
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            margin: '32px 0',
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: mode === 'light' ? '#f5f5f5' : '#121212',
            scrollbarColor: mode === 'light' ? '#bbb #f5f5f5' : '#444 #121212',
            '&::-webkit-scrollbar': {
              width: '10px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: mode === 'light' ? '#f5f5f5' : '#121212',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: mode === 'light' ? '#bbb' : '#444',
              borderRadius: '6px',
              border: `3px solid ${mode === 'light' ? '#f5f5f5' : '#121212'}`,
            },
          },
        },
      },
    },
  });
};
