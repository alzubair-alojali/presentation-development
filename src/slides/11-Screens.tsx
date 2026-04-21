import { motion } from 'framer-motion';
import { SlideFrame } from '../components/SlideFrame';
import { screens } from '../data/screens';
import { fadeUp, stagger } from '../lib/motion';

const groupMeta = {
  auth: { label: 'Authentication', color: '#A7B3CC' },
  shared: { label: 'Shared', color: '#A7B3CC' },
  student: { label: 'Student', color: '#7C8BFF' },
  advisor: { label: 'Advisor', color: '#4CC4FF' },
  admin: { label: 'Admin', color: '#FFB86B' },
};

export function Slide11Screens() {
  const groupOrder: Array<keyof typeof groupMeta> = ['auth', 'shared', 'student', 'advisor', 'admin'];
  return (
    <SlideFrame
      id="screens"
      ariaLabel="Screens Glossary"
      kicker="The surfaces · 26 screens"
      title="Every screen the system renders"
    >
      <motion.div
        className="grid md:grid-cols-2 gap-x-8 gap-y-7 mt-2 max-h-full overflow-y-auto scrollpanel pr-2"
        variants={stagger(0.04, 0.04)}
        initial="hidden"
        animate="show"
      >
        {groupOrder.map(g => {
          const meta = groupMeta[g];
          const items = screens.filter(s => s.group === g);
          if (items.length === 0) return null;
          return (
            <motion.section key={g} variants={fadeUp}>
              <div
                className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-3 flex items-center gap-2"
                style={{ color: meta.color }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: meta.color }} />
                {meta.label}
                <span className="font-mono tabular text-ink-tertiary ml-1">· {items.length}</span>
              </div>
              <ul className="space-y-2">
                {items.map(s => (
                  <li key={s.name} className="flex gap-3">
                    <span
                      className="shrink-0 mt-1.5 h-[3px] w-3 rounded"
                      style={{ background: `${meta.color}55` }}
                    />
                    <div className="min-w-0">
                      <div className="font-display font-semibold text-[13.5px] text-ink-primary">
                        {s.name}
                      </div>
                      <div className="text-[12px] text-ink-tertiary leading-snug">
                        {s.description}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.section>
          );
        })}
      </motion.div>
    </SlideFrame>
  );
}
