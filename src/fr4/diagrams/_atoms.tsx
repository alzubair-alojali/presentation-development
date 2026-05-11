/**
 * SVG diagram atoms — all rendered against a dark midnight background.
 * Tokens:
 *   --bg:     #060B1A
 *   --card:   rgba(255,255,255,0.04)
 *   --border: rgba(255,255,255,0.10)
 *   --ink:    #F4F7FF
 *   --ink2:   #A7B3CC
 *   --ink3:   #6E7A94
 *   --cyan:   #4CC4FF
 *   --violet: #7C8BFF
 *   --warm:   #FFB86B
 *   --pink:   #B980FF
 */

import { type ReactNode } from 'react';

export const T = {
  bg:     '#060B1A',
  card:   'rgba(255,255,255,0.04)',
  border: 'rgba(255,255,255,0.16)',
  ink:    '#F4F7FF',
  ink2:   '#A7B3CC',
  ink3:   '#6E7A94',
  cyan:   '#4CC4FF',
  violet: '#7C8BFF',
  warm:   '#FFB86B',
  pink:   '#B980FF',
  success:'#4ADE80',
  danger: '#FF6B7A',
  warn:   '#F5B752',
};

/* ─────────────────────────────────────────────────────────
   ClassBox — UML class with header, attributes, methods.
   ───────────────────────────────────────────────────────── */
export interface ClassBoxProps {
  x: number;
  y: number;
  width?: number;
  name: string;
  abstract?: boolean;
  tone?: string;          // accent for the header
  attributes?: string[];
  methods?: string[];
}
export function ClassBox({
  x, y, width = 200, name, abstract = false, tone = T.cyan, attributes = [], methods = [],
}: ClassBoxProps) {
  const headerH = 30;
  const attrPad = 6;
  const methPad = 6;
  const lineH = 14;
  const attrH = attributes.length ? attrPad * 2 + attributes.length * lineH : 0;
  const methH = methods.length ? methPad * 2 + methods.length * lineH : 0;
  const totalH = headerH + (attrH || 6) + (methH || 6);

  return (
    <g transform={`translate(${x},${y})`}>
      {/* Card */}
      <rect
        x={0} y={0} width={width} height={totalH}
        fill={T.card}
        stroke={T.border}
        strokeWidth={1}
        rx={8}
      />
      {/* Header strip */}
      <rect
        x={0} y={0} width={width} height={headerH}
        fill={`${tone}1A`}
        rx={8}
      />
      <rect x={0} y={headerH - 1} width={width} height={1} fill={tone} opacity={0.35} />
      <text
        x={width / 2}
        y={20}
        textAnchor="middle"
        fill={tone}
        style={{
          fontFamily: 'Satoshi, Inter, sans-serif',
          fontSize: 13,
          fontWeight: 700,
          fontStyle: abstract ? 'italic' : 'normal',
          letterSpacing: '0.02em',
        }}
      >
        {name}
      </text>

      {/* Attributes */}
      {attributes.length > 0 && (
        <>
          {attributes.map((a, i) => (
            <text
              key={i}
              x={10} y={headerH + attrPad + lineH * (i + 1) - 4}
              fill={T.ink2}
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 9.5,
              }}
            >
              {a}
            </text>
          ))}
          {methods.length > 0 && (
            <line
              x1={0} x2={width}
              y1={headerH + attrH - 1} y2={headerH + attrH - 1}
              stroke={T.border}
            />
          )}
        </>
      )}

      {/* Methods */}
      {methods.map((m, i) => (
        <text
          key={i}
          x={10} y={headerH + (attrH || 6) + methPad + lineH * (i + 1) - 4}
          fill={T.ink}
          style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9.5 }}
        >
          {m}
        </text>
      ))}
    </g>
  );
}

export function ClassBoxHeight(attributes = 0, methods = 0) {
  const headerH = 30;
  const lineH = 14;
  const pad = 6;
  const attrH = attributes ? pad * 2 + attributes * lineH : 6;
  const methH = methods ? pad * 2 + methods * lineH : 6;
  return headerH + attrH + methH;
}

