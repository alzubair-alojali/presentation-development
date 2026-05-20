import { motion } from 'framer-motion';
import { Database, ShieldCheck, GitMerge, Languages } from 'lucide-react';
import { SlideFrame } from '../../components/SlideFrame';
import { fadeUp, stagger } from '../../lib/motion';

const notes = [
  {
    icon: Database,
    title: 'Migration-first',
    tone: '#4CC4FF',
    body: 'Each sprint begins with DB migrations and closes with integration testing across every module delivered to date.',
  },
  {
    icon: GitMerge,
    title: 'Atomic mutations',
    tone: '#7C8BFF',
    body: 'FR-X-01 is enforced from Sprint 1 onward — every multi-row mutation runs inside a DB transaction.',
  },
  {
    icon: ShieldCheck,
    title: 'Non-blocking P1',
    tone: '#B980FF',
    body: 'P1 items in Sprints 1 & 2 are deferrable — they slide cleanly into Sprint 3 without breaking any core flow.',
  },
  {
    icon: Languages,
    title: 'Localization is P2',
    tone: '#FFB86B',
    body: 'FR-X-03 (Arabic / English UI) is addressed only if Sprint 3 capacity allows.',
  },
];

export function Notes() {
  return (
    <SlideFrame
      id="execution-notes"
      ariaLabel="Execution notes"
      kicker="Execution notes"
      title="How we'll run it"
    >
      <motion.div
        className="grid md:grid-cols-2 gap-5 mt-6"
        variants={stagger(0.08, 0.08)}
        initial="hidden"
        animate="show"
      >
        {notes.map(({ icon: Icon, title, tone, body }) => (
          <motion.div
            key={title}
            variants={fadeUp}
            className="rounded-lg glass p-6 shadow-e1 flex items-start gap-4"
          >
            <div
              className="h-11 w-11 rounded-md flex items-center justify-center shrink-0"
              style={{ background: `${tone}14`, border: `1px solid ${tone}30` }}
            >
              <Icon className="h-5 w-5" style={{ color: tone }} strokeWidth={1.75} />
            </div>
            <div>
              <div className="font-display font-semibold text-[16px] text-ink-primary mb-1.5 leading-tight">{title}</div>
              <p className="text-[13px] text-ink-secondary leading-relaxed">{body}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SlideFrame>
  );
}
