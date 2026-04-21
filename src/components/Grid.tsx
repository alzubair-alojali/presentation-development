export function Grid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(76,196,255,0.08), transparent 60%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(124,139,255,0.12), transparent 65%), radial-gradient(ellipse 60% 40% at 0% 100%, rgba(185,128,255,0.08), transparent 65%)',
        }}
      />
      <div
        className="ambient-glow animate-float-slow"
        style={{
          width: 520,
          height: 520,
          background: 'radial-gradient(circle, #4CC4FF 0%, transparent 70%)',
          top: '-120px',
          right: '-120px',
        }}
      />
      <div
        className="ambient-glow animate-float-slow"
        style={{
          width: 620,
          height: 620,
          background: 'radial-gradient(circle, #7C8BFF 0%, transparent 70%)',
          bottom: '-200px',
          left: '-160px',
          animationDelay: '-6s',
        }}
      />
      <div
        className="ambient-glow"
        style={{
          width: 420,
          height: 420,
          background: 'radial-gradient(circle, #B980FF 0%, transparent 70%)',
          bottom: '10%',
          right: '20%',
          opacity: 0.25,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(6,11,26,0.85) 100%)',
        }}
      />
    </div>
  );
}
