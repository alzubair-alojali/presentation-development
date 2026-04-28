import { motion } from 'framer-motion';
import {
  ShieldCheck, Eye, Workflow, Hand, Calendar, Lock, FileSearch,
} from 'lucide-react';
import { SlideFrame } from '../../components/SlideFrame';
import { fadeUp, stagger } from '../../lib/motion';

const highlights = [
  {
    icon: ShieldCheck,
    color: '#7C8BFF',
    code: 'FR-AUTH-05',
    title: 'OTP-verified onboarding',
    body: 'First login requires email verification through a 6-digit numeric OTP with a 5-minute expiry; a forced password change follows.',
  },
  {
    icon: Eye,
    color: '#4CC4FF',
    code: 'FR-ELG-07',
    title: 'Real-time eligibility badge',
    body: 'Every course on the catalog page shows Eligible / Missing Prerequisite / Credit Limit Exceeded — computed live by the Eligibility Engine.',
  },
  {
    icon: Workflow,
    color: '#7C8BFF',
    code: 'FR-WSW-04/05',
    title: 'Atomic Drop+Add swap',
    body: 'A swap request executes both sides in one DB transaction — either both commit or both roll back. No half-swap states.',
  },
  {
    icon: Hand,
    color: '#FFB86B',
    code: 'FR-OVR-02/04',
    title: 'Documented overrides',
    body: 'Advisors can override prerequisite or credit-limit checks per-item with a mandatory written reason. Logged as OVERRIDE_APPROVE in the audit log.',
  },
  {
    icon: Calendar,
    color: '#FFB86B',
    code: 'FR-TBL-05/10',
    title: 'Drag-drop with conflict scan',
    body: 'Moving a section on the timetable runs a per-student conflict simulation BEFORE the change is applied. Affected enrollments freeze until an advisor resolves.',
  },
  {
    icon: Lock,
    color: '#A7B3CC',
    code: 'FR-AUD-03',
    title: 'Append-only audit log',
    body: 'Every significant action persists with before / after data. No edits or deletes are allowed through any UI or API — ever.',
  },
];

export function Slide05FrHighlights() {
  return (
    <SlideFrame
      id="fr-highlights"
      ariaLabel="Functional Requirements Highlights"
      kicker="Functional Requirements"
      title="The shall-statements that define the system"
      subtitle="Six requirements, picked from the spec, that capture the character of the platform."
    >
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6"
        variants={stagger(0.06, 0.06)}
        initial="hidden"
        animate="show"
      >
        {highlights.map(({ icon: Icon, color, code, title, body }) => (
          <motion.article
            key={code}
            variants={fadeUp}
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className="rounded-lg glass p-5 shadow-e1 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className="h-10 w-10 rounded-md flex items-center justify-center"
                style={{ background: `${color}14`, border: `1px solid ${color}40` }}
              >
                <Icon className="h-4.5 w-4.5" style={{ color, width: 18, height: 18 }} strokeWidth={1.75} />
              </div>
              <div
                className="font-mono tabular text-[10px] uppercase tracking-[0.14em]"
                style={{ color }}
              >
                {code}
              </div>
            </div>
            <h3 className="font-display font-semibold text-[16px] text-ink-primary mb-1.5 leading-tight">
              {title}
            </h3>
            <p className="text-[13px] text-ink-secondary leading-relaxed">{body}</p>
          </motion.article>
        ))}
      </motion.div>
    </SlideFrame>
  );
}
