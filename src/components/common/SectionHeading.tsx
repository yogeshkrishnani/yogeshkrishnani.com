import { motion, useReducedMotion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
}

export const SectionHeading = ({ title }: SectionHeadingProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[--color-text-primary]">
        {title}
      </h2>
      <div
        className="h-[3px] mt-3 rounded-full w-[60px]"
        style={{
          background:
            'linear-gradient(to right, var(--color-accent-primary), var(--color-accent-secondary))',
        }}
      />
    </motion.div>
  );
};
