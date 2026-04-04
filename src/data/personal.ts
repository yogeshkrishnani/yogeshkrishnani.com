export interface ContactInfo {
  email: { url: string; display: string };
  linkedIn: { url: string; display: string };
  github: { url: string; display: string };
  phone: { url: string; display: string };
}

export interface PersonalInfo {
  name: string;
  greeting: string;
  tagline: string;
  bio: string;
  resumeUrl: string;
  avatarUrl: string;
  aboutParagraphs: string[];
  quickFacts: string[];
  contact: ContactInfo;
}

export const personalInfo: PersonalInfo = {
  name: 'Yogesh Krishnani',
  greeting: "Hi, I'm",
  tagline: 'I build software for the agentic era.',
  bio: "I'm a full-stack engineer at Alation, building AI-native software that helps enterprises govern and understand their data. Shipping across React, TypeScript, Python, Go, and CI/CD — with AI as a core part of how I work.",
  resumeUrl: '/Yogesh_Krishnani_Resume.pdf',
  avatarUrl: '/yk_avatar.png',
  aboutParagraphs: [
    "Hello! I'm Yogesh, a full-stack engineer building AI-native products at Alation — where the goal is making enterprise data trustworthy and useful, for both humans and AI systems.",
    'I started as a frontend engineer in 2014 and have since expanded across the stack. Today I work with React, TypeScript, Python, Go, and CI/CD — using AI tools (Claude, Cursor, Copilot) daily to move faster and ship more reliably across the entire codebase.',
    "Outside of work, I build things that matter to me: a vaccine slot notifier used by 100,000+ people during India's COVID rush, and a WhatsApp stock analysis bot in Hindi and Gujarati — because my dad understands markets but not English financial jargon.",
    "When I'm not at the computer, I'm usually playing badminton or spending time with family.",
  ],
  quickFacts: [
    'Based in Ahmedabad, India',
    '12+ years of engineering experience',
    'Full-stack: React, TypeScript, Python, Go',
    'AI-native workflow: Claude, Cursor, Copilot',
    'Building data governance products at Alation',
    'MCA from Gujarat University',
  ],
  contact: {
    email: {
      url: 'mailto:yogesh.h.krishnani@gmail.com',
      display: 'yogesh.h.krishnani@gmail.com',
    },
    linkedIn: {
      url: 'https://linkedin.com/in/yogeshkrishnani',
      display: 'linkedin.com/in/yogeshkrishnani',
    },
    github: {
      url: 'https://github.com/yogeshkrishnani',
      display: 'github.com/yogeshkrishnani',
    },
    phone: {
      url: 'tel:+919898619162',
      display: '+91 9898619162',
    },
  },
};
