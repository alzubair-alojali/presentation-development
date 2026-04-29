import { ArrowLeft, BookOpen, Users, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { AppShell, Topbar, Card, Pill, Button } from './_kit';
import type { NavItem } from './_kit';

const nav: NavItem[] = [
  { icon: 'dash', label: 'Dashboard' },
  { icon: 'catalog', label: 'Browse Courses', active: true },
  { icon: 'list', label: 'My Requests', badge: 1 },
  { icon: 'schedule', label: 'My Schedule' },
  { icon: 'bell', label: 'Notifications', badge: 3 },
];

const lectures = [
  { id: 'A', name: 'Group A · Dr. Hassan',  fill: 18, cap: 24, time: 'Mon+Wed · 10:00–12:00 · Room A-301', selected: true },
  { id: 'B', name: 'Group B · Dr. Hassan',  fill: 12, cap: 24, time: 'Sun+Tue · 14:30–16:30 · Room A-301' },
  { id: 'C', name: 'Group C · Dr. Mariam',  fill: 24, cap: 24, time: 'Tue+Thu · 08:00–10:00 · Room A-208', full: true },
];

const labs = [
  { id: 'L1', name: 'Lab Group 1',  fill: 22, cap: 30, time: 'Mon · 13:00–15:00 · Lab L-105' },
  { id: 'L2', name: 'Lab Group 2',  fill: 8,  cap: 30, time: 'Wed · 13:00–15:00 · Lab L-105', selected: true },
];

export function CourseDetails() {
  return (
    <AppShell
      navItems={nav}
      footerItems={[{ icon: 'logout', label: 'Log out' }]}
      topbar={<Topbar title="Programming 2" subtitle="CS-201 · Computer Science · 4 credits · prerequisite for CS-301, CS-310" />}
    >
      <button className="flex items-center gap-2 text-[12.5px] text-ink-tertiary mb-4 hover:text-ink-primary transition-colors">
        <ArrowLeft size={14} /> Back to courses
      </button>

      {/* Two-col: details + sidebar */}
      <div className="grid grid-cols-[1.5fr_1fr] gap-5 max-h-[560px]">
        <div className="flex flex-col gap-5">
          {/* Course meta */}
          <Card className="p-5">
            <div className="flex items-center gap-3 mb-4">
              <Pill tone="success" size="sm">Eligible</Pill>
              <Pill tone="violet" size="sm">Required: Lecture + Lab</Pill>
              <Pill tone="cyan" size="sm">4 credits</Pill>
            </div>
            <p className="text-[13.5px] text-ink-secondary leading-relaxed">
              Object-oriented programming, data structures, and algorithm design in Java. Builds directly on
              CS-101 (Programming 1) and serves as the foundation for advanced systems and database courses.
              Includes a weekly lab session.
            </p>
            <div className="flex items-center gap-6 mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <Meta icon={BookOpen} label="Prerequisites" value="CS-101 · MA-101" />
              <Meta icon={Users} label="Total enrolled" value="54 / 78" />
              <Meta icon={Clock} label="Sections" value="3 lectures · 2 labs" />
            </div>
          </Card>

          {/* Lecture sections */}
          <Card className="p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-[10.5px] uppercase tracking-[0.22em] text-ink-tertiary font-semibold mb-1">Step 1 · pick a lecture</div>
                <h3 className="font-display font-semibold text-[16px] text-ink-primary" style={{ fontFamily: 'Satoshi, Inter' }}>Lecture group</h3>
              </div>
              <span className="text-[11.5px] text-ink-tertiary font-mono tabular">3 options</span>
            </div>
            <div className="space-y-2.5">
              {lectures.map(l => <SectionRow key={l.id} l={l} />)}
            </div>
          </Card>

          {/* Lab sections */}
          <Card className="p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-[10.5px] uppercase tracking-[0.22em] text-ink-tertiary font-semibold mb-1">Step 2 · pick a lab</div>
                <h3 className="font-display font-semibold text-[16px] text-ink-primary" style={{ fontFamily: 'Satoshi, Inter' }}>Lab group</h3>
              </div>
              <span className="text-[11.5px] text-ink-tertiary font-mono tabular">2 options</span>
            </div>
            <div className="space-y-2.5">
              {labs.map(l => <SectionRow key={l.id} l={l} />)}
            </div>
          </Card>
        </div>

        {/* Right rail — selection summary */}
        <Card className="p-5 self-start sticky top-0">
          <div className="text-[10.5px] uppercase tracking-[0.22em] text-ink-tertiary font-semibold mb-2">Your selection</div>
          <h3 className="font-display font-semibold text-[18px] text-ink-primary mb-4" style={{ fontFamily: 'Satoshi, Inter' }}>Programming 2 · CS-201</h3>

          <div className="space-y-3 mb-5">
            <SummaryRow label="Lecture" value="Group A · Mon+Wed 10:00–12:00" tone="#4CC4FF" />
            <SummaryRow label="Lab"     value="Lab Group 2 · Wed 13:00–15:00" tone="#7C8BFF" />
          </div>

          <div className="rounded-md p-3 mb-5" style={{ background: 'rgba(74,222,128,0.05)', border: '1px solid rgba(74,222,128,0.30)' }}>
            <div className="flex items-center gap-2 text-[12px] font-semibold" style={{ color: '#4ADE80' }}>
              <CheckCircle2 size={14} />
              No conflicts with your current request
            </div>
          </div>

          <Button variant="primary" size="lg">Add to request · 4 credits</Button>
          <Button variant="ghost" size="sm">Cancel</Button>
        </Card>
      </div>
    </AppShell>
  );
}

function SectionRow({ l }: { l: any }) {
  const fillPct = (l.fill / l.cap) * 100;
  return (
    <div
      className="flex items-center gap-4 p-3.5 rounded-md transition-colors cursor-pointer"
      style={{
        background: l.selected ? 'rgba(76,196,255,0.06)' : l.full ? 'rgba(255,107,122,0.04)' : 'rgba(255,255,255,0.02)',
        border: l.selected ? '1px solid rgba(76,196,255,0.40)' : l.full ? '1px solid rgba(255,107,122,0.20)' : '1px solid rgba(255,255,255,0.05)',
        opacity: l.full ? 0.6 : 1,
      }}
    >
      <div
        className="h-5 w-5 rounded-full flex items-center justify-center shrink-0"
        style={{
          background: l.selected ? 'linear-gradient(135deg, #4CC4FF, #7C8BFF)' : 'transparent',
          border: l.selected ? 'none' : '1.5px solid rgba(255,255,255,0.18)',
        }}
      >
        {l.selected && <CheckCircle2 size={14} className="text-white" />}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[13.5px] text-ink-primary font-semibold truncate">{l.name}</div>
        <div className="text-[11.5px] text-ink-tertiary mt-0.5 flex items-center gap-1.5"><MapPin size={11} /> {l.time}</div>
      </div>
      <div className="text-right shrink-0">
        <div className="font-mono tabular text-[12.5px] text-ink-secondary">{l.fill}/{l.cap}</div>
        <div className="h-1 w-20 rounded-full overflow-hidden mt-1" style={{ background: 'rgba(255,255,255,0.06)' }}>
          <div className="h-full rounded-full" style={{ width: `${fillPct}%`, background: l.full ? '#FF6B7A' : 'linear-gradient(90deg, #4CC4FF, #7C8BFF)' }} />
        </div>
      </div>
      {l.full && <Pill tone="danger" size="sm">Full</Pill>}
    </div>
  );
}

function SummaryRow({ label, value, tone }: { label: string; value: string; tone: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="h-5 w-1 rounded-full mt-1" style={{ background: tone }} />
      <div className="flex-1">
        <div className="text-[10.5px] uppercase tracking-[0.18em] font-semibold mb-1" style={{ color: tone }}>{label}</div>
        <div className="text-[12.5px] text-ink-primary leading-tight">{value}</div>
      </div>
    </div>
  );
}

function Meta({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <Icon size={16} className="text-ink-tertiary" strokeWidth={1.75} />
      <div className="leading-tight">
        <div className="text-[10px] uppercase tracking-[0.18em] text-ink-tertiary font-semibold">{label}</div>
        <div className="text-[12px] text-ink-primary mt-0.5 font-medium">{value}</div>
      </div>
    </div>
  );
}
