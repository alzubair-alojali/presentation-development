import {
  DiagramFrame, StartNode, EndNode, ActionNode, Decision, Merge,
  NoteBubble, Flow, T,
} from './_atoms';

/* ───────────────────────────────────────────────────────────
   Activity 1 — View Courses (S04)
   ─────────────────────────────────────────────────────────── */
export function ActivityViewCourses() {
  return (
    <DiagramFrame width={560} height={920}>
      <StartNode x={280} y={20} />
      <Flow d="M 280 30 L 280 50" />

      <ActionNode x={180} y={50} w={200} label="Open Student Dashboard" />
      <Flow d="M 280 86 L 280 110" />

      <ActionNode x={180} y={110} w={200} label="Click Browse Courses" />
      <NoteBubble x={400} y={114} w={160} lines={['Is the registration', 'window open?']} />
      <Flow d="M 280 146 L 280 170" />

      <Decision cx={280} cy={185} />
      <Flow d="M 250 185 L 130 185 L 130 220" />
      <Flow d="M 310 185 L 430 185 L 430 220" />

      <ActionNode x={20} y={220} w={220} label={'Load courses with\neligibility badges'} />
      <ActionNode x={320} y={220} w={220} label={'Load courses in\nread-only mode'} />

      <Flow d="M 130 268 L 130 290 L 280 290" />
      <Flow d="M 430 268 L 430 290 L 280 290" />
      <Merge cx={280} cy={295} />
      <Flow d="M 280 308 L 280 335" />

      <ActionNode x={180} y={335} w={200} label="Apply filters and search" />
      <NoteBubble x={400} y={340} w={160} lines={['Any matching', 'course found?']} />
      <Flow d="M 280 371 L 280 395" />

      <Decision cx={280} cy={410} />
      <Flow d="M 250 410 L 130 410 L 130 445" />
      <Flow d="M 310 410 L 430 410 L 430 445" />

      <ActionNode x={20} y={445} w={220} label="Display course list" />
      <ActionNode x={320} y={445} w={220} label="Display error" />
      <NoteBubble x={400} y={500} w={160} lines={['Exception E1:', 'No matching courses.']} />

      <Flow d="M 430 481 L 430 505" />
      <EndNode x={430} y={518} />

      <Flow d="M 130 481 L 130 510" />
      <Merge cx={130} cy={520} />
      <Flow d="M 130 533 L 130 565" />

      <ActionNode x={30} y={565} w={200} label="Select a course" />
      <Flow d="M 130 601 L 130 625" />

      <ActionNode x={20} y={625} w={220} label="Open Course Details screen" />
      <Flow d="M 130 661 L 130 685" />

      <ActionNode x={10} y={685} w={240} h={64} label={'Display sections, instructors,\ngroups, capacity, fill rate\nand weekly meeting times'} />
      <NoteBubble x={300} y={693} w={170} lines={['Eligible to register', 'for this course?']} />
      <Flow d="M 130 753 L 130 778" />

      <Decision cx={130} cy={793} />
      <Flow d="M 100 793 L 20 793 L 20 825" />
      <Flow d="M 160 793 L 240 793 L 240 825" />

      <ActionNode x={0} y={825} w={170} label="Show Add to Request action" />
      <ActionNode x={170} y={825} w={170} label="Show ineligibility reason" />

      <Flow d="M 85 866 L 85 885" />
      <Flow d="M 255 866 L 255 885" />
      <Merge cx={170} cy={890} />
      <EndNode x={170} y={905} />
    </DiagramFrame>
  );
}

/* ───────────────────────────────────────────────────────────
   Activity 2 — Create Registration Request (S05)
   ─────────────────────────────────────────────────────────── */
export function ActivityCreateRequest() {
  return (
    <DiagramFrame width={560} height={960}>
      <StartNode x={280} y={20} />
      <Flow d="M 280 30 L 280 50" />

      <ActionNode x={180} y={50}  w={200} label="Open Student Dashboard" />
      <Flow d="M 280 86 L 280 102" />
      <ActionNode x={180} y={102} w={200} label="Click Browse Courses" />
      <Flow d="M 280 138 L 280 156" />
      <ActionNode x={180} y={156} w={200} label="Open Course Details screen" />
      <Flow d="M 280 192 L 280 210" />
      <ActionNode x={180} y={210} w={200} label="Pick a lecture group" />
      <Flow d="M 280 246 L 280 264" />

      <ActionNode x={180} y={264} w={200} label="Click Add to Request" />
      <NoteBubble x={400} y={258} w={160} lines={['Do all checks pass?', '(capacity, conflict,', 'prereq, credit limit)']} />
      <Flow d="M 280 300 L 280 325" />

      <Decision cx={280} cy={340} />
      <Flow d="M 250 340 L 130 340 L 130 370" />
      <Flow d="M 310 340 L 430 340 L 430 370" />

      <ActionNode x={20} y={370} w={220} label="Add items to the request" />
      <ActionNode x={320} y={370} w={220} label="Display error" />
      <NoteBubble x={400} y={425} w={170} lines={['Exceptions:', 'E1 Section full', 'E2 Schedule conflict', 'E3 Prereq missing', 'E4 Credit limit']} />

      <Flow d="M 430 406 L 430 440" />
      <EndNode x={430} y={450} />

      <Flow d="M 130 406 L 130 460" />
      <ActionNode x={180} y={462} w={200} label="Click Submit Request" />
      <Flow d="M 130 406 L 130 480 L 180 480" />
      <NoteBubble x={400} y={462} w={150} lines={['Are all required', 'inputs valid?']} />
      <Flow d="M 280 498 L 280 525" />

      <Decision cx={280} cy={540} />
      <Flow d="M 250 540 L 130 540 L 130 570" />
      <Flow d="M 310 540 L 430 540 L 430 570" />

      <ActionNode x={20} y={570} w={220} label={'Create pending\nregistration request'} h={48} />
      <ActionNode x={320} y={570} w={220} label="Display error" />
      <NoteBubble x={400} y={628} w={160} lines={['Exception E5:', 'Submission failed.']} />

      <Flow d="M 430 606 L 430 640" />
      <EndNode x={430} y={655} />

      <Flow d="M 130 618 L 130 645" />
      <ActionNode x={50} y={645} w={160} label="Write audit log entry" />
      <Flow d="M 130 681 L 130 705" />
      <ActionNode x={30} y={705} w={200} label="Send notification to advisor" />
      <Flow d="M 130 741 L 130 765" />
      <ActionNode x={10} y={765} w={240} h={48} label={'Open My Requests screen\nshowing status Pending'} />
      <Flow d="M 130 813 L 130 840" />
      <EndNode x={130} y={855} />
    </DiagramFrame>
  );
}

