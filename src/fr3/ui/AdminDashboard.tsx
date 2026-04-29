import { Activity, FileText, AlertTriangle, ShieldCheck, BarChart3, Calendar, Clock, ArrowUpRight, Users } from 'lucide-react';
import { AppShell, Topbar, Card, Pill, SectionHead, Button } from './_kit';
import type { NavItem } from './_kit';

const nav: NavItem[] = [
  { icon: 'dash', label: 'Dashboard', active: true },
  { icon: 'catalog', label: 'Catalog & Sections' },
  { icon: 'schedule', label: 'Timetable' },
  { icon: 'requests', label: 'Terms' },
  { icon: 'users', label: 'Users' },
  { icon: 'file', label: 'Reports', badge: 3 },
  { icon: 'bell', label: 'Notifications', badge: 5 },
];

const stats = [
  { label: 'Pending requests',  value: '47',  change: 'across 9 advisors', tone: '#F5B752', icon: Clock },
  { label: 'Sections at full',  value: '8',   change: 'of 64 total',       tone: '#FF6B7A', icon: BarChart3 },
  { label: 'Overrides this term', value: '12', change: '3 in last 24h',    tone: '#FFB86B', icon: ShieldCheck },
  { label: 'Active enrollments', value: '1,284', change: '+72 this week',  tone: '#4ADE80', icon: Users },
];

export function AdminDashboard() {
  return (
    <AppShell
      brand="LIMU"
      subBrand="Admin · Registrar"
      navItems={nav}
      footerItems={[{ icon: 'logout', label: 'Log out' }]}
      topbar={<Topbar title="Welcome back, Khaled" subtitle="Fall 2026 · 11 days remaining in registration window" user={{ initials: 'KO', name: 'Khaled Othmani', role: 'Admin' }} />}
    >
      <div className="grid grid-cols-4 gap-4 mb-6">
        {stats.map(s => {
          const Icon = s.icon;
          return (
            <Card key={s.label} className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div
                  className="h-9 w-9 rounded-md flex items-center justify-center"
                  style={{ background: `${s.tone}14`, border: `1px solid ${s.tone}40` }}
                >
                  <Icon size={16} strokeWidth={1.75} style={{ color: s.tone }} />
                </div>
              </div>
              <div className="font-display font-bold text-[28px] tabular leading-none" style={{ fontFamily: 'Satoshi, Inter' }}>{s.value}</div>
              <div className="text-[12px] text-ink-secondary mt-1.5">{s.label}</div>
              <div className="text-[10.5px] uppercase tracking-[0.16em] font-semibold mt-2.5" style={{ color: s.tone }}>{s.change}</div>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-[1.4fr_1fr] gap-5" style={{ maxHeight: 380 }}>
        <Card className="p-5">
          <SectionHead
            kicker="Action required"
            title="Escalated requests"
            action={<Pill tone="danger" size="sm">3 over 48h</Pill>}
          />
          <div className="space-y-2.5">
            {[
              { id: '#1003', student: 'Yusuf Bani',     advisor: 'Dr. Hassan',  age: '52h' },
              { id: '#0998', student: 'Lina Suleiman',  advisor: 'Dr. Ramy',    age: '49h' },
              { id: '#0993', student: 'Ahmed Tawfik',   advisor: 'Dr. Salma',   age: '48h' },
            ].map(r => (
              <div
                key={r.id}
                className="flex items-center gap-4 p-3 rounded-md"
                style={{ background: 'rgba(255,107,122,0.04)', border: '1px solid rgba(255,107,122,0.20)' }}
              >
                <AlertTriangle size={16} className="shrink-0" style={{ color: '#FF6B7A' }} />
                <span className="font-mono tabular text-[12.5px] text-ink-secondary w-14">{r.id}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] text-ink-primary font-medium">{r.student}</div>
                  <div className="text-[11px] text-ink-tertiary">Advisor: {r.advisor}</div>
                </div>
                <span className="font-mono tabular text-[12px]" style={{ color: '#FF6B7A' }}>{r.age}</span>
                <Button variant="secondary" size="sm">Reassign</Button>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <SectionHead kicker="Quick actions" title="Manage the term" />
          <div className="grid grid-cols-2 gap-2.5">
            <Action icon={FileText} label="Create course" tone="#4CC4FF" />
            <Action icon={Calendar} label="Open timetable" tone="#7C8BFF" />
            <Action icon={Users}    label="Add student"     tone="#FFB86B" />
            <Action icon={Activity} label="Overrides report" tone="#B980FF" />
          </div>

          <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="text-[10.5px] uppercase tracking-[0.18em] font-semibold text-ink-tertiary mb-2">Window status</div>
            <div className="rounded-md p-3 flex items-center gap-3" style={{ background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.30)' }}>
              <span className="h-2 w-2 rounded-full animate-pulse" style={{ background: '#4ADE80' }} />
              <div>
                <div className="text-[12.5px] font-semibold" style={{ color: '#4ADE80' }}>Open · accepting requests</div>
                <div className="text-[11px] text-ink-tertiary mt-0.5">Auto-closes in 11 days at 23:59</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </AppShell>
  );

  function Action({ icon: Icon, label, tone }: { icon: any; label: string; tone: string }) {
    return (
      <button
        className="rounded-md p-3 flex items-center gap-3 transition-all duration-200 hover:translate-y-[-1px]"
        style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div
          className="h-8 w-8 rounded-md flex items-center justify-center shrink-0"
          style={{ background: `${tone}14`, border: `1px solid ${tone}40` }}
        >
          <Icon size={14} strokeWidth={1.75} style={{ color: tone }} />
        </div>
        <span className="text-[12.5px] text-ink-primary font-medium flex-1 text-left">{label}</span>
        <ArrowUpRight size={13} className="text-ink-tertiary" />
      </button>
    );
  }
}
