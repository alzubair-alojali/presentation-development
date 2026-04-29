import { CheckCircle2, XCircle, RotateCcw, AlertTriangle, FileText, X } from 'lucide-react';
import { AppShell, Topbar, Card, Pill, Button } from './_kit';
import type { NavItem } from './_kit';

const nav: NavItem[] = [
  { icon: 'dash', label: 'Dashboard' },
  { icon: 'requests', label: 'Pending Requests', badge: 9, active: true },
  { icon: 'catalog', label: 'My Students' },
  { icon: 'bell', label: 'Notifications', badge: 2 },
];

interface ReqItem { code: string; name: string; group: string; schedule: string; status: 'ok' | 'prereq' | 'limit' | 'full'; reason?: string; }

const items: ReqItem[] = [
  { code: 'CS-201', name: 'Programming 2',     group: 'Lecture A · Lab 2', schedule: 'Mon+Wed 10:00 · Wed 13:00', status: 'ok' },
  { code: 'CS-203', name: 'Web Development',   group: 'Lecture A',          schedule: 'Sun+Tue 10:30',           status: 'ok' },
  { code: 'CS-301', name: 'Operating Systems', group: 'Lecture B',          schedule: 'Mon+Wed 14:00',           status: 'prereq',
    reason: 'CS-202 Data Structures has not been passed.' },
  { code: 'CS-220', name: 'Database Systems',  group: 'Lecture B',          schedule: 'Mon 14:30',               status: 'ok' },
];

export function RequestReview() {
  return (
    <AppShell
      brand="LIMU"
      subBrand="Advisor portal"
      navItems={nav}
      footerItems={[{ icon: 'logout', label: 'Log out' }]}
      topbar={
        <Topbar
          title="Request #1041 · Registration"
          subtitle="Submitted 5h ago by Sara Khaled"
          user={{ initials: 'HT', name: 'Dr. Hassan Al-Tarhouni', role: 'Advisor' }}
        />
      }
    >
      <div className="grid grid-cols-[1fr_320px] gap-5 max-h-[560px]">
        {/* Items list */}
        <Card className="p-5 overflow-hidden flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-[10.5px] uppercase tracking-[0.22em] text-ink-tertiary font-semibold mb-1">Requested items · 4</div>
              <h3 className="font-display font-semibold text-[16px] text-ink-primary" style={{ fontFamily: 'Satoshi, Inter' }}>Per-item review</h3>
            </div>
            <div className="flex items-center gap-2">
              <Pill tone="success" size="sm">3 OK</Pill>
              <Pill tone="warning" size="sm">1 issue</Pill>
            </div>
          </div>
          <div className="space-y-2.5 overflow-hidden">
            {items.map(it => <ItemRow key={it.code} it={it} />)}
          </div>
        </Card>

        {/* Right rail — student context */}
        <div className="flex flex-col gap-3">
          <Card className="p-5">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="h-12 w-12 rounded-full flex items-center justify-center text-[14px] font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #7C8BFF, #B980FF)' }}
              >
                SK
              </div>
              <div>
                <h4 className="font-display font-semibold text-[15px] text-ink-primary leading-tight" style={{ fontFamily: 'Satoshi, Inter' }}>
                  Sara Khaled
                </h4>
                <div className="text-[11px] text-ink-tertiary font-mono tabular mt-0.5">S-7142 · Computer Science</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 text-[12px]">
              <Stat label="GPA" value="3.42" tone="#4CC4FF" />
              <Stat label="Credits" value="78" tone="#7C8BFF" />
              <Stat label="This req." value="14 cr" tone="#FFB86B" />
              <Stat label="Open req." value="0" tone="#A7B3CC" />
            </div>
          </Card>

          {/* Override modal floating preview */}
          <Card className="p-5" style={{ background: 'rgba(255,184,107,0.05)', borderColor: 'rgba(255,184,107,0.30)' }}>
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] font-semibold mb-3" style={{ color: '#FFB86B' }}>
              <AlertTriangle size={13} />
              Override required
            </div>
            <div className="text-[12.5px] text-ink-primary font-semibold mb-1">Item 3 · CS-301</div>
            <div className="text-[11.5px] text-ink-secondary leading-relaxed mb-3">
              Missing prerequisite CS-202. Add a written reason to override.
            </div>
            <div
              className="rounded-md p-3 text-[11.5px] text-ink-secondary leading-relaxed mb-3"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <span className="text-ink-primary font-semibold">Reason: </span>
              Credit transferred from previous university; transcript on file in registrar.
            </div>
            <Button variant="secondary" size="sm" icon={FileText}>Save override</Button>
          </Card>
        </div>
      </div>

      {/* Action bar */}
      <div className="mt-5 flex items-center justify-end gap-3 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <Button variant="ghost" icon={X}>Reject</Button>
        <Button variant="ghost" icon={RotateCcw}>Return for edit</Button>
        <Button variant="primary" icon={CheckCircle2}>Approve request</Button>
      </div>
    </AppShell>
  );
}

function ItemRow({ it }: { it: ReqItem }) {
  const styles = {
    ok:     { color: '#4ADE80', label: 'OK',                icon: CheckCircle2 },
    prereq: { color: '#FFB86B', label: 'Missing prereq',     icon: AlertTriangle },
    limit:  { color: '#F5B752', label: 'Credit limit',       icon: AlertTriangle },
    full:   { color: '#FF6B7A', label: 'Full',               icon: XCircle },
  }[it.status];
  const Icon = styles.icon;
  return (
    <div
      className="rounded-md p-4"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: `1px solid ${styles.color}30`,
        borderLeft: `3px solid ${styles.color}`,
      }}
    >
      <div className="flex items-start gap-4">
        <div className="font-mono tabular text-[11px] text-ink-tertiary uppercase tracking-[0.14em] w-16 mt-0.5">{it.code}</div>
        <div className="flex-1 min-w-0">
          <div className="text-[13.5px] text-ink-primary font-semibold">{it.name}</div>
          <div className="text-[11.5px] text-ink-tertiary mt-0.5">{it.group} · {it.schedule}</div>
          {it.reason && (
            <div className="text-[11.5px] mt-2" style={{ color: styles.color }}>
              <Icon size={11} className="inline mr-1.5" />{it.reason}
            </div>
          )}
        </div>
        <Pill tone={it.status === 'ok' ? 'success' : it.status === 'prereq' ? 'warning' : 'danger'} size="sm">{styles.label}</Pill>
        {it.status !== 'ok' && <Button variant="secondary" size="sm">Override</Button>}
      </div>
    </div>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone: string }) {
  return (
    <div
      className="rounded-md p-2.5"
      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="text-[10px] uppercase tracking-[0.18em] font-semibold mb-1" style={{ color: tone }}>{label}</div>
      <div className="font-display font-bold text-[15px] tabular" style={{ fontFamily: 'Satoshi, Inter' }}>{value}</div>
    </div>
  );
}