/* ───────────────────────────────────────────────────────────
   Activity 3 — Approve Registration Request (S10)
   ─────────────────────────────────────────────────────────── */
export function ActivityApproveRequest() {
  return (
    <DiagramFrame width={560} height={820}>
      <StartNode x={280} y={20} />
      <Flow d="M 280 30 L 280 50" />

      <ActionNode x={180} y={50}  w={200} label="Open Advisor Dashboard" />
      <Flow d="M 280 86 L 280 102" />
      <ActionNode x={140} y={102} w={280} h={48} label={'Display queue of pending requests\nsorted oldest first'} />
      <Flow d="M 280 150 L 280 170" />

      <ActionNode x={180} y={170} w={200} label="Click a request to open" />
      <Flow d="M 280 206 L 280 224" />

      <ActionNode x={180} y={224} w={200} label="Open Request Review screen" />
      <Flow d="M 280 260 L 280 278" />

      <ActionNode x={120} y={278} w={320} h={48} label={'Display student info, requested items,\nstatus badges, existing schedule'} />
      <Flow d="M 280 326 L 280 344" />

      <ActionNode x={140} y={344} w={280} label="Review each item and add comments" />
      <Flow d="M 280 380 L 280 398" />

      <ActionNode x={180} y={398} w={200} label="Click Approve" />
      <NoteBubble x={400} y={394} w={150} lines={['Are all required', 'inputs valid?']} />
      <Flow d="M 280 434 L 280 460" />

      <Decision cx={280} cy={475} />
      <Flow d="M 250 475 L 130 475 L 130 510" />
      <Flow d="M 310 475 L 430 475 L 430 510" />

      <ActionNode x={20} y={510} w={220} h={48} label={'Update request status\nto Approved'} />
      <ActionNode x={320} y={510} w={220} label="Display error" />
      <NoteBubble x={400} y={568} w={160} lines={['Exception E1:', 'Missing required input.']} />

      <Flow d="M 430 558 L 430 590" />
      <EndNode x={430} y={605} />

      <Flow d="M 130 558 L 130 580" />
      <ActionNode x={50} y={580} w={160} label="Create or update enrollments" />
      <Flow d="M 130 616 L 130 640" />
      <ActionNode x={50} y={640} w={160} label="Write audit log entry" />
      <Flow d="M 130 676 L 130 700" />
      <ActionNode x={30} y={700} w={200} label="Send approval notification to student" />
      <Flow d="M 130 736 L 130 770" />
      <EndNode x={130} y={785} />
    </DiagramFrame>
  );
}

/* ───────────────────────────────────────────────────────────
   Activity 4 — Create a Course (S15)
   ─────────────────────────────────────────────────────────── */
export function ActivityCreateCourse() {
  return (
    <DiagramFrame width={560} height={700}>
      <StartNode x={280} y={20} />
      <Flow d="M 280 30 L 280 50" />

      <ActionNode x={180} y={50}  w={200} label="Open Admin Dashboard" />
      <Flow d="M 280 86 L 280 102" />
      <ActionNode x={170} y={102} w={220} label="Navigate to Courses section" />
      <Flow d="M 280 138 L 280 156" />
      <ActionNode x={180} y={156} w={200} label="Click Create Course" />
      <Flow d="M 280 192 L 280 210" />
      <ActionNode x={170} y={210} w={220} label="Open Create Course form" />
      <Flow d="M 280 246 L 280 264" />
      <ActionNode x={140} y={264} w={280} h={62} label={'Enter code, name, credits,\ndepartment, prerequisites\nand required types'} />
      <Flow d="M 280 326 L 280 348" />

      <ActionNode x={200} y={348} w={160} label="Click Save" />
      <NoteBubble x={380} y={348} w={170} lines={['Are all required', 'inputs valid?']} />
      <Flow d="M 280 384 L 280 408" />

      <Decision cx={280} cy={423} />
      <Flow d="M 250 423 L 130 423 L 130 455" />
      <Flow d="M 310 423 L 430 423 L 430 455" />

      <ActionNode x={20} y={455} w={220} label="Save the new course" />
      <ActionNode x={320} y={455} w={220} label="Display error" />
      <NoteBubble x={400} y={510} w={170} lines={['Exception E1:', 'Missing or invalid input', 'in the course form.']} />

      <Flow d="M 430 491 L 430 530" />
      <EndNode x={430} y={545} />

      <Flow d="M 130 491 L 130 520" />
      <ActionNode x={50} y={520} w={160} label="Write audit log entry" />
      <Flow d="M 130 556 L 130 580" />
      <ActionNode x={50} y={580} w={160} label="Open the course page" />
      <Flow d="M 130 616 L 130 645" />
      <EndNode x={130} y={660} />
    </DiagramFrame>
  );
}
