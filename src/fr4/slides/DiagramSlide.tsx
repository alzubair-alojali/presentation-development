import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { SlideFrame } from '../../components/SlideFrame';
import { fadeUp } from '../../lib/motion';

interface Props {
  id: string;
  kicker: string;
  title: string;
  tags?: string;
  description?: string;
  diagram: ReactNode;
}

/**
 * Generic frame for a diagram slide — kicker, title, contextual tags +
 * description, and the SVG diagram itself, scaled to fit.
 */
export function DiagramSlide({ id, kicker, title, tags, description, diagram }: Props) {
  return (
    <SlideFrame id={id} ariaLabel={title} kicker={kicker} title={title}>
      <motion.div
        className="flex flex-col h-full min-h-0 mt-4"
        variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        {(tags || description) && (
          <div className="flex items-center gap-3 mb-3">
            {tags && (
              <span
                className="font-mono tabular text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded"
                style={{
                  color: '#4CC4FF',
                  background: 'rgba(76,196,255,0.10)',
                  border: '1px solid rgba(76,196,255,0.30)',
                }}
              >
                {tags}
              </span>
            )}
            {description && (
              <span className="text-[12.5px] text-ink-secondary">{description}</span>
            )}
          </div>
        )}
        <div className="flex-1 min-h-0 flex items-center justify-center">{diagram}</div>
      </motion.div>
    </SlideFrame>
  );
}
