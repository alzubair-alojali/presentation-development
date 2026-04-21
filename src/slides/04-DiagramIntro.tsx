import { motion } from 'framer-motion';
import { Users, GitBranch, MousePointerClick } from 'lucide-react';
import { CountUp } from '../components/CountUp';
import { fadeUp, stagger } from '../lib/motion';

interface Stat {
  label: string;
  value: number;
  icon: typeof Users;
  color: string;
  gradient: string;
  caption: string;
  viz: 'actors' | 'dots' | 'lines';
}

const stats: Stat[] = [
  {
    label: 'Actors',
    value: 3,
    icon: Users,
    color: '#4CC4FF',
    gradient: 'linear-gradient(135deg, #4CC4FF 0%, #5B7CFF 100%)',
    caption: 'Student, Advisor, Admin — the three people the system was built for.',
    viz: 'actors',
  },
  {
    label: 'Use Cases',
    value: 10,
    icon: GitBranch,
    color: '#7C8BFF',
    gradient: 'linear-gradient(135deg, #7C8BFF 0%, #B980FF 100%)',
    caption: 'Ten capabilities grouped by actor and visualised on the diagram.',
    viz: 'dots',
  },
  {
    label: 'Use Case Specs',
    value: 21,
    icon: MousePointerClick,
    color: '#FFB86B',
    gradient: 'linear-gradient(135deg, #FFB86B 0%, #FF6B7A 100%)',
    caption: 'Twenty-one detailed flows (S01–S21) — pre-conditions, steps, alternatives.',
    viz: 'lines',
  },
];

function Viz({ kind, color, count }: { kind: Stat['viz']; color: string; count: number }) {
  if (kind === 'actors') {
    return (
      <div className="flex items-end gap-2.5 h-10">
        {Array.from({ length: count }).map((_, i) => (
          <motion.svg
            key={i}
            width="16"
            height="32"
            viewBox="0 0 16 32"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 + i * 0.08, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <circle cx="8" cy="5" r="3" stroke={color} strokeWidth="1.5" fill="none" />
            <line x1="8" y1="9" x2="8" y2="22" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="8" y1="14" x2="3" y2="18" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="8" y1="14" x2="13" y2="18" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="8" y1="22" x2="4" y2="30" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="8" y1="22" x2="12" y2="30" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
          </motion.svg>
        ))}
      </div>
    );
  }
  if (kind === 'dots') {
    return (
      <div className="flex items-center gap-2 h-10">
        {Array.from({ length: count }).map((_, i) => (
          <motion.span
            key={i}
            className="rounded-full"
            style={{ width: 8, height: 8, background: color }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.9, scale: 1 }}
            transition={{ delay: 0.9 + i * 0.045, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </div>
    );
  }
  return (
    <div className="flex items-end gap-[3px] h-10">
      {Array.from({ length: count }).map((_, i) => {
        const h = 10 + ((i * 37) % 28);
        return (
          <motion.span
            key={i}
            className="rounded-sm"
            style={{ width: 4, background: color, opacity: 0.75 }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: h, opacity: 0.75 }}
            transition={{ delay: 0.9 + i * 0.02, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        );
      })}
    </div>
  );
}

export function Slide04DiagramIntro() {
  return (
    <section
      id="diagram-intro"
      aria-label="Use Case Diagram — Introduction"
      className="relative w-full h-full flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ paddingLeft: 'clamp(40px, 6vw, 96px)', paddingRight: 'clamp(40px, 6vw, 96px)', paddingTop: 110, paddingBottom: 110 }}
    >
      <motion.header
        className="max-w-3xl mx-auto"
        variants={stagger(0.05, 0.05)}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={fadeUp}
          className="text-[11px] uppercase tracking-[0.24em] text-ink-tertiary mb-4 font-medium"
        >
          Use Case Diagram · part 1 of 2
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="font-display font-bold text-h1 text-ink-primary"
        >
          Who can do what in the system
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-4 text-ink-secondary text-lg leading-relaxed"
        >
          A use case diagram names the actors, the actions they perform, and the boundaries of the system. Hover any actor on the next slide to focus their world.
        </motion.p>
      </motion.header>

      <motion.div
        className="grid md:grid-cols-3 gap-5 mt-12 w-full max-w-[1120px] mx-auto"
        variants={stagger(0.25, 0.12)}
        initial="hidden"
        animate="show"
      >
        {stats.map(({ label, value, icon: Icon, color, gradient, caption, viz }, i) => (
          <motion.div
            key={label}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            className="relative rounded-xl glass shadow-e1 overflow-hidden flex flex-col text-left"
            style={{ minHeight: 300 }}
          >
            <div className="absolute inset-x-0 top-0 h-[3px]" style={{ background: gradient }} />
            <div
              aria-hidden
              className="absolute -top-20 -right-20 w-44 h-44 rounded-full"
              style={{ background: gradient, filter: 'blur(60px)', opacity: 0.18 }}
            />

            <div className="relative p-7 flex flex-col h-full">
              <div className="flex items-center justify-between mb-10">
                <div
                  className="h-11 w-11 rounded-md flex items-center justify-center"
                  style={{
                    background: `${color}14`,
                    border: `1px solid ${color}40`,
                  }}
                >
                  <Icon className="h-5 w-5" style={{ color }} strokeWidth={1.75} />
                </div>
                <div
                  className="text-[10.5px] uppercase tracking-[0.22em] font-semibold"
                  style={{ color }}
                >
                  {label}
                </div>
              </div>

              <div className="flex items-baseline gap-1 mb-5">
                <span
                  className="font-display font-bold leading-none tabular"
                  style={{
                    fontSize: 'clamp(72px, 7vw, 108px)',
                    letterSpacing: '-0.04em',
                    color: '#F4F7FF',
                    textShadow: `0 0 48px ${color}35`,
                  }}
                >
                  <CountUp to={value} delay={320 + i * 160} duration={1300} />
                </span>
              </div>

              <Viz kind={viz} color={color} count={value} />

              <p className="mt-auto pt-6 text-[13px] text-ink-secondary leading-relaxed">
                {caption}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
