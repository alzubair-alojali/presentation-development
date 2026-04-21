import { motion } from 'framer-motion';
import { GraduationCap, UserCheck, ShieldCheck } from 'lucide-react';
import { SlideFrame } from '../components/SlideFrame';
import { fadeUp, stagger } from '../lib/motion';

const journeys = [
  {
    icon: ShieldCheck,
    title: 'The Admin Journey',
    color: '#FFB86B',
    gradient: 'linear-gradient(135deg, #FFB86B 0%, #FF6B7A 100%)',
    body:
      'The Admin configures the catalog, provisions users, and opens the registration window. Throughout the term, they monitor system overrides, manage unresponsive advisors, and ultimately close registration to archive the term.',
    beats: ['Configure catalog', 'Provision users', 'Monitor overrides', 'Handle escalations', 'Close & archive'],
  },
  {
    icon: GraduationCap,
    title: 'The Student Journey',
    color: '#7C8BFF',
    gradient: 'linear-gradient(135deg, #7C8BFF 0%, #B980FF 100%)',
    body:
      'After authenticating, the Student browses the catalog using real-time eligibility checks to build a conflict-free schedule. They submit this cart to their Advisor for approval and can later request withdrawals or section swaps.',
    beats: ['Authenticate', 'Browse + eligibility', 'Build conflict-free cart', 'Submit request', 'Withdraw / swap'],
  },
  {
    icon: UserCheck,
    title: 'The Advisor Journey',
    color: '#4CC4FF',
    gradient: 'linear-gradient(135deg, #4CC4FF 0%, #7C8BFF 100%)',
    body:
      'The Advisor reviews pending requests, approving valid schedules or granting manual overrides for system warnings. They manage the queue by returning flawed requests for editing or issuing formal rejections.',
    beats: ['Review queue', 'Approve or bulk-approve', 'Grant overrides', 'Return for edit', 'Reject with reason'],
  },
];

export function Slide04Journeys() {
  return (
    <SlideFrame
      id="journeys"
      ariaLabel="Actor Journeys"
      kicker="System Scenarios · part 2 of 2"
      title="The three actor journeys"
      subtitle="The same system told from each actor's perspective — what they care about and what they do."
    >
      <motion.div
        className="grid md:grid-cols-3 gap-6 mt-4"
        variants={stagger(0.1, 0.08)}
        initial="hidden"
        animate="show"
      >
        {journeys.map(({ icon: Icon, title, color, gradient, body, beats }) => (
          <motion.article
            key={title}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className="relative rounded-lg glass p-7 shadow-e1 overflow-hidden flex flex-col"
          >
            <div className="absolute inset-x-0 top-0 h-[3px]" style={{ background: gradient }} />
            <div className="flex items-center gap-4 mb-6">
              <div
                className="h-12 w-12 rounded-md flex items-center justify-center"
                style={{ background: `${color}14`, border: `1px solid ${color}40` }}
              >
                <Icon className="h-5 w-5" style={{ color }} strokeWidth={1.75} />
              </div>
              <div>
                <div
                  className="text-[10px] uppercase tracking-[0.22em] font-semibold"
                  style={{ color }}
                >
                  Journey
                </div>
                <h3 className="font-display font-semibold text-[19px] text-ink-primary leading-tight mt-0.5">
                  {title}
                </h3>
              </div>
            </div>

            <p className="text-ink-secondary text-[13.5px] leading-relaxed mb-5">{body}</p>

            <div className="mt-auto">
              <div
                className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-2"
                style={{ color }}
              >
                Key Beats
              </div>
              <div className="flex flex-wrap gap-1.5">
                {beats.map((b, i) => (
                  <span
                    key={i}
                    className="text-[11px] rounded-md px-2 py-1 border"
                    style={{
                      color: '#A7B3CC',
                      borderColor: `${color}35`,
                      background: `${color}08`,
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </SlideFrame>
  );
}
