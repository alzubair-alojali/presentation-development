import { Calendar, ArrowRightLeft, LogOut as LogOutIcon, Snowflake } from 'lucide-react';
import { AppShell, Topbar, Card, Pill, Button } from './_kit';
import type { NavItem } from './_kit';

const nav: NavItem[] = [
  { icon: 'dash', label: 'Dashboard' },
  { icon: 'catalog', label: 'Browse Courses' },
  { icon: 'list', label: 'My Requests', badge: 1 },
  { icon: 'schedule', label: 'My Schedule', active: true },
  { icon: 'bell', label: 'Notifications', badge: 3 },
];

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
const hours = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];

interface Block {
  day: number;     // 0..4
  start: number;   // hour offset
  end: number;
  type: 'lecture' | 'lab' | 'tut';
  course: string;
  room: string;
  group: string;
  frozen?: boolean;
}

const blocks: Block[] = [
  { day: 1, start: 10, end: 12, type: 'lecture', course: 'CS-201 · Programming 2',     room: 'A-301', group: 'Group A' },
  { day: 3, start: 10, end: 12, type: 'lecture', course: 'CS-201 · Programming 2',     room: 'A-301', group: 'Group A' },
  { day: 3, start: 13, end: 15, type: 'lab',     course: 'CS-201 · Programming 2',     room: 'L-105', group: 'Lab 2' },
  { day: 0, start: 10, end: 12, type: 'lecture', course: 'CS-203 · Web Development',   room: 'A-205', group: 'Group A' },
  { day: 2, start: 10, end: 12, type: 'lecture', course: 'CS-203 · Web Development',   room: 'A-205', group: 'Group A' },
  { day: 1, start: 14, end: 16, type: 'lecture', course: 'CS-220 · Database',          room: 'A-208', group: 'Group B', frozen: true },
  { day: 2, start: 9,  end: 10, type: 'tut',     course: 'MA-201 · Discrete Math',     room: 'A-110', group: 'Tut 1' },
  { day: 4, start: 9,  end: 10, type: 'tut',     course: 'MA-201 · Discrete Math',     room: 'A-110', group: 'Tut 1' },
];

const colors = {
  lecture: '#4CC4FF',
  lab:     '#7C8BFF',
  tut:     '#FFB86B',
};

export function MySchedule() {
  return (
    <AppShell
      navItems={nav}
      footerItems={[{ icon: 'logout', label: 'Log out' }]}
      topbar={<Topbar title="My Schedule" subtitle="Fall 2026 · 5 courses · 15 credits · Sun–Thu" />}
    >
      <Card className="p-5">
        <div className="flex items-center gap-3 mb-5">
          <Calendar size={16} className="text-ink-tertiary" />
          <span className="text-[12.5px] text-ink-secondary">Weekly view · click a class to swap or withdraw</span>
          <div className="ml-auto flex items-center gap-3">
            <Legend tone="lecture" label="Lecture" />
            <Legend tone="lab" label="Lab" />
            <Legend tone="tut" label="Tutorial" />
          </div>
        </div>

        {/* Calendar grid */}
        <div className="grid" style={{ gridTemplateColumns: '70px repeat(5, 1fr)' }}>
          {/* Header row */}
          <div />
          {days.map(d => (
            <div key={d} className="px-3 pb-3 text-center font-display font-semibold text-[12px] uppercase tracking-[0.16em]" style={{ color: '#A7B3CC' }}>
              {d}
            </div>
          ))}

          {/* Time column + day cells */}
          {hours.map((h, hourIdx) => (
            <Row key={h} hour={h} hourIdx={hourIdx} />
          ))}
        </div>
      </Card>

      {/* Frozen alert */}
      <div className="mt-5 rounded-md p-4 flex items-center gap-4" style={{ background: 'rgba(255,107,122,0.06)', border: '1px solid rgba(255,107,122,0.30)' }}>
        <div className="h-10 w-10 rounded-md flex items-center justify-center" style={{ background: 'rgba(255,107,122,0.12)', border: '1px solid rgba(255,107,122,0.40)' }}>
          <Snowflake size={18} className="text-semantic-danger" />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-[13.5px] text-ink-primary">CS-220 · Database is frozen</div>
          <div className="text-[12px] text-ink-secondary mt-0.5">Conflicts with CS-201 lecture after the recent reschedule. Waiting for advisor to swap or withdraw.</div>
        </div>
        <Button variant="secondary" size="sm" icon={ArrowRightLeft}>Request swap</Button>
        <Button variant="ghost" size="sm" icon={LogOutIcon}>Withdraw</Button>
      </div>
    </AppShell>
  );

  function Row({ hour, hourIdx }: { hour: string; hourIdx: number }) {
    return (
      <>
        <div className="px-3 py-2 text-right font-mono tabular text-[10.5px] text-ink-tertiary" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          {hour}
        </div>
        {days.map((_, dayIdx) => {
          const cellHour = 8 + hourIdx;
          const block = blocks.find(b => b.day === dayIdx && b.start === cellHour);
          return (
            <div
              key={dayIdx}
              className="relative"
              style={{ height: 56, borderTop: '1px solid rgba(255,255,255,0.04)', borderLeft: dayIdx === 0 ? '1px solid rgba(255,255,255,0.04)' : 'none', borderRight: '1px solid rgba(255,255,255,0.04)' }}
            >
              {block && <BlockTile block={block} />}
            </div>
          );
        })}
      </>
    );
  }
}

function BlockTile({ block }: { block: Block }) {
  const c = colors[block.type];
  const span = block.end - block.start;
  return (
    <div
      className="absolute inset-x-1 rounded-md p-2 z-10 transition-all duration-200"
      style={{
        height: 56 * span - 4,
        top: 2,
        background: block.frozen ? 'rgba(255,107,122,0.10)' : `${c}14`,
        border: block.frozen ? '1px solid rgba(255,107,122,0.45)' : `1px solid ${c}40`,
        boxShadow: block.frozen ? 'inset 0 0 0 1px rgba(255,107,122,0.20)' : 'none',
        backdropFilter: 'blur(6px)',
      }}
    >
      <div className="flex items-center gap-1.5 mb-0.5">
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: block.frozen ? '#FF6B7A' : c }} />
        <span className="text-[10px] uppercase tracking-[0.14em] font-semibold" style={{ color: block.frozen ? '#FF6B7A' : c }}>
          {block.frozen ? 'Frozen' : block.type}
        </span>
      </div>
      <div className="text-[11px] text-ink-primary font-semibold leading-tight truncate">{block.course}</div>
      <div className="text-[10px] text-ink-tertiary mt-0.5 truncate">{block.group} · {block.room}</div>
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
