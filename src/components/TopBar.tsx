import { Box } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  current: number;
  total: number;
}

export function TopBar({ current, total }: Props) {
  const pct = ((current + 1) / total) * 100;
  return (
    <header className="absolute top-0 inset-x-0 z-30 flex items-center justify-between px-8 pt-6">
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-md glass flex items-center justify-center shadow-e1">
          <Box className="h-5 w-5 text-accent-primary" strokeWidth={1.75} />
        </div>
        <div className="leading-tight">
          <div className="font-display font-bold tracking-[0.18em] text-sm text-ink-primary">LIMU</div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-ink-tertiary">Software Development Practice</div>
        </div>
      </div>

      <div className="hidden md:flex items-center w-64">
        <div className="relative h-[3px] w-full overflow-hidden rounded-full bg-white/[0.06]">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              background: 'linear-gradient(90deg, #4CC4FF 0%, #7C8BFF 100%)',
              boxShadow: '0 0 18px rgba(76,196,255,0.6)',
            }}
            animate={{ width: `${pct}%` }}
            transition={{ type: 'spring', stiffness: 140, damping: 20 }}
          />
        </div>
      </div>

      <div className="tabular font-mono text-sm text-ink-secondary">
        <span className="text-ink-primary">{String(current + 1).padStart(2, '0')}</span>
        <span className="mx-2 text-ink-tertiary">/</span>
        <span>{String(total).padStart(2, '0')}</span>
      </div>
    </header>
  );
}
