import { ClassBox, DiagramFrame, T, Line } from './_atoms';

/**
 * Re-rendered UML Class Diagram for the Course Registration Management System.
 * Hierarchy: User (abstract) → Student, Advisor, Admin
 * + 9 domain classes wired together by composition, association, inheritance.
 *
 * Viewbox is 1600×1200 to match the original aspect ratio.
 */
export function ClassDiagram() {
  return (
    <DiagramFrame width={1600} height={1200}>
      {/* ─────── USER ─────── */}
      <ClassBox
        x={620} y={20}
        width={300}
        name="User"
        abstract
        tone={T.cyan}
        attributes={['+ id : int', '+ email : string', '+ name : string', '+ password : string', '+ role : string', '+ emailVerifiedAt : datetime']}
        methods={['+ authenticate()', '+ viewNotifications()', '+ readNotification()']}
      />

      {/* ─────── 3 SUBCLASSES ─────── */}
      <ClassBox
        x={130} y={300}
        width={280}
        name="Student"
        tone={T.violet}
        attributes={['+ studentNumber : string', '+ major : string', '+ gpa : float', '+ accumulatedCredits : int']}
        methods={['+ viewCourses()', '+ checkEligibility()', '+ addItemToRequest()', '+ submitRegistrationRequest()', '+ editRegistrationRequest()', '+ swapSection()', '+ withdrawSection()']}
      />
      <ClassBox
        x={485} y={300}
        width={310}
        name="Advisor"
        tone={T.cyan}
        attributes={['+ title : string']}
        methods={['+ reviewRegistrationRequest()', '+ approveRegistrationRequest()', '+ rejectRegistrationRequest()', '+ returnRegistrationRequest()', '+ bulkApproveRequests()', '+ grantOverride()']}
      />
      <ClassBox
        x={870} y={300}
        width={290}
        name="Admin"
        tone={T.warm}
        methods={['+ createCourse()', '+ updateCourse()', '+ deleteCourse()', '+ createSemester()', '+ updateSemester()', '+ closeSemester()', '+ archiveSemester()', '+ createAccount()', '+ updateAccount()', '+ deactivateAccount()', '+ viewOverridesReport()', '+ viewEscalationsReport()']}
      />

      {/* ─────── DOMAIN CLASSES ─────── */}
      <ClassBox
        x={620} y={655}
        width={280}
        name="RegistrationRequest"
        tone={T.pink}
        attributes={['+ status : string', '+ submittedAt : datetime']}
        methods={['+ submit()', '+ cancel()']}
      />
      <ClassBox
        x={620} y={870}
        width={280}
        name="RequestItem"
        tone={T.pink}
        attributes={['+ action : string', '+ status : string', '+ overrideFlag : boolean', '+ overrideReason : string']}
        methods={['+ flagOverride()']}
      />
      <ClassBox
        x={1230} y={300}
        width={260}
        name="Term"
        tone={T.warm}
        attributes={['+ name : string', '+ startDate : date', '+ endDate : date', '+ status : string']}
        methods={['+ openRegistrationWindow()', '+ closeRegistrationWindow()', '+ archive()']}
      />
      <ClassBox
        x={75} y={870}
        width={250}
        name="Enrollment"
        tone={T.violet}
        attributes={['+ status : string', '+ enrolledAt : datetime']}
        methods={['+ freeze()', '+ unfreeze()']}
      />
      <ClassBox
        x={1230} y={730}
        width={240}
        name="Course"
        tone={T.cyan}
        attributes={['+ code : string', '+ name : string', '+ credits : int', '+ description : string', '+ requiredTypes : list[string]']}
      />
      <ClassBox
        x={1230} y={970}
        width={240}
        name="Section"
        tone={T.cyan}
        attributes={['+ groupName : string', '+ type : string', '+ capacity : int', '+ instructorName : string']}
        methods={['+ getFillRate()', '+ hasCapacity()']}
      />
      <ClassBox
        x={1230} y={1160}
        width={240}
        name="SectionMeeting"
        tone={T.cyan}
        attributes={['+ day : string', '+ startTime : time', '+ endTime : time', '+ room : string']}
      />
      <ClassBox
        x={970} y={870}
        width={210}
        name="Department"
        tone={T.cyan}
        attributes={['+ code : string', '+ name : string']}
      />
      <ClassBox
        x={1230} y={20}
        width={210}
        name="Notification"
        tone={T.ink2}
        attributes={['+ title : string', '+ body : string', '+ channel : string', '+ readAt : datetime']}
        methods={['+ markAsRead()']}
      />
      <ClassBox
        x={1480} y={20}
        width={110}
        name="AuditLog"
        tone={T.ink2}
        attributes={['+ eventType : string', '+ description : string', '+ eventAt : datetime']}
      />

      {/* ─────── RELATIONSHIPS ─────── */}
      {/* Inheritance: User ← Student/Advisor/Admin */}
      <Line d="M 770 240 L 770 270 L 270 270 L 270 300" marker="inherit" />
      <Line d="M 770 240 L 770 270 L 640 270 L 640 300" marker="inherit" />
      <Line d="M 770 240 L 770 270 L 1015 270 L 1015 300" marker="inherit" />

      {/* User receives Notification */}
      <Line
        d="M 920 95 L 1230 95"
        marker="arrow"
        label="receives"
        labelXY={[1075, 88]}
      />
      <Line
        d="M 920 130 L 1480 130 L 1480 90"
        marker="arrow"
        label="logged by"
        labelXY={[1300, 124]}
      />

      {/* Advisor supervises Student */}
      <Line
        d="M 485 460 L 410 460"
        marker="arrow"
        label="supervises  0..*"
        labelXY={[448, 452]}
      />
      <Line d="M 485 470 L 410 470" />

      {/* Student → RegistrationRequest (submits) */}
      <Line
        d="M 410 620 L 620 720"
        marker="diamondFilled"
        label="submits 0..*"
        labelXY={[510, 660]}
      />
      {/* Advisor → RegistrationRequest (reviews) */}
      <Line
        d="M 640 620 L 720 655"
        marker="arrow"
        label="reviews"
        labelXY={[670, 630]}
      />

      {/* Term → RegistrationRequest (during) */}
      <Line
        d="M 1230 410 L 900 720"
        dashed
        label="opened during"
        labelXY={[1100, 580]}
      />
      {/* Term → Section schedules */}
      <Line
        d="M 1340 530 L 1340 970"
        label="schedules"
        labelXY={[1370, 750]}
      />

      {/* Department → Course offers */}
      <Line
        d="M 1180 920 L 1230 850"
        marker="arrow"
        label="offers"
        labelXY={[1190, 880]}
      />
      {/* Course self-loop prerequisite */}
      <Line
        d="M 1470 830 c 60 0 60 60 0 60"
        marker="arrow"
        label="prerequisite of"
        labelXY={[1530, 868]}
      />
      {/* Course → Section provides (composition) */}
      <Line
        d="M 1350 875 L 1350 970"
        marker="diamondFilled"
        label="provides 1..*"
        labelXY={[1390, 920]}
      />
      {/* Section → SectionMeeting meets at (composition) */}
      <Line
        d="M 1350 1078 L 1350 1160"
        marker="diamondFilled"
        label="meets at 1..*"
        labelXY={[1395, 1118]}
      />

      {/* RegistrationRequest → RequestItem (composition) */}
      <Line
        d="M 760 763 L 760 870"
        marker="diamondFilled"
        label="contains 1..*"
        labelXY={[810, 820]}
      />

      {/* RequestItem → Section targets */}
      <Line
        d="M 900 920 L 1230 1010"
        marker="arrow"
        label="targets 1"
        labelXY={[1060, 950]}
      />

      {/* Student → Enrollment (composition) */}
      <Line
        d="M 200 620 L 200 870"
        marker="diamondFilled"
        label="holds 0..*"
        labelXY={[225, 740]}
      />
      {/* Enrollment → Section enrolled in */}
      <Line
        d="M 325 975 L 1230 1015"
        marker="arrow"
        label="enrolled in 1"
        labelXY={[770, 985]}
      />

      {/* Title */}
      <text
        x={800} y={1200 - 12}
        textAnchor="middle"
        fill={T.ink3}
        fontFamily="JetBrains Mono"
        fontSize={11}
        letterSpacing="0.18em"
      >
        CLASS DIAGRAM · COURSE REGISTRATION MANAGEMENT SYSTEM
      </text>
    </DiagramFrame>
  );
}
