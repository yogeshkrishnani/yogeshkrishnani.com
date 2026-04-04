export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillsIntro = "Here are some technologies and skills I've been working with recently:";

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages & Frameworks',
    skills: ['React', 'TypeScript', 'JavaScript', 'Python', 'Go', 'Angular', 'HTML5', 'CSS3'],
  },
  {
    title: 'AI Tools & Workflow',
    skills: ['Claude', 'Cursor', 'GitHub Copilot', 'GitHub Actions', 'AI-Assisted Development'],
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
    skills: ['Git', 'JIRA', 'Figma', 'CI/CD', 'Webpack', 'npm/yarn'],
  },
];
