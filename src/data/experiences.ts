export interface Experience {
  company: string;
  title: string;
  period: string;
  isCurrent: boolean;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Alation',
    title: 'Senior Software Engineer',
    period: 'July 2021 — Present',
    isCurrent: true,
    responsibilities: [
      'Contributed to the launch of Curation Automation (GA, 2026) — AI agents that automate metadata enrichment across thousands of data assets, replacing manual stewardship at scale and enabling continuous compliance.',
      'Expanded scope beyond frontend to ship Python, Go, and CI/CD pipelines, leveraging AI-assisted development (Claude, Cursor, Copilot) to contribute reliably across the full stack.',
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
    isCurrent: false,
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
    isCurrent: false,
    responsibilities: [
      'Led a team of developers to design and implement scalable enterprise applications using Angular, Ionic, and IBM MobileFirst.',
      'Worked directly with clients across Chile, Singapore, UAE, the U.S., and the Philippines, traveling onsite for requirement gathering, production releases, and knowledge transfer.',
      'Set up and optimized IBM MobileFirst 8.0 infrastructure, including clustering, load balancing, and integration with backend systems for major enterprises like Etihad Airways and Dubai Health Authority.',
    ],
  },
];
