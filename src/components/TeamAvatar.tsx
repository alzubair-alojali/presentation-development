interface Props {
  initials: string;
  name: string;
  id: string;
  gradient: string;
  ringColor: string;
  size?: number;
}

/**
 * Circular profile avatar with gradient fill, subtle ring, and a matching
 * outer glow. Used on the title and closing slides for consistency.
 */
export function TeamAvatar({ initials, gradient, ringColor, size = 56 }: Omit<Props, 'name' | 'id'> & { size?: number }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <div
        aria-hidden
        className="absolute inset-0 rounded-full"
        style={{
          background: gradient,
          filter: 'blur(14px)',
          opacity: 0.45,
          transform: 'scale(1.1)',
        }}
      />
      <div
        className="relative h-full w-full rounded-full flex items-center justify-center font-display font-bold text-white"
        style={{
          background: gradient,
          boxShadow: `0 0 0 1.5px ${ringColor}, 0 10px 24px -8px rgba(0,0,0,0.55)`,
          fontSize: size * 0.34,
          letterSpacing: '0.04em',
        }}
      >
        {initials}
      </div>
    </div>
  );
}

export interface TeamMember {
  initials: string;
  name: string;
  id: string;
  gradient: string;
  ringColor: string;
}

export const teamMembers: TeamMember[] = [
  {
    initials: 'AA',
    name: 'Alzubair Alojali',
    id: '4426',
    gradient: 'linear-gradient(135deg, #3AC6FF 0%, #5B7CFF 50%, #7C8BFF 100%)',
    ringColor: 'rgba(76, 196, 255, 0.55)',
  },
  {
    initials: 'MW',
    name: 'Mohammed Alwerfali',
    id: '5013',
    gradient: 'linear-gradient(135deg, #8D7CFF 0%, #B980FF 50%, #E066E5 100%)',
    ringColor: 'rgba(185, 128, 255, 0.55)',
  },
  {
    initials: 'MT',
    name: 'Mohammed Altarhoni',
    id: '4469',
    gradient: 'linear-gradient(135deg, #FFC78F 0%, #FFB86B 50%, #FF8B5C 100%)',
    ringColor: 'rgba(255, 184, 107, 0.55)',
  },
];
