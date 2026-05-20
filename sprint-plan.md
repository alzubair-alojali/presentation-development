# Sprint Plan — Course Registration Management System

**LIMU · Software Development Practice 2025/2026**  
**Team:** Alzubair Alojali (4426) · Mohammed Ramadan (5013) · Mohammed Altarhoni (4469)

---

## Overview

| Sprint | Title | Timeframe | Duration |
|--------|-------|-----------|----------|
| Sprint 1 | Foundation & Infrastructure | 21 May – 3 Jun 2026 | 2 weeks |
| Sprint 2 | Registration Engine | 4 Jun – 17 Jun 2026 | 2 weeks |
| Sprint 3 | Admin Tools, Timetable & Polish | 18 Jun – 1 Jul 2026 | 2 weeks |

---

## Sprint 1 — Foundation & Infrastructure
**Timeframe:** 21 May – 3 Jun 2026

**Goal:** Establish the bedrock — identity, access control, course catalog, and term lifecycle. Nothing downstream can exist without these in place.

---

### AUTH — Authentication & Authorization

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-AUTH-01 | Authenticate users with university email and password | P0 |
| FR-AUTH-02 | Issue Sanctum API token on login; require it on every request | P0 |
| FR-AUTH-03 | Support four roles: Student, Advisor, Admin (extensible) | P0 |
| FR-AUTH-04 | Enforce role-based access control on every API endpoint | P0 |
| FR-AUTH-05 | Require email verification on first login via 6-digit OTP | P0 |
| FR-AUTH-06 | Invalidate OTP after 5 minutes from issuance | P0 |
| FR-AUTH-07 | Mark OTP as single-use; reject reuse | P0 |
| FR-AUTH-08 | Allow user to request a new OTP, invalidating the previous | P0 |
| FR-AUTH-11 | Force password change on first login after OTP verification | P0 |
| FR-AUTH-12 | Allow user to request password reset by entering their email | P0 |
| FR-AUTH-13 | Complete password reset using the same OTP flow | P0 |
| FR-AUTH-15 | Prevent login for deactivated accounts; display clear message | P0 |
| FR-AUTH-16 | Store passwords using bcrypt or stronger | P0 |
| FR-AUTH-09 | Limit OTP resends to 3 per hour per user | P1 |
| FR-AUTH-10 | Lock account for 15 minutes after 5 wrong OTP entries within 10 minutes | P1 |
| FR-AUTH-14 | Lock account for 15 minutes after 5 failed login attempts | P1 |
| FR-AUTH-17 | Log every login, OTP verification, and password reset in the audit log | P1 |

---

### USR — User Management

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-USR-01 | Allow Admins to create, edit, and deactivate user accounts | P0 |
| FR-USR-02 | Require name, email, and role when creating a user | P0 |
| FR-USR-03 | Require unique student_number, major, and assigned advisor for Students | P0 |
| FR-USR-04 | Require department when creating an Advisor | P0 |
| FR-USR-05 | Assign each Student to exactly one Advisor at creation | P0 |
| FR-USR-07 | Generate a temporary password and email login details on Student creation | P0 |
| FR-USR-08 | Prevent deletion of accounts with historical activity; deactivation only | P0 |
| FR-USR-06 | Allow Admin to change a Student's assigned Advisor at any time | P1 |
| FR-USR-09 | Allow each user to set a notification channel preference (in-app / email / both) | P1 |

---

### CAT — Course Catalog Management

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-CAT-01 | Allow Admins to create, edit, and delete courses | P0 |
| FR-CAT-02 | Require code, name, credits, and department for every course | P0 |
| FR-CAT-03 | Allow each course to declare zero or more prerequisites | P0 |
| FR-CAT-04 | Prevent prerequisite cycles | P0 |
| FR-CAT-05 | Allow each course to declare required section types: Lecture, Lab, Tutorial | P0 |
| FR-CAT-06 | Allow Admins to create one or more sections per course | P0 |
| FR-CAT-07 | Require type, group, display_name, instructor name, and capacity per section | P0 |
| FR-CAT-08 | Allow each section to have one or more weekly meetings (day, start, end, room) | P0 |
| FR-CAT-09 | Allow each section to have its own capacity independent of other sections | P0 |
| FR-CAT-10 | Prevent two sections from being assigned the same room at overlapping times | P0 |
| FR-CAT-11 | Allow Admins to publish a catalog version for a specific term | P0 |
| FR-CAT-12 | Make published sections visible to Students only when the window is Open or Closed (read-only) | P0 |

