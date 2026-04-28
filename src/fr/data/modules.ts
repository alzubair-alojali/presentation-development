// Functional Requirements — high-level summary per module.
// Kept lean per the user's brief: short, not exhaustive.

export interface FrModule {
  code: string;
  name: string;
  count: number;
  summary: string;
  highlight?: string;
}

export const frModules: FrModule[] = [
  { code: 'AUTH', name: 'Authentication & Authorization', count: 17, summary: 'Email/password sign-in with Sanctum, role-based access, 6-digit OTP onboarding, password reset, account lockout.', highlight: 'OTP-verified first login + RBAC on every endpoint' },
  { code: 'USR',  name: 'User Management',                count: 9,  summary: 'Admin creates/edits/deactivates accounts; each Student is bound to one Advisor; per-user channel preference.',                                  highlight: 'One advisor per student' },
  { code: 'CAT',  name: 'Course Catalog',                 count: 12, summary: 'Courses with prerequisites and required types (Lecture/Lab/Tutorial), sections with weekly meetings, term-scoped catalog versions.', highlight: 'Prerequisite cycles blocked' },
  { code: 'TRM',  name: 'Term & Registration Window',     count: 9,  summary: 'Four states (Draft → Open → Closed → Archived), manual or scheduled transitions, auto-reject pending requests on close.',     highlight: 'Archived = read-only, forever' },
  { code: 'ELG',  name: 'Eligibility Engine',             count: 8,  summary: 'Real-time prerequisite + credit-limit + already-passed checks; atomic linked-section handling; revalidate at submit.', highlight: 'Eligibility shown as a badge per course' },
  { code: 'CNF',  name: 'Schedule Conflict Detection',    count: 5,  summary: 'Time-overlap detection between section_meetings, applied at add-to-request and during reschedule simulation.',                  highlight: 'Any meeting overlap counts' },
  { code: 'REQ',  name: 'Registration Request Workflow', count: 9,  summary: 'Persisted multi-course request, single-pending-per-term rule, edit-replaces-old, five-status lifecycle.',                                                                       highlight: '5 statuses · 1 pending request' },
  { code: 'WSW',  name: 'Withdrawal & Swap',              count: 6,  summary: 'Withdrawal routes through advisor approval; swap = atomic drop+add transaction; auto-reject if target fills first.',          highlight: 'Swap = single atomic transaction' },
  { code: 'ADV',  name: 'Advisor Operations',             count: 10, summary: 'Queue with full student context, per-item status badges, individual & bulk approval flows.',                                  highlight: 'Bulk-approve, isolated transactions' },
  { code: 'OVR',  name: 'Override Mechanism',             count: 6,  summary: 'Per-item overrides with mandatory written reason, distinct audit event, surfaces on the admin report.',                       highlight: 'Empty reason → rejected' },
  { code: 'ENR',  name: 'Enrollment Management',          count: 7,  summary: 'Active / Withdrawn / Frozen / Completed lifecycle, capacity tracking, freeze-on-conflict for reschedules.',                  highlight: 'Frozen = un-attendable' },
  { code: 'TBL',  name: 'Timetable & Reschedule',         count: 16, summary: 'Five day-tables (Sun–Thu), rooms × time blocks, drag-drop with per-student conflict scan before commit.',                    highlight: 'Drag triggers a conflict scan' },
  { code: 'NOT',  name: 'Notifications',                  count: 8,  summary: 'In-app + email channels via Redis-queued Laravel Mail, persistent log, action-required flagging.',                            highlight: 'Action Required badge' },
  { code: 'AUD',  name: 'Audit Log',                      count: 4,  summary: 'Append-only, distinct action types, before/after data on every mutation.',                                                    highlight: 'No edits, no deletes' },
  { code: 'RPT',  name: 'Admin Reports',                  count: 9,  summary: 'Real-time stats, Overrides Report, Escalated Requests view, async CSV/PDF export, close-window summary.',                     highlight: '48h escalation threshold' },
  { code: 'SRH',  name: 'Search & Filter',                count: 3,  summary: 'Catalog search by code/name + multi-criteria filtering combined with logical AND.',                                           highlight: 'Filters AND together' },
  { code: 'X',    name: 'Cross-Cutting',                  count: 6,  summary: 'Transactions, pagination, validation, rate-limiting, cache invalidation, EN/AR localization.',                                  highlight: 'Server-side validation everywhere' },
];

export const totalReqs = frModules.reduce((s, m) => s + m.count, 0);
