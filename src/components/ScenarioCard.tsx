import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { Scenario } from '../data/scenarios';
import { actorColor, actorGradient } from '../data/scenarios';

interface Props {
  scenario: Scenario;
  defaultOpen?: boolean;
}

export function ScenarioCard({ scenario, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const color = actorColor[scenario.actor];
  const gradient = actorGradient[scenario.actor];

  return (
    <motion.article
      layout
      className="relative rounded-lg glass shadow-e1 overflow-hidden"
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 260, damping: 30 }}
    >
      <div
        className="absolute inset-x-0 top-0 h-[2px] opacity-80"
        style={{ background: gradient }}
      />
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full text-left p-5 flex items-start gap-4"
        aria-expanded={open}
      >
        <div
          className="shrink-0 h-10 w-16 rounded-md flex items-center justify-center font-mono text-[13px] font-semibold tabular"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: `1px solid ${color}55`,
            color: color,
          }}
        >
          {scenario.code}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span
              className="text-[10px] uppercase tracking-[0.18em] font-semibold"
              style={{ color }}
            >
              {scenario.actorLabel}
            </span>
          </div>
          <h3 className="font-display font-semibold text-[17px] text-ink-primary leading-tight">
            {scenario.title}
          </h3>
          <p className="mt-1.5 text-[13px] text-ink-secondary leading-snug line-clamp-2">
            {scenario.goal}
          </p>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-5 w-5 text-ink-tertiary" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-2 space-y-4 text-[13px]">
              <div className="grid md:grid-cols-2 gap-3">
                <InfoBlock label="Precondition" color={color}>
                  {scenario.precondition}
                </InfoBlock>
                <InfoBlock label="Postcondition" color={color}>
                  {scenario.postcondition}
                </InfoBlock>
              </div>

              <div>
                <div
                  className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-2"
                  style={{ color }}
                >
                  Main Flow
                </div>
                <ol className="space-y-1.5">
                  {scenario.mainFlow.map((step, i) => (
                    <li key={i} className="flex gap-3 text-ink-secondary leading-relaxed">
                      <span
                        className="shrink-0 font-mono tabular text-[11px] mt-[3px]"
                        style={{ color }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {scenario.alternatives && scenario.alternatives.length > 0 && (
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-semantic-warning mb-2">
                    Alternative / Exception Flows
                  </div>
                  <ul className="space-y-1.5">
                    {scenario.alternatives.map((a, i) => (
                      <li key={i} className="text-ink-secondary">
                        <span className="text-ink-primary font-medium">{a.label}:</span>{' '}
                        {a.text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function InfoBlock({ label, color, children }: { label: string; color: string; children: React.ReactNode }) {
  return (
    <div className="rounded-md p-3 border border-white/5 bg-white/[0.02]">
      <div
        className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-1"
        style={{ color }}
      >
        {label}
      </div>
      <p className="text-ink-secondary leading-relaxed">{children}</p>
    </div>
  );
}
