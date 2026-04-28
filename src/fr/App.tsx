import { useCallback, useEffect, useRef, useState } from 'react';
import { Grid } from '../components/Grid';
import { TopBar } from '../components/TopBar';
import { BottomNav } from '../components/BottomNav';

import { Slide01Title } from './slides/01-Title';
import { Slide02Agenda } from './slides/02-Agenda';
import { Slide03Overview } from './slides/03-Overview';
import { Slide04FrAtAGlance } from './slides/04-FrAtAGlance';
import { Slide06WireframesIntro } from './slides/06-WireframesIntro';
import { WireframeSlide } from './slides/WireframeSlide';
import { FrModuleSlide } from './slides/FrModuleSlide';
import { Slide999Closing } from './slides/999-Closing';

import { wireframes } from './data/wireframes';
import { allFrPages } from './data/fr-full';

/* Same slide-transition primitive used in the main deck. */
function SlideTransition({
  children,
  direction,
}: {
  children: React.ReactNode;
  direction: 1 | -1;
}) {
  const [animating, setAnimating] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const id = window.setTimeout(() => setAnimating(false), 560);
    return () => window.clearTimeout(id);
  }, []);
  const cls = animating
    ? direction === 1 ? 'slide-enter-right' : 'slide-enter-left'
    : '';
  return (
    <div ref={ref} className={`absolute inset-0 ${cls}`}>
      {children}
    </div>
  );
}

const introSlides = [
  { key: 'title',     el: <Slide01Title /> },
  { key: 'agenda',    el: <Slide02Agenda /> },
  { key: 'overview',  el: <Slide03Overview /> },
  { key: 'fr-glance', el: <Slide04FrAtAGlance /> },
];

// One slide per module (split if a module has more than 9 items).
const frModuleSlides = allFrPages.map(p => ({
  key: `fr-${p.module.code}-${p.page}`,
  el: <FrModuleSlide page={p} />,
}));

const wireframeIntroSlide = [{ key: 'wf-intro', el: <Slide06WireframesIntro /> }];

const wireframeSlides = wireframes.map((w, i) => ({
  key: `wf-${w.component}`,
  el: <WireframeSlide wireframe={w} index={i + 1} total={wireframes.length} />,
}));

const closingSlides = [{ key: 'thanks', el: <Slide999Closing /> }];

const slides = [
  ...introSlides,
  ...frModuleSlides,
  ...wireframeIntroSlide,
  ...wireframeSlides,
  ...closingSlides,
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

      <span className="sr-only" aria-live="polite">
        Slide {index + 1} of {slides.length}
      </span>
    </main>
  );
}
