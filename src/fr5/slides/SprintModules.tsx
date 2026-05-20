import { motion } from 'framer-motion';
import { SlideFrame } from '../../components/SlideFrame';
import { fadeUp, stagger } from '../../lib/motion';
import type { Sprint } from '../data/sprints';

export function SprintModules({ sprint, page = 1, total = 1 }: { sprint: Sprint; page?: number; total?: number }) {
  const cols = sprint.modules.length <= 4 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-4';
  const pageTag = total > 1 ? ` · part ${page} of ${total}` : '';
  return (
    <SlideFrame
      id={`sprint-${sprint.num}-modules-${page}`}
      ariaLabel={`Sprint ${sprint.num} modules`}
      kicker={`Sprint ${sprint.num} · Modules${pageTag}`}
      title={sprint.title}
    >
      <motion.div
        className={`grid grid-cols-1 ${cols} gap-4 mt-4`}
        variants={stagger(0.05, 0.06)}
        initial="hidden"
        animate="show"
      >
        {sprint.modules.map(m => (
          <motion.div
            key={m.code}
            variants={fadeUp}
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className="relative rounded-lg glass p-5 shadow-e1 overflow-hidden flex flex-col"
          >
            <div className="absolute inset-x-0 top-0 h-[2px]" style={{ background: sprint.gradient }} />

            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="font-mono tabular text-[11px] tracking-[0.14em] uppercase font-semibold"
                  style={{ color: sprint.tone }}>
                  {m.code}
                </div>
                <div className="font-display font-semibold text-[15px] text-ink-primary mt-1 leading-tight">
                  {m.name}
                </div>
              </div>
              <div className="text-right shrink-0 ml-3">
                <div className="font-display font-bold text-[22px] tabular leading-none text-ink-primary">{m.count}</div>
                <div className="text-[9.5px] uppercase tracking-[0.16em] text-ink-tertiary mt-1">reqs</div>
              </div>
            </div>

            <ul className="space-y-1.5 mt-2 flex-1">
              {m.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-[12px] text-ink-secondary leading-snug">
                  <span
                    className="mt-1.5 h-1 w-1 rounded-full shrink-0"
                    style={{ background: sprint.tone, opacity: 0.7 }}
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/8">
              <span className="font-mono tabular text-[10px] text-ink-tertiary tracking-[0.08em]">
                P0 <span className="text-ink-primary">{m.p0}</span>
              </span>
              <span className="text-white/15">·</span>
              <span className="font-mono tabular text-[10px] text-ink-tertiary tracking-[0.08em]">
                P1 <span className="text-ink-secondary">{m.p1}</span>
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SlideFrame>
  );
}
