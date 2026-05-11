import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { SlideFrame } from '../../components/SlideFrame';
import { fadeUp, stagger } from '../../lib/motion';

interface Props {
  kicker: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  tone: string;
  bullets: { label: string; text: string }[];
}

export function SectionIntro({ kicker, title, subtitle, icon: Icon, tone, bullets }: Props) {
  return (
    <SlideFrame
      id={`intro-${title}`}
      ariaLabel={title}
      kicker={kicker}
      title={title}
      subtitle={subtitle}
    >
      <motion.div
        className="grid md:grid-cols-[1fr_1fr] gap-8 mt-8 items-start"
        variants={stagger(0.08, 0.08)}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={fadeUp}
          className="rounded-lg glass p-8 flex flex-col items-center justify-center"
          style={{ minHeight: 320 }}
        >
          <div
            className="h-20 w-20 rounded-2xl flex items-center justify-center mb-6"
            style={{ background: `${tone}1A`, border: `1px solid ${tone}40` }}
          >
            <Icon className="h-9 w-9" strokeWidth={1.5} style={{ color: tone }} />
          </div>
          <div className="font-display font-bold text-[44px] tabular leading-none" style={{ color: tone, fontFamily: 'Satoshi, Inter' }}>
            {bullets.length}
          </div>
          <div className="text-[12px] uppercase tracking-[0.22em] text-ink-tertiary mt-3 font-semibold">
            artefact{bullets.length === 1 ? '' : 's'} in this section
          </div>
        </motion.div>

        <div className="space-y-4">
          {bullets.map(b => (
            <motion.div key={b.label} variants={fadeUp} className="rounded-md glass p-5">
              <div
                className="text-[10.5px] uppercase tracking-[0.22em] font-semibold mb-1.5"
                style={{ color: tone }}
              >
                {b.label}
              </div>
              <div className="text-[13.5px] text-ink-primary leading-relaxed">{b.text}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SlideFrame>
  );
}
