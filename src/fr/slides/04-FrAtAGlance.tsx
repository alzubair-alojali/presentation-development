import { motion } from 'framer-motion';
import { SlideFrame } from '../../components/SlideFrame';
import { frModules, totalReqs } from '../data/modules';
import { fadeUp, stagger } from '../../lib/motion';

// Color tone per module group, kept consistent with the main deck's actor palette.
const tones: Record<string, string> = {
  AUTH: '#A7B3CC',
  USR:  '#A7B3CC',
  CAT:  '#7C8BFF',
  TRM:  '#FFB86B',
  ELG:  '#7C8BFF',
  CNF:  '#7C8BFF',
  REQ:  '#7C8BFF',
  WSW:  '#7C8BFF',
  ADV:  '#4CC4FF',
  OVR:  '#4CC4FF',
  ENR:  '#4CC4FF',
  TBL:  '#FFB86B',
  NOT:  '#A7B3CC',
  AUD:  '#A7B3CC',
  RPT:  '#FFB86B',
  SRH:  '#7C8BFF',
  X:    '#A7B3CC',
};

export function Slide04FrAtAGlance() {
  return (
    <SlideFrame
      id="fr-glance"
      ariaLabel="Functional Requirements at a Glance"
      kicker="Functional Requirements"
      title="At a glance"
      subtitle={`Sixteen modules plus a cross-cutting set — ${totalReqs} requirements total. One line per module; depth on demand.`}
    >
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6 max-h-full overflow-y-auto scrollpanel pr-2 content-start"
        variants={stagger(0.04, 0.03)}
        initial="hidden"
        animate="show"
      >
        {frModules.map(m => {
          const color = tones[m.code] ?? '#A7B3CC';
          return (
            <motion.div
              key={m.code}
              variants={fadeUp}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 260, damping: 28 }}
              className="rounded-md glass p-4 shadow-e1 self-start"
              style={{ borderLeft: `2px solid ${color}55` }}
            >
              <div className="flex items-baseline justify-between mb-2">
                <div
                  className="font-mono tabular text-[11px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color }}
                >
                  {m.code === 'X' ? 'X-cut' : m.code}
                </div>
                <div className="font-mono tabular text-[10.5px] text-ink-tertiary">
                  {m.count} req
                </div>
              </div>
              <h3 className="font-display font-semibold text-[14px] text-ink-primary leading-tight mb-1.5">
                {m.name}
              </h3>
              <p className="text-[11.5px] text-ink-secondary leading-snug line-clamp-3">
                {m.summary}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </SlideFrame>
  );
}
