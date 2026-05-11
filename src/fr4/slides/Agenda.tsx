import { motion } from 'framer-motion';
import { Layers, GitBranch, Workflow, Database } from 'lucide-react';
import { SlideFrame } from '../../components/SlideFrame';
import { fadeUp, stagger } from '../../lib/motion';

const items = [
  {
    num: '01',
    icon: Layers,
    title: 'Class Diagram',
    body: 'The object model — actors, domain entities, and how they relate.',
    tone: 'linear-gradient(135deg, #4CC4FF 0%, #7C8BFF 100%)',
  },
  {
    num: '02',
    icon: GitBranch,
    title: 'Activity Diagrams',
    body: 'Four user flows: view courses, create request, approve request, create a course.',
    tone: 'linear-gradient(135deg, #7C8BFF 0%, #B980FF 100%)',
  },
  {
    num: '03',
    icon: Workflow,
    title: 'Sequence Diagrams',
    body: 'The same four flows from the system\'s perspective — actor, UI, controller, DB, mail.',
    tone: 'linear-gradient(135deg, #FFB86B 0%, #FF6B7A 100%)',
  },
  {
    num: '04',
    icon: Database,
    title: 'Database Schema',
    body: 'The 12-table ERD with primary keys, foreign keys, and uniqueness constraints.',
    tone: 'linear-gradient(135deg, #B980FF 0%, #4CC4FF 100%)',
  },
];

export function Agenda() {
  return (
    <SlideFrame id="agenda" ariaLabel="Agenda" kicker="What we'll cover" title="Four design artefacts">
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6"
        variants={stagger(0.08, 0.08)}
        initial="hidden"
        animate="show"
      >
        {items.map(({ num, icon: Icon, title, body, tone }) => (
          <motion.div
            key={num}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className="relative rounded-lg glass p-6 shadow-e1 overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-[3px]" style={{ background: tone }} />
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono tabular text-ink-tertiary text-[13px]">{num}</span>
              <div
                className="h-10 w-10 rounded-md flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <Icon className="h-4 w-4 text-accent-primary" strokeWidth={1.75} />
              </div>
            </div>
            <h3 className="font-display font-semibold text-[18px] text-ink-primary mb-2 leading-tight">{title}</h3>
            <p className="text-ink-secondary text-[13px] leading-relaxed">{body}</p>
          </motion.div>
        ))}
      </motion.div>
    </SlideFrame>
  );
}
