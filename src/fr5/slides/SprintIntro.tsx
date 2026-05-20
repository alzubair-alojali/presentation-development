import { motion } from 'framer-motion';
import { Calendar, Target, Package } from 'lucide-react';
import { SlideFrame } from '../../components/SlideFrame';
import { fadeUp, stagger } from '../../lib/motion';
import type { Sprint } from '../data/sprints';

export function SprintIntro({ sprint }: { sprint: Sprint }) {
  return (
    <SlideFrame
      id={`sprint-${sprint.num}-intro`}
      ariaLabel={`Sprint ${sprint.num}`}
      kicker={`Sprint ${sprint.num} of 3 · ${sprint.timeframe}`}
      title={sprint.title}
      subtitle={sprint.goal}
    >
      <motion.div
        className="grid md:grid-cols-[1fr_1.4fr] gap-8 mt-6 items-start"
        variants={stagger(0.08, 0.08)}
        initial="hidden"
        animate="show"
      >
        {/* Stat block */}
        <motion.div
          variants={fadeUp}
          className="rounded-lg glass p-8 flex flex-col items-center justify-center"
          style={{ minHeight: 300 }}
        >
          <div
            className="h-20 w-20 rounded-2xl flex items-center justify-center mb-6"
            style={{ background: `${sprint.tone}1A`, border: `1px solid ${sprint.tone}40` }}
          >
            <Package className="h-9 w-9" strokeWidth={1.5} style={{ color: sprint.tone }} />
          </div>
          <div className="font-display font-bold text-[56px] tabular leading-none" style={{ color: sprint.tone, fontFamily: 'Satoshi, Inter' }}>
            {sprint.total}
          </div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-ink-tertiary mt-3 font-semibold">
            requirements
          </div>
          <div className="flex items-center gap-5 mt-6 pt-5 border-t border-white/8 w-full justify-center">
            <div className="text-center">
              <div className="font-display font-bold text-[20px] tabular text-ink-primary">{sprint.p0}</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-ink-tertiary mt-1">P0</div>
            </div>
            <div className="text-center">
              <div className="font-display font-bold text-[20px] tabular text-ink-secondary">{sprint.p1}</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-ink-tertiary mt-1">P1</div>
            </div>
            <div className="text-center">
              <div className="font-display font-bold text-[20px] tabular text-ink-secondary">{sprint.modules.length}</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-ink-tertiary mt-1">modules</div>
            </div>
          </div>
        </motion.div>

        {/* Meta rows */}
        <div className="space-y-4">
          <motion.div variants={fadeUp} className="rounded-md glass p-5 flex items-start gap-4">
            <div className="h-9 w-9 rounded-md flex items-center justify-center shrink-0"
              style={{ background: `${sprint.tone}14`, border: `1px solid ${sprint.tone}30` }}>
              <Calendar className="h-4 w-4" style={{ color: sprint.tone }} />
            </div>
            <div>
              <div className="text-[10.5px] uppercase tracking-[0.22em] font-semibold mb-1.5" style={{ color: sprint.tone }}>
                Timeframe
              </div>
              <div className="text-[14px] text-ink-primary leading-relaxed">{sprint.timeframe} · two-week sprint</div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-md glass p-5 flex items-start gap-4">
            <div className="h-9 w-9 rounded-md flex items-center justify-center shrink-0"
              style={{ background: `${sprint.tone}14`, border: `1px solid ${sprint.tone}30` }}>
              <Target className="h-4 w-4" style={{ color: sprint.tone }} />
            </div>
            <div>
              <div className="text-[10.5px] uppercase tracking-[0.22em] font-semibold mb-1.5" style={{ color: sprint.tone }}>
                Goal
              </div>
              <div className="text-[13.5px] text-ink-primary leading-relaxed">{sprint.goal}</div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-md glass p-5">
            <div className="text-[10.5px] uppercase tracking-[0.22em] font-semibold mb-3" style={{ color: sprint.tone }}>
              Modules in scope
            </div>
            <div className="flex flex-wrap gap-2">
              {sprint.modules.map(m => (
                <div
                  key={m.code}
                  className="font-mono tabular text-[11px] tracking-[0.06em] rounded-full px-3 py-1.5"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    color: '#E8ECF5',
                  }}
                >
                  {m.code} <span className="text-ink-tertiary">· {m.count}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SlideFrame>
  );
}
