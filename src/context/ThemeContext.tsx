import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>('light');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme') as ThemeMode;
    if (savedTheme) {
      setMode(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // Use user's system preference as fallback
      setMode('dark');
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('theme', mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return <ThemeContext.Provider value={{ mode, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
