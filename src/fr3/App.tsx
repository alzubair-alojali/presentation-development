import { useCallback, useEffect, useRef, useState } from 'react';
import { Grid } from '../components/Grid';
import { TopBar } from '../components/TopBar';
import { BottomNav } from '../components/BottomNav';

import { Slide01Title } from '../fr/slides/01-Title';
import { Slide02Agenda } from '../fr/slides/02-Agenda';
import { Slide03Overview } from '../fr/slides/03-Overview';
import { Slide04FrAtAGlance } from '../fr/slides/04-FrAtAGlance';
import { Slide06WireframesIntro } from '../fr/slides/06-WireframesIntro';
import { FrModuleSlide } from '../fr/slides/FrModuleSlide';
import { Slide999Closing } from '../fr/slides/999-Closing';
import { WireframeSlide } from '../fr/slides/WireframeSlide';

import { UiSlide } from './slides/UiSlide';
import { wireframes } from '../fr/data/wireframes';
import { allFrPages } from '../fr/data/fr-full';

interface Slide {
  key: string;
  el: React.ReactNode;
  morph?: boolean; // when true, slide enters with the wireframe→UI morph animation
}

/**
 * Slide transition: forward navigation uses slide-from-the-right.
 * UI slides that follow their wireframe pair use a "morph" enter animation
 * (zoom + blur + saturation crossfade) so the wireframe visually sharpens
 * into the polished design.
 */
function SlideTransition({
  children,
  direction,
  morph,
}: {
  children: React.ReactNode;
  direction: 1 | -1;
  morph: boolean;
}) {
  const [animating, setAnimating] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const id = window.setTimeout(() => setAnimating(false), morph ? 860 : 560);
    return () => window.clearTimeout(id);
  }, [morph]);
  let cls = '';
  if (animating) {
    if (morph && direction === 1) cls = 'slide-enter-morph';
    else cls = direction === 1 ? 'slide-enter-right' : 'slide-enter-left';
  }
  return (
    <div ref={ref} className={`absolute inset-0 ${cls}`}>
      {children}
    </div>
  );
}

const introSlides: Slide[] = [
  { key: 'title',     el: <Slide01Title /> },
  { key: 'agenda',    el: <Slide02Agenda /> },
  { key: 'overview',  el: <Slide03Overview /> },
  { key: 'fr-glance', el: <Slide04FrAtAGlance /> },
];

const frModuleSlides: Slide[] = allFrPages.map(p => ({
  key: `fr-${p.module.code}-${p.page}`,
  el: <FrModuleSlide page={p} />,
}));

const wireframeIntroSlide: Slide[] = [{ key: 'wf-intro', el: <Slide06WireframesIntro /> }];

// Interleave: each wireframe is followed by its polished UI counterpart.
const wfUiPairs: Slide[] = wireframes.flatMap((w, i) => [
  {
    key: `wf-${w.component}`,
    el: <WireframeSlide wireframe={w} index={i + 1} total={wireframes.length} />,
  },
  {
    key: `ui-${w.component}`,
    el: <UiSlide wireframe={w} index={i + 1} total={wireframes.length} />,
    morph: true,
  },
]);

const closingSlides: Slide[] = [{ key: 'thanks', el: <Slide999Closing /> }];

const slides: Slide[] = [
  ...introSlides,
  ...frModuleSlides,
  ...wireframeIntroSlide,
  ...wfUiPairs,
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

  const slide = slides[index];

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
        <SlideTransition key={slide.key} direction={direction} morph={!!slide.morph}>
          {slide.el}
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
