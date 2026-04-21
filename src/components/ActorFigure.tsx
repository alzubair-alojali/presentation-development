interface Props {
  color: string;
  size?: number;
  highlight?: boolean;
  label?: string;
}

export function ActorFigure({ color, size = 72, highlight = false }: Props) {
  const s = highlight ? 1.04 : 1;
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 60 90"
      fill="none"
      style={{ transform: `scale(${s})`, transition: 'transform 200ms ease' }}
    >
      <defs>
        <radialGradient id={`glow-${color}`} cx="50%" cy="50%">
          <stop offset="0%" stopColor={color} stopOpacity={highlight ? 0.45 : 0.2} />
          <stop offset="70%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="30" cy="30" r="30" fill={`url(#glow-${color})`} />
      <circle cx="30" cy="18" r="8" stroke={color} strokeWidth="2.2" fill="rgba(11,18,38,0.9)" />
      <line x1="30" y1="26" x2="30" y2="58" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="30" y1="36" x2="16" y2="46" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="30" y1="36" x2="44" y2="46" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="30" y1="58" x2="20" y2="78" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="30" y1="58" x2="40" y2="78" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
