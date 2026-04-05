import { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

import { navigationLinks } from '@/data/navigation';
import { personalInfo } from '@/data/personal';

import { useSections, SectionId } from './Sections';
import { useTheme } from '../../context/ThemeContext';

export const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { mode, toggleTheme } = useTheme();
  const { activeSection, setActiveSection } = useSections();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const scrollToSection = (sectionId: SectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      if (mobileOpen) setMobileOpen(false);
    }
  };

  return (
    <>
      {/* Header bar */}
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled ? 'backdrop-blur-md bg-[--color-bg-default]/80' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('intro')}
            className="font-bold text-[--color-text-primary] tracking-[-0.02em] cursor-pointer bg-transparent border-none"
          >
            <span className="text-lg font-mono">{'<YK/>'}</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigationLinks.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors cursor-pointer bg-transparent border-none ${
                  activeSection === item.id
                    ? 'text-[--color-accent-primary]'
                    : 'text-[--color-text-secondary] hover:text-[--color-accent-primary]'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[--color-accent-primary]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="ml-3 p-2 text-[--color-text-secondary] hover:text-[--color-accent-primary] transition-colors cursor-pointer bg-transparent border-none"
              aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
            >
              {mode === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Resume button */}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-4 py-1.5 text-sm font-medium border border-[--color-accent-primary] text-[--color-accent-primary] rounded-lg hover:opacity-80 transition-opacity"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[--color-text-primary] cursor-pointer bg-transparent border-none"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer — outside header so z-index is independent */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay — covers everything including the header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 w-60 h-full min-h-screen z-[60] shadow-xl md:hidden overflow-y-auto"
              style={{ backgroundColor: 'var(--color-bg-paper)' }}
            >
              {/* Close button + Name — matches nav bar h-16 */}
              <div className="flex items-center justify-between px-4 h-16">
                <span className="font-semibold text-[--color-text-primary]">
                  {personalInfo.name}
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1 text-[--color-text-secondary] cursor-pointer bg-transparent border-none"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <ul className="py-2">
                {navigationLinks.map(item => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-6 py-3 text-sm transition-colors cursor-pointer bg-transparent border-none ${
                        activeSection === item.id
                          ? 'text-[--color-accent-primary] font-semibold'
                          : 'text-[--color-text-secondary] hover:text-[--color-accent-primary]'
                      }`}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Theme toggle */}
              <div className="px-6 py-3 border-t border-[--color-divider]">
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-3 text-sm text-[--color-text-secondary] cursor-pointer bg-transparent border-none"
                >
                  {mode === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                  <span>Toggle {mode === 'light' ? 'Dark' : 'Light'} Mode</span>
                </button>
              </div>

              {/* Resume link */}
              <div className="px-6 py-3">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-4 py-2 text-sm font-medium border border-[--color-accent-primary] text-[--color-accent-primary] rounded-lg hover:opacity-80 transition-opacity"
                >
                  Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
