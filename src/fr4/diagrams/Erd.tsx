import { DiagramFrame, T, Line } from './_atoms';

/**
 * Database Schema (ERD) — re-rendered for the Course Registration Management
 * System. Tables: departments, courses, course_prerequisites, terms,
 * sections, section_meetings, registration_requests, request_items,
 * enrollments, users, notifications, audit_log.
 */

interface Col {
  name: string;
  type: string;
  marker?: 'PK' | 'FK' | 'UK' | 'PK,FK';
}
interface Table {
  x: number; y: number;
  name: string;
  tone?: string;
  cols: Col[];
}

function TableBox({ x, y, name, cols, tone = T.cyan }: Table) {
  const headerH = 28;
  const rowH = 18;
  const pad = 6;
  const width = 240;
  const totalH = headerH + pad + cols.length * rowH + pad;

  return (
    <g transform={`translate(${x},${y})`}>
      <rect
        x={0} y={0} width={width} height={totalH}
        fill={T.card}
        stroke={T.border}
        strokeWidth={1}
        rx={8}
      />
      {/* header */}
      <rect x={0} y={0} width={width} height={headerH} fill={`${tone}1F`} rx={8} />
      <line x1={0} y1={headerH - 1} x2={width} y2={headerH - 1} stroke={tone} opacity={0.4} />
      <text
        x={width / 2} y={18.5}
        textAnchor="middle"
        fill={tone}
        style={{ fontFamily: 'Satoshi, Inter, sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: '0.04em' }}
      >
        {name}
      </text>

      {cols.map((c, i) => {
        const y = headerH + pad + i * rowH + 12;
        const isPk = c.marker === 'PK' || c.marker === 'PK,FK';
        return (
          <g key={c.name}>
            <text
              x={12} y={y}
              fill={isPk ? T.warm : T.ink}
              style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9.5, fontWeight: isPk ? 600 : 400 }}
            >
              {c.name}
            </text>
            <text
              x={width / 2 + 18} y={y}
              fill={T.ink3}
              style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 8.5 }}
            >
              {c.type}
            </text>
            {c.marker && (
              <text
                x={width - 12} y={y}
                textAnchor="end"
                fill={
                  c.marker === 'PK' ? T.warm :
                  c.marker === 'FK' ? T.violet :
                  c.marker === 'UK' ? T.cyan :
                  T.pink
                }
                style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 8, fontWeight: 700, letterSpacing: '0.06em' }}
              >
                {c.marker}
              </text>
            )}
          </g>
        );
      })}
    </g>
  );
}

