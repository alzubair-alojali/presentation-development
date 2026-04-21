import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../lib/motion';

interface Props {
  id: string;
  ariaLabel: string;
  children: ReactNode;
  kicker?: string;
  title?: string | ReactNode;
  subtitle?: string;
}

export function SlideFrame({ id, ariaLabel, children, kicker, title, subtitle }: Props) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className="relative w-full h-full flex flex-col"
      style={{ paddingInline: 'clamp(40px, 6vw, 96px)', paddingTop: 110, paddingBottom: 110 }}
    >
      {(kicker || title) && (
        <motion.header
          className="mb-8"
          variants={stagger(0.05, 0.05)}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {kicker && (
            <motion.div
              variants={fadeUp}
              className="text-[11px] uppercase tracking-[0.24em] text-ink-tertiary mb-4 font-medium"
            >
              {kicker}
            </motion.div>
          )}
          {title && (
            <motion.h2
              variants={fadeUp}
              className="font-display font-bold text-h1 text-ink-primary"
            >
              {title}
            </motion.h2>
          )}
          {subtitle && (
            <motion.p
              variants={fadeUp}
              className="mt-4 text-ink-secondary text-lg max-w-3xl"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.header>
      )}

      <div className="flex-1 min-h-0 relative">{children}</div>
    </section>
  );
}