---

### TRM — Term & Registration Window

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-TRM-01 | Allow Admins to create a Term with name, start_date, and end_date | P0 |
| FR-TRM-02 | Support four term states: Draft, Open, Closed, Archived | P0 |
| FR-TRM-03 | Allow Admins to manually transition a term from Draft → Open | P0 |
| FR-TRM-04 | Allow Admins to manually transition a term from Open → Closed | P0 |
| FR-TRM-05 | Allow Admins to manually transition a term from Closed → Archived | P0 |
| FR-TRM-07 | Auto-reject all Pending requests when window closes; notify affected students | P0 |
| FR-TRM-08 | Make Archived terms read-only for all roles | P0 |
| FR-TRM-06 | Support scheduling automatic Open/Close transitions at preset timestamps | P1 |
| FR-TRM-09 | Broadcast a notification to all students when the registration window opens | P1 |

---

### AUD — Audit Log

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-AUD-01 | Persist an audit_log row for every significant action | P0 |
| FR-AUD-02 | Store user_id, action, target_type, target_id, before, after, and timestamp in every row | P0 |
| FR-AUD-03 | Make the audit log append-only; no edits or deletes allowed | P0 |
| FR-AUD-04 | Define distinct action types: LOGIN, REQUEST_APPROVE, REQUEST_REJECT, OVERRIDE_APPROVE, SECTION_CREATE, SECTION_RESCHEDULE, LATE_RESCHEDULE, ENROLLMENT_FREEZE | P0 |

---

### Cross-Cutting (P0 slice)

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-X-01 | Every DB mutation spanning multiple rows shall run inside a transaction | P0 |
| FR-X-04 | Apply server-side validation on every input received from the client | P0 |
| FR-X-06 | Invalidate cached catalog data when a Course or Section is created, edited, or rescheduled | P0 |

---

**Sprint 1 Totals: 54 requirements — P0: 43 · P1: 11**

---

## Sprint 2 — Registration Engine
**Timeframe:** 4 Jun – 17 Jun 2026

**Goal:** Deliver the full student-to-advisor pipeline — eligibility checks, conflict detection, request submission, withdrawals and swaps, advisor review, enrollment management, and notifications.

---

### ELG — Eligibility Engine

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-ELG-01 | Evaluate eligibility for each (student, course) pair before allowing add-to-cart | P0 |
| FR-ELG-02 | Verify that all prerequisites of the course are passed by the student | P0 |
| FR-ELG-03 | Verify that accumulated credits + cart credits do not exceed the upper credit limit | P0 |
| FR-ELG-04 | Prevent registration for a course the student has already passed | P0 |
| FR-ELG-05 | Require the student to pick a section for every required type of the course | P0 |
| FR-ELG-06 | Atomically add or fail the linked sections of a course (Lecture + Lab + Tutorial) | P0 |
| FR-ELG-07 | Show an eligibility badge per course on the catalog page: Eligible, Missing Prerequisite, or Credit Limit Exceeded | P0 |
| FR-ELG-08 | Re-validate eligibility at the moment the request is submitted, not only at add-to-cart | P0 |

---

### CNF — Schedule Conflict Detection

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-CNF-01 | Detect time overlaps between two section_meetings on the same day | P0 |
| FR-CNF-02 | Block adding a section that conflicts with another section already in the cart | P0 |
| FR-CNF-03 | Display a clear message identifying both conflicting sections and their times | P0 |
| FR-CNF-04 | Detect conflicts for sections with multiple weekly meetings (any meeting overlap counts) | P0 |
| FR-CNF-05 | Apply conflict detection during the timetable reschedule simulation | P0 |

