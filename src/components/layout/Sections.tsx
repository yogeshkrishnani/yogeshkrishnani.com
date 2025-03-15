import { createContext, useContext, ReactNode, useState, useEffect, useMemo } from 'react';

import { getMostVisibleSection } from '@/utils/scrollUtils.ts';

export type SectionId = 'intro' | 'about' | 'experience' | 'skills' | 'contact';

interface SectionsContextType {
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;
  sections: SectionId[];
}

const SectionsContext = createContext<SectionsContextType | undefined>(undefined);

export const SectionsProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState<SectionId>('intro');
  const sections: SectionId[] = useMemo(
    () => ['intro', 'about', 'experience', 'skills', 'contact'],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const mostVisibleSection = getMostVisibleSection(sections);
      setActiveSection(mostVisibleSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <SectionsContext.Provider value={{ activeSection, setActiveSection, sections }}>
      {children}
    </SectionsContext.Provider>
  );
};

export const useSections = () => {
  const context = useContext(SectionsContext);
  if (context === undefined) {
    throw new Error('useSections must be used within a SectionsProvider');
  }
  return context;
};
