import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { SlideFrame } from '../components/SlideFrame';
import { useCases } from '../data/useCases';
import { actorColor } from '../data/scenarios';
import { fadeUp, stagger } from '../lib/motion';

const actorDotLabel: Record<string, string> = {
  student: 'Student',
  advisor: 'Advisor',
  admin: 'Admin',
};

export function Slide06UseCasesGrid() {
  const [open, setOpen] = useState<string | null>(useCases[0].id);

  return (
    <SlideFrame
      id="use-cases"
      ariaLabel="Use Cases"
      kicker="10 use cases · what the system does"
      title="The contract between users and software"
    >
      <div className="grid md:grid-cols-[1.1fr_1fr] gap-6 h-full mt-4 min-h-0">
        <motion.div
          className="overflow-y-auto scrollpanel pr-2 space-y-2"
          variants={stagger(0.04, 0.04)}
          initial="hidden"
          animate="show"
        >
          {useCases.map(uc => {
            const active = uc.id === open;
            const primaryColor = actorColor[uc.actors[0]];
            return (
              <motion.button
                key={uc.id}
                variants={fadeUp}
                onClick={() => setOpen(active ? null : uc.id)}
                className="w-full text-left rounded-md p-4 flex items-center gap-4 transition-colors duration-200"
                style={{
                  background: active ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.015)',
                  border: `1px solid ${active ? `${primaryColor}55` : 'rgba(255,255,255,0.06)'}`,
                }}
              >
                <div className="flex -space-x-2">
                  {uc.actors.map(a => (
                    <span
                      key={a}
                      title={actorDotLabel[a]}
                      className="h-6 w-6 rounded-full border-2 border-bg-base"
                      style={{ background: actorColor[a] }}
                    />
                  ))}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-semibold text-[15px] text-ink-primary truncate">
                    {uc.name}
                  </div>
                  <div className="text-[12px] text-ink-tertiary font-mono tabular mt-0.5">
                    {uc.relatedScenarios.join(' · ')}
                  </div>
                </div>
                <ChevronRight
                  className="h-4 w-4 text-ink-tertiary transition-transform duration-200"
                  style={{ transform: active ? 'rotate(90deg)' : 'none' }}
                />
              </motion.button>
            );
          })}
        </motion.div>

        <div className="min-h-0 relative">
          <AnimatePresence mode="wait">
            {open &&
              (() => {
                const uc = useCases.find(u => u.id === open)!;
                const primaryColor = actorColor[uc.actors[0]];
                return (
                  <motion.div
                    key={uc.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-lg glass p-7 shadow-e1 overflow-y-auto scrollpanel"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      {uc.actors.map(a => (
                        <span
                          key={a}
                          className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold"
                          style={{ color: actorColor[a] }}
                        >
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ background: actorColor[a] }}
                          />
                          {actorDotLabel[a]}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display font-bold text-[32px] leading-tight text-ink-primary mb-4">
                      {uc.name}
                    </h3>
                    <p className="text-ink-secondary text-[15px] leading-relaxed mb-6">
                      {uc.description}
                    </p>

                    <div
                      className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-3"
                      style={{ color: primaryColor }}
                    >
                      Covered by Scenarios
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {uc.relatedScenarios.map(s => (
                        <span
                          key={s}
                          className="font-mono tabular text-[12px] rounded-md px-2.5 py-1 border"
                          style={{
                            color: primaryColor,
                            borderColor: `${primaryColor}40`,
                            background: `${primaryColor}10`,
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })()}
          </AnimatePresence>
        </div>
      </div>
    </SlideFrame>
  );
}
