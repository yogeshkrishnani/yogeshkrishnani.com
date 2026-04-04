import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import { SectionHeading } from '@/components/common/SectionHeading';
import { projects, projectsIntro } from '@/data/projects';
import { Project } from '@/data/projects';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative rounded-2xl p-8 no-underline overflow-hidden transition-all duration-300 hover:shadow-lg"
      style={{
        background: 'var(--color-bg-paper)',
        border: '1px solid var(--color-divider)',
      }}
      whileHover={{ y: -4 }}
    >
      <div className="relative z-10">
        {/* Top row: number + link icon */}
        <div className="flex justify-between items-start mb-6">
          <span className="text-6xl font-bold text-[--color-accent-primary]/20 leading-none">
            0{index + 1}
          </span>
          <div className="w-10 h-10 rounded-full border border-[--color-divider] flex items-center justify-center group-hover:border-[--color-accent-primary] group-hover:scale-110 transition-all duration-300">
            <ArrowUpRight
              size={18}
              className="text-[--color-text-secondary] group-hover:text-[--color-accent-primary] transition-colors duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </div>
        </div>

        {/* Title + impact */}
        <h3 className="text-2xl font-bold text-[--color-text-primary] mb-2">{project.title}</h3>
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-[--color-accent-primary] to-[--color-accent-secondary] text-white mb-4">
          {project.impact}
        </span>

        {/* Description */}
        <p className="text-[--color-text-secondary] leading-relaxed mb-6 text-sm">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span
              key={t}
              className="text-xs px-3 py-1.5 rounded-full border border-[--color-divider] text-[--color-text-secondary] group-hover:border-[--color-accent-primary]/30 group-hover:text-[--color-accent-primary] transition-all duration-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

export const ProjectsSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="scroll-mt-20 py-24 md:py-32 max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12"
    >
      <SectionHeading title="Projects" />

      <p className="text-[--color-text-secondary] mt-4 mb-10 max-w-lg">{projectsIntro}</p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={prefersReducedMotion ? undefined : container}
        initial={prefersReducedMotion ? false : 'hidden'}
        whileInView={prefersReducedMotion ? undefined : 'visible'}
        viewport={{ once: true, margin: '-100px' }}
      >
        {projects.map((project, index) => (
          <motion.div key={project.title} variants={prefersReducedMotion ? undefined : item}>
            <ProjectCard project={project} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
