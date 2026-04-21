import { motion } from 'framer-motion';
import { Users, MousePointerClick, GitBranch } from 'lucide-react';
import { SlideFrame } from '../components/SlideFrame';
import { fadeUp, stagger } from '../lib/motion';

const stats = [
  { n: '3', label: 'Actors', icon: Users, color: '#4CC4FF' },
  { n: '10', label: 'Use Cases', icon: GitBranch, color: '#7C8BFF' },
  { n: '22', label: 'System Scenarios', icon: MousePointerClick, color: '#FFB86B' },
];

export function Slide04DiagramIntro() {
  return (
    <SlideFrame
      id="diagram-intro"
      ariaLabel="Use Case Diagram — Introduction"
      kicker="Use Case Diagram · part 1 of 2"
      title="Who can do what in the system"
      subtitle="A use case diagram names the actors, the actions they perform, and the boundaries of the system. Hover any actor on the next slide to focus their world."
    >
      <motion.div
        className="grid md:grid-cols-3 gap-6 mt-10 max-w-4xl"
        variants={stagger(0.1, 0.1)}
        initial="hidden"
        animate="show"
      >
        {stats.map(({ n, label, icon: Icon, color }) => (
          <motion.div
            key={label}
            variants={fadeUp}
            className="rounded-lg glass p-7 shadow-e1"
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="h-11 w-11 rounded-md flex items-center justify-center"
                style={{
                  background: `${color}14`,
                  border: `1px solid ${color}40`,
                }}
              >
                <Icon className="h-5 w-5" style={{ color }} strokeWidth={1.75} />
              </div>
              <div
                className="text-[10px] uppercase tracking-[0.22em] font-semibold"
                style={{ color }}
              >
                {label}
              </div>
            </div>
            <div
              className="font-display font-bold text-[72px] leading-none tabular"
              style={{ color: '#F4F7FF' }}
            >
              {n}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SlideFrame>
  );
}
