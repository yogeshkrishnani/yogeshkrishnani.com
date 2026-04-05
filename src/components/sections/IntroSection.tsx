import { useRef } from 'react';

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

import { useTheme } from '@/context/ThemeContext';
import { personalInfo } from '@/data/personal';

const letterReveal = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03 },
  },
};

const letterItem = {
  hidden: { opacity: 0, y: 80, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeSlide = (delay: number) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  },
});

export const IntroSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const { mode } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const nameWords = personalInfo.name.split(' ');

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="scroll-mt-20 min-h-screen flex flex-col justify-center relative overflow-hidden -mt-16 pt-16"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full bg-[--color-accent-primary] opacity-[0.04] blur-[120px] animate-[float_15s_ease-in-out_infinite]" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full bg-[--color-accent-secondary] opacity-[0.04] blur-[120px] animate-[float_20s_ease-in-out_infinite_reverse]" />
      </div>

      <motion.div
        className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12 w-full relative z-10 py-20"
        style={
          prefersReducedMotion ? undefined : { opacity: heroOpacity, scale: heroScale, y: heroY }
        }
      >
        {/* Greeting — small, above the name */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          variants={prefersReducedMotion ? undefined : fadeSlide(0)}
          initial={prefersReducedMotion ? false : 'hidden'}
          animate={prefersReducedMotion ? false : 'visible'}
        >
          <img
            src={personalInfo.avatarUrl}
            alt={personalInfo.name}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover ring-2 ring-[--color-accent-primary]/20"
          />
          <span className="text-sm tracking-[0.2em] uppercase text-[--color-text-secondary] font-medium">
            {personalInfo.greeting}
          </span>
        </motion.div>

        {/* Giant name — letter by letter reveal */}
        <motion.h1
          className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[1.1] tracking-tight mb-8 perspective-[1000px]"
          variants={prefersReducedMotion ? undefined : letterReveal}
          initial={prefersReducedMotion ? false : 'hidden'}
          animate={prefersReducedMotion ? false : 'visible'}
        >
          {nameWords.map((word, wi) => (
            <span key={wi} className="inline-block whitespace-nowrap mr-[0.3em]">
              {word.split('').map((letter, li) => (
                <motion.span
                  key={`${wi}-${li}`}
                  variants={prefersReducedMotion ? undefined : letterItem}
                  className="inline-block text-[--color-text-primary]"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-xl md:text-3xl text-[--color-text-secondary] mb-6 max-w-2xl font-light leading-relaxed"
          variants={prefersReducedMotion ? undefined : fadeSlide(0.6)}
          initial={prefersReducedMotion ? false : 'hidden'}
          animate={prefersReducedMotion ? false : 'visible'}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Bio */}
        <motion.p
          className="text-base md:text-lg text-[--color-text-secondary]/80 mb-12 max-w-xl leading-relaxed"
          variants={prefersReducedMotion ? undefined : fadeSlide(0.8)}
          initial={prefersReducedMotion ? false : 'hidden'}
          animate={prefersReducedMotion ? false : 'visible'}
        >
          {personalInfo.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap gap-4"
          variants={prefersReducedMotion ? undefined : fadeSlide(1.0)}
          initial={prefersReducedMotion ? false : 'hidden'}
          animate={prefersReducedMotion ? false : 'visible'}
        >
          <button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="group px-8 py-4 rounded-full font-semibold text-base inline-flex items-center gap-2 transition-all duration-300 cursor-pointer border-none hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
            style={{
              backgroundColor: mode === 'dark' ? '#e0e0e0' : '#1a1a1a',
              color: mode === 'dark' ? '#121212' : '#ffffff',
            }}
          >
            Get In Touch
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full font-semibold text-base border-2 border-[--color-text-primary]/20 text-[--color-text-primary] hover:border-[--color-accent-primary] hover:text-[--color-accent-primary] transition-all duration-300 inline-flex items-center hover:scale-[1.02] active:scale-[0.98]"
          >
            View Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-xs tracking-widest uppercase text-[--color-text-secondary]/50">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-[--color-text-secondary]/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};
