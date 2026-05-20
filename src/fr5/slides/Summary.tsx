import { motion } from 'framer-motion';
import { SlideFrame } from '../../components/SlideFrame';
import { fadeUp, stagger } from '../../lib/motion';
import { sprints, totals } from '../data/sprints';

export function Summary() {
  return (
    <SlideFrame
      id="summary"
      ariaLabel="Summary"
      kicker="The whole picture"
      title="Six weeks · 157 requirements"
      subtitle="P1 items within Sprints 1 & 2 are non-blocking — they slide cleanly into Sprint 3 if scope pressure arises."
    >
      <motion.div
        className="grid md:grid-cols-3 gap-5 mt-4"
        variants={stagger(0.08, 0.08)}
        initial="hidden"
        animate="show"
      >
        {sprints.map(s => {
          const p0Pct = Math.round((s.p0 / s.total) * 100);
          return (
            <motion.div
              key={s.num}
              variants={fadeUp}
              className="relative rounded-lg glass p-6 shadow-e1 overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-[3px]" style={{ background: s.gradient }} />

              <div className="text-[10.5px] uppercase tracking-[0.22em] text-ink-tertiary font-semibold mb-2">
                Sprint {s.num}
              </div>
              <div className="font-display font-semibold text-[16px] text-ink-primary leading-tight">{s.title}</div>
              <div className="font-mono text-[10.5px] text-ink-tertiary tabular mt-1.5">{s.timeframe}</div>

              <div className="mt-5">
                <div className="flex items-end justify-between mb-2">
                  <div className="font-display font-bold text-[40px] tabular leading-none" style={{ color: s.tone }}>{s.total}</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-ink-tertiary font-semibold">requirements</div>
                </div>

                <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <div className="h-full" style={{ width: `${p0Pct}%`, background: s.gradient }} />
                </div>
                <div className="flex justify-between mt-2 text-[10.5px] font-mono tabular text-ink-tertiary">
                  <span>P0 <span className="text-ink-primary">{s.p0}</span></span>
                  <span>P1 <span className="text-ink-secondary">{s.p1}</span></span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        className="grid md:grid-cols-4 gap-4 mt-6"
        variants={stagger(0.06, 0.06)}
        initial="hidden"
        animate="show"
      >
        {[
          { v: totals.reqs, l: 'Total requirements' },
          { v: totals.p0, l: 'P0 (must-have)' },
          { v: totals.p1, l: 'P1 (deferrable)' },
          { v: totals.weeks, l: 'Weeks' },
        ].map(k => (
          <motion.div key={k.l} variants={fadeUp} className="rounded-md glass p-5 text-center">
            <div className="font-display font-bold text-[32px] tabular leading-none text-gradient-cyan">{k.v}</div>
            <div className="text-[10.5px] uppercase tracking-[0.18em] text-ink-tertiary font-semibold mt-3">{k.l}</div>
          </motion.div>
        ))}
      </motion.div>
    </SlideFrame>
  );
}
