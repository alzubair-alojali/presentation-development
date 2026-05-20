import { motion } from 'framer-motion';
import { Layers, Workflow, LayoutDashboard } from 'lucide-react';
import { SlideFrame } from '../../components/SlideFrame';
import { fadeUp, stagger } from '../../lib/motion';
import { sprints } from '../data/sprints';

const icons = [Layers, Workflow, LayoutDashboard];

export function Agenda() {
  return (
    <SlideFrame
      id="agenda"
      ariaLabel="Agenda"
      kicker="What we'll cover"
      title="Three sprints · two weeks each"
    >
      <motion.div
        className="grid md:grid-cols-3 gap-5 mt-6"
        variants={stagger(0.08, 0.08)}
        initial="hidden"
        animate="show"
      >
        {sprints.map((s, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={s.num}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 260, damping: 28 }}
              className="relative rounded-lg glass p-6 shadow-e1 overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-[3px]" style={{ background: s.gradient }} />
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono tabular text-ink-tertiary text-[13px]">{`0${s.num}`}</span>
                <div
                  className="h-10 w-10 rounded-md flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <Icon className="h-4 w-4 text-accent-primary" strokeWidth={1.75} />
                </div>
              </div>
              <div className="text-[10.5px] uppercase tracking-[0.22em] text-ink-tertiary font-semibold mb-2">
                Sprint {s.num} · {s.timeframe}
              </div>
              <h3 className="font-display font-semibold text-[18px] text-ink-primary mb-3 leading-tight">{s.title}</h3>
              <div className="flex items-end gap-4 pt-3 mt-3 border-t border-white/8">
                <div>
                  <div className="font-display font-bold text-[24px] tabular leading-none" style={{ color: s.tone }}>{s.total}</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-ink-tertiary mt-1">reqs</div>
                </div>
                <div>
                  <div className="font-display font-bold text-[18px] tabular leading-none text-ink-primary">{s.p0}</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-ink-tertiary mt-1">P0</div>
                </div>
                <div>
                  <div className="font-display font-bold text-[18px] tabular leading-none text-ink-secondary">{s.p1}</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-ink-tertiary mt-1">P1</div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.5 }}
        className="mt-6 rounded-md glass p-5 flex items-center justify-between"
      >
        <div className="text-[13px] text-ink-secondary">
          <span className="text-ink-tertiary uppercase tracking-[0.18em] text-[10.5px] font-semibold mr-3">Total</span>
          157 requirements · 123 P0 · 34 P1 · 6 weeks
        </div>
        <div className="font-mono text-[11px] text-ink-tertiary tabular">1 Jun → 12 Jul 2026</div>
      </motion.div>
    </SlideFrame>
  );
}
