import { Move, Calendar } from 'lucide-react';
import { AppShell, Topbar, Card, Pill } from './_kit';
import type { NavItem } from './_kit';

const nav: NavItem[] = [
  { icon: 'dash', label: 'Dashboard' },
  { icon: 'catalog', label: 'Catalog & Sections' },
  { icon: 'schedule', label: 'Timetable', active: true },
  { icon: 'requests', label: 'Terms' },
  { icon: 'users', label: 'Users' },
  { icon: 'file', label: 'Reports', badge: 3 },
  { icon: 'bell', label: 'Notifications', badge: 5 },
];

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
const hours = ['8', '9', '10', '11', '12', '13', '14', '15', '16'];
const rooms = ['A-301', 'A-205', 'A-208', 'B-110', 'L-105'];

interface Card2 {
  day: number; room: number; start: number; end: number;
  code: string; group: string; type: 'lecture' | 'lab' | 'tut';
  ghost?: boolean; target?: boolean;
}

const cards: Card2[] = [
  { day: 0, room: 1, start: 10, end: 12, code: 'CS-203', group: 'Group A', type: 'lecture' },
  { day: 0, room: 4, start: 14, end: 16, code: 'CS-201', group: 'Lab 1',   type: 'lab' },
  { day: 1, room: 0, start: 10, end: 12, code: 'CS-201', group: 'Group A', type: 'lecture' },
  { day: 1, room: 2, start: 14, end: 16, code: 'CS-220', group: 'Group B', type: 'lecture', ghost: true },
  { day: 2, room: 1, start: 10, end: 12, code: 'CS-203', group: 'Group A', type: 'lecture' },
  { day: 2, room: 0, start: 8,  end: 10, code: 'CS-301', group: 'Group C', type: 'lecture' },
  { day: 3, room: 0, start: 10, end: 12, code: 'CS-201', group: 'Group A', type: 'lecture' },
  { day: 3, room: 4, start: 13, end: 15, code: 'CS-201', group: 'Lab 2',   type: 'lab' },
  { day: 3, room: 2, start: 14, end: 16, code: 'CS-220', group: 'Group B', type: 'lecture', target: true },
  { day: 4, room: 1, start: 10, end: 12, code: 'MA-201', group: 'Lect',    type: 'lecture' },
];

const colors = { lecture: '#4CC4FF', lab: '#7C8BFF', tut: '#FFB86B' };

export function Timetable() {
  return (
    <AppShell
      brand="LIMU"
      subBrand="Admin · Registrar"
      navItems={nav}
      footerItems={[{ icon: 'logout', label: 'Log out' }]}
      topbar={
        <Topbar
          title="Term Timetable"
          subtitle="Fall 2026 · drag any section card to reschedule. Conflict scan runs automatically."
          user={{ initials: 'KO', name: 'Khaled Othmani', role: 'Admin' }}
        />
      }
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-2 text-[11.5px] text-ink-tertiary">
          <Calendar size={14} className="text-ink-tertiary" />
          5 days · 5 rooms · {cards.length} sections placed
        </div>
        <div className="ml-auto flex items-center gap-3">
          <Legend tone="lecture" label="Lecture" />
          <Legend tone="lab" label="Lab" />
          <Legend tone="tut" label="Tutorial" />
          <Pill tone="warning" size="sm">Drag in progress</Pill>
        </div>
      </div>

      {/* Five day-tables stacked compactly */}
      <div className="space-y-3 max-h-[540px] overflow-hidden">
        {days.map((d, dayIdx) => <DayTable key={d} day={d} dayIdx={dayIdx} />)}
      </div>
    </AppShell>
  );
}

