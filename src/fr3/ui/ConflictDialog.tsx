import { AlertTriangle, Snowflake, ArrowRight, X } from 'lucide-react';
import { Card, Pill, Button } from './_kit';
import { Timetable as TimetableScreen } from './Timetable';

const conflicts = [
  { name: 'Sara Khaled',     sn: 'S-7142', advisor: 'Dr. Hassan',  course: 'CS-201 Programming 2 · Mon 10:00–12:00' },
  { name: 'Omar Al-Ferjan',   sn: 'S-6911', advisor: 'Dr. Salma',    course: 'CS-303 Software Eng. · Mon 11:00–13:00' },
  { name: 'Hadeel Mansour',   sn: 'S-7320', advisor: 'Dr. Ramy',     course: 'CS-201 Programming 2 · Mon 10:00–12:00' },
  { name: 'Yusuf Bani',       sn: 'S-7045', advisor: 'Dr. Hassan',  course: 'CS-220 Database · Mon 10:30–12:00' },
  { name: 'Lina Suleiman',    sn: 'S-7388', advisor: 'Dr. Salma',    course: 'CS-203 Web Dev · Mon 11:00–13:00' },
  { name: 'Ahmed Tawfik',     sn: 'S-6809', advisor: 'Dr. Hassan',  course: 'CS-201 Programming 2 · Mon 10:00–12:00' },
];

export function ConflictDialog() {
  return (
    <div className="relative w-full h-full">
      {/* Underlying timetable */}
      <div className="absolute inset-0">
        <TimetableScreen />
      </div>
      {/* Dim + blur backdrop */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: 'rgba(6,11,26,0.65)', backdropFilter: 'blur(6px)' }}
      />
      {/* Dialog */}
      <div className="absolute inset-0 z-20 flex items-center justify-center p-12">
        <Card className="w-[680px] max-h-[700px] flex flex-col" style={{ background: 'rgba(11,18,38,0.96)' }}>
          {/* Header */}
          <div className="px-6 pt-6 pb-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex items-start gap-4">
              <div
                className="h-11 w-11 rounded-md flex items-center justify-center shrink-0"
                style={{ background: 'rgba(255,107,122,0.10)', border: '1px solid rgba(255,107,122,0.40)' }}
              >
                <AlertTriangle size={20} strokeWidth={1.75} className="text-semantic-danger" />
              </div>
              <div className="flex-1">
                <div className="text-[10.5px] uppercase tracking-[0.22em] font-semibold mb-1" style={{ color: '#FF6B7A' }}>
                  Conflict scan complete
                </div>
                <h2 className="font-display font-bold text-[22px] text-ink-primary leading-tight" style={{ fontFamily: 'Satoshi, Inter' }}>
                  This change will conflict for <span style={{ color: '#FF6B7A' }}>6 students</span>
                </h2>
              </div>
              <button
                className="h-8 w-8 rounded-md flex items-center justify-center shrink-0"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <X size={14} className="text-ink-tertiary" />
              </button>
            </div>

            {/* Change summary */}
            <div className="mt-5 flex items-center gap-3 px-4 py-3 rounded-md" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="font-mono tabular text-[12px] text-ink-secondary">CS-220 · Database · Group B</div>
              <div className="ml-auto flex items-center gap-3">
                <span className="font-mono tabular text-[11.5px]" style={{ color: '#A7B3CC' }}>Tue 14:00 · Room A-208</span>
                <ArrowRight size={13} className="text-ink-tertiary" />
                <span className="font-mono tabular text-[11.5px] font-semibold" style={{ color: '#4CC4FF' }}>Mon 11:00 · Room B-110</span>
              </div>
            </div>
          </div>

          {/* Affected students table */}
          <div className="flex-1 overflow-hidden flex flex-col">
            <div
              className="grid items-center gap-4 px-6 py-2.5 text-[10px] uppercase tracking-[0.18em] font-semibold text-ink-tertiary"
              style={{ gridTemplateColumns: '1.4fr 80px 1fr 1.6fr', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
            >
              <div>Student</div>
              <div>ID</div>
              <div>Advisor</div>
              <div>Conflicts with</div>
            </div>
            <div className="flex-1 overflow-y-auto scrollpanel">
              {conflicts.map(c => (
                <div
                  key={c.sn}
                  className="grid items-center gap-4 px-6 py-2.5 text-[12.5px]"
                  style={{ gridTemplateColumns: '1.4fr 80px 1fr 1.6fr', borderBottom: '1px solid rgba(255,255,255,0.03)' }}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className="h-7 w-7 rounded-full flex items-center justify-center text-[10px] font-semibold text-white shrink-0"
                      style={{ background: 'linear-gradient(135deg, #7C8BFF, #B980FF)' }}
                    >
                      {c.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <span className="text-ink-primary font-medium truncate">{c.name}</span>
                  </div>
                  <span className="font-mono tabular text-[11.5px] text-ink-tertiary">{c.sn}</span>
                  <span className="text-ink-secondary">{c.advisor}</span>
                  <div className="flex items-center gap-2 min-w-0">
                    <Snowflake size={12} className="shrink-0" style={{ color: '#FF6B7A' }} />
                    <span className="text-[11.5px] text-ink-secondary truncate">{c.course}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer info + buttons */}
          <div className="px-6 py-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex items-center gap-2 text-[12px] text-ink-tertiary mb-4">
              <Snowflake size={13} />
              Approving will freeze 6 enrollments and notify their advisors. Logged as <span className="font-mono text-ink-secondary mx-1">SECTION_RESCHEDULE</span>.
            </div>
            <div className="flex items-center justify-end gap-3">
              <Button variant="ghost">Cancel</Button>
              <Pill tone="warning">6 affected</Pill>
              <Button variant="primary">Approve change</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
