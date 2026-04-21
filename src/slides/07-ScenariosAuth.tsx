import { motion } from 'framer-motion';
import { SlideFrame } from '../components/SlideFrame';
import { ScenarioCard } from '../components/ScenarioCard';
import { scenarios } from '../data/scenarios';
import { fadeUp, stagger } from '../lib/motion';

export function Slide07ScenariosAuth() {
  const items = scenarios.filter(s => ['S01', 'S02', 'S03'].includes(s.code));
  return (
    <SlideFrame
      id="usecases-auth"
      ariaLabel="Authentication Use Cases"
      kicker="Use Cases · group 1 of 4"
      title="Authentication"
      subtitle="Secure first-time onboarding with email OTP, regular login, and password reset. Click any card to expand its full specification."
    >
      <motion.div
        className="grid md:grid-cols-3 gap-5 mt-4 content-start max-h-full overflow-y-auto scrollpanel pr-2"
        variants={stagger(0.08, 0.08)}
        initial="hidden"
        animate="show"
      >
        {items.map(s => (
          <motion.div key={s.code} variants={fadeUp} className="self-start">
            <ScenarioCard scenario={s} />
          </motion.div>
        ))}
      </motion.div>
    </SlideFrame>
  );
}
