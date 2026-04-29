import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SlideFrame } from '../../components/SlideFrame';
// @ts-expect-error — components.jsx is plain JSX, no declarations
import * as wf from '../../fr/wireframes/components.jsx';
import type { Wireframe } from '../../fr/data/wireframes';
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
 * Dark-theme wireframe slide. Same React components as the /fr deck,
 * but the host is wrapped in `.wf-dark` so the override CSS reskins
 * the paper / sketchy treatment to match the presentation's
 * midnight-navy + cyan/violet visual language.
 */
export function WireframeSlideDark({ wireframe, index, total }: Props) {
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
      id={`wf2-${wireframe.component}`}
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

        <div ref={stageRef} className="flex-1 min-h-0 flex items-center justify-center">
          {Comp ? (
            <div
              className="rounded-lg overflow-hidden relative"
              style={{
                width: WF_W * scale,
                height: WF_H * scale,
                border: '1px solid rgba(255, 255, 255, 0.10)',
                boxShadow:
                  '0 1px 0 rgba(255, 255, 255, 0.04) inset, 0 24px 70px -20px rgba(0, 0, 0, 0.6)',
                background: '#0B1226',
              }}
            >
              {/* The .wf-dark wrapper triggers the override CSS that skins the
                  light/sketchy components into the dark theme. */}
              <div
                className="wf-dark"
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
            <div className="text-[#FF6B7A] font-mono text-sm p-4">
              component "{wireframe.component}" not found
            </div>
          )}
        </div>
      </motion.div>
    </SlideFrame>
  );
}
