import { useState } from 'react';
import { motion } from 'framer-motion';
import { ActorFigure } from '../components/ActorFigure';
import { actorColor } from '../data/scenarios';
import type { Actor } from '../data/scenarios';

/**
 * Interactive Use Case Diagram.
 * Self-contained layout (does NOT use SlideFrame) so the SVG can fill the
 * entire available height with a small title block on the left.
 */

type HoverKey = Actor | null;

const actorMeta: Record<Exclude<Actor, 'any'>, { label: string; y: number; side: 'left' | 'right' }> = {
  student: { label: 'Student', y: 110, side: 'left' },
  advisor: { label: 'Advisor', y: 560, side: 'left' },
  admin: { label: 'Admin', y: 335, side: 'right' },
};

interface Node {
  id: string;
  name: string;
  x: number;
  y: number;
  actors: Actor[];
}

const NODE_W = 230;
const NODE_H = 52;

const nodes: Node[] = [
  { id: 'uc-view-courses',         name: 'View Courses',                     x: 340, y: 40,  actors: ['student'] },
  { id: 'uc-manage-registration',  name: 'Manage Registration Request',      x: 340, y: 120, actors: ['student'] },
  { id: 'uc-manage-courses',       name: 'Manage Courses',                   x: 340, y: 210, actors: ['admin'] },
  { id: 'uc-manage-semesters',     name: 'Manage Semesters',                 x: 340, y: 290, actors: ['admin'] },
  { id: 'uc-authenticate',         name: 'Authenticate',                     x: 340, y: 370, actors: ['student', 'advisor', 'admin'] },
  { id: 'uc-view-notifications',   name: 'View Notifications',               x: 340, y: 450, actors: ['student', 'advisor', 'admin'] },
  { id: 'uc-manage-users',         name: 'Manage User Accounts',             x: 340, y: 530, actors: ['admin'] },
  { id: 'uc-monitor-reports',      name: 'Monitor System Reports',           x: 340, y: 610, actors: ['admin'] },
  { id: 'uc-manage-requests',      name: 'Manage Registration Requests',     x: 340, y: 690, actors: ['advisor'] },
  { id: 'uc-grant-override',       name: 'Grant an Override',                x: 340, y: 770, actors: ['advisor'] },
];

const VW = 920;
const VH = 860;
const BOUNDARY = { x: 300, y: 8, w: 310, h: 844 };

