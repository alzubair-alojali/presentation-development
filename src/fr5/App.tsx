import { useCallback, useEffect, useRef, useState } from 'react';
import { Grid } from '../components/Grid';
import { TopBar } from '../components/TopBar';
import { BottomNav } from '../components/BottomNav';

import { Title } from './slides/Title';
import { Agenda } from './slides/Agenda';
import { SprintIntro } from './slides/SprintIntro';
import { SprintModules } from './slides/SprintModules';
import { Summary } from './slides/Summary';
import { Notes } from './slides/Notes';
import { Slide999Closing } from '../fr/slides/999-Closing';

import { sprints } from './data/sprints';

interface Slide { key: string; el: React.ReactNode }

function SlideTransition({
  children, direction,
}: { children: React.ReactNode; direction: 1 | -1 }) {
  const [animating, setAnimating] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const id = window.setTimeout(() => setAnimating(false), 560);
    return () => window.clearTimeout(id);
  }, []);
  const cls = animating
    ? direction === 1 ? 'slide-enter-right' : 'slide-enter-left'
    : '';
  return <div ref={ref} className={`absolute inset-0 ${cls}`}>{children}</div>;
}

const slides: Slide[] = [
  { key: 'title',  el: <Title /> },
  { key: 'agenda', el: <Agenda /> },

  // Sprint 1
  { key: 's1-intro',   el: <SprintIntro sprint={sprints[0]} /> },
  { key: 's1-modules', el: <SprintModules sprint={sprints[0]} /> },

  // Sprint 2
  { key: 's2-intro',   el: <SprintIntro sprint={sprints[1]} /> },
  { key: 's2-modules', el: <SprintModules sprint={sprints[1]} /> },

  // Sprint 3
  { key: 's3-intro',   el: <SprintIntro sprint={sprints[2]} /> },
  { key: 's3-modules', el: <SprintModules sprint={sprints[2]} /> },

  // Wrap-up
  { key: 'summary', el: <Summary /> },
  { key: 'notes',   el: <Notes /> },
  { key: 'thanks',  el: <Slide999Closing /> },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [chromeVisible, setChromeVisible] = useState(true);

  const go = useCallback((next: number) => {
    setIndex(curr => {
      const clamped = Math.max(0, Math.min(slides.length - 1, next));
      setDirection(clamped >= curr ? 1 : -1);
      return clamped;
    });
  }, []);

  const onNext = useCallback(() => go(index + 1), [go, index]);
  const onPrev = useCallback(() => go(index - 1), [go, index]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
  }, []);

  useEffect(() => {
    const onChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
          e.preventDefault(); onNext(); break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault(); onPrev(); break;
        case 'Home':
          e.preventDefault(); go(0); break;
        case 'End':
          e.preventDefault(); go(slides.length - 1); break;
        case 'f': case 'F':
          e.preventDefault(); toggleFullscreen(); break;
        case 'h': case 'H':
          e.preventDefault(); setChromeVisible(v => !v); break;
        default:
          if (/^[1-9]$/.test(e.key)) {
            const n = Number(e.key) - 1;
            if (n < slides.length) go(n);
          }
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onNext, onPrev, go, toggleFullscreen]);

  return (
    <main className="relative h-dvh w-screen overflow-hidden bg-bg-base">
      <Grid />
      <div
        style={{
          transform: chromeVisible ? 'translateY(0)' : 'translateY(-24px)',
          opacity: chromeVisible ? 1 : 0,
          pointerEvents: chromeVisible ? 'auto' : 'none',
          transition: 'transform 280ms cubic-bezier(0.22,1,0.36,1), opacity 280ms ease',
        }}
        className="absolute top-0 inset-x-0 z-30"
      >
        <TopBar current={index} total={slides.length} />
      </div>

      <div className="relative z-10 h-full w-full">
        <SlideTransition key={slides[index].key} direction={direction}>
          {slides[index].el}
        </SlideTransition>
      </div>

      <div
        style={{
          transform: chromeVisible ? 'translateY(0)' : 'translateY(24px)',
          opacity: chromeVisible ? 1 : 0,
          pointerEvents: chromeVisible ? 'auto' : 'none',
          transition: 'transform 280ms cubic-bezier(0.22,1,0.36,1), opacity 280ms ease',
        }}
        className="absolute bottom-0 inset-x-0 z-30"
      >
        <BottomNav
          current={index}
          total={slides.length}
          onPrev={onPrev}
          onNext={onNext}
          onJump={go}
          isFullscreen={isFullscreen}
          onFullscreen={toggleFullscreen}
        />
      </div>

      <span className="sr-only" aria-live="polite">Slide {index + 1} of {slides.length}</span>
    </main>
  );
}
