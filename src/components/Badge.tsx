import type { ReactNode } from 'react';

interface Props {
  icon?: ReactNode;
  children: ReactNode;
  tone?: 'cyan' | 'violet' | 'warm' | 'muted';
  size?: 'sm' | 'md';
}

const toneMap = {
  cyan: {
    bg: 'rgba(76,196,255,0.08)',
    border: 'rgba(76,196,255,0.25)',
    dot: '#4CC4FF',
    color: '#4CC4FF',
  },
  violet: {
    bg: 'rgba(124,139,255,0.08)',
    border: 'rgba(124,139,255,0.25)',
    dot: '#7C8BFF',
    color: '#AFB7FF',
  },
  warm: {
    bg: 'rgba(255,184,107,0.08)',
    border: 'rgba(255,184,107,0.25)',
    dot: '#FFB86B',
    color: '#FFB86B',
  },
  muted: {
    bg: 'rgba(255,255,255,0.04)',
    border: 'rgba(255,255,255,0.12)',
    dot: '#A7B3CC',
    color: '#A7B3CC',
  },
};

export function Badge({ icon, children, tone = 'cyan', size = 'md' }: Props) {
  const t = toneMap[tone];
  const h = size === 'sm' ? 30 : 40;
  const px = size === 'sm' ? 14 : 18;
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full font-medium uppercase"
      style={{
        height: h,
        paddingLeft: px,
        paddingRight: px,
        background: t.bg,
        border: `1px solid ${t.border}`,
        color: t.color,
        fontSize: size === 'sm' ? 11 : 12,
        letterSpacing: '0.12em',
      }}
    >
      {icon ? (
        <span className="inline-flex items-center">{icon}</span>
      ) : (
        <span className="inline-block h-1.5 w-1.5 rounded-full animate-pulse-dot" style={{ background: t.dot }} />
      )}
      <span className="tabular">{children}</span>
    </span>
  );
}
