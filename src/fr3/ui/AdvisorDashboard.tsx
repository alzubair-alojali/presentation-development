import { CheckSquare, Clock, AlertTriangle, Users, ArrowUpRight } from 'lucide-react';
import { AppShell, Topbar, Card, Pill, SectionHead, Button } from './_kit';
import type { NavItem } from './_kit';

const nav: NavItem[] = [
  { icon: 'dash', label: 'Dashboard', active: true },
  { icon: 'requests', label: 'Pending Requests', badge: 9 },
  { icon: 'catalog', label: 'My Students' },
  { icon: 'bell', label: 'Notifications', badge: 2 },
];

const stats = [
  { label: 'Pending requests',   value: '9',  change: '+2 today',         tone: '#FFB86B', icon: Clock },
  { label: 'Approved this week', value: '24', change: '+18% vs last',     tone: '#4ADE80', icon: CheckSquare },
  { label: 'Needs override',     value: '3',  change: 'Action required',  tone: '#FF6B7A', icon: AlertTriangle },
  { label: 'Active students',    value: '47', change: 'Across 4 majors',  tone: '#7C8BFF', icon: Users },
];

interface QueueItem {
  id: string;
  student: string;
  studentId: string;
  type: string;
  items: number;
  submitted: string;
  flags?: ('prereq' | 'limit' | 'conflict')[];
}

const queue: QueueItem[] = [
  { id: '#1041', student: 'Sara Khaled',   studentId: 'S-7142', type: 'Registration', items: 4, submitted: '5h ago',    flags: ['prereq'] },
  { id: '#1040', student: 'Omar Al-Ferjan', studentId: 'S-6911', type: 'Registration', items: 5, submitted: '8h ago' },
  { id: '#1038', student: 'Hadeel Mansour', studentId: 'S-7320', type: 'Section swap', items: 1, submitted: '12h ago' },
  { id: '#1035', student: 'Yusuf Bani',    studentId: 'S-7045', type: 'Registration', items: 6, submitted: '1d ago',    flags: ['limit'] },
  { id: '#1031', student: 'Lina Suleiman', studentId: 'S-7388', type: 'Withdrawal',   items: 1, submitted: '1d ago' },
  { id: '#1027', student: 'Ahmed Tawfik',  studentId: 'S-6809', type: 'Registration', items: 3, submitted: '2d ago' },
];

export function AdvisorDashboard() {
  return (
    <AppShell
      brand="LIMU"
      subBrand="Advisor portal"
      navItems={nav}
      footerItems={[{ icon: 'logout', label: 'Log out' }]}
      topbar={<Topbar title="Welcome back, Dr. Hassan" subtitle="9 pending requests · oldest is 18h old" user={{ initials: 'HT', name: 'Dr. Hassan Al-Tarhouni', role: 'Advisor' }} />}
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
                <span className="text-[10px] uppercase tracking-[0.16em] font-semibold" style={{ color: s.tone }}>{s.change}</span>
              </div>
              <div className="font-display font-bold text-[28px] tabular leading-none" style={{ fontFamily: 'Satoshi, Inter' }}>{s.value}</div>
              <div className="text-[12px] text-ink-secondary mt-1.5">{s.label}</div>
            </Card>
          );
        })}
      </div>

      <Card className="p-5">
        <SectionHead
          kicker="Pending queue · oldest first"
          title="Review queue"
          action={
            <div className="flex items-center gap-2">
              <Button variant="secondary" size="sm" icon={CheckSquare}>Bulk approve clean</Button>
              <Button variant="ghost" size="sm">Filters</Button>
            </div>
          }
        />

        <div
          className="grid items-center gap-4 px-4 py-2.5 text-[10.5px] uppercase tracking-[0.18em] font-semibold text-ink-tertiary"
          style={{ gridTemplateColumns: '40px 80px 1.4fr 1fr 60px 0.9fr 90px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <input type="checkbox" disabled className="opacity-30" />
          <div>ID</div>
          <div>Student</div>
          <div>Type</div>
          <div>Items</div>
          <div>Submitted</div>
          <div className="text-right">Status</div>
        </div>

        <div className="divide-y divide-white/[0.04]">
          {queue.map(q => <QueueRow key={q.id} q={q} />)}
        </div>
      </Card>
    </AppShell>
  );
}

function QueueRow({ q }: { q: QueueItem }) {
  const hasIssues = q.flags && q.flags.length > 0;
  return (
    <div
      className="grid items-center gap-4 px-4 py-3.5 transition-colors hover:bg-white/[0.02]"
      style={{ gridTemplateColumns: '40px 80px 1.4fr 1fr 60px 0.9fr 90px' }}
    >
      <input
        type="checkbox"
        className="h-4 w-4 rounded"
        style={{ accentColor: '#4CC4FF' }}
        disabled={hasIssues}
      />
      <span className="font-mono tabular text-[12.5px] text-ink-secondary">{q.id}</span>
      <div className="flex items-center gap-2.5 min-w-0">
        <div
          className="h-7 w-7 rounded-full flex items-center justify-center text-[10px] font-semibold text-white shrink-0"
          style={{ background: 'linear-gradient(135deg, #7C8BFF, #B980FF)' }}
        >
          {q.student.split(' ').map(n => n[0]).join('').slice(0, 2)}
        </div>
        <div className="min-w-0">
          <div className="text-[12.5px] text-ink-primary font-medium truncate">{q.student}</div>
          <div className="text-[10.5px] text-ink-tertiary font-mono tabular">{q.studentId}</div>
        </div>
      </div>
      <span className="text-[12px] text-ink-secondary">{q.type}</span>
      <span className="font-mono tabular text-[12px] text-ink-secondary">{q.items}</span>
      <span className="text-[11.5px] text-ink-tertiary font-mono tabular">{q.submitted}</span>
      <div className="flex items-center justify-end gap-2">
        {hasIssues
          ? <Pill tone="warning" size="sm">Issues</Pill>
          : <Pill tone="success" size="sm">Clean</Pill>}
        <ArrowUpRight size={13} className="text-ink-tertiary" />
      </div>
    </div>
  );
}
