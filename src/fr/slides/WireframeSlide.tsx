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

const WF_W = 1440;
const WF_H = 900;

/**
 * Wireframe slide — embeds the original 1440×900 React component and
 * sizes the paper card to hug the wireframe tightly (no left/right
 * letterboxing inside the card).
 */
export function WireframeSlide({ wireframe, index, total }: Props) {
  const Comp = (wf as Record<string, React.ComponentType>)[wireframe.component];
  const stageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    const update = () => {
      if (!stageRef.current) return;
      const { width, height } = stageRef.current.getBoundingClientRect();
      const sx = width / WF_W;
      const sy = height / WF_H;
      setScale(Math.max(0.2, Math.min(sx, sy)));
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

        {/* Stage = available area; paper is sized to exactly the scaled wireframe */}
        <div
          ref={stageRef}
          className="flex-1 min-h-0 flex items-center justify-center"
        >
          {Comp ? (
            <div
              className="wf-paper rounded-lg overflow-hidden relative"
              style={{
                width: WF_W * scale,
                height: WF_H * scale,
                border: '1px solid rgba(255,255,255,0.10)',
                boxShadow: '0 24px 70px -20px rgba(0,0,0,0.55)',
                background: '#f4f1ea',
              }}
            >
              <div
                style={{
                  width: WF_W,
                  height: WF_H,
                  transform: `scale(${scale})`,
                  transformOrigin: 'top left',
                }}
              >
                <Comp />
              </div>
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
