import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SlideFrame } from '../../components/SlideFrame';
// @ts-expect-error — components.jsx is plain JSX without declarations
import * as wf from '../wireframes/components.jsx';
import type { Wireframe } from '../data/wireframes';
import { fadeUp } from '../../lib/motion';

interface Props {
  wireframe: Wireframe;
  index: number;
  total: number;
}

const groupColor: Record<Wireframe['group'], string> = {
  auth: '#A7B3CC',
  student: '#7C8BFF',
  advisor: '#4CC4FF',
  admin: '#FFB86B',
};

const groupLabel: Record<Wireframe['group'], string> = {
  auth: 'Auth Flow',
  student: 'Student Flow',
  advisor: 'Advisor Flow',
  admin: 'Admin Flow',
};

/**
 * Wireframe slide — embeds the original 1440×900 React component into
 * a "paper card" that contrasts cleanly against the dark deck. The card
 * is auto-scaled to fit the available space.
 */
export function WireframeSlide({ wireframe, index, total }: Props) {
  const Comp = (wf as Record<string, React.ComponentType>)[wireframe.component];
  const stageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    const update = () => {
      if (!stageRef.current) return;
      const { width, height } = stageRef.current.getBoundingClientRect();
      const sx = width / 1440;
      const sy = height / 900;
      setScale(Math.max(0.25, Math.min(sx, sy)));
    };
    update();
    const ro = new ResizeObserver(update);
    if (stageRef.current) ro.observe(stageRef.current);
    window.addEventListener('resize', update);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, [wireframe.component]);

  const color = groupColor[wireframe.group];

  return (
    <SlideFrame
      id={`wf-${wireframe.component}`}
      ariaLabel={`Wireframe — ${wireframe.name}`}
      kicker={`${groupLabel[wireframe.group]} · ${index} of ${total}`}
      title={wireframe.name}
    >
      <motion.div
        className="flex flex-col h-full min-h-0 mt-4"
        variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        <div className="flex items-center gap-3 mb-3">
          <span
            className="font-mono tabular text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded"
            style={{ color, background: `${color}14`, border: `1px solid ${color}40` }}
          >
            covers · {wireframe.scenarios}
          </span>
          <span className="text-[12.5px] text-ink-secondary">{wireframe.description}</span>
        </div>

        <div
          ref={stageRef}
          className="wf-paper flex-1 min-h-0 rounded-lg overflow-hidden flex items-center justify-center relative"
          style={{
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 24px 70px -20px rgba(0,0,0,0.55)',
            background: '#f4f1ea',
          }}
        >
          {Comp ? (
            <div
              style={{
                width: 1440,
                height: 900,
                transform: `scale(${scale})`,
                transformOrigin: 'center center',
                flexShrink: 0,
              }}
            >
              <Comp />
            </div>
          ) : (
            <div className="text-[#c0392b] font-mono text-sm p-4">
              component "{wireframe.component}" not found in wireframes/components.jsx
            </div>
          )}
        </div>
      </motion.div>
    </SlideFrame>
  );
}
