import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { useTheme } from '@/context/ThemeContext';
import { personalInfo } from '@/data/personal';

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    display: personalInfo.contact.email.display,
    url: personalInfo.contact.email.url,
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    display: personalInfo.contact.linkedIn.display,
    url: personalInfo.contact.linkedIn.url,
    external: true,
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    display: personalInfo.contact.github.display,
    url: personalInfo.contact.github.url,
    external: true,
  },
  {
    icon: Phone,
    label: 'Phone',
    display: personalInfo.contact.phone.display,
    url: personalInfo.contact.phone.url,
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export const ContactSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const { mode } = useTheme();

  return (
    <section
      id="contact"
      className="scroll-mt-20 py-32 md:py-40 max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12"
      style={{ paddingBottom: '64px' }}
    >
      <motion.div
        className="text-center"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={
          prefersReducedMotion ? { duration: 0 } : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
      >
        {/* Big bold heading */}
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[--color-text-primary] mb-6 leading-[1.1]">
          Let&apos;s build
          <br />
          <span className="hero-gradient-text">something together.</span>
        </h2>

        <p className="text-lg text-[--color-text-secondary] mb-12 max-w-md mx-auto leading-relaxed">
          Always open to interesting conversations and new opportunities.
        </p>

        <a
          href={personalInfo.contact.email.url}
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
          style={{
            backgroundColor: mode === 'dark' ? '#e0e0e0' : '#1a1a1a',
            color: mode === 'dark' ? '#121212' : '#ffffff',
          }}
        >
          <Mail size={20} />
          Say Hello
        </a>

        {/* Contact grid */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
          variants={prefersReducedMotion ? undefined : container}
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={{ once: true, margin: '-50px' }}
        >
          {contactItems.map(contactItem => (
            <motion.a
              key={contactItem.label}
              href={contactItem.url}
              {...(contactItem.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              variants={prefersReducedMotion ? undefined : item}
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-[--color-divider] hover:border-[--color-accent-primary]/40 hover:shadow-lg transition-all duration-300 no-underline"
            >
              <contactItem.icon
                size={24}
                className="text-[--color-text-secondary] group-hover:text-[--color-accent-primary] transition-colors duration-300"
              />
              <span className="text-xs font-medium text-[--color-text-secondary] group-hover:text-[--color-accent-primary] transition-colors">
                {contactItem.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
