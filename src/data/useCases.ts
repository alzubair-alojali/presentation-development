import type { Actor } from './scenarios';

export interface UseCase {
  id: string;
  name: string;
  actors: Actor[];
  description: string;
  relatedScenarios: string[];
}

export const useCases: UseCase[] = [
  {
    id: 'uc-authenticate',
    name: 'Authenticate',
    actors: ['student', 'advisor', 'admin'],
    description:
      'Email + password login with email-OTP verification on first use and forgotten-password reset. Sanctum token issued on success.',
    relatedScenarios: ['S01', 'S02', 'S03'],
  },
  {
    id: 'uc-view-notifications',
    name: 'View Notifications',
    actors: ['student', 'advisor', 'admin'],
    description:
      'Bell dropdown with the latest 10; click to mark read and jump to the relevant screen. Parallel email for users on email-only channel.',
    relatedScenarios: ['S10'],
  },
  {
    id: 'uc-view-courses',
    name: 'View Courses',
    actors: ['student'],
    description:
      'Browse the published catalog; see eligibility badges (Eligible / Missing Prerequisite / Credit Limit) computed in real-time by the Eligibility Engine.',
    relatedScenarios: ['S04'],
  },
  {
    id: 'uc-manage-registration',
    name: 'Manage Course Registration Request',
    actors: ['student'],
    description:
      'Build a cart with lecture + lab groups, run atomic validation, submit to the advisor, withdraw, swap sections, or edit a pending request.',
    relatedScenarios: ['S05', 'S06', 'S07', 'S08', 'S09'],
  },
  {
    id: 'uc-manage-requests',
    name: 'Manage Registration Requests',
    actors: ['advisor'],
    description:
      'Review the queue, approve (single or bulk), reject with reason, or return for edit. All actions auditable and transactional.',
    relatedScenarios: ['S11', 'S12', 'S13', 'S15'],
  },
  {
    id: 'uc-grant-override',
    name: 'Grant an Override',
    actors: ['advisor'],
    description:
      'Approve a blocked item (missing prerequisite / credit limit) with a mandatory written reason. Logged as OVERRIDE_APPROVE and surfaced on the admin report.',
    relatedScenarios: ['S14'],
  },
  {
    id: 'uc-manage-courses',
    name: 'Manage Courses',
    actors: ['admin'],
    description:
      'Create and edit courses, sections, section_meetings. Drag-drop reschedule on the term timetable with per-student conflict scanning and frozen-enrollment handling.',
    relatedScenarios: ['S16', 'S17'],
  },
  {
    id: 'uc-manage-semesters',
    name: 'Manage Semesters',
    actors: ['admin'],
    description:
      'Create a term, attach published sections, open or schedule the registration window, close registration, and archive the term once it ends.',
    relatedScenarios: ['S18', 'S21'],
  },
  {
    id: 'uc-manage-users',
    name: 'Manage User Accounts',
    actors: ['admin'],
    description:
      'Create students, advisors, and admin accounts; assign advisors to students; deactivate or reset accounts.',
    relatedScenarios: ['S19'],
  },
  {
    id: 'uc-monitor-reports',
    name: 'Monitor System Reports',
    actors: ['admin'],
    description:
      'View the overrides report, handle escalated requests from unresponsive advisors, and export data (CSV / PDF) via background jobs.',
    relatedScenarios: ['S20', 'S22'],
  },
];
