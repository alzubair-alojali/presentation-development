import { Edit, Clock, CheckCircle2, XCircle, RotateCcw, MessageSquare } from 'lucide-react';
import { AppShell, Topbar, Card, Pill, Button } from './_kit';
import type { NavItem } from './_kit';

const nav: NavItem[] = [
  { icon: 'dash', label: 'Dashboard' },
  { icon: 'catalog', label: 'Browse Courses' },
  { icon: 'list', label: 'My Requests', badge: 1, active: true },
  { icon: 'schedule', label: 'My Schedule' },
  { icon: 'bell', label: 'Notifications', badge: 3 },
];

const statusFilters = [
  { label: 'All', count: 5, active: true },
  { label: 'Pending', count: 1 },
  { label: 'Approved', count: 2 },
  { label: 'Returned', count: 1 },
  { label: 'Rejected', count: 1 },
];

interface Req {
  id: string;
  status: 'pending' | 'approved' | 'returned' | 'rejected';
  type: string;
  submitted: string;
  decided?: string;
  items: number;
  credits: number;
  advisor: string;
  reason?: string;
  comment?: string;
}

const requests: Req[] = [
  { id: '#1041', status: 'pending',  type: 'Registration', submitted: '5h ago',     items: 4, credits: 14, advisor: 'Dr. Hassan' },
  { id: '#1029', status: 'approved', type: 'Section swap', submitted: '3 days ago', decided: '2 days ago', items: 1, credits: 0,  advisor: 'Dr. Hassan' },
  { id: '#1020', status: 'returned', type: 'Registration', submitted: '5 days ago', decided: '4 days ago', items: 5, credits: 17, advisor: 'Dr. Hassan',
    comment: 'Please pick a different lab group for CS-203 — Lab 1 conflicts with your Tutorial.' },
  { id: '#1015', status: 'approved', type: 'Withdrawal',   submitted: '7 days ago', decided: '6 days ago', items: 1, credits: 3,  advisor: 'Dr. Hassan' },
  { id: '#1003', status: 'rejected', type: 'Registration', submitted: '12 days ago', decided: '10 days ago', items: 6, credits: 21, advisor: 'Dr. Hassan',
    reason: 'Credit limit exceeded for Spring term. Please resubmit with fewer items.' },
];

export function MyRequests() {
  return (
    <AppShell
      navItems={nav}
      footerItems={[{ icon: 'logout', label: 'Log out' }]}
      topbar={<Topbar title="My Requests" subtitle="Track every registration, swap, and withdrawal you've submitted." />}
    >
      {/* Status filter pills */}
      <div className="flex items-center gap-2 mb-5">
        {statusFilters.map(f => (
          <span
            key={f.label}
            className="text-[12px] rounded-full px-3 py-1.5 font-medium flex items-center gap-2"
            style={{
              color: f.active ? '#4CC4FF' : '#A7B3CC',
              background: f.active ? 'rgba(76,196,255,0.10)' : 'rgba(255,255,255,0.03)',
              border: f.active ? '1px solid rgba(76,196,255,0.30)' : '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {f.label}
            <span className="font-mono tabular text-[10.5px] px-1.5 rounded" style={{ background: 'rgba(255,255,255,0.06)', color: '#6E7A94' }}>{f.count}</span>
          </span>
        ))}
      </div>

      {/* Requests list */}
      <div className="space-y-3 max-h-[540px] overflow-hidden">
        {requests.map(r => <RequestCard key={r.id} r={r} />)}
      </div>
    </AppShell>
  );
}

function RequestCard({ r }: { r: Req }) {
  const statusMap = {
    pending:  { color: '#F5B752', icon: Clock,         label: 'Pending review' },
    approved: { color: '#4ADE80', icon: CheckCircle2,  label: 'Approved' },
    returned: { color: '#FFB86B', icon: RotateCcw,     label: 'Returned for edit' },
    rejected: { color: '#FF6B7A', icon: XCircle,       label: 'Rejected' },
  }[r.status];
  const StatusIcon = statusMap.icon;

  return (
    <Card className="p-5" style={{ borderLeft: `3px solid ${statusMap.color}` }}>
      <div className="flex items-start gap-5">
        <div className="shrink-0">
          <div
            className="h-10 w-10 rounded-md flex items-center justify-center"
            style={{ background: `${statusMap.color}14`, border: `1px solid ${statusMap.color}40` }}
          >
            <StatusIcon size={18} strokeWidth={1.75} style={{ color: statusMap.color }} />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-3 mb-1.5">
            <span className="font-mono tabular text-[13px] text-ink-secondary">{r.id}</span>
            <span className="text-[11px] uppercase tracking-[0.16em] font-semibold" style={{ color: statusMap.color }}>{statusMap.label}</span>
          </div>
          <h3 className="font-display font-semibold text-[15px] text-ink-primary" style={{ fontFamily: 'Satoshi, Inter' }}>
            {r.type} · {r.items} item{r.items === 1 ? '' : 's'}
          </h3>
          <div className="flex items-center gap-3 text-[11.5px] text-ink-tertiary mt-2 font-mono tabular">
            <span>Submitted {r.submitted}</span>
            {r.decided && <><span>·</span><span>Decided {r.decided}</span></>}
            <span>·</span>
            <span>Routed to {r.advisor}</span>
            {r.credits > 0 && <><span>·</span><span>{r.credits} cr</span></>}
          </div>
          {(r.comment || r.reason) && (
            <div
              className="mt-3 rounded-md p-3 flex items-start gap-2.5"
              style={{ background: `${statusMap.color}08`, border: `1px solid ${statusMap.color}30` }}
            >
              <MessageSquare size={13} className="shrink-0 mt-0.5" style={{ color: statusMap.color }} />
              <div className="text-[12px] text-ink-secondary leading-relaxed">
                {r.comment && <><span className="text-ink-primary font-semibold">Comment:</span> {r.comment}</>}
                {r.reason && <><span className="text-ink-primary font-semibold">Reason:</span> {r.reason}</>}
              </div>
            </div>
          )}
        </div>
        <div className="shrink-0 flex flex-col gap-2">
          {r.status === 'pending' && <Button variant="secondary" size="sm" icon={Edit}>Edit</Button>}
          {r.status === 'returned' && <Button variant="primary" size="sm" icon={Edit}>Edit & resubmit</Button>}
        </div>
      </div>
    </Card>
  );
}
