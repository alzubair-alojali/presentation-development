import {
  DiagramFrame, Participant, Activation, Message, Frame, FrameDivider, T,
} from './_atoms';

/* ─────────────────────────────────────────────────────────
   Sequence 1 — View Courses (S04)
   Actor: Student   Participants: Courses Interface, Course Controller, Database
   ───────────────────────────────────────────────────────── */
export function SequenceViewCourses() {
  const X = { actor: 80, ui: 280, ctrl: 540, db: 800 };
  const TOP = 90, BOT = 880;
  return (
    <DiagramFrame width={900} height={920}>
      <Participant x={X.actor} top={TOP} bottom={BOT} label="Student" kind="actor" tone={T.violet} />
      <Participant x={X.ui}    top={TOP} bottom={BOT} label=":Courses Interface" tone={T.cyan} />
      <Participant x={X.ctrl}  top={TOP} bottom={BOT} label=":Course Controller" tone={T.cyan} />
      <Participant x={X.db}    top={TOP} bottom={BOT} label=":Database" tone={T.warm} />

      <Message fromX={X.actor} toX={X.ui} y={120} label="open Student Dashboard" />
      <Activation x={X.ui} y={120} h={140} />

      <Message fromX={X.ui} toX={X.ctrl} y={150} label="viewCourses()" />
      <Activation x={X.ctrl} y={150} h={110} />

      <Message self fromX={X.ctrl} toX={X.ctrl} y={175} label="validate inputs" />

      <Message fromX={X.ctrl} toX={X.db} y={215} label="fetch published sections for current term" />
      <Activation x={X.db} y={215} h={26} />
      <Message fromX={X.db} toX={X.ctrl} y={245} label="sections list" returnArrow dashed />

      <Frame x={X.ui - 70} y={278} w={X.db - X.ui + 130} h={100} kind="loop" label="for each course in list" />
      <Message fromX={X.ctrl} toX={X.ctrl} y={305} label="checkEligibility()" self />
      <Message fromX={X.ctrl} toX={X.db} y={340} label="fetch student enrollments and prerequisites" />
      <Activation x={X.db} y={340} h={26} />
      <Message fromX={X.db} toX={X.ctrl} y={368} label="eligibility data" returnArrow dashed />

      <Message fromX={X.ctrl} toX={X.ui} y={400} label="courses with eligibility badges" returnArrow dashed />
      <Message fromX={X.ui} toX={X.actor} y={425} label="display courses" returnArrow dashed />

      <Message fromX={X.actor} toX={X.ui} y={465} label="apply search or filter" />
      <Activation x={X.ui} y={465} h={70} />
      <Message fromX={X.ui} toX={X.ctrl} y={490} label="filter courses" />
      <Activation x={X.ctrl} y={490} h={30} />
      <Message fromX={X.ctrl} toX={X.ui} y={518} label="filtered list" returnArrow dashed />
      <Message fromX={X.ui} toX={X.actor} y={545} label="display filtered courses" returnArrow dashed />

      <Frame x={X.actor - 30} y={580} w={X.db - X.actor + 90} h={240} kind="alt" label="course selected" />
      <Message fromX={X.actor} toX={X.ui} y={612} label="select a course" />
      <Activation x={X.ui} y={612} h={120} />
      <Message fromX={X.ui} toX={X.ctrl} y={638} label="get course details" />
      <Activation x={X.ctrl} y={638} h={70} />
      <Message fromX={X.ctrl} toX={X.db} y={662} label="fetch sections, meetings, instructor" />
      <Activation x={X.db} y={662} h={26} />
      <Message fromX={X.db} toX={X.ctrl} y={690} label="course details" returnArrow dashed />
      <Message fromX={X.ctrl} toX={X.ui} y={718} label="course details" returnArrow dashed />
      <Message fromX={X.ui} toX={X.actor} y={745} label="display Course Details screen" returnArrow dashed />

      <FrameDivider x={X.actor - 30} y={775} w={X.db - X.actor + 90} label="no selection" />
      <Message fromX={X.ui} toX={X.actor} y={805} label="remain on courses list" returnArrow dashed />
    </DiagramFrame>
  );
}

/* ─────────────────────────────────────────────────────────
   Sequence 2 — Create Registration Request (S05)
   ───────────────────────────────────────────────────────── */