---

### REQ — Registration Request Workflow

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-REQ-01 | Allow a Student to build a cart of multiple courses before submission | P0 |
| FR-REQ-03 | Create one registration_requests row with status Pending on submission | P0 |
| FR-REQ-04 | Copy each cart item into request_items with action and parent_item_id for grouped items | P0 |
| FR-REQ-05 | Prevent a Student from having more than one Pending request for the same term | P0 |
| FR-REQ-06 | Allow a Student to edit a Pending request (auto-cancels old, creates new Pending) | P0 |
| FR-REQ-07 | Notify the assigned Advisor when a request is submitted | P0 |
| FR-REQ-08 | Support five request statuses: Pending, Approved, Rejected, Returned, Cancelled | P0 |
| FR-REQ-02 | Persist the cart between sessions until submitted or cleared | P1 |
| FR-REQ-09 | Allow the Advisor to add per-item comments | P1 |

---

### WSW — Withdrawal & Swap

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-WSW-01 | Allow a Student to submit a Withdrawal request for any active enrollment | P0 |
| FR-WSW-02 | Route the Withdrawal request through the same advisor approval workflow | P0 |
| FR-WSW-04 | Allow a Student to submit a Swap (drop A + add B) as a single atomic request | P0 |
| FR-WSW-05 | Execute the Swap inside a DB transaction; either both actions commit or both roll back | P0 |
| FR-WSW-06 | Auto-reject the add side of a Swap if the target section becomes full before approval, and cancel the drop | P0 |
| FR-WSW-03 | Warn the Student when withdrawal would drop them below the lower credit limit | P1 |

---

### ADV — Advisor Operations

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-ADV-01 | Present each Advisor with a queue of Pending requests for their students, sorted oldest first | P0 |
| FR-ADV-03 | Show the student's name, student_number, GPA, accumulated credits, and current schedule on the Request Review screen | P0 |
| FR-ADV-04 | Display a status badge per request item: OK, Prerequisite missing, Credit limit, Section full | P0 |
| FR-ADV-05 | Allow the Advisor to Approve a request, creating/updating enrollments in a DB transaction | P0 |
| FR-ADV-06 | Allow the Advisor to Reject a request with a mandatory reason | P0 |
| FR-ADV-07 | Allow the Advisor to Return a request for edit with a mandatory comment | P0 |
| FR-ADV-09 | Treat each bulk-approve operation per request as its own transaction, isolating failures | P0 |
| FR-ADV-10 | Notify the Student of the outcome on every Approve / Reject / Return action | P0 |
| FR-ADV-02 | Allow filtering the queue by student, term, and status | P1 |
| FR-ADV-08 | Allow the Advisor to bulk-approve multiple clean requests at once | P1 |

---

### OVR — Override Mechanism

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-OVR-01 | Allow any Advisor to override a system check (missing prerequisite or credit limit) on a per-item basis | P0 |
| FR-OVR-02 | Require a written reason on every override; reject empty reasons | P0 |
| FR-OVR-03 | Persist the override flag and reason on the corresponding request_items row | P0 |
| FR-OVR-04 | Log every override as a distinct OVERRIDE_APPROVE event in the audit log | P0 |
| FR-OVR-05 | Include all overrides for the current term in the Admin Overrides Report | P0 |
| FR-OVR-06 | Restrict access to the Overrides Report to Admins only | P0 |

---

### ENR — Enrollment Management

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-ENR-01 | Create an enrollments row when a registration item is approved | P0 |
| FR-ENR-02 | Support enrollment statuses: Active, Withdrawn, Frozen, Completed | P0 |
| FR-ENR-03 | Decrement section's available capacity on approval; increment on withdrawal | P0 |
| FR-ENR-04 | Prevent enrollment counts from exceeding section capacity at any point | P0 |
| FR-ENR-05 | Transition an enrollment to Frozen when a section reschedule causes a conflict | P0 |
| FR-ENR-06 | Treat Frozen enrollments as un-attendable until an Advisor resolves them | P0 |
| FR-ENR-07 | Allow an Advisor to resolve a Frozen enrollment by approving a swap, approving a withdrawal, or unfreezing via override | P0 |

