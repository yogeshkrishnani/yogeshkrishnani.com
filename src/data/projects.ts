export interface Project {
  title: string;
  description: string;
  impact: string;
  tech: string[];
  link: string;
}

export const projectsIntro = 'Things I built outside of work — for people who needed them.';

export const projects: Project[] = [
  {
    title: 'Vaccine Slot Notifier',
    description:
      "Built during India's COVID-19 vaccination rush when 18+ slots were impossible to find. The tool monitors availability across districts and beeps as soon as a slot opens — giving users a real-time edge over the second-long booking windows. Grew to 100,000+ sessions organically, with volunteers contributing features.",
    impact: '100,000+ sessions',
    tech: ['JavaScript', 'REST APIs', 'Web Notifications'],
    link: 'https://vaccine-notifier-4208a.web.app/',
  },
  {
    title: 'WhatsApp Stock Analysis Bot',
    description:
      'My dad understands Indian markets well but English financial reports were a barrier. So I built him a WhatsApp bot: send a stock name, get back fundamental analysis in Hindi, Gujarati, or English. Expanded to ~100 users helping retail investors get clarity without needing English fluency.',
    impact: '~100 active users',
    tech: ['WhatsApp API', 'AI', 'Python', 'Financial Data APIs'],
    link: 'https://wa.me/917405423161',
  },
];
