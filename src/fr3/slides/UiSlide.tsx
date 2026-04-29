import { useEffect, useRef, useState, type ComponentType } from 'react';
import { motion } from 'framer-motion';
import { SlideFrame } from '../../components/SlideFrame';
import type { Wireframe } from '../../fr/data/wireframes';
import { fadeUp } from '../../lib/motion';

import { Login } from '../ui/Login';
import { Otp } from '../ui/Otp';
import { Dashboard } from '../ui/Dashboard';
import { Catalog } from '../ui/Catalog';
import { CourseDetails } from '../ui/CourseDetails';
import { RequestSidebar } from '../ui/RequestSidebar';
import { MyRequests } from '../ui/MyRequests';
import { MySchedule } from '../ui/MySchedule';
import { AdvisorDashboard } from '../ui/AdvisorDashboard';
import { RequestReview } from '../ui/RequestReview';
import { AdminDashboard } from '../ui/AdminDashboard';
import { Timetable } from '../ui/Timetable';
import { ConflictDialog } from '../ui/ConflictDialog';
import { OverridesReport } from '../ui/OverridesReport';

const UI_MAP: Record<string, ComponentType> = {
  V2Split: Login,
  V2Otp: Otp,
  Dashboard,
  Catalog,
  CourseDetails,
  CartSidebarOverlay: RequestSidebar,
  MyRequests,
  MySchedule,
  AdvisorDashboard,
  RequestReview,
  AdminDashboard,
  Timetable,
  ConflictDialog,
  OverridesReport,
};

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

const W = 1440;
const H = 900;

export function UiSlide({ wireframe, index, total }: Props) {
  const Comp = UI_MAP[wireframe.component];
  const stageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    const update = () => {
      if (!stageRef.current) return;
      const { width, height } = stageRef.current.getBoundingClientRect();
      const sx = width / W;
      const sy = height / H;
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
      id={`ui-${wireframe.component}`}
      ariaLabel={`UI Design — ${wireframe.name}`}
      kicker={`${groupLabel[wireframe.group]} · UI · ${index} of ${total}`}
      title={
        <span className="flex items-baseline gap-3">
          <span>{wireframe.name}</span>
          <span
            className="text-[0.32em] font-mono tabular uppercase tracking-[0.22em] font-semibold"
            style={{ color: '#4CC4FF', fontFamily: 'JetBrains Mono' }}
          >
            UI design
          </span>
        </span>
      }
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
            style={{
              color: '#4CC4FF',
              background: 'linear-gradient(90deg, rgba(76,196,255,0.16), rgba(124,139,255,0.10))',
              border: '1px solid rgba(76,196,255,0.40)',
            }}
          >
            wireframe → polished UI
          </span>
          <span className="text-[12.5px] text-ink-secondary">{wireframe.description}</span>
        </div>

        <div ref={stageRef} className="flex-1 min-h-0 flex items-center justify-center">
          {Comp ? (
            <div
              className="rounded-lg overflow-hidden relative"
              style={{
                width: W * scale,
                height: H * scale,
                border: `1px solid ${color}40`,
                boxShadow: `0 1px 0 rgba(255,255,255,0.04) inset, 0 24px 80px -20px ${color}40`,
                background: '#060B1A',
              }}
            >
              <div
                style={{
                  width: W,
                  height: H,
                  transform: `scale(${scale})`,
                  transformOrigin: 'top left',
                }}
              >
                <Comp />
              </div>
            </div>
          ) : (
            <div className="text-[#FF6B7A] font-mono text-sm p-4">
              UI for "{wireframe.component}" not implemented
            </div>
          )}
        </div>
      </motion.div>
    </SlideFrame>
  );
}