/* ─────────────────────────────────────────────────────────
   Connection lines — for class/ERD diagrams.
   ───────────────────────────────────────────────────────── */
export function Line({
  d, stroke = T.ink3, dashed = false, marker, label, labelXY,
}: {
  d: string;
  stroke?: string;
  dashed?: boolean;
  marker?: 'inherit' | 'arrow' | 'diamond' | 'diamondFilled' | 'one' | 'many';
  label?: string;
  labelXY?: [number, number];
}) {
  return (
    <g>
      <path
        d={d}
        fill="none"
        stroke={stroke}
        strokeWidth={1.25}
        strokeDasharray={dashed ? '4 4' : undefined}
        markerEnd={marker ? `url(#m-${marker})` : undefined}
      />
      {label && labelXY && (
        <text
          x={labelXY[0]} y={labelXY[1]}
          fill={T.ink2}
          textAnchor="middle"
          style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, letterSpacing: 0.2 }}
        >
          {label}
        </text>
      )}
    </g>
  );
}

/* Reusable marker defs */
export function ArrowDefs() {
  return (
    <defs>
      <marker id="m-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
        <path d="M0,0 L10,5 L0,10 Z" fill={T.ink2} />
      </marker>
      <marker id="m-inherit" viewBox="0 0 12 12" refX="11" refY="6" markerWidth="11" markerHeight="11" orient="auto-start-reverse">
        <path d="M0,0 L11,6 L0,12 Z" fill={T.bg} stroke={T.ink2} strokeWidth="1.2" />
      </marker>
      <marker id="m-diamond" viewBox="0 0 14 10" refX="13" refY="5" markerWidth="13" markerHeight="9" orient="auto-start-reverse">
        <path d="M0,5 L7,0 L13,5 L7,10 Z" fill={T.bg} stroke={T.ink2} strokeWidth="1.2" />
      </marker>
      <marker id="m-diamondFilled" viewBox="0 0 14 10" refX="13" refY="5" markerWidth="13" markerHeight="9" orient="auto-start-reverse">
        <path d="M0,5 L7,0 L13,5 L7,10 Z" fill={T.ink2} />
      </marker>
      <marker id="m-one" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
        <line x1="2" y1="0" x2="2" y2="10" stroke={T.ink2} strokeWidth="1.4" />
      </marker>
      <marker id="m-many" viewBox="0 0 14 14" refX="13" refY="7" markerWidth="12" markerHeight="12" orient="auto-start-reverse">
        <path d="M0,3 L8,7 L0,11" fill="none" stroke={T.ink2} strokeWidth="1.4" />
      </marker>
    </defs>
  );
}

/* ─────────────────────────────────────────────────────────
   Activity diagram atoms.
   ───────────────────────────────────────────────────────── */
