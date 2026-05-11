import {
  useCallback, useEffect, useRef, useState,
  type ReactNode,
} from 'react';
import { createPortal } from 'react-dom';
import { Plus, Minus, Maximize2, Minimize2, RotateCcw, Move } from 'lucide-react';

interface Props {
  children: ReactNode;
  label?: string;
}

const MIN_SCALE = 0.5;
const MAX_SCALE = 6;
const STEP = 0.25;

/**
 * Pan + zoom container.
 *   • Wheel zooms (cursor-anchored)
 *   • Click-drag pans
 *   • Double-click resets
 *   • Floating + / − / reset / fullscreen controls
 *   • Fullscreen overlay (rendered in a portal so it covers the deck chrome)
 *   • Keyboard while focused / hovered: + − to zoom, 0 reset, Esc exit fullscreen
 */
export function ZoomableDiagram({ children, label }: Props) {
  const [scale, setScale] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);
  const [panning, setPanning] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const dragState = useRef<{ mx: number; my: number; tx: number; ty: number } | null>(null);

  const reset = useCallback(() => {
    setScale(1);
    setTx(0);
    setTy(0);
  }, []);

  /* Wheel zoom (passive: false so we can preventDefault) */
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      const cx = e.clientX - rect.left - rect.width / 2;
      const cy = e.clientY - rect.top - rect.height / 2;
      const direction = e.deltaY > 0 ? -1 : 1;
      const factor = direction > 0 ? 1.12 : 1 / 1.12;
      setScale(prev => {
        const next = Math.max(MIN_SCALE, Math.min(MAX_SCALE, prev * factor));
        const actual = next / prev;
        setTx(prevTx => cx - (cx - prevTx) * actual);
        setTy(prevTy => cy - (cy - prevTy) * actual);
        return next;
      });
    };
    el.addEventListener('wheel', handler, { passive: false });
    return () => el.removeEventListener('wheel', handler);
  }, [fullscreen]);

  /* Mouse drag pan */
  const onMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    dragState.current = { mx: e.clientX, my: e.clientY, tx, ty };
    setPanning(true);
  };
  useEffect(() => {
    if (!panning) return;
    const onMove = (e: MouseEvent) => {
      if (!dragState.current) return;
      setTx(dragState.current.tx + (e.clientX - dragState.current.mx));
      setTy(dragState.current.ty + (e.clientY - dragState.current.my));
    };
    const onUp = () => {
      dragState.current = null;
      setPanning(false);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [panning]);

  /* Keyboard shortcuts. Active only when fullscreen OR pointer is over the stage. */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      const stage = stageRef.current;
      const hovered = stage?.matches(':hover') ?? false;
      if (!fullscreen && !hovered) return;
      switch (e.key) {
        case '+':
        case '=':
          e.preventDefault();
          setScale(s => Math.min(MAX_SCALE, s + STEP));
          break;
        case '-':
        case '_':
          e.preventDefault();
          setScale(s => Math.max(MIN_SCALE, s - STEP));
          break;
        case '0':
          e.preventDefault();
          reset();
          break;
        case 'Escape':
          if (fullscreen) {
            e.preventDefault();
            setFullscreen(false);
            reset();
          }
          break;
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [fullscreen, reset]);

  /* Reset on enter/exit fullscreen */
  useEffect(() => { reset(); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, [fullscreen]);

  const stage = (
    <div
      ref={stageRef}
      className="relative w-full h-full overflow-hidden"
      onMouseDown={onMouseDown}
      onDoubleClick={reset}
      style={{
        cursor: panning ? 'grabbing' : 'grab',
        touchAction: 'none',
        userSelect: 'none',
      }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center will-change-transform"
        style={{
          transform: `translate(${tx}px, ${ty}px) scale(${scale})`,
          transformOrigin: 'center center',
          transition: panning ? 'none' : 'transform 200ms cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        {children}
      </div>

      <Controls
        scale={scale}
        onZoomIn={() => setScale(s => Math.min(MAX_SCALE, s + STEP))}
        onZoomOut={() => setScale(s => Math.max(MIN_SCALE, s - STEP))}
        onReset={reset}
        fullscreen={fullscreen}
        onToggleFullscreen={() => setFullscreen(f => !f)}
      />

      {/* Interaction hint badge */}
      <div
        className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full px-3 py-1 text-[10.5px] font-mono tabular uppercase tracking-[0.12em] pointer-events-none"
        style={{
          background: 'rgba(11,18,38,0.65)',
          border: '1px solid rgba(255,255,255,0.10)',
          color: '#A7B3CC',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Move size={11} strokeWidth={1.75} />
        scroll · drag · double-click
      </div>
    </div>
  );

  if (!fullscreen) return stage;

  // Fullscreen: portal to body so we sit above the deck's TopBar / BottomNav.
  return (
    <>
      {/* keep a placeholder so React reconciliation stays stable */}
      <div className="w-full h-full" aria-hidden />
      {createPortal(
        <div
          className="fixed inset-0 z-[80] flex flex-col"
          style={{
            background: 'rgba(6,11,26,0.95)',
            backdropFilter: 'blur(14px)',
          }}
        >
          <div
            className="flex items-center justify-between px-8 py-4"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="flex items-center gap-3">
              <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-ink-tertiary font-mono">
                Diagram · zoom mode
              </div>
              {label && (
                <h3
                  className="text-[15px] font-semibold text-ink-primary"
                  style={{ fontFamily: 'Satoshi, Inter' }}
                >
                  {label}
                </h3>
              )}
            </div>
            <span className="text-[11px] text-ink-tertiary font-mono tabular">
              Esc · + · − · 0 to reset
            </span>
          </div>
          <div className="flex-1 min-h-0">{stage}</div>
        </div>,
        document.body,
      )}
    </>
  );
}

function Controls({
  scale, onZoomIn, onZoomOut, onReset, fullscreen, onToggleFullscreen,
}: {
  scale: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  fullscreen: boolean;
  onToggleFullscreen: () => void;
}) {
  return (
    <div
      className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full px-1.5 py-1 shadow-e1"
      style={{
        background: 'rgba(11,18,38,0.78)',
        border: '1px solid rgba(255,255,255,0.10)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <CtrlBtn aria-label="Zoom out" onClick={onZoomOut} disabled={scale <= MIN_SCALE + 1e-3}>
        <Minus size={14} strokeWidth={1.75} />
      </CtrlBtn>
      <div
        className="px-2 font-mono tabular text-[11px] text-ink-secondary select-none"
        style={{ minWidth: 44, textAlign: 'center' }}
      >
        {Math.round(scale * 100)}%
      </div>
      <CtrlBtn aria-label="Zoom in" onClick={onZoomIn} disabled={scale >= MAX_SCALE - 1e-3}>
        <Plus size={14} strokeWidth={1.75} />
      </CtrlBtn>
      <span className="mx-1 h-5 w-px bg-white/10" aria-hidden />
      <CtrlBtn aria-label="Reset" onClick={onReset}>
        <RotateCcw size={13} strokeWidth={1.75} />
      </CtrlBtn>
      <CtrlBtn aria-label={fullscreen ? 'Exit fullscreen' : 'Expand fullscreen'} onClick={onToggleFullscreen}>
        {fullscreen ? <Minimize2 size={13} strokeWidth={1.75} /> : <Maximize2 size={13} strokeWidth={1.75} />}
      </CtrlBtn>
    </div>
  );
}

function CtrlBtn({
  children, onClick, disabled = false, ...rest
}: {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  ['aria-label']: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={rest['aria-label']}
      className="h-8 w-8 rounded-full flex items-center justify-center text-ink-secondary hover:text-ink-primary hover:bg-white/[0.06] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}
