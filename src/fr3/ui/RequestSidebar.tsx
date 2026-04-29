import { X, AlertTriangle, Send } from 'lucide-react';
import { AppShell, Topbar, Card, Pill, Button } from './_kit';
import type { NavItem } from './_kit';
import { Catalog as CatalogScreen } from './Catalog';

const nav: NavItem[] = [
  { icon: 'dash', label: 'Dashboard' },
  { icon: 'catalog', label: 'Browse Courses', active: true },
  { icon: 'list', label: 'My Requests', badge: 1 },
  { icon: 'schedule', label: 'My Schedule' },
  { icon: 'bell', label: 'Notifications', badge: 3 },
];

interface Item { code: string; name: string; group: string; time: string; conflict?: boolean }

const items: Item[] = [
  { code: 'CS-201', name: 'Programming 2',     group: 'Lecture A · Lab 2',  time: 'Mon+Wed 10:00 · Wed 13:00' },
  { code: 'CS-203', name: 'Web Development',   group: 'Lecture A · Lab 1',  time: 'Sun+Tue 10:30 · Sun 14:00' },
  { code: 'CS-220', name: 'Database Systems',  group: 'Lecture B',          time: 'Mon 14:30',                  conflict: true },
  { code: 'MA-201', name: 'Discrete Math',     group: 'Lecture A · Tut 1',  time: 'Tue+Thu 09:00' },
];

export function RequestSidebar() {
  // Compose: render the catalog screen behind a dimmed overlay + a slide-in request sidebar
  return (
    <div className="relative w-full h-full">
      {/* Catalog as the underlying page */}
      <div className="absolute inset-0">
        <CatalogScreen />
      </div>
      {/* Backdrop dim */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: 'rgba(6,11,26,0.60)', backdropFilter: 'blur(4px)' }}
      />
      {/* Sidebar */}
      <aside
        className="absolute right-0 top-0 bottom-0 z-20 flex flex-col"
        style={{
          width: 460,
          background: 'rgba(11,18,38,0.96)',
          borderLeft: '1px solid rgba(255,255,255,0.10)',
          boxShadow: '-24px 0 60px -20px rgba(0,0,0,0.55)',
        }}
      >
        {/* Header */}
        <header
          className="flex items-center justify-between px-6"
          style={{ height: 72, borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div>
            <div className="text-[10.5px] uppercase tracking-[0.22em] text-ink-tertiary font-semibold">Your request</div>
            <h2 className="font-display font-bold text-[20px] text-ink-primary mt-0.5" style={{ fontFamily: 'Satoshi, Inter' }}>4 items · 14 credits</h2>
          </div>
          <button
            className="h-9 w-9 rounded-md flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <X size={16} strokeWidth={1.75} className="text-ink-secondary" />
          </button>
        </header>

        {/* Items */}
        <div className="flex-1 overflow-hidden p-5 space-y-3">
          {items.map(it => <ItemRow key={it.code} it={it} />)}
        </div>

        {/* Conflict notice */}
        <div className="mx-5 mb-5 rounded-md p-4" style={{ background: 'rgba(255,107,122,0.06)', border: '1px solid rgba(255,107,122,0.30)' }}>
          <div className="flex items-start gap-3">
            <AlertTriangle size={16} className="shrink-0 mt-0.5" style={{ color: '#FF6B7A' }} />
            <div>
              <div className="text-[12.5px] font-semibold" style={{ color: '#FF6B7A' }}>1 schedule conflict</div>
              <div className="text-[11.5px] text-ink-secondary mt-1 leading-relaxed">
                CS-220 (Mon 14:30) overlaps with CS-201 lecture. Pick a different group or remove the course.
              </div>
            </div>
          </div>
        </div>

        {/* Summary + submit */}
        <div className="p-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-[12px] text-ink-tertiary">Total credits</span>
            <span className="font-display font-bold text-[18px] tabular" style={{ fontFamily: 'Satoshi, Inter' }}>14 / 18</span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden mb-4" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <div className="h-full rounded-full" style={{ width: '78%', background: 'linear-gradient(90deg, #4CC4FF, #7C8BFF)' }} />
          </div>
          <Button variant="primary" size="lg" icon={Send}>Submit request to advisor</Button>
        </div>
      </aside>
    </div>
  );
}

function ItemRow({ it }: { it: Item }) {
  return (
    <Card className="p-4" style={{ borderColor: it.conflict ? 'rgba(255,107,122,0.30)' : undefined }}>
      <div className="flex items-start gap-3">
        <span className="font-mono tabular text-[10.5px] text-ink-tertiary uppercase tracking-[0.14em] mt-0.5">{it.code}</span>
        <div className="flex-1 min-w-0">
          <div className="text-[13.5px] text-ink-primary font-semibold truncate">{it.name}</div>
          <div className="text-[11px] text-ink-tertiary mt-0.5 truncate">{it.group}</div>
          <div className="text-[11px] text-ink-secondary mt-1.5 font-mono tabular">{it.time}</div>
        </div>
        <button className="h-7 w-7 rounded-md flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <X size={12} className="text-ink-tertiary" />
        </button>
      </div>
      {it.conflict && (
        <div className="mt-2.5 pl-12">
          <Pill tone="danger" size="sm">Time clash with CS-201</Pill>
        </div>
      )}
    </Card>
  );
}