function DayTable({ day, dayIdx }: { day: string; dayIdx: number }) {
  return (
    <Card className="p-3">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="h-7 w-12 rounded font-display font-bold text-[12px] flex items-center justify-center uppercase tracking-[0.12em]"
          style={{ background: 'rgba(76,196,255,0.10)', color: '#4CC4FF', border: '1px solid rgba(76,196,255,0.30)' }}
        >
          {day}
        </div>
        <div className="text-[11px] text-ink-tertiary font-mono tabular">
          {cards.filter(c => c.day === dayIdx && !c.ghost).length} sections
        </div>
      </div>

      {/* Grid: rooms × hours */}
      <div className="grid relative" style={{ gridTemplateColumns: `90px repeat(${hours.length}, 1fr)` }}>
        {/* Header */}
        <div />
        {hours.map(h => (
          <div key={h} className="text-center font-mono tabular text-[10px] text-ink-tertiary py-1">{h}:00</div>
        ))}

        {/* Rows */}
        {rooms.map((room, rIdx) => (
          <RoomRow key={room} room={room} rIdx={rIdx} dayIdx={dayIdx} />
        ))}
      </div>
    </Card>
  );
}

function RoomRow({ room, rIdx, dayIdx }: { room: string; rIdx: number; dayIdx: number }) {
  const rowCards = cards.filter(c => c.day === dayIdx && c.room === rIdx);
  return (
    <>
      <div className="px-2.5 py-1.5 text-[11px] font-medium text-ink-secondary truncate" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        {room}
      </div>
      {hours.map((_, hIdx) => {
        const hourVal = parseInt(hours[hIdx], 10);
        const card = rowCards.find(c => c.start === hourVal);
        return (
          <div key={hIdx} className="relative" style={{ height: 36, borderTop: '1px solid rgba(255,255,255,0.04)', borderLeft: hIdx === 0 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
            {card && <CardTile card={card} />}
          </div>
        );
      })}
    </>
  );
}

function CardTile({ card }: { card: Card2 }) {
  const span = card.end - card.start;
  const c = colors[card.type];
  if (card.ghost) {
    return (
      <div
        className="absolute z-10 rounded text-[10px] flex items-center justify-center"
        style={{
          inset: '2px 1px',
          width: `calc(${span * 100}% - 2px)`,
          background: 'rgba(76,196,255,0.10)',
          border: '1.5px dashed rgba(76,196,255,0.50)',
          color: '#4CC4FF',
          fontWeight: 600,
        }}
      >
        <Move size={10} className="mr-1" /> dragging
      </div>
    );
  }
  if (card.target) {
    return (
      <div
        className="absolute z-10 rounded flex items-center justify-center px-2"
        style={{
          inset: '2px 1px',
          width: `calc(${span * 100}% - 2px)`,
          background: 'linear-gradient(135deg, rgba(76,196,255,0.20), rgba(124,139,255,0.16))',
          border: '1.5px solid rgba(76,196,255,0.60)',
          color: '#F4F7FF',
        }}
      >
        <div className="text-[10px] font-mono tabular leading-tight">{card.code}</div>
        <div className="text-[9.5px] uppercase tracking-wider opacity-75 ml-1.5">drop here</div>
      </div>
    );
  }
  return (
    <div
      className="absolute z-10 rounded px-2 py-1"
      style={{
        inset: '2px 1px',
        width: `calc(${span * 100}% - 2px)`,
        background: `${c}14`,
        border: `1px solid ${c}40`,
      }}
    >
      <div className="flex items-center gap-1.5 leading-none">
        <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: c }} />
        <span className="font-mono tabular text-[10px] font-semibold" style={{ color: c }}>{card.code}</span>
      </div>
      <div className="text-[9px] text-ink-tertiary mt-1 truncate uppercase tracking-wider">{card.group}</div>
    </div>
  );
}

function Legend({ tone, label }: { tone: keyof typeof colors; label: string }) {
  return (
    <span className="flex items-center gap-1.5 text-[11px] text-ink-tertiary">
      <span className="h-2.5 w-2.5 rounded-sm" style={{ background: `${colors[tone]}40`, border: `1px solid ${colors[tone]}` }} />
      {label}
    </span>
  );
}
