import { LazyMotion, domAnimation } from 'framer-motion';

import { BackToTop } from './components/common/BackToTop';
import { ScrollProgress } from './components/common/ScrollProgress';
import { Footer } from './components/layout/Footer';
import { Navigation } from './components/layout/Navigation';
import { SectionsProvider } from './components/layout/Sections';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { IntroSection } from './components/sections/IntroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ThemeProvider } from './context/ThemeContext';

export const App = () => (
  <ThemeProvider>
    <LazyMotion features={domAnimation}>
      <SectionsProvider>
        <ScrollProgress />
        <div className="min-h-screen w-full flex flex-col relative overflow-hidden bg-[--color-bg-default]">
          <Navigation />
          <div className="h-16" />
          <main className="flex-grow">
            <IntroSection />
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          <Footer />
          <BackToTop />
        </div>
      </SectionsProvider>
    </LazyMotion>
  </ThemeProvider>
);