export function SequenceCreateRequest() {
  const X = { actor: 80, ui: 280, ctrl: 540, db: 800, mail: 1010 };
  const TOP = 90, BOT = 980;
  return (
    <DiagramFrame width={1100} height={1020}>
      <Participant x={X.actor} top={TOP} bottom={BOT} label="Student" kind="actor" tone={T.violet} />
      <Participant x={X.ui}    top={TOP} bottom={BOT} label=":Request Interface" tone={T.cyan} />
      <Participant x={X.ctrl}  top={TOP} bottom={BOT} label=":Request Controller" tone={T.cyan} />
      <Participant x={X.db}    top={TOP} bottom={BOT} label=":Database" tone={T.warm} />
      <Participant x={X.mail}  top={TOP} bottom={BOT} label=":Mail Service" tone={T.pink} />

      <Message fromX={X.actor} toX={X.ui} y={120} label="click Add to Request" />
      <Activation x={X.ui} y={120} h={300} />
      <Message fromX={X.ui} toX={X.ctrl} y={150} label="addItemToRequest()" />
      <Activation x={X.ctrl} y={150} h={260} />
      <Message self fromX={X.ctrl} toX={X.ctrl} y={180} label="validate inputs" />
      <Message fromX={X.ctrl} toX={X.db} y={222} label="check capacity, conflicts, prerequisites and credit limit" />
      <Activation x={X.db} y={222} h={26} />
      <Message fromX={X.db} toX={X.ctrl} y={252} label="validation result" returnArrow dashed />

      <Frame x={X.actor - 30} y={285} w={X.mail - X.actor + 80} h={130} kind="alt" label="all checks pass" />
      <Message fromX={X.ctrl} toX={X.db} y={320} label="insert request items" />
      <Activation x={X.db} y={320} h={26} />
      <Message fromX={X.db} toX={X.ctrl} y={348} label="items saved" returnArrow dashed />
      <Message fromX={X.ctrl} toX={X.ui} y={378} label="items added" returnArrow dashed />
      <Message fromX={X.ui} toX={X.actor} y={398} label="display updated request" returnArrow dashed />
      <FrameDivider x={X.actor - 30} y={410} w={X.mail - X.actor + 80} label="validation fails" />
      <Message fromX={X.ctrl} toX={X.ui} y={428} label="error message" returnArrow dashed />
      <Message fromX={X.ui} toX={X.actor} y={448} label="display error" returnArrow dashed />

      <Message fromX={X.actor} toX={X.ui} y={500} label="click Submit Request" />
      <Activation x={X.ui} y={500} h={420} />
      <Message fromX={X.ui} toX={X.ctrl} y={528} label="submitRegistrationRequest()" />
      <Activation x={X.ctrl} y={528} h={380} />
      <Message self fromX={X.ctrl} toX={X.ctrl} y={558} label="validate inputs" />

      <Message fromX={X.ctrl} toX={X.db} y={605} label="create pending registration_requests row" />
      <Activation x={X.db} y={605} h={26} />
      <Message fromX={X.db} toX={X.ctrl} y={635} label="request id" returnArrow dashed />

      <Message fromX={X.ctrl} toX={X.db} y={665} label="write audit log entry" />
      <Activation x={X.db} y={665} h={26} />
      <Message fromX={X.db} toX={X.ctrl} y={695} label="ok" returnArrow dashed />

      <Message fromX={X.ctrl} toX={X.mail} y={725} label="queue advisor notification" />
      <Activation x={X.mail} y={725} h={26} />
      <Message fromX={X.mail} toX={X.ctrl} y={755} label="queued" returnArrow dashed />

      <Message fromX={X.ctrl} toX={X.ui} y={790} label="submission confirmed" returnArrow dashed />
      <Message fromX={X.ui} toX={X.actor} y={812} label="open My Requests showing Pending" returnArrow dashed />
    </DiagramFrame>
  );
}

/* ─────────────────────────────────────────────────────────
   Sequence 3 — Approve Registration Request (S10)
   ───────────────────────────────────────────────────────── */
