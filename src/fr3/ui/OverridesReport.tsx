import { Download, Filter, Calendar, FileSpreadsheet, FileText } from 'lucide-react';
import { AppShell, Topbar, Card, Pill, SectionHead, Button } from './_kit';
import type { NavItem } from './_kit';

const nav: NavItem[] = [
  { icon: 'dash', label: 'Dashboard' },
  { icon: 'catalog', label: 'Catalog & Sections' },
  { icon: 'schedule', label: 'Timetable' },
  { icon: 'requests', label: 'Terms' },
  { icon: 'users', label: 'Users' },
  { icon: 'file', label: 'Reports', badge: 3, active: true },
  { icon: 'bell', label: 'Notifications', badge: 5 },
];

interface Override {
  date: string;
  student: string;
  sn: string;
  advisor: string;
  course: string;
  type: 'prereq' | 'limit';
  reason: string;
  audit: string;
}

const rows: Override[] = [
  { date: '2026-04-26 14:32', student: 'Sara Khaled',     sn: 'S-7142', advisor: 'Dr. Hassan', course: 'CS-301 Operating Systems',   type: 'prereq', reason: 'Credit transferred from previous university; transcript on file.', audit: 'AL-2419' },
  { date: '2026-04-25 11:18', student: 'Omar Al-Ferjan',   sn: 'S-6911', advisor: 'Dr. Salma',  course: 'MA-301 Linear Algebra',       type: 'prereq', reason: 'Equivalent course completed at AAU summer program.',                audit: 'AL-2402' },
  { date: '2026-04-24 09:45', student: 'Hadeel Mansour',   sn: 'S-7320', advisor: 'Dr. Hassan', course: 'CS-220 Database Systems',     type: 'limit',  reason: 'Final-term student; needs course to graduate this semester.',         audit: 'AL-2390' },
  { date: '2026-04-23 16:02', student: 'Yusuf Bani',       sn: 'S-7045', advisor: 'Dr. Ramy',   course: 'EN-301 Tech Communication',   type: 'limit',  reason: 'Approved overload by department head — see attached email.',          audit: 'AL-2378' },
  { date: '2026-04-22 13:21', student: 'Lina Suleiman',    sn: 'S-7388', advisor: 'Dr. Salma',  course: 'CS-310 Mobile Dev',           type: 'prereq', reason: 'Strong portfolio of equivalent professional work.',                   audit: 'AL-2364' },
  { date: '2026-04-21 10:55', student: 'Ahmed Tawfik',     sn: 'S-6809', advisor: 'Dr. Hassan', course: 'CS-220 Database Systems',     type: 'prereq', reason: 'Dependency course CS-200 completed concurrently.',                    audit: 'AL-2351' },
  { date: '2026-04-20 15:40', student: 'Nour Al-Bakry',    sn: 'S-7400', advisor: 'Dr. Ramy',   course: 'BIO-201 Cell Biology',        type: 'limit',  reason: 'Doubling major — explicit dean approval.',                            audit: 'AL-2340' },
];

export function OverridesReport() {
  return (
    <AppShell
      brand="LIMU"
      subBrand="Admin · Registrar"
      navItems={nav}
      footerItems={[{ icon: 'logout', label: 'Log out' }]}
      topbar={<Topbar title="Overrides Report" subtitle="Fall 2026 · 12 overrides total · all advisors visible" user={{ initials: 'KO', name: 'Khaled Othmani', role: 'Admin' }} />}
    >
      {/* Filter bar */}
      <Card className="p-4 mb-5">
        <div className="flex items-center gap-3 flex-wrap">
          <FilterChip icon={Calendar} label="Apr 1 – Apr 30, 2026" />
          <FilterChip icon={Filter} label="Advisor: All" />
          <FilterChip icon={Filter} label="Course: All" />
          <FilterChip icon={Filter} label="Type: All" active />
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="sm" icon={FileSpreadsheet}>Export CSV</Button>
            <Button variant="primary" size="sm" icon={Download}>Export PDF</Button>
          </div>
        </div>
      </Card>

      {/* Stats row */}
      <div className="grid grid-cols-4 gap-4 mb-5">
        <MiniStat label="Total this term"    value="12" tone="#FFB86B" />
        <MiniStat label="Prereq overrides"   value="7"  tone="#7C8BFF" />
        <MiniStat label="Credit overrides"   value="5"  tone="#4CC4FF" />
        <MiniStat label="Top advisor"        value="Dr. Hassan · 4" tone="#A7B3CC" small />
      </div>

      {/* Table */}
      <Card className="overflow-hidden flex flex-col" style={{ maxHeight: 380 }}>
        <div
          className="grid items-center gap-3 px-5 py-3 text-[10.5px] uppercase tracking-[0.18em] font-semibold text-ink-tertiary"
          style={{
            gridTemplateColumns: '110px 1.2fr 80px 1fr 1.4fr 90px 90px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div>Date</div>
          <div>Student</div>
          <div>ID</div>
          <div>Advisor</div>
          <div>Course</div>
          <div>Type</div>
          <div>Audit</div>
        </div>
        <div className="flex-1 overflow-y-auto scrollpanel">
          {rows.map(r => (
            <div
              key={r.audit}
              className="grid items-baseline gap-3 px-5 py-3 text-[12px] hover:bg-white/[0.02] transition-colors"
              style={{
                gridTemplateColumns: '110px 1.2fr 80px 1fr 1.4fr 90px 90px',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
              }}
            >
              <span className="font-mono tabular text-[11.5px] text-ink-tertiary">{r.date}</span>
              <span className="text-ink-primary font-medium truncate">{r.student}</span>
              <span className="font-mono tabular text-[11.5px] text-ink-tertiary">{r.sn}</span>
              <span className="text-ink-secondary truncate">{r.advisor}</span>
              <span className="text-ink-secondary truncate">{r.course}</span>
              <Pill tone={r.type === 'prereq' ? 'violet' : 'cyan'} size="sm">
                {r.type === 'prereq' ? 'Prereq' : 'Credit'}
              </Pill>
              <span className="font-mono tabular text-[11.5px] text-accent-primary truncate">{r.audit}</span>
            </div>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}

function FilterChip({ icon: Icon, label, active }: { icon: any; label: string; active?: boolean }) {
  return (
    <span
      className="flex items-center gap-2 rounded-md px-3 py-1.5"
      style={{
        background: active ? 'rgba(76,196,255,0.10)' : 'rgba(255,255,255,0.03)',
        border: active ? '1px solid rgba(76,196,255,0.30)' : '1px solid rgba(255,255,255,0.06)',
        color: active ? '#4CC4FF' : '#A7B3CC',
        fontSize: 12,
      }}
    >
      <Icon size={13} strokeWidth={1.75} />
      {label}
    </span>
  );
}

function MiniStat({ label, value, tone, small }: { label: string; value: string; tone: string; small?: boolean }) {
  return (
    <Card className="p-4">
      <div className="text-[10px] uppercase tracking-[0.18em] font-semibold mb-2" style={{ color: tone }}>{label}</div>
      <div
        className="font-display font-bold tabular leading-none"
        style={{ fontFamily: 'Satoshi, Inter', fontSize: small ? 16 : 26 }}
      >
        {value}
      </div>
    </Card>
  );
}
