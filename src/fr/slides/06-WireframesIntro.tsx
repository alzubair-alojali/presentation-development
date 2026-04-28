import { motion } from 'framer-motion';
import { Pencil } from 'lucide-react';
import { SlideFrame } from '../../components/SlideFrame';
import { fadeUp, stagger } from '../../lib/motion';

const groups = [
  { label: 'Auth Flow',     count: 2,  color: '#A7B3CC', body: 'Login + OTP verification.' },
  { label: 'Student Flow',  count: 6,  color: '#7C8BFF', body: 'Dashboard, courses, details, request, my requests, my schedule.' },
  { label: 'Advisor Flow',  count: 2,  color: '#4CC4FF', body: 'Queue dashboard + request review.' },
  { label: 'Admin Flow',    count: 4,  color: '#FFB86B', body: 'Dashboard, timetable, conflict dialog, overrides report.' },
];

export function Slide06WireframesIntro() {
  return (
    <SlideFrame
      id="wf-intro"
      ariaLabel="Wireframes — Introduction"
      kicker="Part Three"
      title="Wireframes"
      subtitle="Sketchy hand-drawn fidelity, rendered live from the React design source. Fourteen screens, four flows."
    >
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
        variants={stagger(0.08, 0.08)}
        initial="hidden"
        animate="show"
      >
        {groups.map(g => (
          <motion.div
            key={g.label}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className="rounded-lg glass p-6 shadow-e1"
          >
            <div className="flex items-center justify-between mb-5">
              <div
                className="h-10 w-10 rounded-md flex items-center justify-center"
                style={{ background: `${g.color}14`, border: `1px solid ${g.color}40` }}
              >
                <Pencil className="h-4.5 w-4.5" style={{ color: g.color, width: 18, height: 18 }} strokeWidth={1.75} />
              </div>
              <span
                className="font-display font-bold text-[28px] tabular leading-none"
                style={{ color: g.color }}
              >
                {g.count}
              </span>
            </div>
            <div
              className="text-[10.5px] uppercase tracking-[0.22em] font-semibold mb-1.5"
              style={{ color: g.color }}
            >
              {g.label}
            </div>
            <p className="text-[12.5px] text-ink-secondary leading-snug">{g.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </SlideFrame>
  );
}
