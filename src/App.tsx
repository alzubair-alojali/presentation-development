import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Grid } from './components/Grid';
import { TopBar } from './components/TopBar';
import { BottomNav } from './components/BottomNav';

import { Slide01Title } from './slides/01-Title';
import { Slide02Agenda } from './slides/02-Agenda';
import { Slide03Lifecycle } from './slides/03-Lifecycle';
import { Slide04Journeys } from './slides/04-Journeys';
import { Slide04DiagramIntro } from './slides/04-DiagramIntro';
import { Slide05UseCaseDiagram } from './slides/05-UseCaseDiagram';
import { Slide07ScenariosAuth } from './slides/07-ScenariosAuth';
import { Slide08ScenariosStudent } from './slides/08-ScenariosStudent';
import { Slide09ScenariosAdvisor } from './slides/09-ScenariosAdvisor';
import { Slide10ScenariosAdmin } from './slides/10-ScenariosAdmin';
import { Slide11Screens } from './slides/11-Screens';
import { Slide12Closing } from './slides/12-Closing';

// Deck order matches the agenda: System Scenarios → Use Cases → Use Case Diagram.
const slides = [
  { key: 't', el: <Slide01Title /> },
  { key: 'a', el: <Slide02Agenda /> },
  { key: 'ss-lifecycle', el: <Slide03Lifecycle /> },
  { key: 'ss-journeys', el: <Slide04Journeys /> },
  { key: 'uc-auth', el: <Slide07ScenariosAuth /> },
  { key: 'uc-stu', el: <Slide08ScenariosStudent /> },
  { key: 'uc-adv', el: <Slide09ScenariosAdvisor /> },
  { key: 'uc-adm', el: <Slide10ScenariosAdmin /> },
  { key: 'dg-intro', el: <Slide04DiagramIntro /> },
  { key: 'dg-diagram', el: <Slide05UseCaseDiagram /> },
  { key: 'screens', el: <Slide11Screens /> },
  { key: 'close', el: <Slide12Closing /> },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [chromeVisible, setChromeVisible] = useState(true);

  const go = useCallback(
    (next: number) => {
      setIndex(curr => {
        const clamped = Math.max(0, Math.min(slides.length - 1, next));
        setDirection(clamped >= curr ? 1 : -1);
        return clamped;
      });
    },
    []
  );

  const onNext = useCallback(() => go(index + 1), [go, index]);
  const onPrev = useCallback(() => go(index - 1), [go, index]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
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
          e.preventDefault();
          onNext();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          onPrev();
          break;
        case 'Home':
          e.preventDefault();
          go(0);
          break;
        case 'End':
          e.preventDefault();
          go(slides.length - 1);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'h':
        case 'H':
          e.preventDefault();
          setChromeVisible(v => !v);
          break;
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
        <motion.div
          key={slides[index].key}
          initial={{ opacity: 0, x: direction * 60, filter: 'blur(6px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{
            x: { type: 'spring', stiffness: 160, damping: 26, mass: 0.9 },
            opacity: { duration: 0.32 },
            filter: { duration: 0.32 },
          }}
          className="absolute inset-0"
        >
          {slides[index].el}
        </motion.div>
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

      <span className="sr-only" aria-live="polite">
        Slide {index + 1} of {slides.length}
      </span>
    </main>
  );
}
