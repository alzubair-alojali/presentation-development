// Sprint plan — kept concise per the user's brief: highlight main points, not exhaustive lists.

export interface SprintModule {
  code: string;
  name: string;
  count: number;
  p0: number;
  p1: number;
  highlights: string[];
}

export interface Sprint {
  num: 1 | 2 | 3;
  title: string;
  timeframe: string;
  goal: string;
  total: number;
  p0: number;
  p1: number;
  tone: string;
  gradient: string;
  modules: SprintModule[];
}

export const sprints: Sprint[] = [
  {
    num: 1,
    title: 'Foundation & Infrastructure',
    timeframe: '21 May – 3 Jun 2026',
    goal: 'Establish the bedrock — identity, access control, course catalog, and term lifecycle. Nothing downstream can exist without these in place.',
    total: 54,
    p0: 43,
    p1: 11,
    tone: '#4CC4FF',
    gradient: 'linear-gradient(135deg, #4CC4FF 0%, #7C8BFF 100%)',
    modules: [
      {
        code: 'AUTH',
        name: 'Authentication & Authorization',
        count: 17,
        p0: 13,
        p1: 4,
        highlights: ['Sanctum tokens · 4 roles · RBAC on every endpoint', '6-digit OTP first-login + password reset', 'bcrypt · account lockout · audit logged'],
      },
      {
        code: 'USR',
        name: 'User Management',
        count: 9,
        p0: 7,
        p1: 2,
        highlights: ['Admin creates · edits · deactivates accounts', 'Every Student bound to exactly one Advisor', 'Deactivation only — never deletion'],
      },
      {
        code: 'CAT',
        name: 'Course Catalog',
        count: 12,
        p0: 12,
        p1: 0,
        highlights: ['Prerequisites with cycle detection', 'Sections × weekly meetings × room booking', 'Per-term catalog versioning'],
      },
      {
        code: 'TRM',
        name: 'Term & Registration Window',
        count: 9,
        p0: 7,
        p1: 2,
        highlights: ['Four states: Draft → Open → Closed → Archived', 'Manual + scheduled transitions', 'Archived = read-only, forever'],
      },
      {
        code: 'AUD',
        name: 'Audit Log',
        count: 4,
        p0: 4,
        p1: 0,
        highlights: ['Append-only · no edits, no deletes', 'before / after data on every mutation', '8 distinct action types'],
      },
      {
        code: 'X',
        name: 'Cross-Cutting (P0 slice)',
        count: 3,
        p0: 3,
        p1: 0,
        highlights: ['Multi-row mutations run in transactions', 'Server-side validation on every input', 'Cache invalidation on catalog edits'],
      },
    ],
  },

  {
    num: 2,
    title: 'Registration Engine',
    timeframe: '4 Jun – 17 Jun 2026',
    goal: 'Deliver the full student-to-advisor pipeline — eligibility checks, conflict detection, request submission, withdrawals and swaps, advisor review, enrollment management, and notifications.',
    total: 59,
    p0: 52,
    p1: 7,
    tone: '#B980FF',
    gradient: 'linear-gradient(135deg, #7C8BFF 0%, #B980FF 100%)',
    modules: [
      {
        code: 'ELG',
        name: 'Eligibility Engine',
        count: 8,
        p0: 8,
        p1: 0,
        highlights: ['Prerequisite + credit-limit + already-passed checks', 'Atomic add/fail for linked sections (Lecture+Lab+Tutorial)', 'Re-validated at submission, not just add-to-cart'],
      },
      {
        code: 'CNF',
        name: 'Schedule Conflict Detection',
        count: 5,
        p0: 5,
        p1: 0,
        highlights: ['Time-overlap scan on same-day meetings', 'Any meeting overlap counts as a conflict', 'Applied during timetable reschedule too'],
      },
      {
        code: 'REQ',
        name: 'Registration Request Workflow',
        count: 9,
        p0: 7,
        p1: 2,
        highlights: ['Multi-course cart · persisted across sessions', 'One Pending request per student per term', '5 statuses: Pending · Approved · Rejected · Returned · Cancelled'],
      },
      {
        code: 'WSW',
        name: 'Withdrawal & Swap',
        count: 6,
        p0: 5,
        p1: 1,
        highlights: ['Withdrawal goes through advisor approval', 'Swap = single atomic drop + add transaction', 'Auto-rejects if target section fills first'],
      },
      {
        code: 'ADV',
        name: 'Advisor Operations',
        count: 10,
        p0: 8,
        p1: 2,
        highlights: ['Pending queue with full student context', 'Per-item status badges · individual + bulk approve', 'Mandatory reason on Reject / Return'],
      },
      {
        code: 'OVR',
        name: 'Override Mechanism',
        count: 6,
        p0: 6,
        p1: 0,
        highlights: ['Per-item override of system checks', 'Mandatory written reason — empty reason rejected', 'Distinct OVERRIDE_APPROVE audit event'],
      },
      {
        code: 'ENR',
        name: 'Enrollment Management',
        count: 7,
        p0: 7,
        p1: 0,
        highlights: ['Active · Withdrawn · Frozen · Completed', 'Capacity tracked on every approval / withdrawal', 'Auto-freeze on section reschedule conflict'],
      },
      {
        code: 'NOT',
        name: 'Notifications',
        count: 8,
        p0: 6,
        p1: 2,
        highlights: ['In-app + email via Redis-queued Laravel Mail', 'Persistent log · unread highlight in bell', 'Action Required badge on actionable notices'],
      },
    ],
  },

  {
    num: 3,
    title: 'Admin Tools, Timetable & Polish',
    timeframe: '18 Jun – 1 Jul 2026',
    goal: 'Complete the admin layer with the interactive timetable rescheduler, reporting and escalation tools, search, and all deferred P1 items from prior sprints.',
    total: 44,
    p0: 28,
    p1: 16,
    tone: '#FFB86B',
    gradient: 'linear-gradient(135deg, #FFB86B 0%, #FF6B7A 100%)',
    modules: [
      {
        code: 'TBL',
        name: 'Timetable & Reschedule',
        count: 16,
        p0: 14,
        p1: 2,
        highlights: ['Drag-drop section cards on a day × time grid', 'Conflict scan runs against every enrolled student', 'Approve → DB transaction · freeze conflicted enrollments'],
      },
      {
        code: 'RPT',
        name: 'Admin Dashboard & Reports',
        count: 9,
        p0: 6,
        p1: 3,
        highlights: ['Real-time Pending count · Overrides Report', 'Escalated Requests (48h threshold) · reassign advisor', 'Close-Window summary before confirming close'],
      },
      {
        code: 'SRH',
        name: 'Search & Filter',
        count: 3,
        p0: 1,
        p1: 2,
        highlights: ['Catalog search by course code or name', 'Multi-criteria filters: department · credits · day · time', 'Filters combine with logical AND'],
      },
      {
        code: 'P1',
        name: 'P1 Backlog (deferred from S1 & S2)',
        count: 16,
        p0: 0,
        p1: 16,
        highlights: ['OTP rate limits · account lockouts · audit logging', 'Cart persistence · per-item comments · bulk approve', 'Pagination · rate-limiting · EN/AR localization (P2)'],
      },
    ],
  },
];

export const totals = {
  reqs: sprints.reduce((s, sp) => s + sp.total, 0),
  p0: sprints.reduce((s, sp) => s + sp.p0, 0),
  p1: sprints.reduce((s, sp) => s + sp.p1, 0),
  weeks: 6,
  sprints: sprints.length,
};
