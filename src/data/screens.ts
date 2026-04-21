export interface Screen {
  name: string;
  description: string;
  group: 'auth' | 'student' | 'advisor' | 'admin' | 'shared';
}

export const screens: Screen[] = [
  { name: 'Login', description: 'Email + password entry with forgot-password link.', group: 'auth' },
  { name: 'OTP Verification', description: '6-digit code, resend, 5-min countdown.', group: 'auth' },
  { name: 'Change Password', description: 'Force new password after first login.', group: 'auth' },
  { name: 'New Password', description: 'Post-reset password setup.', group: 'auth' },
  { name: 'Password Reset Request', description: 'Email input to start OTP flow.', group: 'auth' },

  { name: 'Role Dashboard', description: 'Landing screen per role.', group: 'shared' },
  { name: 'Notification Dropdown', description: 'Latest 10 notifications, unread highlighted.', group: 'shared' },

  { name: 'Student Dashboard', description: 'Shortcuts to Courses, Schedule, Requests, Notifications.', group: 'student' },
  { name: 'Courses', description: 'All courses with eligibility badges, search and filters.', group: 'student' },
  { name: 'Course Details', description: 'Sections by type (Lecture/Lab/Tutorial), group picker.', group: 'student' },
  { name: 'Lab Group Picker', description: 'Inline picker when a course has a required Lab.', group: 'student' },
  { name: 'Request Sidebar', description: 'Items, conflict warnings, Submit Request button.', group: 'student' },
  { name: 'My Requests', description: 'All requests by status; edit Pending ones.', group: 'student' },
  { name: 'My Schedule', description: 'Enrollments with Withdraw / Swap, frozen flags.', group: 'student' },
  { name: 'Withdraw Confirmation', description: 'Credit-hour impact preview.', group: 'student' },
  { name: 'Swap Screen', description: 'Alternative groups for the same course.', group: 'student' },

  { name: 'Advisor Dashboard', description: 'Pending queue, filters, bulk actions.', group: 'advisor' },
  { name: 'Request Review', description: 'Student context + per-item actions.', group: 'advisor' },
  { name: 'Override Dialog', description: 'Mandatory reason input.', group: 'advisor' },

  { name: 'Admin Dashboard', description: 'Stats, quick links, escalations.', group: 'admin' },
  { name: 'Timetable Grid', description: '2D day×time grid with draggable section cards.', group: 'admin' },
  { name: 'Schedule Change Conflict Dialog', description: 'Affected-students list with Approve / Cancel.', group: 'admin' },
  { name: 'Stronger Confirmation', description: 'Type section code to edit a Closed / Archived term.', group: 'admin' },
  { name: 'Overrides Report', description: 'Filterable list of overrides + export.', group: 'admin' },
  { name: 'Escalated Requests', description: 'Requests past the escalation threshold.', group: 'admin' },
  { name: 'Close Window Dialog', description: 'Pre-close summary of counts.', group: 'admin' },
];
