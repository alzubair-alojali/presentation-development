import type { Transition, Variants } from 'framer-motion';

export const spring: Transition = { type: 'spring', stiffness: 220, damping: 28, mass: 0.9 };
export const springSoft: Transition = { type: 'spring', stiffness: 140, damping: 22, mass: 1 };
export const ease: Transition = { duration: 0.32, ease: [0.22, 1, 0.36, 1] };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: spring },
  exit: { opacity: 0, y: -12, transition: { duration: 0.18, ease: [0.4, 0, 1, 1] } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: ease },
  exit: { opacity: 0, transition: { duration: 0.18 } },
};

export const stagger = (delay = 0.06, children = 0.05): Variants => ({
  hidden: {},
  show: { transition: { delayChildren: delay, staggerChildren: children } },
  exit: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
});

export const slideHorizontal = {
  enter: (dir: 1 | -1) => ({ x: dir * 120, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: springSoft },
  exit: (dir: 1 | -1) => ({ x: dir * -120, opacity: 0, transition: { duration: 0.28, ease: [0.4, 0, 1, 1] } }),
};
