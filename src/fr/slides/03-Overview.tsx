import { motion } from 'framer-motion';
import { AlertCircle, Workflow, Cpu } from 'lucide-react';
import { SlideFrame } from '../../components/SlideFrame';
import { fadeUp, stagger } from '../../lib/motion';

const blocks = [
  {
    icon: AlertCircle,
    label: 'The Problem',
    color: '#FF8C8C',
    body:
      'Course registration at LIMU runs on paper. Forms get lost, prerequisites and credit limits are checked by hand, schedule conflicts surface late, and a single advisor can take days to respond.',
  },
  {
    icon: Workflow,
    label: 'The Solution',
    color: '#7C8BFF',
    body:
      'A web-based platform with three roles (Student, Advisor, Admin), automatic real-time validation of every rule, and a complete append-only audit trail.',
  },
  {
    icon: Cpu,
    label: 'The Stack',
    color: '#4CC4FF',
    body:
      'Next.js + Tailwind on the front. Laravel 13 + Sanctum on the back. PostgreSQL for data, Redis for queue & cache, deployed on a VPS behind nginx.',
  },
];

export function Slide03Overview() {
  return (
    <SlideFrame
      id="overview"
      ariaLabel="Project Overview"
      kicker="Project Overview"
      title="Why we're building this"
      subtitle="The proposal in three short blocks — problem, solution, stack."
    >
      <motion.div
        className="grid md:grid-cols-3 gap-6 mt-8"
        variants={stagger(0.08, 0.08)}
        initial="hidden"
        animate="show"
      >
        {blocks.map(({ icon: Icon, label, color, body }) => (
          <motion.article
            key={label}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className="rounded-lg glass p-7 shadow-e1 flex flex-col"
          >
            <div
              className="h-11 w-11 rounded-md flex items-center justify-center mb-5"
              style={{ background: `${color}14`, border: `1px solid ${color}40` }}
            >
              <Icon className="h-5 w-5" style={{ color }} strokeWidth={1.75} />
            </div>
            <div
              className="text-[10.5px] uppercase tracking-[0.22em] font-semibold mb-2"
              style={{ color }}
            >
              {label}
            </div>
            <p className="text-ink-secondary text-[14px] leading-relaxed">{body}</p>
          </motion.article>
        ))}
      </motion.div>
    </SlideFrame>
  );
}
