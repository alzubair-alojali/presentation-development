import { Sparkles, Calendar, BookOpen, Clock, ArrowUpRight, GraduationCap, ChevronRight } from 'lucide-react';
import { AppShell, Topbar, Card, Pill, SectionHead, Button } from './_kit';
import type { NavItem } from './_kit';

const nav: NavItem[] = [
  { icon: 'dash', label: 'Dashboard', active: true },
  { icon: 'catalog', label: 'Browse Courses' },
  { icon: 'list', label: 'My Requests', badge: 1 },
  { icon: 'schedule', label: 'My Schedule' },
  { icon: 'bell', label: 'Notifications', badge: 3 },
];

const stats = [
  { label: 'Enrolled credits', value: '15', change: '+3 this term', icon: GraduationCap, color: '#4CC4FF' },
  { label: 'GPA', value: '3.42', change: 'Up 0.08', icon: Sparkles, color: '#7C8BFF' },
  { label: 'Pending request', value: '1', change: 'Sent 5h ago', icon: Clock, color: '#FFB86B' },
];

export function Dashboard() {
  return (
    <AppShell
      navItems={nav}
      footerItems={[{ icon: 'logout', label: 'Log out' }]}
      topbar={<Topbar title="Welcome back, Ali" subtitle="Fall 2026 · Registration window is open for 11 more days." />}
    >
      <div className="grid grid-cols-3 gap-5 mb-6">
        {stats.map(s => {
          const Icon = s.icon;
          return (
            <Card key={s.label} className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div
                  className="h-10 w-10 rounded-md flex items-center justify-center"
                  style={{ background: `${s.color}14`, border: `1px solid ${s.color}40` }}
                >
                  <Icon size={18} strokeWidth={1.75} style={{ color: s.color }} />
                </div>
                <span className="text-[10.5px] uppercase tracking-[0.18em] text-ink-tertiary font-semibold" style={{ color: s.color }}>{s.change}</span>
              </div>
              <div className="font-display font-bold text-[36px] tabular leading-none" style={{ fontFamily: 'Satoshi, Inter' }}>{s.value}</div>
              <div className="text-[12.5px] text-ink-secondary mt-2">{s.label}</div>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-[1.4fr_1fr] gap-5" style={{ maxHeight: 460 }}>
        {/* Left: Quick actions + Schedule preview */}
        <div className="flex flex-col gap-5">
          <Card className="p-5">
            <SectionHead
              kicker="Quick actions"
              title="Keep your registration moving"
              action={<Button variant="ghost" size="sm" icon={ChevronRight}>All actions</Button>}
            />
            <div className="grid grid-cols-3 gap-3">
              <Action icon={BookOpen} title="Browse courses" subtitle="View catalog · 64 open" tone="#4CC4FF" />
              <Action icon={Calendar} title="My schedule" subtitle="5 classes · Sun–Thu" tone="#7C8BFF" />
              <Action icon={Sparkles} title="Edit request" subtitle="1 pending · sent 5h ago" tone="#FFB86B" />
            </div>
          </Card>

          <Card className="p-5 flex-1">
            <SectionHead
              kicker="This week"
              title="Up next on your schedule"
              action={<Pill tone="cyan" size="sm">Mon · Today</Pill>}
            />
            <div className="space-y-2.5">
              {[
                { c: 'CS-201 · Programming 2',     g: 'Lecture · Group A · Mon 10:00–12:00 · Room A-301', tone: '#4CC4FF' },
                { c: 'CS-203 · Web Development',   g: 'Lecture · Group A · Sun+Tue 10:30–12:00 · A-205', tone: '#7C8BFF' },
                { c: 'CS-301 · Operating Systems', g: 'Lecture · Group B · Mon+Wed 14:30–16:00 · A-208', tone: '#FFB86B' },
              ].map(r => (
                <div
                  key={r.c}
                  className="flex items-center gap-4 px-3 py-2.5 rounded-md"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <span className="h-6 w-1 rounded-full" style={{ background: r.tone }} />
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] text-ink-primary font-semibold truncate">{r.c}</div>
                    <div className="text-[11.5px] text-ink-tertiary truncate">{r.g}</div>
                  </div>
                  <ArrowUpRight size={14} className="text-ink-tertiary" />
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right: Active request status */}
        <Card className="p-5">
          <SectionHead kicker="Pending request" title="Request #1041" />
          <div
            className="rounded-md p-4 mb-4"
            style={{
              background: 'rgba(245,183,82,0.06)',
              border: '1px solid rgba(245,183,82,0.30)',
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <Pill tone="warning" size="sm">Pending review</Pill>
              <span className="text-[10.5px] font-mono tabular text-ink-tertiary">5h ago</span>
            </div>
            <div className="text-[12.5px] text-ink-secondary">
              4 items · routed to <span className="text-ink-primary font-semibold">Dr. Hassan Al-Tarhouni</span>
            </div>
          </div>

          <div className="space-y-2.5">
            {[
              ['CS-201', 'Programming 2', 'Lecture A · Lab B', 'ok'],
              ['CS-203', 'Web Development', 'Lecture A',         'ok'],
              ['CS-301', 'Operating Systems', 'Lecture B',       'warn'],
              ['CS-220', 'Database Systems', 'Lecture B',         'ok'],
            ].map(([code, name, group, kind]) => (
              <div key={code} className="flex items-center gap-3">
                <span className="font-mono tabular text-[11.5px] text-ink-tertiary w-14">{code}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] text-ink-primary truncate">{name}</div>
                  <div className="text-[11px] text-ink-tertiary truncate">{group}</div>
                </div>
                {kind === 'ok'
                  ? <Pill tone="success" size="sm">OK</Pill>
                  : <Pill tone="warning" size="sm">Prereq</Pill>}
              </div>
            ))}
          </div>

          <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <Button variant="secondary" size="sm">Edit request</Button>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}

function Action({ icon: Icon, title, subtitle, tone }: { icon: any; title: string; subtitle: string; tone: string }) {
  return (
    <div
      className="rounded-md p-4 flex flex-col gap-3 cursor-pointer transition-all duration-200 hover:translate-y-[-2px]"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div
        className="h-9 w-9 rounded-md flex items-center justify-center"
        style={{ background: `${tone}14`, border: `1px solid ${tone}40` }}
      >
        <Icon size={16} strokeWidth={1.75} style={{ color: tone }} />
      </div>
      <div>
        <div className="text-[13px] text-ink-primary font-semibold">{title}</div>
        <div className="text-[11px] text-ink-tertiary mt-1">{subtitle}</div>
      </div>
    </div>
  );
}
