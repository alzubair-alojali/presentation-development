import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { SlideFrame } from '../../components/SlideFrame';
import { fadeUp, stagger } from '../../lib/motion';

const items = [
  { title: 'Payment / fee processing',   note: 'No tuition handling in v1.' },
  { title: 'Native mobile app',          note: 'Responsive web only.' },
  { title: 'AI course recommendations',  note: 'No ML / suggestion engine.' },
  { title: 'Grading & transcripts',      note: 'Out of registration scope.' },
  { title: 'SMS notifications',          note: 'In-app + email only.' },
  { title: 'Student-to-student chat',    note: 'Not a registration concern.' },
];

export function Slide99OutOfScope() {
  return (
    <SlideFrame
      id="out-of-scope"
      ariaLabel="Out of Scope"
      kicker="Boundaries"
      title="Out of scope (v1)"
      subtitle="Things deliberately not in this release — to keep the scope honest."
    >
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6 max-w-5xl"
        variants={stagger(0.06, 0.06)}
        initial="hidden"
        animate="show"
      >
        {items.map(it => (
          <motion.div
            key={it.title}
            variants={fadeUp}
            className="rounded-md glass p-4 shadow-e1 flex items-start gap-3"
          >
            <div
              className="shrink-0 h-7 w-7 rounded-md flex items-center justify-center"
              style={{ background: 'rgba(255,107,122,0.10)', border: '1px solid rgba(255,107,122,0.35)' }}
            >
              <X className="h-3.5 w-3.5 text-semantic-danger" strokeWidth={2} />
            </div>
            <div className="leading-snug">
              <div className="font-semibold text-ink-primary text-[14px]">{it.title}</div>
              <div className="text-[12px] text-ink-tertiary mt-0.5">{it.note}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SlideFrame>
  );
}
