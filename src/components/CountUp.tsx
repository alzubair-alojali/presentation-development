import { useEffect, useState } from 'react';

interface Props {
  to: number;
  duration?: number;
  delay?: number;
}

const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);

/**
 * Counts from 0 up to `to`. Uses setInterval (reliable in background / headless
 * environments where rAF may be throttled). Respects prefers-reduced-motion.
 */
export function CountUp({ to, duration = 1400, delay = 200 }: Props) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setValue(to);
      return;
    }

    let startTime = 0;
    let interval: ReturnType<typeof setInterval> | null = null;

    const timer = window.setTimeout(() => {
      startTime = Date.now();
      interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const t = Math.min(1, elapsed / duration);
        setValue(Math.round(easeOutQuint(t) * to));
        if (t >= 1 && interval) {
          clearInterval(interval);
          interval = null;
        }
      }, 30);
    }, delay);

    return () => {
      window.clearTimeout(timer);
      if (interval) clearInterval(interval);
    };
  }, [to, duration, delay]);

  return <span className="tabular">{value}</span>;
}
