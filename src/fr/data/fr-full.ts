// Full Functional Requirements — every "shall" statement from
// functional-requirements.md, organised module by module.

export type Priority = 'P0' | 'P1' | 'P2';

export interface FrItem {
  id: string;
  text: string;
  priority: Priority;
  source: string;
}

export interface FrModuleFull {
  code: string;
  name: string;
  description: string;
  items: FrItem[];
}

export const frFull: FrModuleFull[] = [
  {
    code: 'AUTH',
    name: 'Authentication & Authorization',
    description: 'Email/password sign-in with Sanctum tokens, RBAC, OTP-verified onboarding and password reset, lockout protection.',
    items: [
      { id: 'FR-AUTH-01', text: 'The system shall authenticate users with their university email and password.', priority: 'P0', source: 'S02' },
      { id: 'FR-AUTH-02', text: 'The system shall issue a Sanctum API token on successful login and require it on every subsequent request.', priority: 'P0', source: 'S02' },
      { id: 'FR-AUTH-03', text: 'The system shall support four roles: Student, Advisor, Admin (and additional roles in future without code change).', priority: 'P0', source: 'S01, S02' },
      { id: 'FR-AUTH-04', text: 'The system shall enforce role-based access control on every API endpoint.', priority: 'P0', source: 'All admin/advisor scenarios' },
      { id: 'FR-AUTH-05', text: 'The system shall require email verification on first login through a 6-digit numeric OTP.', priority: 'P0', source: 'S01' },
      { id: 'FR-AUTH-06', text: 'The system shall invalidate any OTP after 5 minutes from issuance.', priority: 'P0', source: 'S01' },
      { id: 'FR-AUTH-07', text: 'The system shall mark an OTP as single-use and reject reuse.', priority: 'P0', source: 'S01' },
      { id: 'FR-AUTH-08', text: 'The system shall allow the user to request a new OTP, invalidating the previous one.', priority: 'P0', source: 'S01' },
      { id: 'FR-AUTH-09', text: 'The system shall limit OTP resends to 3 per hour per user.', priority: 'P1', source: 'S01' },
      { id: 'FR-AUTH-10', text: 'The system shall lock an account for 15 minutes after 5 wrong OTP entries within 10 minutes.', priority: 'P1', source: 'S01' },
      { id: 'FR-AUTH-11', text: 'The system shall force a password change on first login after OTP verification.', priority: 'P0', source: 'S01' },
      { id: 'FR-AUTH-12', text: 'The system shall allow a user to request a password reset by entering their email.', priority: 'P0', source: 'S03' },
      { id: 'FR-AUTH-13', text: 'The system shall complete the password reset using the same OTP flow.', priority: 'P0', source: 'S03' },
      { id: 'FR-AUTH-14', text: 'The system shall lock an account for 15 minutes after 5 failed login attempts.', priority: 'P1', source: 'S02' },
      { id: 'FR-AUTH-15', text: 'The system shall prevent login for deactivated accounts and display a clear message.', priority: 'P0', source: 'S02' },
      { id: 'FR-AUTH-16', text: 'The system shall store passwords using bcrypt (or stronger).', priority: 'P0', source: 'Tech stack' },
      { id: 'FR-AUTH-17', text: 'The system shall log every login, OTP verification, and password reset in the audit log.', priority: 'P1', source: 'S01–S03' },
    ],
  },
  {
    code: 'USR',
    name: 'User Management',
    description: 'Admin creates/edits/deactivates users; each Student is bound to one Advisor; per-user channel preference.',
    items: [
      { id: 'FR-USR-01', text: 'The system shall allow Admins to create, edit, and deactivate user accounts.', priority: 'P0', source: 'S18' },
      { id: 'FR-USR-02', text: 'The system shall require name, email, and role when creating a user.', priority: 'P0', source: 'S18' },
      { id: 'FR-USR-03', text: 'The system shall require a unique student_number, major, and assigned advisor when creating a Student.', priority: 'P0', source: 'S18' },
      { id: 'FR-USR-04', text: 'The system shall require a department when creating an Advisor.', priority: 'P0', source: 'Data model' },
      { id: 'FR-USR-05', text: 'The system shall assign each Student to exactly one Advisor at account creation.', priority: 'P0', source: 'Spec' },
      { id: 'FR-USR-06', text: 'The system shall allow the Admin to change a Student’s assigned Advisor at any time.', priority: 'P1', source: 'Spec' },
      { id: 'FR-USR-07', text: 'The system shall generate a temporary password and email login details when a Student is created.', priority: 'P0', source: 'S18' },
      { id: 'FR-USR-08', text: 'The system shall prevent deletion of accounts with historical activity; only deactivation is allowed.', priority: 'P0', source: 'Spec' },
      { id: 'FR-USR-09', text: 'The system shall allow each user to set a notification channel preference: in-app only, email only, or both.', priority: 'P1', source: 'S09' },
    ],
  },
  {
    code: 'CAT',
    name: 'Course Catalog Management',
    description: 'Admins create courses with prerequisites and required types, attach sections with weekly meetings, and publish per-term catalog versions.',
    items: [
      { id: 'FR-CAT-01', text: 'The system shall allow Admins to create, edit, and delete courses.', priority: 'P0', source: 'S15' },
      { id: 'FR-CAT-02', text: 'The system shall require code, name, credits, and department for every course.', priority: 'P0', source: 'S15' },
      { id: 'FR-CAT-03', text: 'The system shall allow each course to declare zero or more prerequisites.', priority: 'P0', source: 'S15' },
      { id: 'FR-CAT-04', text: 'The system shall prevent prerequisite cycles (a course cannot indirectly require itself).', priority: 'P0', source: 'Spec' },
      { id: 'FR-CAT-05', text: 'The system shall allow each course to declare required types: Lecture, Lab, Tutorial.', priority: 'P0', source: 'S15' },
      { id: 'FR-CAT-06', text: 'The system shall allow Admins to create one or more sections per course.', priority: 'P0', source: 'S15' },
      { id: 'FR-CAT-07', text: 'The system shall require type, group, display_name, instructor name, and capacity for every section.', priority: 'P0', source: 'S15' },
      { id: 'FR-CAT-08', text: 'The system shall allow each section to have one or more weekly meetings (day, start, end, room).', priority: 'P0', source: 'S15' },
      { id: 'FR-CAT-09', text: 'The system shall allow each section to have its own capacity, independent of other sections of the same course.', priority: 'P0', source: 'Spec' },
      { id: 'FR-CAT-10', text: 'The system shall prevent two sections from being assigned the same room at overlapping times.', priority: 'P0', source: 'Spec' },
      { id: 'FR-CAT-11', text: 'The system shall allow Admins to publish a catalog version for a specific term.', priority: 'P0', source: 'S16, S17' },
      { id: 'FR-CAT-12', text: 'The system shall make published sections visible to Students only when the term’s window is Open or Closed (read-only).', priority: 'P0', source: 'S04, S19' },
    ],
  },
  {
    code: 'TRM',
    name: 'Term & Registration Window',
    description: 'Term lifecycle (Draft → Open → Closed → Archived) with manual or scheduled transitions and auto-rejection of pending requests on close.',
    items: [
      { id: 'FR-TRM-01', text: 'The system shall allow Admins to create a Term with a name, start_date, and end_date.', priority: 'P0', source: 'S17' },
      { id: 'FR-TRM-02', text: 'The system shall support four term states: Draft, Open, Closed, Archived.', priority: 'P0', source: 'S17, S20' },
      { id: 'FR-TRM-03', text: 'The system shall allow Admins to manually transition a term from Draft → Open.', priority: 'P0', source: 'S17' },
      { id: 'FR-TRM-04', text: 'The system shall allow Admins to manually transition a term from Open → Closed.', priority: 'P0', source: 'S20' },
      { id: 'FR-TRM-05', text: 'The system shall allow Admins to manually transition a term from Closed → Archived.', priority: 'P0', source: 'S20' },
      { id: 'FR-TRM-06', text: 'The system shall support scheduling automatic Open/Close transitions at preset timestamps.', priority: 'P1', source: 'S17' },
      { id: 'FR-TRM-07', text: 'The system shall auto-reject all Pending requests when a window is Closed and notify the affected students.', priority: 'P0', source: 'S20' },
      { id: 'FR-TRM-08', text: 'The system shall make Archived terms read-only for all roles.', priority: 'P0', source: 'S20' },
      { id: 'FR-TRM-09', text: 'The system shall broadcast a notification to all students when the registration window opens.', priority: 'P1', source: 'S17' },
    ],
  },
  {
    code: 'ELG',
    name: 'Eligibility Engine',
    description: 'Real-time evaluation of (student, course) pairs — prerequisites, credit limits, already-passed checks, atomic linked-section handling.',
    items: [
      { id: 'FR-ELG-01', text: 'The system shall evaluate eligibility for each (student, course) pair before allowing add-to-request.', priority: 'P0', source: 'S04, S05' },
      { id: 'FR-ELG-02', text: 'The system shall verify that all prerequisites of the course are passed by the student.', priority: 'P0', source: 'S05' },
      { id: 'FR-ELG-03', text: 'The system shall verify that the student’s accumulated credits + request credits do not exceed the upper credit limit.', priority: 'P0', source: 'S05' },
      { id: 'FR-ELG-04', text: 'The system shall prevent registration for a course the student has already passed.', priority: 'P0', source: 'S05' },
      { id: 'FR-ELG-05', text: 'The system shall require the student to pick a section (group) for every required type of the course.', priority: 'P0', source: 'S05' },
      { id: 'FR-ELG-06', text: 'The system shall atomically add or fail the linked sections of a course (Lecture + Lab + Tutorial) when the student adds the course to the request.', priority: 'P0', source: 'S05' },
      { id: 'FR-ELG-07', text: 'The system shall show, for each course on the catalog page, an eligibility badge: Eligible, Missing Prerequisite, or Credit Limit Exceeded.', priority: 'P0', source: 'S04' },
      { id: 'FR-ELG-08', text: 'The system shall revalidate eligibility at the moment the request is submitted, not only at add-to-request.', priority: 'P0', source: 'S05' },
    ],
  },
  {
    code: 'CNF',
    name: 'Schedule Conflict Detection',
    description: 'Time-overlap detection between section meetings — applied at add-to-request and during timetable reschedule simulation.',
    items: [
      { id: 'FR-CNF-01', text: 'The system shall detect time overlaps between two section_meetings on the same day.', priority: 'P0', source: 'S05' },
      { id: 'FR-CNF-02', text: 'The system shall block adding a section that conflicts with another section already in the request.', priority: 'P0', source: 'S05' },
      { id: 'FR-CNF-03', text: 'The system shall display a clear message identifying both conflicting sections and their times.', priority: 'P0', source: 'S05' },
      { id: 'FR-CNF-04', text: 'The system shall detect conflicts for sections that have multiple weekly meetings (any meeting overlap counts).', priority: 'P0', source: 'Data model' },
      { id: 'FR-CNF-05', text: 'The system shall apply conflict detection during the timetable reschedule simulation.', priority: 'P0', source: 'S16' },
    ],
  },
  {
    code: 'REQ',
    name: 'Registration Request Workflow',
    description: 'Persisted request, single-pending-per-term rule, edit-replaces-old, and the five-status workflow (Pending / Approved / Rejected / Returned / Cancelled).',
    items: [
      { id: 'FR-REQ-01', text: 'The system shall allow a Student to build a request of multiple courses before submission.', priority: 'P0', source: 'S05' },
      { id: 'FR-REQ-02', text: 'The system shall persist the request between sessions until submitted or cleared.', priority: 'P1', source: 'S05' },
      { id: 'FR-REQ-03', text: 'The system shall create one registration_requests row with status Pending on submission.', priority: 'P0', source: 'S05' },
      { id: 'FR-REQ-04', text: 'The system shall copy each request item into request_items with the action (add/drop) and a parent_item_id linking grouped items.', priority: 'P0', source: 'S05' },
      { id: 'FR-REQ-05', text: 'The system shall prevent a Student from having more than one Pending request for the same term simultaneously.', priority: 'P0', source: 'Spec' },
      { id: 'FR-REQ-06', text: 'The system shall allow a Student to edit a Pending request, which auto-cancels the old one and produces a new Pending request.', priority: 'P0', source: 'S08' },
      { id: 'FR-REQ-07', text: 'The system shall notify the assigned Advisor when a request is submitted.', priority: 'P0', source: 'S05' },
      { id: 'FR-REQ-08', text: 'The system shall support five request statuses: Pending, Approved, Rejected, Returned, Cancelled.', priority: 'P0', source: 'S10–S12' },
      { id: 'FR-REQ-09', text: 'The system shall allow the Advisor to add per-item comments.', priority: 'P1', source: 'S10' },
    ],
  },
  {
    code: 'WSW',
    name: 'Withdrawal & Swap',
    description: 'Withdrawal routes through advisor approval; swaps run as atomic drop+add transactions with auto-rejection if the target fills first.',
    items: [
      { id: 'FR-WSW-01', text: 'The system shall allow a Student to submit a Withdrawal request for any active enrollment.', priority: 'P0', source: 'S06' },
      { id: 'FR-WSW-02', text: 'The system shall route the Withdrawal request through the same advisor approval workflow as registration requests.', priority: 'P0', source: 'S06' },
      { id: 'FR-WSW-03', text: 'The system shall warn the Student when the withdrawal would drop them below the lower credit limit.', priority: 'P1', source: 'S06' },
      { id: 'FR-WSW-04', text: 'The system shall allow a Student to submit a Swap (drop A + add B) as a single atomic request.', priority: 'P0', source: 'S07' },
      { id: 'FR-WSW-05', text: 'The system shall execute the Swap inside a database transaction; either both actions commit or both roll back.', priority: 'P0', source: 'S07' },
      { id: 'FR-WSW-06', text: 'The system shall auto-reject the add side of a Swap if the target section becomes full before approval, and cancel the drop.', priority: 'P0', source: 'S07' },
    ],
  },
  {
    code: 'ADV',
    name: 'Advisor Operations',
    description: 'Queue with full student context, per-item status badges, and individual + bulk approval flows.',
    items: [
      { id: 'FR-ADV-01', text: 'The system shall present each Advisor with a queue of Pending requests for their assigned students, sorted oldest first.', priority: 'P0', source: 'S10' },
      { id: 'FR-ADV-02', text: 'The system shall allow filtering the queue by student, term, and status.', priority: 'P1', source: 'S10' },
      { id: 'FR-ADV-03', text: 'The system shall show, on the Request Review screen, the student’s name, student_number, GPA, accumulated credits, and current schedule.', priority: 'P0', source: 'S10' },
      { id: 'FR-ADV-04', text: 'The system shall display a status badge per request item (OK, Prerequisite missing, Credit limit, Section full).', priority: 'P0', source: 'S10' },
      { id: 'FR-ADV-05', text: 'The system shall allow the Advisor to Approve a request, creating/updating enrollments inside a DB transaction.', priority: 'P0', source: 'S10' },
      { id: 'FR-ADV-06', text: 'The system shall allow the Advisor to Reject a request with a mandatory reason.', priority: 'P0', source: 'S11' },
      { id: 'FR-ADV-07', text: 'The system shall allow the Advisor to Return a request for edit with a mandatory comment.', priority: 'P0', source: 'S12' },
      { id: 'FR-ADV-08', text: 'The system shall allow the Advisor to bulk-approve multiple clean requests at once.', priority: 'P1', source: 'S14' },
      { id: 'FR-ADV-09', text: 'The system shall treat each bulk-approve operation per request as its own transaction, isolating failures.', priority: 'P0', source: 'S14' },
      { id: 'FR-ADV-10', text: 'The system shall notify the Student of the outcome on every Approve / Reject / Return action.', priority: 'P0', source: 'S10–S12' },
    ],
  },
  {
    code: 'OVR',
    name: 'Override Mechanism',
    description: 'Advisors override system checks per-item with a mandatory written reason; every override is auditable and surfaces on the admin report.',
    items: [
      { id: 'FR-OVR-01', text: 'The system shall allow any Advisor to override a system check (missing prerequisite or credit limit) on a per-item basis.', priority: 'P0', source: 'S13' },
      { id: 'FR-OVR-02', text: 'The system shall require a written reason on every override; an empty reason shall be rejected.', priority: 'P0', source: 'S13' },
      { id: 'FR-OVR-03', text: 'The system shall persist the override flag and reason on the corresponding request_items row.', priority: 'P0', source: 'S13' },
      { id: 'FR-OVR-04', text: 'The system shall log every override as a distinct OVERRIDE_APPROVE event in the audit log.', priority: 'P0', source: 'S13' },
      { id: 'FR-OVR-05', text: 'The system shall include all overrides for the current term in the Admin Overrides Report.', priority: 'P0', source: 'S19' },
      { id: 'FR-OVR-06', text: 'The system shall restrict access to the Overrides Report to Admins only.', priority: 'P0', source: 'S19' },
    ],
  },
  {
    code: 'ENR',
    name: 'Enrollment Management',
    description: 'Enrollment lifecycle (Active / Withdrawn / Frozen / Completed), capacity tracking, and freeze-on-conflict for section reschedules.',
    items: [
      { id: 'FR-ENR-01', text: 'The system shall create an enrollments row when a registration item is approved.', priority: 'P0', source: 'S10' },
      { id: 'FR-ENR-02', text: 'The system shall support enrollment statuses: Active, Withdrawn, Frozen, Completed.', priority: 'P0', source: 'S16' },
      { id: 'FR-ENR-03', text: 'The system shall decrement the section’s available capacity on approval and increment on withdrawal.', priority: 'P0', source: 'S06, S10' },
      { id: 'FR-ENR-04', text: 'The system shall prevent enrollment counts from exceeding the section’s capacity at any point.', priority: 'P0', source: 'Spec' },
      { id: 'FR-ENR-05', text: 'The system shall transition an enrollment to status Frozen when a section reschedule causes a conflict for that student.', priority: 'P0', source: 'S16' },
      { id: 'FR-ENR-06', text: 'The system shall treat Frozen enrollments as un-attendable until an Advisor resolves them.', priority: 'P0', source: 'S16' },
      { id: 'FR-ENR-07', text: 'The system shall allow an Advisor to resolve a Frozen enrollment by approving a swap, approving a withdrawal, or unfreezing it via override.', priority: 'P0', source: 'S16' },
    ],
  },
  {
    code: 'TBL',
    name: 'Timetable & Section Reschedule',
    description: 'Five day-tables (Sun–Thu) with rooms-as-rows; drag-drop simulation runs a per-student conflict scan before commit.',
    items: [
      { id: 'FR-TBL-01',  text: 'The system shall render the term timetable as five separate tables — one per working day (Sun, Mon, Tue, Wed, Thu) — each clearly labeled and visually grouped on the same page.', priority: 'P0', source: 'S16' },
      { id: 'FR-TBL-02',  text: 'Within each day’s table, the system shall lay out rooms as rows and time blocks as columns; every cell represents a (day, room, time-block) slot.', priority: 'P0', source: 'S16' },
      { id: 'FR-TBL-03',  text: 'The system shall render every section_meetings row of the current term as a draggable card placed inside its corresponding (day-table, room-row, time-column) cell, spanning the columns that match its duration.', priority: 'P0', source: 'S16' },
      { id: 'FR-TBL-04',  text: 'The system shall allow the Admin to drag a section card to (a) a different cell within the same day’s table to change room and/or time, or (b) a cell in a different day’s table to change the day; both subject to the conflict scan.', priority: 'P0', source: 'S16' },
      { id: 'FR-TBL-04a', text: 'The system shall visually distinguish empty cells (room available at that time) from cells already occupied by another section in the same day’s table.', priority: 'P1', source: 'S16' },
      { id: 'FR-TBL-05',  text: 'The system shall simulate the change and run a conflict scan against every enrolled student before applying it.', priority: 'P0', source: 'S16' },
      { id: 'FR-TBL-06',  text: 'The system shall display a Conflict Dialog showing the count and list of affected students, with their advisor and the conflicting course.', priority: 'P0', source: 'S16' },
      { id: 'FR-TBL-07',  text: 'The system shall offer two actions on the Conflict Dialog: Approve Change and Cancel.', priority: 'P0', source: 'S16' },
      { id: 'FR-TBL-08',  text: 'The system shall apply the change inside a DB transaction only after the Admin clicks Approve Change.', priority: 'P0', source: 'S16' },
      { id: 'FR-TBL-09',  text: 'The system shall log a SECTION_RESCHEDULE event with the before/after meeting data on every approved change.', priority: 'P0', source: 'S16' },
      { id: 'FR-TBL-10',  text: 'The system shall freeze every conflicted student’s enrollment automatically on an approved change.', priority: 'P0', source: 'S16' },
      { id: 'FR-TBL-11',  text: 'The system shall notify every enrolled student of the section change (informational), with an Action Required flag for conflicted students.', priority: 'P0', source: 'S16' },
      { id: 'FR-TBL-12',  text: 'The system shall notify every conflicted student’s assigned Advisor with an action-required notification.', priority: 'P0', source: 'S16' },
      { id: 'FR-TBL-13',  text: 'The system shall re-validate every Pending registration request that contains the moved section and notify the relevant Advisor if a new conflict appears.', priority: 'P0', source: 'S16' },
      { id: 'FR-TBL-14',  text: 'The system shall block drop targets that would violate room or instructor double-booking.', priority: 'P0', source: 'S16' },
      { id: 'FR-TBL-15',  text: 'The system shall require a Stronger Confirmation (admin types the section code) before applying a reschedule on a Closed or Archived term.', priority: 'P1', source: 'S16' },
      { id: 'FR-TBL-16',  text: 'The system shall tag late-term reschedules with a LATE_RESCHEDULE audit event.', priority: 'P1', source: 'S16' },
    ],
  },
  {
    code: 'NOT',
    name: 'Notifications',
    description: 'Two channels (in-app + email), Redis-queued delivery, persistent notifications table, action-required flagging.',
    items: [
      { id: 'FR-NOT-01', text: 'The system shall support two delivery channels: in-app and email.', priority: 'P0', source: 'S09' },
      { id: 'FR-NOT-02', text: 'The system shall dispatch emails through Laravel Mail (SMTP) on a Redis queue.', priority: 'P0', source: 'Tech stack' },
      { id: 'FR-NOT-03', text: 'The system shall persist every notification in the notifications table with a read_at field.', priority: 'P0', source: 'S09' },
      { id: 'FR-NOT-04', text: 'The system shall display a notification bell with the latest 10 notifications and an unread highlight.', priority: 'P0', source: 'S09' },
      { id: 'FR-NOT-05', text: 'The system shall mark a notification read when the user clicks it.', priority: 'P0', source: 'S09' },
      { id: 'FR-NOT-06', text: 'The system shall trigger notifications on: Request Approved/Rejected/Returned, Window Open/Close, Override Granted, Section Reschedule, Enrollment Frozen, Escalation.', priority: 'P0', source: 'S09–S21' },
      { id: 'FR-NOT-07', text: 'The system shall respect the user’s channel preference (in-app / email / both).', priority: 'P1', source: 'FR-USR-09' },
      { id: 'FR-NOT-08', text: 'The system shall flag notifications that require user action with an "Action Required" badge.', priority: 'P1', source: 'S16' },
    ],
  },
  {
    code: 'AUD',
    name: 'Audit Log',
    description: 'Append-only log of every significant action with before/after data and distinct action types.',
    items: [
      { id: 'FR-AUD-01', text: 'The system shall persist an audit_log row for every significant action (login, request submit/approve/reject/return, override, section create/edit/reschedule, enrollment freeze, escalation).', priority: 'P0', source: 'All scenarios' },
      { id: 'FR-AUD-02', text: 'The system shall store user_id, action, target_type, target_id, before, after, and timestamp in every audit row.', priority: 'P0', source: 'Data model' },
      { id: 'FR-AUD-03', text: 'The system shall make the audit log append-only; no edits or deletes are allowed through any UI or API.', priority: 'P0', source: 'Spec' },
      { id: 'FR-AUD-04', text: 'The system shall define distinct action types including but not limited to: LOGIN, REQUEST_APPROVE, REQUEST_REJECT, OVERRIDE_APPROVE, SECTION_CREATE, SECTION_RESCHEDULE, LATE_RESCHEDULE, ENROLLMENT_FREEZE.', priority: 'P0', source: 'All scenarios' },
    ],
  },
  {
    code: 'RPT',
    name: 'Admin Dashboard & Reports',
    description: 'Real-time stats, Overrides Report, Escalated Requests view, async CSV/PDF export, close-window summary.',
    items: [
      { id: 'FR-RPT-01', text: 'The system shall display a real-time count of Pending requests on the Admin Dashboard.', priority: 'P0', source: 'S19' },
      { id: 'FR-RPT-02', text: 'The system shall display real-time stats: full sections count, advisor workload, overrides count.', priority: 'P1', source: 'S19' },
      { id: 'FR-RPT-03', text: 'The system shall provide an Overrides Report listing every override of the current term with student, advisor, course, type, reason, and timestamp.', priority: 'P0', source: 'S19' },
      { id: 'FR-RPT-04', text: 'The system shall allow filtering the Overrides Report by advisor, course, and date range.', priority: 'P1', source: 'S19' },
      { id: 'FR-RPT-05', text: 'The system shall allow exporting reports to CSV and PDF asynchronously, emailing the admin a download link.', priority: 'P1', source: 'S19' },
      { id: 'FR-RPT-06', text: 'The system shall provide an Escalated Requests view listing requests that have been Pending for longer than the configured threshold.', priority: 'P0', source: 'S21' },
      { id: 'FR-RPT-07', text: 'The system shall allow the Admin to reassign an escalated request to a different Advisor.', priority: 'P0', source: 'S21' },
      { id: 'FR-RPT-08', text: 'The system shall auto-flag a Pending request as Escalated when older than the configured threshold (default 48 hours) via a daily scheduled job.', priority: 'P0', source: 'S21' },
      { id: 'FR-RPT-09', text: 'The system shall display a Close Window summary showing approved enrollments, pending requests, and overrides before the Admin confirms closing.', priority: 'P0', source: 'S20' },
    ],
  },
  {
    code: 'SRH',
    name: 'Search & Filter',
    description: 'Catalog search by code/name + multi-criteria filtering combined with logical AND.',
    items: [
      { id: 'FR-SRH-01', text: 'The system shall allow students to search the courses by course code or name.', priority: 'P0', source: 'S04' },
      { id: 'FR-SRH-02', text: 'The system shall allow filtering the courses by department, credits, day, time, and section type.', priority: 'P1', source: 'S04' },
      { id: 'FR-SRH-03', text: 'The system shall combine multiple filters using logical AND.', priority: 'P1', source: 'S04' },
    ],
  },
  {
    code: 'X',
    name: 'Cross-Cutting Requirements',
    description: 'Concerns that apply across every module — transactions, pagination, validation, rate-limiting, caching, localization.',
    items: [
      { id: 'FR-X-01', text: 'Every database mutation that spans multiple rows shall run inside a transaction.', priority: 'P0', source: '—' },
      { id: 'FR-X-02', text: 'Every list view shall support pagination with a default page size of 20.', priority: 'P1', source: '—' },
      { id: 'FR-X-03', text: 'The system shall be available in Arabic and English (UI strings localized).', priority: 'P2', source: '—' },
      { id: 'FR-X-04', text: 'The system shall apply server-side validation on every input received from the client.', priority: 'P0', source: '—' },
      { id: 'FR-X-05', text: 'The system shall rate-limit anonymous endpoints (login, OTP request) to 10 requests / minute / IP.', priority: 'P1', source: '—' },
      { id: 'FR-X-06', text: 'The system shall invalidate cached catalog data when a Course or Section is created, edited, or rescheduled.', priority: 'P0', source: '—' },
    ],
  },
];

/**
 * Splits a module into pages of at most `perPage` items each. Returns
 * a flat list of page descriptors with a stable key per page.
 */
export interface FrPage {
  module: FrModuleFull;
  page: number;
  pages: number;
  items: FrItem[];
}

export function paginateModule(mod: FrModuleFull, perPage = 9): FrPage[] {
  if (mod.items.length <= perPage) {
    return [{ module: mod, page: 1, pages: 1, items: mod.items }];
  }
  const pages = Math.ceil(mod.items.length / perPage);
  return Array.from({ length: pages }, (_, i) => ({
    module: mod,
    page: i + 1,
    pages,
    items: mod.items.slice(i * perPage, (i + 1) * perPage),
  }));
}

export const allFrPages: FrPage[] = frFull.flatMap(m => paginateModule(m, 9));
