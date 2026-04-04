import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { personalInfo } from '@/data/personal';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-[--color-divider]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12 text-center">
        {/* Social icons */}
        <div className="flex justify-center gap-4 mb-4">
          <a
            href={personalInfo.contact.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[--color-text-secondary] hover:text-[--color-accent-primary] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={personalInfo.contact.linkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[--color-text-secondary] hover:text-[--color-accent-primary] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href={personalInfo.contact.email.url}
            className="text-[--color-text-secondary] hover:text-[--color-accent-primary] transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Attribution */}
        <p className="text-sm text-[--color-text-secondary] mb-2">
          Designed & Built by {personalInfo.name}
        </p>

        {/* Copyright */}
        <p className="text-xs text-[--color-text-secondary]">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
