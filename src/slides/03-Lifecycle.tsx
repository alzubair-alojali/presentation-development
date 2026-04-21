import { motion } from 'framer-motion';
import { SlideFrame } from '../components/SlideFrame';
import { fadeUp, stagger } from '../lib/motion';

const phases = [
  {
    n: '01',
    title: 'Setup & Launch',
    owner: 'Admin',
    color: '#FFB86B',
    steps: [
      'Create courses, prerequisites, sections',
      'Provision user accounts + assign advisors',
      'Create term and open registration window',
    ],
  },
  {
    n: '02',
    title: 'Registration & Submission',
    owner: 'Student',
    color: '#7C8BFF',
    steps: [
      'Secure first-time login (OTP)',
      'Browse catalog, real-time eligibility',
      'Build conflict-free cart and submit',
    ],
  },
  {
    n: '03',
    title: 'Review & Schedule Management',
    owner: 'Advisor',
    color: '#4CC4FF',
    steps: [
      'Approve individually or in bulk',
      'Return, reject, or grant overrides',
      'Process withdrawals and swaps',
    ],
  },
  {
    n: '04',
    title: 'Monitoring & Closure',
    owner: 'Admin',
    color: '#FFB86B',
    steps: [
      'Audit overrides, reassign escalations (48h)',
      'Close registration (auto-reject pending)',
      'Archive term into read-only',
    ],
  },
];

export function Slide03Lifecycle() {
  return (
    <SlideFrame
      id="lifecycle"
      ariaLabel="System Scenarios — Lifecycle"
      kicker="System Scenarios · part 1 of 2"
      title="Course Registration Lifecycle"
      subtitle="The general system scenario told as four phases spanning an academic term."
    >
      <motion.div
        className="relative mt-6"
        variants={stagger(0.08, 0.08)}
        initial="hidden"
        animate="show"
      >
        <div
          className="absolute left-0 right-0 top-14 h-px hidden md:block"
          style={{
            background:
              'linear-gradient(90deg, rgba(255,184,107,0.3), rgba(124,139,255,0.3), rgba(76,196,255,0.3), rgba(255,184,107,0.3))',
          }}
        />
        <div className="grid md:grid-cols-4 gap-5 md:gap-6">
          {phases.map(p => (
            <motion.div key={p.n} variants={fadeUp} className="relative">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="h-10 w-10 rounded-full flex items-center justify-center font-mono tabular text-[13px] font-semibold relative z-10 shadow-e2"
                  style={{
                    background: 'rgba(11,18,38,1)',
                    border: `1.5px solid ${p.color}`,
                    color: p.color,
                  }}
                >
                  {p.n}
                </div>
                <div
                  className="h-px flex-1"
                  style={{ background: `${p.color}33` }}
                />
              </div>
              <div className="rounded-lg glass p-5 shadow-e1 min-h-[200px]">
                <div
                  className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-2"
                  style={{ color: p.color }}
                >
                  {p.owner}
                </div>
                <h3 className="font-display font-semibold text-h3 text-ink-primary mb-3">
                  {p.title}
                </h3>
                <ul className="space-y-1.5 text-[13px] text-ink-secondary leading-snug">
                  {p.steps.map((s, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span
                        className="shrink-0 mt-[7px] h-1 w-1 rounded-full"
                        style={{ background: p.color }}
                      />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SlideFrame>
  );
}
