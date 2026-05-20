import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Badge } from '../../components/Badge';
import { TeamAvatar, teamMembers } from '../../components/TeamAvatar';
import { fadeUp, stagger } from '../../lib/motion';

export function Title() {
  return (
    <div className="h-full w-full flex items-center justify-center px-4">
      <motion.div
        className="max-w-5xl w-full flex flex-col items-center text-center"
        variants={stagger(0.1, 0.08)}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeUp} className="mb-8">
          <Badge tone="violet">Document Four · Sprint Plan</Badge>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-display font-bold text-display leading-[1.02]"
        >
          <span className="block text-ink-primary">Sprint Plan</span>
          <span className="block text-gradient-cyan">Three sprints. Six weeks.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-2xl text-ink-secondary text-lg leading-relaxed"
        >
          Foundation, registration engine, and admin polish — 157 functional
          requirements scoped, prioritized, and sequenced for delivery from
          1 Jun to 12 Jul 2026.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-14 flex flex-wrap justify-center gap-4"
        >
          {teamMembers.map(m => (
            <div
              key={m.id}
              className="glass rounded-full pl-2 pr-6 py-2 flex items-center gap-3 shadow-e1"
            >
              <TeamAvatar {...m} size={44} />
              <div className="leading-tight text-left">
                <div className="font-semibold text-ink-primary text-[14px] whitespace-nowrap">{m.name}</div>
                <div className="font-mono text-[10.5px] text-ink-tertiary tabular tracking-[0.18em] uppercase mt-0.5">
                  ID · {m.id}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex items-center justify-center gap-3 text-[13px] text-ink-tertiary"
        >
          <div className="h-8 w-8 rounded-md border border-white/10 flex items-center justify-center">
            <ArrowRight className="h-4 w-4" />
          </div>
          <span>Press right arrow to begin · H toggles chrome · F for fullscreen</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
