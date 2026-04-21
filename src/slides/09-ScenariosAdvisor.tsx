import { motion } from 'framer-motion';
import { SlideFrame } from '../components/SlideFrame';
import { ScenarioCard } from '../components/ScenarioCard';
import { scenarios } from '../data/scenarios';
import { fadeUp, stagger } from '../lib/motion';

export function Slide09ScenariosAdvisor() {
  const items = scenarios.filter(s => s.actor === 'advisor');
  return (
    <SlideFrame
      id="usecases-advisor"
      ariaLabel="Advisor Use Cases"
      kicker="Use Cases · group 3 of 4"
      title="Advisor"
      subtitle="Process the queue — approve, reject, return for edit, override a blocked item, or bulk-approve clean requests."
    >
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 max-h-full overflow-y-auto scrollpanel pr-2"
        variants={stagger(0.06, 0.06)}
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