export function StartNode({ x, y, r = 9 }: { x: number; y: number; r?: number }) {
  return <circle cx={x} cy={y} r={r} fill={T.ink} />;
}
export function EndNode({ x, y, r = 9 }: { x: number; y: number; r?: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill="none" stroke={T.ink} strokeWidth={1.4} />
      <circle cx={x} cy={y} r={r - 4} fill={T.ink} />
    </g>
  );
}
export function ActionNode({
  x, y, w = 200, h = 36, label, tone = T.cyan,
}: { x: number; y: number; w?: number; h?: number; label: string; tone?: string }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect
        x={0} y={0} width={w} height={h}
        rx={h / 2}
        fill={`${tone}14`}
        stroke={tone}
        strokeOpacity={0.55}
        strokeWidth={1.2}
      />
      {label.split('\n').map((line, i, arr) => (
        <text
          key={i}
          x={w / 2}
          y={h / 2 + (i - (arr.length - 1) / 2) * 12 + 4}
          textAnchor="middle"
          fill={T.ink}
          style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500 }}
        >
          {line}
        </text>
      ))}
    </g>
  );
}
export function Decision({
  cx, cy, w = 70, h = 38, yes = 'yes', no = 'no',
}: { cx: number; cy: number; w?: number; h?: number; yes?: string; no?: string }) {
  const pts = `${cx},${cy - h / 2} ${cx + w / 2},${cy} ${cx},${cy + h / 2} ${cx - w / 2},${cy}`;
  return (
    <g>
      <polygon
        points={pts}
        fill={`${T.warm}10`}
        stroke={T.warm}
        strokeOpacity={0.55}
        strokeWidth={1.2}
      />
      <text x={cx - w / 2 - 12} y={cy + 4} fill={T.success} fontSize={10} fontFamily="JetBrains Mono">{yes}</text>
      <text x={cx + w / 2 + 6} y={cy + 4} fill={T.danger} fontSize={10} fontFamily="JetBrains Mono">{no}</text>
    </g>
  );
}
export function Merge({ cx, cy, w = 40, h = 22 }: { cx: number; cy: number; w?: number; h?: number }) {
  const pts = `${cx},${cy - h / 2} ${cx + w / 2},${cy} ${cx},${cy + h / 2} ${cx - w / 2},${cy}`;
  return <polygon points={pts} fill={T.ink3} fillOpacity={0.25} stroke={T.ink3} strokeWidth={1} />;
}
export function NoteBubble({
  x, y, w = 200, lines, tone = T.warm,
}: { x: number; y: number; w?: number; lines: string[]; tone?: string }) {
  const h = 14 + lines.length * 13;
  return (
    <g transform={`translate(${x},${y})`}>
      <path
        d={`M ${w - 12} 0 L ${w - 12} 12 L ${w} 12 M ${w} 12 L ${w - 12} 12 M 0 0 H ${w - 12} L ${w} 12 V ${h} H 0 Z`}
        fill={`${tone}0F`}
        stroke={tone}
        strokeOpacity={0.6}
        strokeWidth={1}
      />
      {lines.map((l, i) => (
        <text
          key={i}
          x={8} y={20 + i * 13}
          fill={tone}
          style={{ fontFamily: 'Inter, sans-serif', fontSize: 10.5, fontWeight: 500 }}
        >
          {l}
        </text>
      ))}
    </g>
  );
}
export function Flow({ d, dashed = false }: { d: string; dashed?: boolean }) {
  return (
    <path
      d={d}
      fill="none"
      stroke={T.ink3}
      strokeOpacity={0.7}
      strokeWidth={1.25}
      strokeDasharray={dashed ? '4 4' : undefined}
      markerEnd="url(#m-arrow)"
    />
  );
}

/* ─────────────────────────────────────────────────────────
   Sequence diagram atoms.
   ───────────────────────────────────────────────────────── */
export function Participant({
  x, top, bottom, label, kind = 'lifeline', tone = T.cyan,
}: { x: number; top: number; bottom: number; label: string; kind?: 'actor' | 'lifeline'; tone?: string }) {
  return (
    <g>
      {/* Header */}
      {kind === 'actor' ? (
        <g transform={`translate(${x - 16},${top - 50})`}>
          <circle cx={16} cy={10} r={8} stroke={tone} strokeWidth={1.5} fill="none" />
          <line x1={16} y1={18} x2={16} y2={34} stroke={tone} strokeWidth={1.5} />
          <line x1={16} y1={24} x2={6} y2={30} stroke={tone} strokeWidth={1.5} />
          <line x1={16} y1={24} x2={26} y2={30} stroke={tone} strokeWidth={1.5} />
          <line x1={16} y1={34} x2={8} y2={46} stroke={tone} strokeWidth={1.5} />
          <line x1={16} y1={34} x2={24} y2={46} stroke={tone} strokeWidth={1.5} />
          <text x={16} y={60} textAnchor="middle" fill={T.ink} fontSize={11} fontFamily="Inter" fontWeight={600}>
            {label}
          </text>
        </g>
      ) : (
        <g transform={`translate(${x - 65},${top - 30})`}>
          <rect width={130} height={26} rx={4} fill={`${tone}1A`} stroke={tone} strokeOpacity={0.5} strokeWidth={1.2} />
          <text x={65} y={17} textAnchor="middle" fill={T.ink} fontSize={11} fontFamily="Inter" fontWeight={600}>
            {label}
          </text>
        </g>
      )}
      {/* Lifeline */}
      <line x1={x} y1={top} x2={x} y2={bottom} stroke={T.ink3} strokeOpacity={0.55} strokeWidth={1} strokeDasharray="3 5" />
      {/* Bottom X */}
      <text x={x} y={bottom + 14} textAnchor="middle" fill={T.ink3} fontSize={14} fontWeight={600}>×</text>
    </g>
  );
}

