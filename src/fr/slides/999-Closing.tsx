import { motion } from 'framer-motion';
import { Badge } from '../../components/Badge';
import { TeamAvatar, teamMembers } from '../../components/TeamAvatar';
import { fadeUp, stagger } from '../../lib/motion';

export function Slide999Closing() {
  return (
    <div className="h-full w-full flex items-center justify-center px-4">
      <motion.div
        className="w-full max-w-5xl flex flex-col items-center text-center"
        variants={stagger(0.1, 0.08)}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeUp} className="mb-8">
          <Badge tone="cyan">End of Presentation</Badge>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-display font-bold text-display leading-[1.02]"
        >
          <span className="block text-ink-primary">Thank you.</span>
          <span className="block text-gradient-cyan">Questions?</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-2xl text-ink-secondary text-lg leading-relaxed"
        >
          Course Registration Management System — Functional Requirements & Wireframes.
          Software Development Practice, LIMU, 2025 / 2026.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-14 flex flex-wrap justify-center gap-4"
        >
          {teamMembers.map(m => (
            <div
              key={m.id}
              className="rounded-lg glass px-5 py-4 flex items-center gap-4 shadow-e1 min-w-[260px]"
            >
              <TeamAvatar {...m} size={52} />
              <div className="leading-tight text-left min-w-0">
                <div className="font-semibold text-ink-primary text-[14.5px] whitespace-nowrap">{m.name}</div>
                <div className="font-mono text-[10.5px] text-ink-tertiary tabular uppercase tracking-[0.18em] mt-1">
                  ID · {m.id}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