---

### NOT — Notifications

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-NOT-01 | Support two delivery channels: in-app and email | P0 |
| FR-NOT-02 | Dispatch emails through Laravel Mail (SMTP) on a Redis queue | P0 |
| FR-NOT-03 | Persist every notification in the notifications table with a read_at field | P0 |
| FR-NOT-04 | Display a notification bell with the latest 10 notifications and an unread highlight | P0 |
| FR-NOT-05 | Mark a notification read when the user clicks it | P0 |
| FR-NOT-06 | Trigger notifications on: Request Approved/Rejected/Returned, Window Open/Close, Override Granted, Section Reschedule, Enrollment Frozen, Escalation | P0 |
| FR-NOT-07 | Respect the user's channel preference (in-app / email / both) | P1 |
| FR-NOT-08 | Flag notifications that require user action with an "Action Required" badge | P1 |

---

**Sprint 2 Totals: 59 requirements — P0: 52 · P1: 7**

---

## Sprint 3 — Admin Tools, Timetable & Polish
**Timeframe:** 18 Jun – 1 Jul 2026

**Goal:** Complete the admin layer with the interactive timetable rescheduler, reporting and escalation tools, search, and all deferred P1 items from prior sprints.

---

### TBL — Timetable & Section Reschedule

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-TBL-01 | Render the term timetable as a 2D grid (days as columns × time blocks as rows) | P0 |
| FR-TBL-02 | Display every section_meetings row of the current term as a draggable card on the grid | P0 |
| FR-TBL-03 | Allow the Admin to drag a section card to a new day/time cell | P0 |
| FR-TBL-04 | Allow the Admin to change a section's room via drag-drop | P0 |
| FR-TBL-05 | Simulate the change and run a conflict scan against every enrolled student before applying | P0 |
| FR-TBL-06 | Display a Conflict Dialog showing count and list of affected students, their advisor, and conflicting course | P0 |
| FR-TBL-07 | Offer two actions on the Conflict Dialog: Approve Change and Cancel | P0 |
| FR-TBL-08 | Apply the change inside a DB transaction only after Admin clicks Approve Change | P0 |
| FR-TBL-09 | Log a SECTION_RESCHEDULE event with before/after meeting data on every approved change | P0 |
| FR-TBL-10 | Freeze every conflicted student's enrollment automatically on an approved change | P0 |
| FR-TBL-11 | Notify every enrolled student of the section change; flag Action Required for conflicted students | P0 |
| FR-TBL-12 | Notify every conflicted student's assigned Advisor with an action-required notification | P0 |
| FR-TBL-13 | Re-validate every Pending request containing the moved section; notify the relevant Advisor if a new conflict appears | P0 |
| FR-TBL-14 | Block drop targets that would violate room or instructor double-booking | P0 |
| FR-TBL-15 | Require a Stronger Confirmation (Admin types the section code) before applying a reschedule on a Closed or Archived term | P1 |
| FR-TBL-16 | Tag late-term reschedules with a LATE_RESCHEDULE audit event | P1 |

---

### RPT — Admin Dashboard & Reports

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-RPT-01 | Display a real-time count of Pending requests on the Admin Dashboard | P0 |
| FR-RPT-03 | Provide an Overrides Report listing every override of the current term with student, advisor, course, type, reason, and timestamp | P0 |
| FR-RPT-06 | Provide an Escalated Requests view listing requests Pending longer than the configured threshold | P0 |
| FR-RPT-07 | Allow the Admin to reassign an escalated request to a different Advisor | P0 |
| FR-RPT-08 | Auto-flag a Pending request as Escalated when older than the configured threshold (default 48 hours) via a daily scheduled job | P0 |
| FR-RPT-09 | Display a Close Window summary showing approved enrollments, pending requests, and overrides before the Admin confirms closing | P0 |
| FR-RPT-02 | Display real-time stats: full sections count, advisor workload, overrides count | P1 |
| FR-RPT-04 | Allow filtering the Overrides Report by advisor, course, and date range | P1 |
| FR-RPT-05 | Allow exporting reports to CSV and PDF asynchronously, emailing the admin a download link | P1 |