export function Erd() {
  return (
    <DiagramFrame width={1700} height={1100}>
      {/* departments (top-left) */}
      <TableBox
        x={40} y={70}
        name="departments"
        tone={T.cyan}
        cols={[
          { name: 'id', type: 'BIGINT', marker: 'PK' },
          { name: 'code', type: 'VARCHAR(8)', marker: 'UK' },
          { name: 'name', type: 'VARCHAR(120)' },
          { name: 'created_at', type: 'TIMESTAMP' },
          { name: 'updated_at', type: 'TIMESTAMP' },
        ]}
      />

      {/* terms (top-mid) */}
      <TableBox
        x={400} y={70}
        name="terms"
        tone={T.warm}
        cols={[
          { name: 'id', type: 'BIGINT', marker: 'PK' },
          { name: 'name', type: 'VARCHAR(50)', marker: 'UK' },
          { name: 'start_date', type: 'DATE' },
          { name: 'end_date', type: 'DATE' },
          { name: 'status', type: 'ENUM', marker: 'UK' },
          { name: 'created_at', type: 'TIMESTAMP' },
          { name: 'updated_at', type: 'TIMESTAMP' },
        ]}
      />

      {/* users (top-right) */}
      <TableBox
        x={780} y={70}
        name="users"
        tone={T.pink}
        cols={[
          { name: 'id', type: 'BIGINT', marker: 'PK' },
          { name: 'email', type: 'VARCHAR(120)', marker: 'UK' },
          { name: 'password', type: 'VARCHAR(255)' },
          { name: 'name', type: 'VARCHAR(120)' },
          { name: 'role', type: 'ENUM' },
          { name: 'email_verified_at', type: 'TIMESTAMP' },
          { name: 'student_number', type: 'VARCHAR(20)' },
          { name: 'major', type: 'VARCHAR(80)' },
          { name: 'gpa', type: 'DECIMAL(3,2)' },
          { name: 'accumulated_credits', type: 'INT' },
          { name: 'advisor_id', type: 'BIGINT', marker: 'FK' },
          { name: 'title', type: 'VARCHAR(80)' },
          { name: 'created_at', type: 'TIMESTAMP' },
          { name: 'updated_at', type: 'TIMESTAMP' },
          { name: 'deleted_at', type: 'TIMESTAMP' },
        ]}
      />

      {/* notifications (right) */}
      <TableBox
        x={1190} y={70}
        name="notifications"
        tone={T.ink2}
        cols={[
          { name: 'id', type: 'BIGINT', marker: 'PK' },
          { name: 'user_id', type: 'BIGINT', marker: 'FK' },
          { name: 'title', type: 'VARCHAR(120)' },
          { name: 'body', type: 'TEXT' },
          { name: 'channel', type: 'ENUM' },
          { name: 'read_at', type: 'TIMESTAMP' },
          { name: 'created_at', type: 'TIMESTAMP' },
        ]}
      />

      {/* audit_log (far right) */}
      <TableBox
        x={1450} y={70}
        name="audit_log"
        tone={T.ink2}
        cols={[
          { name: 'id', type: 'BIGINT', marker: 'PK' },
          { name: 'user_id', type: 'BIGINT', marker: 'FK' },
          { name: 'event_type', type: 'VARCHAR(60)' },
          { name: 'description', type: 'TEXT' },
          { name: 'event_at', type: 'TIMESTAMP' },
          { name: 'created_at', type: 'TIMESTAMP' },
        ]}
      />

      {/* courses (middle-left) */}
      <TableBox
        x={40} y={400}
        name="courses"
        tone={T.cyan}
        cols={[
          { name: 'id', type: 'BIGINT', marker: 'PK' },
          { name: 'code', type: 'VARCHAR(12)', marker: 'UK' },
          { name: 'name', type: 'VARCHAR(120)' },
          { name: 'credits', type: 'TINYINT' },
          { name: 'department_id', type: 'BIGINT', marker: 'FK' },
          { name: 'description', type: 'TEXT' },
          { name: 'required_types', type: 'JSON' },
          { name: 'created_at', type: 'TIMESTAMP' },
          { name: 'updated_at', type: 'TIMESTAMP' },
          { name: 'deleted_at', type: 'TIMESTAMP' },
        ]}
      />

      {/* course_prerequisites */}
      <TableBox
        x={40} y={770}
        name="course_prerequisites"
        tone={T.cyan}
        cols={[
          { name: 'course_id', type: 'BIGINT', marker: 'PK,FK' },
          { name: 'prerequisite_id', type: 'BIGINT', marker: 'PK,FK' },
          { name: 'created_at', type: 'TIMESTAMP' },
        ]}
      />

      {/* sections (middle) */}
      <TableBox
        x={400} y={400}
        name="sections"
        tone={T.violet}
        cols={[
          { name: 'id', type: 'BIGINT', marker: 'PK' },
          { name: 'course_id', type: 'BIGINT', marker: 'FK' },
          { name: 'term_id', type: 'BIGINT', marker: 'FK' },
          { name: 'group_name', type: 'VARCHAR(10)' },
          { name: 'type', type: 'ENUM' },
          { name: 'capacity', type: 'INT' },
          { name: 'instructor_name', type: 'VARCHAR(120)' },
          { name: 'created_at', type: 'TIMESTAMP' },
          { name: 'updated_at', type: 'TIMESTAMP' },
        ]}
      />

      {/* section_meetings */}
      <TableBox
        x={400} y={770}
        name="section_meetings"
        tone={T.violet}
        cols={[
          { name: 'id', type: 'BIGINT', marker: 'PK' },
          { name: 'section_id', type: 'BIGINT', marker: 'FK' },
          { name: 'day', type: 'ENUM' },
          { name: 'start_time', type: 'TIME' },
          { name: 'end_time', type: 'TIME' },
          { name: 'room', type: 'VARCHAR(20)' },
          { name: 'created_at', type: 'TIMESTAMP' },
          { name: 'updated_at', type: 'TIMESTAMP' },
        ]}
      />

      {/* registration_requests */}
      <TableBox
        x={780} y={400}
        name="registration_requests"
        tone={T.pink}
        cols={[
          { name: 'id', type: 'BIGINT', marker: 'PK' },
          { name: 'student_id', type: 'BIGINT', marker: 'FK' },
          { name: 'advisor_id', type: 'BIGINT', marker: 'FK' },
          { name: 'term_id', type: 'BIGINT', marker: 'FK' },
          { name: 'status', type: 'ENUM' },
          { name: 'submitted_at', type: 'TIMESTAMP' },
          { name: 'created_at', type: 'TIMESTAMP' },
          { name: 'updated_at', type: 'TIMESTAMP' },
        ]}
      />

      {/* request_items */}
      <TableBox
        x={780} y={770}
        name="request_items"
        tone={T.pink}
        cols={[
          { name: 'id', type: 'BIGINT', marker: 'PK' },
          { name: 'request_id', type: 'BIGINT', marker: 'FK' },
          { name: 'section_id', type: 'BIGINT', marker: 'FK' },
          { name: 'parent_item_id', type: 'BIGINT', marker: 'FK' },
          { name: 'action', type: 'ENUM' },
          { name: 'status', type: 'ENUM' },
          { name: 'override_flag', type: 'BOOLEAN' },
          { name: 'override_reason', type: 'TEXT' },
          { name: 'created_at', type: 'TIMESTAMP' },
          { name: 'updated_at', type: 'TIMESTAMP' },
        ]}
      />

      {/* enrollments */}
      <TableBox
        x={1190} y={400}
        name="enrollments"
        tone={T.violet}
        cols={[
          { name: 'id', type: 'BIGINT', marker: 'PK' },
          { name: 'student_id', type: 'BIGINT', marker: 'FK' },
          { name: 'section_id', type: 'BIGINT', marker: 'FK' },
          { name: 'status', type: 'ENUM' },
          { name: 'enrolled_at', type: 'TIMESTAMP' },
          { name: 'created_at', type: 'TIMESTAMP' },
          { name: 'updated_at', type: 'TIMESTAMP' },
        ]}
      />

      {/* ─────────── relationships ─────────── */}
      {/* departments → courses (offers, 1..N) */}
      <Line d="M 160 240 L 160 280 L 160 400" marker="many" label="offers" labelXY={[180, 320]} />

      {/* courses → course_prerequisites (twice — self M:N) */}
      <Line d="M 160 660 L 160 770" marker="many" />
      <Line d="M 220 660 L 270 720 L 270 800 L 280 800" marker="many" label="prereq" labelXY={[265, 750]} />

      {/* courses → sections */}
      <Line d="M 280 530 L 400 530" marker="many" label="provides" labelXY={[340, 522]} />

      {/* terms → sections */}
      <Line d="M 480 220 L 480 400" marker="many" label="schedules" labelXY={[510, 320]} />

      {/* sections → section_meetings */}
      <Line d="M 520 700 L 520 770" marker="many" label="meets at" labelXY={[480, 740]} />

      {/* sections → enrollments */}
      <Line d="M 640 530 L 1190 540" marker="many" label="for" labelXY={[900, 524]} />

      {/* sections → request_items */}
      <Line d="M 640 700 L 700 700 L 700 820 L 780 820" marker="many" label="targets" labelXY={[710, 730]} />

      {/* users → enrollments */}
      <Line d="M 1020 400 L 1020 360 L 1340 360 L 1340 400" marker="many" label="holds" labelXY={[1180, 350]} />

      {/* users → registration_requests (submits + reviews) */}
      <Line d="M 900 430 L 900 430 L 900 415 L 940 415 L 940 400" marker="many" />
      <Line d="M 800 380 L 800 400" marker="many" label="submits" labelXY={[760, 392]} />
      <Line d="M 1020 380 L 1020 400" marker="many" label="reviews" labelXY={[1060, 392]} />

      {/* terms → registration_requests */}
      <Line d="M 640 220 L 720 220 L 720 400" marker="many" label="during" labelXY={[750, 280]} />

      {/* registration_requests → request_items */}
      <Line d="M 900 660 L 900 770" marker="many" label="contains" labelXY={[940, 720]} />

      {/* request_items self linked_to */}
      <Line d="M 1020 850 c 80 0 80 60 0 60" marker="many" label="linked to" labelXY={[1090, 880]} />

      {/* users → notifications */}
      <Line d="M 1020 140 L 1190 140" marker="many" label="receives" labelXY={[1100, 132]} />

      {/* users → audit_log */}
      <Line d="M 1020 200 L 1450 200" marker="many" label="logged" labelXY={[1230, 192]} />

      {/* Legend */}
      <g transform="translate(40, 1000)">
        <text x={0} y={0} fill={T.ink3} fontSize={10} fontFamily="JetBrains Mono" letterSpacing="0.18em">LEGEND</text>
        <g transform="translate(0,18)">
          <text x={0} y={0} fill={T.warm} fontSize={10} fontFamily="JetBrains Mono" fontWeight={700}>PK</text>
          <text x={28} y={0} fill={T.ink2} fontSize={10} fontFamily="Inter">primary key</text>
          <text x={140} y={0} fill={T.violet} fontSize={10} fontFamily="JetBrains Mono" fontWeight={700}>FK</text>
          <text x={170} y={0} fill={T.ink2} fontSize={10} fontFamily="Inter">foreign key</text>
          <text x={280} y={0} fill={T.cyan} fontSize={10} fontFamily="JetBrains Mono" fontWeight={700}>UK</text>
          <text x={310} y={0} fill={T.ink2} fontSize={10} fontFamily="Inter">unique key</text>
        </g>
      </g>

      <text
        x={850} y={1080}
        textAnchor="middle"
        fill={T.ink3}
        fontFamily="JetBrains Mono"
        fontSize={11}
        letterSpacing="0.18em"
      >
        ERD · DATABASE SCHEMA · COURSE REGISTRATION MANAGEMENT SYSTEM
      </text>
    </DiagramFrame>
  );
}