export function Activation({
  x, y, h, tone = T.cyan,
}: { x: number; y: number; h: number; tone?: string }) {
  return (
    <rect x={x - 5} y={y} width={10} height={h} fill={`${tone}40`} stroke={tone} strokeOpacity={0.6} strokeWidth={1} rx={1} />
  );
}

export function Message({
  fromX, toX, y, label, dashed = false, returnArrow = false, self = false,
}: {
  fromX: number; toX: number; y: number; label: string;
  dashed?: boolean; returnArrow?: boolean; self?: boolean;
}) {
  if (self) {
    return (
      <g>
        <path
          d={`M ${fromX} ${y} h 40 v 18 h -40`}
          fill="none"
          stroke={T.ink2}
          strokeWidth={1.2}
          strokeDasharray={dashed ? '4 4' : undefined}
          markerEnd="url(#m-arrow)"
        />
        <text x={fromX + 4} y={y - 4} fill={T.ink2} fontSize={10} fontFamily="Inter">
          {label}
        </text>
      </g>
    );
  }
  const dir = toX > fromX ? 1 : -1;
  const labelX = (fromX + toX) / 2;
  return (
    <g>
      <line
        x1={fromX + dir * 5}
        y1={y}
        x2={toX - dir * 5}
        y2={y}
        stroke={returnArrow ? T.ink3 : T.ink2}
        strokeWidth={1.2}
        strokeDasharray={dashed || returnArrow ? '4 4' : undefined}
        markerEnd="url(#m-arrow)"
      />
      <text
        x={labelX} y={y - 4}
        textAnchor="middle"
        fill={returnArrow ? T.ink3 : T.ink}
        fontSize={10}
        fontFamily="Inter"
        fontWeight={returnArrow ? 400 : 500}
      >
        {label}
      </text>
    </g>
  );
}

export function Frame({
  x, y, w, h, kind = 'alt', label,
}: { x: number; y: number; w: number; h: number; kind?: 'alt' | 'loop' | 'opt'; label: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill="none" stroke={T.ink3} strokeOpacity={0.45} strokeWidth={1} />
      <path
        d={`M ${x} ${y} h 60 l 8 12 v 6 h -68 z`}
        fill={T.bg}
        stroke={T.ink3}
        strokeOpacity={0.55}
        strokeWidth={1}
      />
      <text x={x + 10} y={y + 14} fill={T.warn} fontSize={10} fontFamily="JetBrains Mono" fontWeight={700}>
        {kind}
      </text>
      <text x={x + 76} y={y + 14} fill={T.ink2} fontSize={10} fontFamily="Inter">
        [{label}]
      </text>
    </g>
  );
}

export function FrameDivider({ x, y, w, label }: { x: number; y: number; w: number; label: string }) {
  return (
    <g>
      <line x1={x} y1={y} x2={x + w} y2={y} stroke={T.ink3} strokeOpacity={0.45} strokeWidth={1} strokeDasharray="3 4" />
      <text x={x + 6} y={y - 4} fill={T.ink2} fontSize={10} fontFamily="Inter">[{label}]</text>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────
   DiagramFrame — common wrapper used by every diagram slide.
   ───────────────────────────────────────────────────────── */
export function DiagramFrame({
  width, height, children,
}: {
  width: number;
  height: number;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      style={{
        width: '100%',
        height: '100%',
        maxHeight: '100%',
      }}
      preserveAspectRatio="xMidYMid meet"
    >
      <ArrowDefs />
      {children}
    </svg>
  );
}
