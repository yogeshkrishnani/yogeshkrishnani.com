import { motion, useReducedMotion } from 'framer-motion';

import { SectionHeading } from '@/components/common/SectionHeading';
import { personalInfo } from '@/data/personal';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export const AboutSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="scroll-mt-20 py-24 md:py-32 max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12"
    >
      <SectionHeading title="About Me" />

      <div className="flex flex-col md:flex-row gap-12 mt-8">
        {/* Left (~60%) — Narrative */}
        <motion.div
          className="md:w-3/5"
          variants={prefersReducedMotion ? undefined : container}
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={{ once: true, margin: '-100px' }}
        >
          {personalInfo.aboutParagraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              variants={prefersReducedMotion ? undefined : item}
              className="text-[--color-text-secondary] leading-[1.8] mb-6 last:mb-0"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        {/* Right (~40%) — Quick Facts */}
        <motion.div
          className="md:w-2/5"
          initial={prefersReducedMotion ? false : { opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
          }
        >
          <div
            className="rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            style={{
              backgroundColor: 'var(--color-bg-paper)',
              border: '1px solid var(--color-divider)',
              borderTop: '3px solid var(--color-accent-primary)',
            }}
          >
            <h3 className="text-sm font-semibold text-[--color-accent-primary] uppercase tracking-wider mb-4">
              Quick Facts
            </h3>
            <ul className="space-y-3">
              {personalInfo.quickFacts.map((fact, index) => (
                <li
                  key={index}
                  className="text-[--color-text-secondary] py-0.5 flex items-start gap-2"
                >
                  <span className="text-[--color-accent-primary] mt-1.5 text-xs">&#9679;</span>
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
