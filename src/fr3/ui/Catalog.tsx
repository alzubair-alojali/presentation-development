import { Search, Filter, BookOpen, Users, Clock, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';
import { AppShell, Topbar, Card, Pill } from './_kit';
import type { NavItem } from './_kit';

const nav: NavItem[] = [
  { icon: 'dash', label: 'Dashboard' },
  { icon: 'catalog', label: 'Browse Courses', active: true },
  { icon: 'list', label: 'My Requests', badge: 1 },
  { icon: 'schedule', label: 'My Schedule' },
  { icon: 'bell', label: 'Notifications', badge: 3 },
];

interface Course {
  code: string; name: string; credits: number; dept: string; eligibility: 'eligible' | 'prereq' | 'limit';
  fill: number; cap: number; instructor: string; types: string[];
}

const courses: Course[] = [
  { code: 'CS-201', name: 'Programming 2',           credits: 4, dept: 'Computer Sci.', eligibility: 'eligible', fill: 18, cap: 24, instructor: 'Dr. Hassan',  types: ['Lecture', 'Lab'] },
  { code: 'CS-203', name: 'Web Development',         credits: 3, dept: 'Computer Sci.', eligibility: 'eligible', fill: 12, cap: 28, instructor: 'Dr. Salma',    types: ['Lecture', 'Lab'] },
  { code: 'CS-220', name: 'Database Systems',        credits: 3, dept: 'Computer Sci.', eligibility: 'eligible', fill: 22, cap: 30, instructor: 'Dr. Tarek',    types: ['Lecture'] },
  { code: 'CS-301', name: 'Operating Systems',       credits: 4, dept: 'Computer Sci.', eligibility: 'prereq',   fill: 9,  cap: 26, instructor: 'Dr. Mariam',   types: ['Lecture'] },
  { code: 'MA-201', name: 'Discrete Mathematics',    credits: 3, dept: 'Mathematics',   eligibility: 'eligible', fill: 14, cap: 30, instructor: 'Dr. Younis',   types: ['Lecture', 'Tutorial'] },
  { code: 'EN-220', name: 'Technical Writing',       credits: 2, dept: 'English',       eligibility: 'limit',    fill: 6,  cap: 22, instructor: 'Dr. Fatima',   types: ['Lecture'] },
];

const filters = ['All', 'Computer Sci.', 'Mathematics', 'English', 'Eligible only'];

export function Catalog() {
  return (
    <AppShell
      navItems={nav}
      footerItems={[{ icon: 'logout', label: 'Log out' }]}
      topbar={<Topbar title="Course Catalog" subtitle="Fall 2026 · 64 published courses · 18 eligible for you" />}
    >
      {/* Search + filter row */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="flex items-center gap-3 rounded-md flex-1"
          style={{ height: 44, paddingInline: 16, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <Search size={16} strokeWidth={1.75} className="text-ink-tertiary shrink-0" />
          <span className="text-[13px] text-ink-tertiary">Search by course code or name…</span>
        </div>
        <button
          className="flex items-center gap-2.5 rounded-md font-medium"
          style={{ height: 44, paddingInline: 16, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#A7B3CC', fontSize: 13 }}
        >
          <Filter size={15} strokeWidth={1.75} />
          Filters · 2
        </button>
      </div>

      <div className="flex items-center gap-2 mb-5">
        {filters.map((f, i) => (
          <span
            key={f}
            className="text-[12px] rounded-full px-3 py-1.5 font-medium"
            style={{
              color: i === 4 ? '#4CC4FF' : i === 0 ? '#F4F7FF' : '#A7B3CC',
              background: i === 0 || i === 4 ? 'rgba(76,196,255,0.10)' : 'rgba(255,255,255,0.03)',
              border: i === 0 || i === 4 ? '1px solid rgba(76,196,255,0.30)' : '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {f}
          </span>
        ))}
      </div>

      {/* Course grid */}
      <div className="grid grid-cols-3 gap-4 max-h-[480px] overflow-hidden">
        {courses.map(c => <CourseCard key={c.code} c={c} />)}
      </div>
    </AppShell>
  );
}

function CourseCard({ c }: { c: Course }) {
  const elig = {
    eligible: { color: '#4ADE80', label: 'Eligible',           icon: CheckCircle2 },
    prereq:   { color: '#FF6B7A', label: 'Missing prerequisite', icon: XCircle },
    limit:    { color: '#F5B752', label: 'Credit limit',         icon: AlertTriangle },
  }[c.eligibility];
  const fillPct = (c.fill / c.cap) * 100;
  const Icon = elig.icon;

  return (
    <Card className="p-5 flex flex-col gap-3 transition-all duration-200 hover:translate-y-[-2px]" style={{ borderTop: `2px solid ${elig.color}40` }}>
      <div className="flex items-start justify-between">
        <div>
          <div className="font-mono tabular text-[11px] text-ink-tertiary uppercase tracking-[0.14em]">{c.code} · {c.dept}</div>
          <h3 className="font-display font-semibold text-[16px] text-ink-primary mt-1.5 leading-tight" style={{ fontFamily: 'Satoshi, Inter' }}>
            {c.name}
          </h3>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-medium" style={{ color: elig.color }}>
          <Icon size={13} strokeWidth={2} />
        </div>
      </div>

      <div className="flex items-center gap-3 text-[11px] text-ink-tertiary">
        <span className="flex items-center gap-1.5"><BookOpen size={11} /> {c.credits} cr</span>
        <span>·</span>
        <span>{c.instructor}</span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {c.types.map(t => (
          <span
            key={t}
            className="text-[10px] uppercase tracking-[0.1em] px-2 py-0.5 rounded font-semibold"
            style={{ color: '#7C8BFF', background: 'rgba(124,139,255,0.10)', border: '1px solid rgba(124,139,255,0.25)' }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Capacity bar */}
      <div>
        <div className="flex items-center justify-between text-[11px] mb-1.5">
          <span className="text-ink-tertiary"><Users size={10} className="inline mr-1" /> {c.fill} / {c.cap} enrolled</span>
          <span className="font-mono tabular text-ink-tertiary">{Math.round(fillPct)}%</span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
          <div
            className="h-full rounded-full"
            style={{
              width: `${fillPct}%`,
              background: fillPct > 85 ? 'linear-gradient(90deg, #FFB86B, #FF6B7A)' : 'linear-gradient(90deg, #4CC4FF, #7C8BFF)',
            }}
          />
        </div>
      </div>

      <div className="mt-1 flex items-center justify-between" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 12 }}>
        <Pill tone={c.eligibility === 'eligible' ? 'success' : c.eligibility === 'prereq' ? 'danger' : 'warning'} size="sm">
          {elig.label}
        </Pill>
        <span className="text-[11.5px] text-accent-primary font-medium flex items-center gap-1">
          View details <Clock size={11} className="rotate-90" />
        </span>
      </div>
    </Card>
  );
}
