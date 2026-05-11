import { useCallback, useEffect, useRef, useState } from 'react';
import { Grid } from '../components/Grid';
import { TopBar } from '../components/TopBar';
import { BottomNav } from '../components/BottomNav';
import { Layers, GitBranch, Workflow, Database } from 'lucide-react';

import { Title } from './slides/Title';
import { Agenda } from './slides/Agenda';
import { SectionIntro } from './slides/SectionIntro';
import { DiagramSlide } from './slides/DiagramSlide';
import { Slide999Closing } from '../fr/slides/999-Closing';

import { ClassDiagram } from './diagrams/ClassDiagram';
import {
  ActivityViewCourses, ActivityCreateRequest, ActivityApproveRequest, ActivityCreateCourse,
} from './diagrams/Activity';
import {
  SequenceViewCourses, SequenceCreateRequest, SequenceApproveRequest, SequenceCreateCourse,
} from './diagrams/Sequence';
import { Erd } from './diagrams/Erd';

interface Slide { key: string; el: React.ReactNode }

function SlideTransition({
  children, direction,
}: { children: React.ReactNode; direction: 1 | -1 }) {
  const [animating, setAnimating] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const id = window.setTimeout(() => setAnimating(false), 560);
    return () => window.clearTimeout(id);
  }, []);
  const cls = animating
    ? direction === 1 ? 'slide-enter-right' : 'slide-enter-left'
    : '';
  return <div ref={ref} className={`absolute inset-0 ${cls}`}>{children}</div>;
}