export function SequenceApproveRequest() {
  const X = { actor: 80, ui: 280, ctrl: 540, db: 800, mail: 1010 };
  const TOP = 90, BOT = 940;
  return (
    <DiagramFrame width={1100} height={980}>
      <Participant x={X.actor} top={TOP} bottom={BOT} label="Advisor" kind="actor" tone={T.cyan} />
      <Participant x={X.ui}    top={TOP} bottom={BOT} label=":Advisor Interface" tone={T.cyan} />
      <Participant x={X.ctrl}  top={TOP} bottom={BOT} label=":Request Controller" tone={T.cyan} />
      <Participant x={X.db}    top={TOP} bottom={BOT} label=":Database" tone={T.warm} />
      <Participant x={X.mail}  top={TOP} bottom={BOT} label=":Mail Service" tone={T.pink} />

      <Message fromX={X.actor} toX={X.ui} y={120} label="open Advisor Dashboard" />
      <Activation x={X.ui} y={120} h={140} />
      <Message fromX={X.ui} toX={X.ctrl} y={150} label="reviewRegistrationRequest()" />
      <Activation x={X.ctrl} y={150} h={90} />
      <Message fromX={X.ctrl} toX={X.db} y={180} label="fetch pending requests sorted oldest first" />
      <Activation x={X.db} y={180} h={26} />
      <Message fromX={X.db} toX={X.ctrl} y={210} label="request queue" returnArrow dashed />
      <Message fromX={X.ctrl} toX={X.ui} y={235} label="pending requests list" returnArrow dashed />
      <Message fromX={X.ui} toX={X.actor} y={258} label="display request queue" returnArrow dashed />

      <Message fromX={X.actor} toX={X.ui} y={300} label="click a request" />
      <Activation x={X.ui} y={300} h={140} />
      <Message fromX={X.ui} toX={X.ctrl} y={330} label="get request details" />
      <Activation x={X.ctrl} y={330} h={90} />
      <Message fromX={X.ctrl} toX={X.db} y={360} label="fetch student info, items, schedule" />
      <Activation x={X.db} y={360} h={26} />
      <Message fromX={X.db} toX={X.ctrl} y={390} label="full context" returnArrow dashed />
      <Message fromX={X.ctrl} toX={X.ui} y={415} label="request details" returnArrow dashed />
      <Message fromX={X.ui} toX={X.actor} y={438} label="display Request Review screen" returnArrow dashed />

      <Message fromX={X.actor} toX={X.ui} y={485} label="click Approve" />
      <Activation x={X.ui} y={485} h={420} />
      <Message fromX={X.ui} toX={X.ctrl} y={515} label="approveRegistrationRequest()" />
      <Activation x={X.ctrl} y={515} h={380} />
      <Message self fromX={X.ctrl} toX={X.ctrl} y={545} label="validate inputs" />

      <Frame x={X.actor - 30} y={585} w={X.mail - X.actor + 80} h={300} kind="alt" label="all required inputs valid" />
      <Message fromX={X.ctrl} toX={X.db} y={618} label="update request status to Approved" />
      <Activation x={X.db} y={618} h={26} />
      <Message fromX={X.db} toX={X.ctrl} y={648} label="ok" returnArrow dashed />
      <Message fromX={X.ctrl} toX={X.db} y={676} label="create or update enrollments" />
      <Activation x={X.db} y={676} h={26} />
      <Message fromX={X.db} toX={X.ctrl} y={706} label="enrollments saved" returnArrow dashed />
      <Message fromX={X.ctrl} toX={X.db} y={734} label="write audit log entry" />
      <Activation x={X.db} y={734} h={26} />
      <Message fromX={X.db} toX={X.ctrl} y={764} label="ok" returnArrow dashed />
      <Message fromX={X.ctrl} toX={X.mail} y={794} label="queue approval notification to student" />
      <Activation x={X.mail} y={794} h={26} />
      <Message fromX={X.mail} toX={X.ctrl} y={824} label="queued" returnArrow dashed />
      <Message fromX={X.ctrl} toX={X.ui} y={854} label="approval confirmed" returnArrow dashed />
      <Message fromX={X.ui} toX={X.actor} y={876} label="display success" returnArrow dashed />
      <FrameDivider x={X.actor - 30} y={886} w={X.mail - X.actor + 80} label="validation fails" />
      <Message fromX={X.ctrl} toX={X.ui} y={903} label="error message" returnArrow dashed />
    </DiagramFrame>
  );
}

/* ─────────────────────────────────────────────────────────
   Sequence 4 — Create a Course (S15)
   ───────────────────────────────────────────────────────── */
export function SequenceCreateCourse() {
  const X = { actor: 80, ui: 280, ctrl: 540, db: 800 };
  const TOP = 90, BOT = 720;
  return (
    <DiagramFrame width={900} height={760}>
      <Participant x={X.actor} top={TOP} bottom={BOT} label="Admin" kind="actor" tone={T.warm} />
      <Participant x={X.ui}    top={TOP} bottom={BOT} label=":Admin Interface" tone={T.warm} />
      <Participant x={X.ctrl}  top={TOP} bottom={BOT} label=":Course Controller" tone={T.cyan} />
      <Participant x={X.db}    top={TOP} bottom={BOT} label=":Database" tone={T.warm} />

      <Message fromX={X.actor} toX={X.ui} y={120} label="click Create Course" />
      <Activation x={X.ui} y={120} h={500} />
      <Message fromX={X.ui} toX={X.actor} y={148} label="open Create Course form" returnArrow dashed />

      <Message fromX={X.actor} toX={X.ui} y={190} label="enter course details and click Save" />
      <Message fromX={X.ui} toX={X.ctrl} y={222} label="createCourse()" />
      <Activation x={X.ctrl} y={222} h={350} />
      <Message self fromX={X.ctrl} toX={X.ctrl} y={252} label="validate inputs" />

      <Frame x={X.actor - 30} y={295} w={X.db - X.actor + 90} h={290} kind="alt" label="inputs valid" />
      <Message fromX={X.ctrl} toX={X.db} y={330} label="insert new course" />
      <Activation x={X.db} y={330} h={26} />
      <Message fromX={X.db} toX={X.ctrl} y={360} label="course id" returnArrow dashed />
      <Message fromX={X.ctrl} toX={X.db} y={390} label="write audit log entry" />
      <Activation x={X.db} y={390} h={26} />
      <Message fromX={X.db} toX={X.ctrl} y={420} label="ok" returnArrow dashed />
      <Message fromX={X.ctrl} toX={X.ui} y={450} label="course created" returnArrow dashed />
      <Message fromX={X.ui} toX={X.actor} y={478} label="open the course page" returnArrow dashed />
      <FrameDivider x={X.actor - 30} y={500} w={X.db - X.actor + 90} label="validation fails" />
      <Message fromX={X.ctrl} toX={X.ui} y={528} label="error message" returnArrow dashed />
      <Message fromX={X.ui} toX={X.actor} y={555} label="display error" returnArrow dashed />
    </DiagramFrame>
  );
}