export function Slide05UseCaseDiagram() {
  const [hover, setHover] = useState<HoverKey>(null);

  const isDimmed = (actors: Actor[]) => hover !== null && !actors.includes(hover);

  const actorAnchor = (a: Exclude<Actor, 'any'>) => {
    const meta = actorMeta[a];
    if (meta.side === 'left') return { x: 170, y: meta.y + 38 };
    return { x: 780, y: meta.y + 38 };
  };

  return (
    <section
      id="usecase-diagram"
      aria-label="Interactive Use Case Diagram"
      className="relative w-full h-full flex flex-col"
      style={{ paddingInline: 'clamp(40px, 5vw, 72px)', paddingTop: 96, paddingBottom: 108 }}
    >
      <header className="mb-4 flex items-baseline justify-between gap-8">
        <div>
          <div className="text-[11px] uppercase tracking-[0.24em] text-ink-tertiary font-medium mb-2">
            Use Case Diagram · part 2 of 2
          </div>
          <h2 className="font-display font-bold text-h2 text-ink-primary leading-tight">
            Hover an actor to see their world
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-4 text-[11px] font-mono tabular text-ink-tertiary uppercase tracking-widest">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: actorColor.student }} />
            Student
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: actorColor.advisor }} />
            Advisor
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: actorColor.admin }} />
            Admin
          </span>
        </div>
      </header>

      <div className="flex-1 min-h-0 relative flex items-center justify-center">
        <div
          className="relative h-full w-full max-w-[1040px] flex items-center justify-center"
          style={{ maxHeight: '100%' }}
        >
          <svg
            viewBox={`0 0 ${VW} ${VH}`}
            className="w-auto h-full max-w-full"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Use case diagram"
          >
            <defs>
              <filter id="soft-glow">
                <feGaussianBlur stdDeviation="3" />
                <feComponentTransfer><feFuncA type="linear" slope="1.2" /></feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <rect
              x={BOUNDARY.x}
              y={BOUNDARY.y}
              width={BOUNDARY.w}
              height={BOUNDARY.h}
              rx={20}
              fill="rgba(255,255,255,0.015)"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth={1.2}
            />
            <text
              x={BOUNDARY.x + BOUNDARY.w / 2}
              y={BOUNDARY.y - 16}
              textAnchor="middle"
              className="fill-ink-tertiary"
              style={{
                fontSize: 11,
                fontFamily: 'Inter',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              Course Registration System
            </text>

            {nodes.map(node => {
              const cy = node.y + NODE_H / 2;
              return node.actors
                .filter((a): a is Exclude<Actor, 'any'> => a !== 'any')
                .map(a => {
                  const anchor = actorAnchor(a);
                  const dim = isDimmed(node.actors);
                  const focused = hover === a;
                  const edgeX = actorMeta[a].side === 'left' ? node.x : node.x + NODE_W;
                  const midX = (anchor.x + edgeX) / 2;
                  const d = `M ${anchor.x} ${anchor.y} C ${midX} ${anchor.y}, ${midX} ${cy}, ${edgeX} ${cy}`;
                  return (
                    <path
                      key={`${node.id}-${a}`}
                      d={d}
                      fill="none"
                      stroke={actorColor[a]}
                      strokeWidth={focused ? 1.5 : 1}
                      strokeOpacity={dim ? 0.08 : focused ? 0.85 : 0.4}
                      style={{ transition: 'all 240ms ease' }}
                    />
                  );
                });
            })}

            {nodes.map(node => {
              const dim = isDimmed(node.actors);
              const hoverColor = hover && node.actors.includes(hover) ? actorColor[hover] : null;
              return (
                <g key={node.id} style={{ transition: 'opacity 240ms ease', opacity: dim ? 0.2 : 1 }}>
                  <rect
                    x={node.x}
                    y={node.y}
                    width={NODE_W}
                    height={NODE_H}
                    rx={26}
                    fill="rgba(11,18,38,0.85)"
                    stroke={hoverColor ?? 'rgba(255,255,255,0.14)'}
                    strokeWidth={hoverColor ? 1.5 : 1}
                    filter={hoverColor ? 'url(#soft-glow)' : undefined}
                    style={{ transition: 'all 240ms ease' }}
                  />
                  <text
                    x={node.x + NODE_W / 2}
                    y={node.y + NODE_H / 2 + 5}
                    textAnchor="middle"
                    className="fill-ink-primary"
                    style={{ fontSize: 13, fontFamily: 'Inter', fontWeight: 500 }}
                  >
                    {node.name}
                  </text>
                </g>
              );
            })}

            {/* Actor figures drawn IN the SVG so they scale with the diagram */}
            {(Object.keys(actorMeta) as Array<Exclude<Actor, 'any'>>).map(a => {
              const meta = actorMeta[a];
              const active = hover === a;
              const color = actorColor[a];
              const cxBase = meta.side === 'left' ? 80 : 840;
              const cyBase = meta.y - 30;
              return (
                <g
                  key={a}
                  style={{ cursor: 'pointer', transition: 'all 240ms ease' }}
                  onMouseEnter={() => setHover(a)}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(a)}
                  onBlur={() => setHover(null)}
                  tabIndex={0}
                  aria-label={`${meta.label} actor`}
                >
                  {/* hit area */}
                  <rect x={cxBase - 50} y={cyBase - 10} width={100} height={170} fill="transparent" />
                  {/* glow halo */}
                  <circle
                    cx={cxBase}
                    cy={cyBase + 30}
                    r={40}
                    fill={color}
                    opacity={active ? 0.18 : 0.08}
                    style={{ transition: 'opacity 240ms ease' }}
                  />
                  {/* head */}
                  <circle
                    cx={cxBase}
                    cy={cyBase + 18}
                    r={12}
                    fill="rgba(11,18,38,0.9)"
                    stroke={color}
                    strokeWidth={2.5}
                  />
                  {/* body + limbs */}
                  <line x1={cxBase} y1={cyBase + 30} x2={cxBase} y2={cyBase + 80} stroke={color} strokeWidth={2.5} strokeLinecap="round" />
                  <line x1={cxBase} y1={cyBase + 45} x2={cxBase - 20} y2={cyBase + 62} stroke={color} strokeWidth={2.5} strokeLinecap="round" />
                  <line x1={cxBase} y1={cyBase + 45} x2={cxBase + 20} y2={cyBase + 62} stroke={color} strokeWidth={2.5} strokeLinecap="round" />
                  <line x1={cxBase} y1={cyBase + 80} x2={cxBase - 16} y2={cyBase + 110} stroke={color} strokeWidth={2.5} strokeLinecap="round" />
                  <line x1={cxBase} y1={cyBase + 80} x2={cxBase + 16} y2={cyBase + 110} stroke={color} strokeWidth={2.5} strokeLinecap="round" />
                  {/* label */}
                  <text
                    x={cxBase}
                    y={cyBase + 136}
                    textAnchor="middle"
                    style={{
                      fontSize: 15,
                      fontFamily: 'Satoshi, Inter',
                      fontWeight: 600,
                      fill: active ? color : '#A7B3CC',
                      transition: 'fill 240ms ease',
                    }}
                  >
                    {meta.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
      {/* Hidden ActorFigure import keeps the module referenced for tree-shake hints */}
      <span aria-hidden className="hidden"><ActorFigure color="#000" size={0} /></span>
    </section>
  );
}
