import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';

interface Props {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onJump: (i: number) => void;
  isFullscreen: boolean;
  onFullscreen: () => void;
}

export function BottomNav({ current, total, onPrev, onNext, onJump, isFullscreen, onFullscreen }: Props) {
  return (
    <nav className="absolute bottom-0 inset-x-0 z-30 flex justify-center pb-6">
      <div className="glass-strong rounded-full shadow-e1 pl-2 pr-2 py-2 flex items-center gap-2">
        <button
          aria-label="Previous slide"
          onClick={onPrev}
          disabled={current === 0}
          className="h-10 w-10 rounded-full flex items-center justify-center text-ink-secondary hover:text-ink-primary hover:bg-white/[0.06] transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-[6px] px-3">
          {Array.from({ length: total }).map((_, i) => {
            const active = i === current;
            return (
              <button
                key={i}
                onClick={() => onJump(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={active ? 'true' : 'false'}
                className="h-2 rounded-full transition-all duration-300 ease-spring"
                style={{
                  width: active ? 28 : 8,
                  background: active
                    ? 'linear-gradient(90deg, #4CC4FF 0%, #7C8BFF 100%)'
                    : 'rgba(255,255,255,0.18)',
                  boxShadow: active ? '0 0 12px rgba(76,196,255,0.55)' : 'none',
                }}
              />
            );
          })}
        </div>

        <button
          aria-label="Next slide"
          onClick={onNext}
          disabled={current === total - 1}
          className="h-10 w-10 rounded-full flex items-center justify-center text-ink-secondary hover:text-ink-primary hover:bg-white/[0.06] transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="mx-1 h-6 w-px bg-white/10" aria-hidden />

        <button
          aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          onClick={onFullscreen}
          className="h-10 w-10 rounded-full flex items-center justify-center text-ink-secondary hover:text-ink-primary hover:bg-white/[0.06] transition-colors duration-200"
        >
          {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
        </button>
      </div>
    </nav>
  );
}
