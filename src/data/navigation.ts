import { SectionId } from '@/components/layout/Sections';

export interface NavigationLink {
  name: string;
  id: SectionId;
}

export const navigationLinks: NavigationLink[] = [
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];
