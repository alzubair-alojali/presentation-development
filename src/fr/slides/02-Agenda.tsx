import { motion } from 'framer-motion';
import { Layers, GitBranch, MousePointerClick } from 'lucide-react';
import { SlideFrame } from '../../components/SlideFrame';
import { fadeUp, stagger } from '../../lib/motion';

const items = [
  {
    num: '01',
    icon: GitBranch,
    title: 'Project Overview',
    body: 'Problem, proposed solution, and the technology stack.',
    tone: 'linear-gradient(135deg, #FFB86B 0%, #FF6B7A 100%)',
  },
  {
    num: '02',
    icon: Layers,
    title: 'Functional Requirements',
    body: 'Sixteen modules + cross-cutting — what the system must do.',
    tone: 'linear-gradient(135deg, #4CC4FF 0%, #7C8BFF 100%)',
  },
  {
    num: '03',
    icon: MousePointerClick,
    title: 'Wireframes',
    body: 'Fourteen sketchy hand-drawn screens covering the full user journey.',
    tone: 'linear-gradient(135deg, #7C8BFF 0%, #B980FF 100%)',
  },
];

export function Slide02Agenda() {
  return (
    <SlideFrame id="agenda" ariaLabel="Agenda" kicker="What we'll cover" title="Three sections">
      <motion.div
        className="grid md:grid-cols-3 gap-6 mt-6"
        variants={stagger(0.1, 0.08)}
        initial="hidden"
        animate="show"
      >
        {items.map(({ num, icon: Icon, title, body, tone }) => (
          <motion.div
            key={num}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className="relative rounded-lg glass p-7 shadow-e1 overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-[3px]" style={{ background: tone }} />
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono tabular text-ink-tertiary text-[13px]">{num}</span>
              <div
                className="h-11 w-11 rounded-md flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <Icon className="h-5 w-5 text-accent-primary" strokeWidth={1.75} />
              </div>
            </div>
            <h3 className="font-display font-semibold text-h3 text-ink-primary mb-3">{title}</h3>
            <p className="text-ink-secondary text-[14px] leading-relaxed">{body}</p>
          </motion.div>
        ))}
      </motion.div>
    </SlideFrame>
  );
}
