import { motion } from 'framer-motion';
import { SlideFrame } from '../../components/SlideFrame';
import type { FrPage, Priority } from '../data/fr-full';
import { fadeUp, stagger } from '../../lib/motion';

interface Props {
  page: FrPage;
}

const tones: Record<string, string> = {
  AUTH: '#A7B3CC', USR: '#A7B3CC', NOT: '#A7B3CC', AUD: '#A7B3CC', X: '#A7B3CC',
  CAT: '#7C8BFF', ELG: '#7C8BFF', CNF: '#7C8BFF', REQ: '#7C8BFF', WSW: '#7C8BFF', SRH: '#7C8BFF',
  ADV: '#4CC4FF', OVR: '#4CC4FF', ENR: '#4CC4FF',
  TRM: '#FFB86B', TBL: '#FFB86B', RPT: '#FFB86B',
};

const prioStyles: Record<Priority, { color: string; label: string; dot: 'fill' | 'mid' | 'outline' }> = {
  P0: { color: '#FF8C8C', label: 'P0', dot: 'fill' },
  P1: { color: '#F5B752', label: 'P1', dot: 'mid' },
  P2: { color: '#A7B3CC', label: 'P2', dot: 'outline' },
};

function PrioDot({ priority }: { priority: Priority }) {
  const s = prioStyles[priority];
  const base = 'inline-flex items-center gap-1.5 font-mono tabular text-[10.5px] font-semibold tracking-[0.06em]';
  if (s.dot === 'outline') {
    return (
      <span className={base} style={{ color: s.color }}>
        <span className="inline-block h-2 w-2 rounded-full" style={{ border: `1.5px solid ${s.color}` }} />
        {s.label}
      </span>
    );
  }
  return (
    <span className={base} style={{ color: s.color }}>
      <span
        className="inline-block h-2 w-2 rounded-full"
        style={{
          background: s.color,
          boxShadow: s.dot === 'fill' ? `0 0 8px ${s.color}66` : 'none',
        }}
      />
      {s.label}
    </span>
  );
}

export function FrModuleSlide({ page }: Props) {
  const mod = page.module;
  const tone = tones[mod.code] ?? '#A7B3CC';
  const codeLabel = mod.code === 'X' ? 'Cross-Cutting' : mod.code;
  const pageOf = page.pages > 1 ? ` (${page.page} of ${page.pages})` : '';

  return (
    <SlideFrame
      id={`fr-${mod.code}-${page.page}`}
      ariaLabel={`Functional Requirements — ${mod.name}`}
      kicker={`Functional Requirements · ${codeLabel}`}
      title={
        <span>
          <span className="font-mono tabular text-[0.6em] mr-3 align-middle" style={{ color: tone, fontWeight: 600, letterSpacing: '0.12em' }}>
            {codeLabel}
          </span>
          <span>{mod.name}{pageOf}</span>
        </span>
      }
      subtitle={page.page === 1 ? mod.description : undefined}
    >
      <motion.div
        className="mt-4 flex flex-col h-full min-h-0"
        variants={stagger(0.04, 0.04)}
        initial="hidden"
        animate="show"
      >
        <div
          className="rounded-lg glass overflow-hidden flex-1 min-h-0 flex flex-col"
          style={{ borderTop: `2px solid ${tone}55` }}
        >
          <div
            className="grid items-center gap-4 px-5 py-3 text-[10px] uppercase tracking-[0.18em] font-semibold text-ink-tertiary border-b border-white/[0.06]"
            style={{ gridTemplateColumns: '110px 1fr 70px' }}
          >
            <div>ID</div>
            <div>Requirement</div>
            <div className="text-right">Priority</div>
          </div>

          <div className="flex-1 overflow-y-auto scrollpanel">
            {page.items.map((item, idx) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className="grid items-baseline gap-4 px-5 py-3 border-b border-white/[0.04] last:border-0"
                style={{ gridTemplateColumns: '110px 1fr 70px' }}
              >
                <div className="font-mono tabular text-[11.5px] text-ink-secondary">{item.id}</div>
                <div className="text-[13px] text-ink-primary leading-relaxed">{item.text}</div>
                <div className="text-right">
                  <PrioDot priority={item.priority} />
                </div>
                {/* Source line — light footer per row */}
                {item.source && item.source !== '—' && (
                  <div
                    className="col-span-3 -mt-2 mb-1 font-mono tabular text-[10px] text-ink-tertiary tracking-[0.04em]"
                    style={{ paddingLeft: 110 + 16 }}
                  >
                    source · {item.source}
                  </div>
                )}
                {/* Spacer so sequential alternating rows don't visually fuse */}
                {idx < page.items.length - 1 && <div className="hidden" />}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-[10.5px] font-mono tabular text-ink-tertiary uppercase tracking-[0.12em]">
          <span>{page.items.length} requirement{page.items.length === 1 ? '' : 's'} on this page</span>
          <span>
            {mod.items.length} total in {codeLabel}
            {pageOf && <span className="ml-2 text-ink-secondary">{pageOf.replace(/\s/g, ' ')}</span>}
          </span>
        </div>
      </motion.div>
    </SlideFrame>
  );
}