---

### SRH — Search & Filter

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-SRH-01 | Allow students to search the catalog by course code or name | P0 |
| FR-SRH-02 | Allow filtering the catalog by department, credits, day, time, and section type | P1 |
| FR-SRH-03 | Combine multiple filters using logical AND | P1 |

---

### P1 Backlog — Deferred from Sprints 1 & 2

| ID | Requirement | Source |
|----|-------------|--------|
| FR-AUTH-09 | Limit OTP resends to 3 per hour per user | Sprint 1 |
| FR-AUTH-10 | Lock account for 15 minutes after 5 wrong OTP entries within 10 minutes | Sprint 1 |
| FR-AUTH-14 | Lock account for 15 minutes after 5 failed login attempts | Sprint 1 |
| FR-AUTH-17 | Log every login, OTP verification, and password reset in the audit log | Sprint 1 |
| FR-USR-06 | Allow Admin to change a Student's assigned Advisor at any time | Sprint 1 |
| FR-USR-09 | Allow each user to set a notification channel preference | Sprint 1 |
| FR-TRM-06 | Support scheduling automatic Open/Close transitions at preset timestamps | Sprint 1 |
| FR-TRM-09 | Broadcast a notification to all students when the registration window opens | Sprint 1 |
| FR-REQ-02 | Persist the cart between sessions until submitted or cleared | Sprint 2 |
| FR-REQ-09 | Allow the Advisor to add per-item comments | Sprint 2 |
| FR-WSW-03 | Warn the Student when withdrawal would drop them below the lower credit limit | Sprint 2 |
| FR-ADV-02 | Allow filtering the queue by student, term, and status | Sprint 2 |
| FR-ADV-08 | Allow the Advisor to bulk-approve multiple clean requests at once | Sprint 2 |
| FR-NOT-07 | Respect the user's channel preference (in-app / email / both) | Sprint 2 |
| FR-NOT-08 | Flag notifications requiring user action with an "Action Required" badge | Sprint 2 |
| FR-X-02 | Every list view shall support pagination with a default page size of 20 | — |
| FR-X-05 | Rate-limit anonymous endpoints (login, OTP request) to 10 requests / minute / IP | — |
| FR-X-03 | Support Arabic and English UI (localization) — time permitting | P2 |

---

**Sprint 3 Totals: 44 requirements — P0: 28 · P1: 16**

---

## Summary

| Sprint | Timeframe | Requirements | P0 | P1 |
|--------|-----------|--------------|----|----|
| Sprint 1 — Foundation & Infrastructure | 21 May – 3 Jun 2026 | 54 | 43 | 11 |
| Sprint 2 — Registration Engine | 4 Jun – 17 Jun 2026 | 59 | 52 | 7 |
| Sprint 3 — Admin Tools, Timetable & Polish | 18 Jun – 1 Jul 2026 | 44 | 28 | 16 |
| **Total** | **6 weeks** | **157** | **123** | **34** |

---

## Execution Notes

- Each sprint begins with DB migrations and closes with integration testing against all modules delivered to date.
- P1 items listed within Sprint 1 and Sprint 2 modules are non-blocking — if scope pressure arises, they slide cleanly into Sprint 3 without breaking any core flow.
- FR-X-03 (Arabic/English localization) is P2 and is addressed only if Sprint 3 capacity allows.
- All multi-row mutations must run inside a DB transaction (FR-X-01) — this is enforced from Sprint 1 onward across all modules.
