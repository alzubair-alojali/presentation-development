// Wireframe metadata — which screen, which scenarios, one-line description.
// `component` matches a named export from ../wireframes/components.jsx.

export interface Wireframe {
  component: string;
  name: string;
  scenarios: string;
  description: string;
  group: 'auth' | 'student' | 'advisor' | 'admin';
}

export const wireframes: Wireframe[] = [
  { component: 'V2Split',           name: 'Login',                     scenarios: 'S01, S02',         description: 'University email + password sign-in. Split layout: brand panel left, form right.', group: 'auth' },
  { component: 'V2Otp',             name: 'OTP Verification',          scenarios: 'S01, S03',         description: '6-digit code with 5-min countdown and resend. Used for first-login email verify and password reset.', group: 'auth' },
  { component: 'Dashboard',         name: 'Student Dashboard',         scenarios: 'S04, S08',         description: 'Landing page after sign-in — shortcuts to courses, schedule, my requests, notifications.', group: 'student' },
  { component: 'Catalog',           name: 'Courses',                   scenarios: 'S04',              description: 'Published courses for the current term with eligibility badges and filters.', group: 'student' },
  { component: 'CourseDetails',     name: 'Course Details',            scenarios: 'S05',              description: 'Pick a Lecture group; if the course requires a Lab, the Lab Group Picker appears below.', group: 'student' },
  { component: 'CartSidebarOverlay',name: 'Request Sidebar',           scenarios: 'S05',              description: 'Pending request items as a slide-in panel; linked Lecture+Lab share parent_item_id.', group: 'student' },
  { component: 'MyRequests',        name: 'My Requests',               scenarios: 'S05, S07, S10–S12',description: 'History of submitted requests with status pills. Pending ones can be edited.', group: 'student' },
  { component: 'MySchedule',        name: 'My Schedule',               scenarios: 'S05, S06',         description: 'Weekly calendar of active enrollments. Withdraw and Swap actions live here; frozen ones flagged red.', group: 'student' },
  { component: 'AdvisorDashboard',  name: 'Advisor Dashboard',         scenarios: 'S09, S13',         description: 'Queue of pending requests for assigned students, sorted oldest-first; bulk-approve for clean ones.', group: 'advisor' },
  { component: 'RequestReview',     name: 'Request Review',            scenarios: 'S09–S13',          description: 'Full student context (GPA, credits, schedule) + per-item status badges; approve / reject / return / override.', group: 'advisor' },
  { component: 'AdminDashboard',    name: 'Admin Dashboard',           scenarios: 'S18, S20',         description: 'Real-time stats — pending count, full sections, overrides, escalated requests — and quick actions.', group: 'admin' },
  { component: 'Timetable',         name: 'Timetable Grid',            scenarios: 'S15',              description: 'Five day-tables (Sun–Thu) with rooms as rows and time blocks as columns. Section cards are draggable.', group: 'admin' },
  { component: 'ConflictDialog',    name: 'Schedule Change Conflict',  scenarios: 'S15',              description: 'Pre-apply preview after a drag-drop. N affected students with their advisors and conflicting course.', group: 'admin' },
  { component: 'OverridesReport',   name: 'Overrides Report',          scenarios: 'S18',              description: 'Every OVERRIDE_APPROVE event for the current term — student, advisor, course, type, reason, timestamp.', group: 'admin' },
];
