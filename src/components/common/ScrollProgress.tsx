import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-[--color-accent-primary] origin-left"
      style={{ scaleX: prefersReducedMotion ? scrollYProgress : scaleX }}
    />
  );
};