const slides: Slide[] = [
  { key: 'title',   el: <Title /> },
  { key: 'agenda',  el: <Agenda /> },

  // ───────── Class Diagram ─────────
  {
    key: 'class-intro',
    el: (
      <SectionIntro
        kicker="Part One"
        title="Class Diagram"
        subtitle="The object model. Every class, every attribute, and every relationship the registration system depends on."
        icon={Layers}
        tone="#4CC4FF"
        bullets={[
          { label: 'Hierarchy', text: 'User (abstract) is parent of Student, Advisor, and Admin — each adds role-specific attributes and behaviors.' },
          { label: 'Domain core', text: 'Course, Section, SectionMeeting, Term, RegistrationRequest, RequestItem, Enrollment.' },
          { label: 'Cross-cutting', text: 'Department, Notification, AuditLog — system services every actor relies on.' },
        ]}
      />
    ),
  },
  {
    key: 'class-diagram',
    el: (
      <DiagramSlide
        id="class-diagram"
        kicker="Class Diagram"
        title="Course Registration Management System"
        tags="14 classes · 13 relationships"
        description="Inheritance, composition, and association across actors and domain entities."
        diagram={<ClassDiagram />}
      />
    ),
  },

  // ───────── Activity Diagrams ─────────
  {
    key: 'act-intro',
    el: (
      <SectionIntro
        kicker="Part Two"
        title="Activity Diagrams"
        subtitle="Four user flows captured as control flow — actions, decisions, exceptions, and end states."
        icon={GitBranch}
        tone="#7C8BFF"
        bullets={[
          { label: 'S04 · View Courses',          text: 'Student opens the catalog, runs filters, and lands on Course Details with eligibility resolved.' },
          { label: 'S05 · Create Request',        text: 'From catalog to a Pending request — covers all four validation exceptions.' },
          { label: 'S10 · Approve Request',       text: 'Advisor reviews the queue, opens a request, and approves with audit logging.' },
          { label: 'S15 · Create a Course',       text: 'Admin authoring flow with form validation and the catalog publication step.' },
        ]}
      />
    ),
  },
  {
    key: 'act-1',
    el: (
      <DiagramSlide
        id="act-view-courses"
        kicker="Activity Diagram · 1 of 4"
        title="View Courses"
        tags="Scenario · S04"
        description="From dashboard to Course Details, with read-only fallback when the window is closed."
        diagram={<ActivityViewCourses />}
      />
    ),
  },
  {
    key: 'act-2',
    el: (
      <DiagramSlide
        id="act-create-request"
        kicker="Activity Diagram · 2 of 4"
        title="Create Registration Request"
        tags="Scenario · S05"
        description="Add-to-request validation, submit, audit log, and advisor notification."
        diagram={<ActivityCreateRequest />}
      />
    ),
  },
  {
    key: 'act-3',
    el: (
      <DiagramSlide
        id="act-approve-request"
        kicker="Activity Diagram · 3 of 4"
        title="Approve Registration Request"
        tags="Scenario · S10"
        description="From the advisor queue to live enrollments + a notification to the student."
        diagram={<ActivityApproveRequest />}
      />
    ),
  },
  {
    key: 'act-4',
    el: (
      <DiagramSlide
        id="act-create-course"
        kicker="Activity Diagram · 4 of 4"
        title="Create a Course"
        tags="Scenario · S15"
        description="Admin authoring flow — form, save, audit, and view the new course page."
        diagram={<ActivityCreateCourse />}
      />
    ),
  },

  // ───────── Sequence Diagrams ─────────
  {
    key: 'seq-intro',
    el: (
      <SectionIntro
        kicker="Part Three"
        title="Sequence Diagrams"
        subtitle="The same four scenarios told from the system's perspective — actor, interface, controller, database, mail."
        icon={Workflow}
        tone="#FFB86B"
        bullets={[
          { label: 'View Courses',         text: 'Catalog load + per-course eligibility loop + optional Course Details fetch.' },
          { label: 'Create Request',       text: 'Add item alt frame for validation, then submit with audit + queued advisor mail.' },
          { label: 'Approve Request',      text: 'Queue fetch, request details, approval transaction with student notification.' },
          { label: 'Create a Course',      text: 'Admin form → controller → DB insert + audit, with an alt branch for validation failure.' },
        ]}
      />
    ),
  },
  {
    key: 'seq-1',
    el: (
      <DiagramSlide
        id="seq-view-courses"
        kicker="Sequence Diagram · 1 of 4"
        title="View Courses"
        tags="Scenario · S04"
        description="Student · Courses Interface · Course Controller · Database."
        diagram={<SequenceViewCourses />}
      />
    ),
  },
  {
    key: 'seq-2',
    el: (
      <DiagramSlide
        id="seq-create-request"
        kicker="Sequence Diagram · 2 of 4"
        title="Create Registration Request"
        tags="Scenario · S05"
        description="Adds Mail Service for the queued advisor notification."
        diagram={<SequenceCreateRequest />}
      />
    ),
  },
  {
    key: 'seq-3',
    el: (
      <DiagramSlide
        id="seq-approve-request"
        kicker="Sequence Diagram · 3 of 4"
        title="Approve Registration Request"
        tags="Scenario · S10"
        description="Three round-trips: update status, create enrollments, write audit."
        diagram={<SequenceApproveRequest />}
      />
    ),
  },
  {
    key: 'seq-4',
    el: (
      <DiagramSlide
        id="seq-create-course"
        kicker="Sequence Diagram · 4 of 4"
        title="Create a Course"
        tags="Scenario · S15"
        description="Form input, insert course, write audit, redirect to course page."
        diagram={<SequenceCreateCourse />}
      />
    ),
  },

  // ───────── ERD ─────────
  {
    key: 'erd-intro',
    el: (
      <SectionIntro
        kicker="Part Four"
        title="Database Schema"
        subtitle="The persistence side of the same model — twelve tables with single-table inheritance for users, soft delete for catalog data, and an append-only audit log."
        icon={Database}
        tone="#B980FF"
        bullets={[
          { label: 'Users · single-table inheritance', text: 'Student, Advisor, Admin all live in users distinguished by role. advisor_id is a self-reference.' },
          { label: 'Catalog · soft delete',           text: 'courses and similar tables carry deleted_at so history survives.' },
          { label: 'Linkage tables',                  text: 'course_prerequisites and request_items use composite/parent_item_id keys for many-to-many and swap pairing.' },
        ]}
      />
    ),
  },
  {
    key: 'erd',
    el: (
      <DiagramSlide
        id="erd"
        kicker="Database Schema · ERD"
        title="Twelve tables, one relational picture"
        tags="12 tables · PK / FK / UK"
        description="Single-table inheritance on users; soft delete on catalog tables; append-only audit_log."
        diagram={<Erd />}
      />
    ),
  },

  { key: 'thanks', el: <Slide999Closing /> },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [chromeVisible, setChromeVisible] = useState(true);

  const go = useCallback((next: number) => {
    setIndex(curr => {
      const clamped = Math.max(0, Math.min(slides.length - 1, next));
      setDirection(clamped >= curr ? 1 : -1);
      return clamped;
    });
  }, []);

  const onNext = useCallback(() => go(index + 1), [go, index]);
  const onPrev = useCallback(() => go(index - 1), [go, index]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
  }, []);

  useEffect(() => {
    const onChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
          e.preventDefault(); onNext(); break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault(); onPrev(); break;
        case 'Home':
          e.preventDefault(); go(0); break;
        case 'End':
          e.preventDefault(); go(slides.length - 1); break;
        case 'f': case 'F':
          e.preventDefault(); toggleFullscreen(); break;
        case 'h': case 'H':
          e.preventDefault(); setChromeVisible(v => !v); break;
        default:
          if (/^[1-9]$/.test(e.key)) {
            const n = Number(e.key) - 1;
            if (n < slides.length) go(n);
          }
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onNext, onPrev, go, toggleFullscreen]);

  return (
    <main className="relative h-dvh w-screen overflow-hidden bg-bg-base">
      <Grid />
      <div
        style={{
          transform: chromeVisible ? 'translateY(0)' : 'translateY(-24px)',
          opacity: chromeVisible ? 1 : 0,
          pointerEvents: chromeVisible ? 'auto' : 'none',
          transition: 'transform 280ms cubic-bezier(0.22,1,0.36,1), opacity 280ms ease',
        }}
        className="absolute top-0 inset-x-0 z-30"
      >
        <TopBar current={index} total={slides.length} />
      </div>

      <div className="relative z-10 h-full w-full">
        <SlideTransition key={slides[index].key} direction={direction}>
          {slides[index].el}
        </SlideTransition>
      </div>

      <div
        style={{
          transform: chromeVisible ? 'translateY(0)' : 'translateY(24px)',
          opacity: chromeVisible ? 1 : 0,
          pointerEvents: chromeVisible ? 'auto' : 'none',
          transition: 'transform 280ms cubic-bezier(0.22,1,0.36,1), opacity 280ms ease',
        }}
        className="absolute bottom-0 inset-x-0 z-30"
      >
        <BottomNav
          current={index}
          total={slides.length}
          onPrev={onPrev}
          onNext={onNext}
          onJump={go}
          isFullscreen={isFullscreen}
          onFullscreen={toggleFullscreen}
        />
      </div>

      <span className="sr-only" aria-live="polite">Slide {index + 1} of {slides.length}</span>
    </main>
  );
}
