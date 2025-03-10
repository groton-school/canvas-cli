import { DateTimeString, URLString } from '@battis/descriptive-types';
import { Colors } from '@battis/qui-cli.colors';
import { Log } from '@battis/qui-cli.log';
import { isError } from '@battis/typescript-tricks';
import ora from 'ora';
import { canvas, stringify } from './Client.js';
import * as Courses from './Courses.js';

export type Grade = {
  /** The URL to the Canvas web UI page for the user's grades, if this is a student
   * enrollment. */
  html_url?: URLString;
  /** The user's current grade in the class. Only included if user has permissions
   * to view this grade. */
  current_grade?: string;
  /** The user's final grade for the class. Only included if user has permissions
   * to view this grade. */
  final_grade?: string;
  /** The user's current score in the class. Only included if user has permissions
   * to view this score. */
  current_score?: string;
  /** The user's final score for the class. Only included if user has permissions
   * to view this score. */
  final_score?: string;
  /** The total points the user has earned in the class. Only included if user has
   * permissions to view this score and 'current_points' is passed in the
   * request's 'include' parameter. */
  current_points?: number;
  /** The user's current grade in the class including muted/unposted assignments.
   * Only included if user has permissions to view this grade, typically teachers,
   * TAs, and admins. */
  unposted_current_grade?: string;
  /** The user's final grade for the class including muted/unposted assignments.
   * Only included if user has permissions to view this grade, typically teachers,
   * TAs, and admins.. */
  unposted_final_grade?: string;
  /** The user's current score in the class including muted/unposted assignments.
   * Only included if user has permissions to view this score, typically teachers,
   * TAs, and admins.. */
  unposted_current_score?: string;
  /** The user's final score for the class including muted/unposted assignments.
   * Only included if user has permissions to view this score, typically teachers,
   * TAs, and admins.. */
  unposted_final_score?: string;
  /** The total points the user has earned in the class, including muted/unposted
   * assignments. Only included if user has permissions to view this score
   * (typically teachers, TAs, and admins) and 'current_points' is passed in the
   * request's 'include' parameter. */
  unposted_current_points?: number;
};

export type Model = {
  /** The ID of the enrollment. */
  id: number;
  /** The unique id of the course. */
  course_id: number;
  /** The SIS Course ID in which the enrollment is associated. Only displayed if
   * present. This field is only included if the user has permission to view SIS
   * information. */
  sis_course_id?: string;
  /** The Course Integration ID in which the enrollment is associated. This field
   * is only included if the user has permission to view SIS information. */
  course_integration_id?: string;
  /** The unique id of the user's section. */
  course_section_id: number;
  /** The Section Integration ID in which the enrollment is associated. This field
   * is only included if the user has permission to view SIS information. */
  section_integration_id?: string;
  /** The SIS Account ID in which the enrollment is associated. Only displayed if
   * present. This field is only included if the user has permission to view SIS
   * information. */
  sis_account_id?: string;
  /** The SIS Section ID in which the enrollment is associated. Only displayed if
   * present. This field is only included if the user has permission to view SIS
   * information. */
  sis_section_id?: string;
  /** The SIS User ID in which the enrollment is associated. Only displayed if
   * present. This field is only included if the user has permission to view SIS
   * information. */
  sis_user_id?: string;
  /** The state of the user's enrollment in the course. */
  enrollment_state: string;
  /** User can only access his or her own course section. */
  limit_privileges_to_course_section: boolean;
  /** The unique identifier for the SIS import. This field is only included if the
   * user has permission to manage SIS information. */
  sis_import_id?: string;
  /** The unique id of the user's account. */
  root_account_id: number;
  /** The enrollment type. One of 'StudentEnrollment', 'TeacherEnrollment',
   * 'TaEnrollment', 'DesignerEnrollment', 'ObserverEnrollment'. */
  type:
    | 'StudentEnrollment'
    | 'TeacherEnrollment'
    | 'TaEnrollment'
    | 'DesignerEnrollment'
    | 'ObserverEnrollment';
  /** The unique id of the user. */
  user_id: number;
  /** The unique id of the associated user. Will be null unless type is
   * ObserverEnrollment. */
  associated_user_id: number | null;
  /** The enrollment role, for course-level permissions. This field will match
   * `type` if the enrollment role has not been customized. */
  role: string;
  /** The id of the enrollment role. */
  role_id: number;
  /** The created time of the enrollment, in ISO8601 format. */
  created_at: DateTimeString<'ISO'>;
  /** The updated time of the enrollment, in ISO8601 format. */
  updated_at: DateTimeString<'ISO'>;
  /** The start time of the enrollment, in ISO8601 format. */
  start_at: DateTimeString<'ISO'>;
  /** The end time of the enrollment, in ISO8601 format. */
  end_at: DateTimeString<'ISO'>;
  /** The last activity time of the user for the enrollment, in ISO8601 format. */
  last_activity_at: DateTimeString<'ISO'>;
  /** The last attended date of the user for the enrollment in a course, in ISO8601
   * format. */
  last_attended_at: DateTimeString<'ISO'>;
  /** The total activity time of the user for the enrollment, in seconds. */
  total_activity_time: number;
  /** The URL to the Canvas web UI page for this course enrollment. */
  html_url: URLString;
  /** The URL to the Canvas web UI page containing the grades associated with this
   * enrollment. */
  grades: Grade;
  /** A description of the user. */
  user: any;
  /** The user's override grade for the course. */
  override_grade: string;
  /** The user's override score for the course. */
  override_score: number;
  /** The user's current grade in the class including muted/unposted assignments.
   * Only included if user has permissions to view this grade, typically teachers,
   * TAs, and admins. */
  unposted_current_grade?: string;
  /** The user's final grade for the class including muted/unposted assignments.
   * Only included if user has permissions to view this grade, typically teachers,
   * TAs, and admins.. */
  unposted_final_grade?: string;
  /** The user's current score in the class including muted/unposted assignments.
   * Only included if user has permissions to view this score, typically teachers,
   * TAs, and admins.. */
  unposted_current_score?: string;
  /** The user's final score for the class including muted/unposted assignments.
   * Only included if user has permissions to view this score, typically teachers,
   * TAs, and admins.. */
  unposted_final_score?: string;
  /** optional: Indicates whether the course the enrollment belongs to has grading
   * periods set up. (applies only to student enrollments, and only available in
   * course endpoints) */
  has_grading_periods?: boolean;
  /** optional: Indicates whether the course the enrollment belongs to has the
   * Display Totals for 'All Grading Periods' feature enabled. (applies only to
   * student enrollments, and only available in course endpoints) */
  totals_for_all_grading_periods_option?: boolean;
  /** optional: The name of the currently active grading period, if one exists. If
   * the course the enrollment belongs to does not have grading periods, or if no
   * currently active grading period exists, the value will be null. (applies only
   * to student enrollments, and only available in course endpoints) */
  current_grading_period_title?: string;
  /** optional: The id of the currently active grading period, if one exists. If
   * the course the enrollment belongs to does not have grading periods, or if no
   * currently active grading period exists, the value will be null. (applies only
   * to student enrollments, and only available in course endpoints) */
  current_grading_period_id: number;
  /** The user's override grade for the current grading period. */
  current_period_override_grade: string;
  /** The user's override score for the current grading period. */
  current_period_override_score: number;
  /** optional: The student's score in the course for the current grading period,
   * including muted/unposted assignments. Only included if user has permission to
   * view this score, typically teachers, TAs, and admins. If the course the
   * enrollment belongs to does not have grading periods, or if no currently
   * active grading period exists, the value will be null. (applies only to
   * student enrollments, and only available in course endpoints) */
  current_period_unposted_current_score?: number;
  /** optional: The student's score in the course for the current grading period,
   * including muted/unposted assignments and including ungraded assignments with
   * a score of 0. Only included if user has permission to view this score,
   * typically teachers, TAs, and admins. If the course the enrollment belongs to
   * does not have grading periods, or if no currently active grading period
   * exists, the value will be null. (applies only to student enrollments, and
   * only available in course endpoints) */
  current_period_unposted_final_score?: number;
  /** optional: The letter grade equivalent of
   * current_period_unposted_current_score, if available. Only included if user
   * has permission to view this grade, typically teachers, TAs, and admins. If
   * the course the enrollment belongs to does not have grading periods, or if no
   * currently active grading period exists, the value will be null. (applies only
   * to student enrollments, and only available in course endpoints) */
  current_period_unposted_current_grade?: string;
  /** optional: The letter grade equivalent of current_period_unposted_final_score,
   * if available. Only included if user has permission to view this grade,
   * typically teachers, TAs, and admins. If the course the enrollment belongs to
   * does not have grading periods, or if no currently active grading period
   * exists, the value will be null. (applies only to student enrollments, and
   * only available in course endpoints) */
  current_period_unposted_final_grade?: string;
};

type Parameters = {
  /** The start time of the enrollment, in ISO8601 format. e.g. 2012-04-18T23:08:51Z */
  'enrollment[start_at]'?: DateTimeString<'ISO'>;
  /** The end time of the enrollment, in ISO8601 format. e.g. 2012-04-18T23:08:51Z */
  'enrollment[end_at]'?: DateTimeString<'ISO'>;
  /** The ID of the user to be enrolled in the course. */
  'enrollment[user_id]': string;
  /** Enroll the user as a student, teacher, TA, observer, or designer. If no value is given, the type will be inferred by enrollment if supplied, otherwise ‘StudentEnrollment’ will be used.

    Allowed values:
    StudentEnrollment, TeacherEnrollment, TaEnrollment, ObserverEnrollment, DesignerEnrollment */
  'enrollment[type]':
    | 'StudentEnrollment'
    | 'TeacherEnrollment'
    | 'TaEnrollment'
    | 'ObserverEnrollment'
    | 'DesignerEnrollment';
  /** Assigns a custom course-level role to the user. */
  'enrollment[role_id]'?: number;
  /** If set to ‘active,’ student will be immediately enrolled in the course. Otherwise they will be required to accept a course invitation. Default is ‘invited.’.

    If set to ‘inactive’, student will be listed in the course roster for teachers, but will not be able to participate in the course until their enrollment is activated.

    Allowed values:
    active, invited, inactive */
  'enrollment[enrollment_state]'?: 'active' | 'invited' | 'inactive';
  /** The ID of the course section to enroll the student in. If the section-specific URL is used, this argument is redundant and will be ignored. */
  'enrollment[course_section_id]'?: number;
  /** If set, the enrollment will only allow the user to see and interact with users enrolled in the section given by course_section_id.

    For teachers and TAs, this includes grading privileges.

    Section-limited students will not see any users (including teachers and TAs) not enrolled in their sections.

    Users may have other enrollments that grant privileges to multiple sections in the same course. */
  'enrollment[limit_privileges_to_course_section]'?: boolean;
  /** If true, a notification will be sent to the enrolled user. Notifications are not sent by default. */
  'enrollment[notify]'?: boolean;
  /** If the current user is not allowed to manage enrollments in this course, but the course allows self-enrollment, the user can self- enroll as a student in the default section by passing in a valid code. When self-enrolling, the user_id must be ‘self’. The enrollment_state will be set to ‘active’ and all other arguments will be ignored. */
  'enrollment[self_enrollment_code]'?: string;
  /** If true, marks the enrollment as a self-enrollment, which gives students the ability to drop the course if desired. Defaults to false. */
  'enrollment[self_enrolled]'?: boolean;
  /** For an observer enrollment, the ID of a student to observe. This is a one-off operation; to automatically observe all a student’s enrollments (for example, as a parent), please use the User Observees API. */
  'enrollment[associated_user_id]'?: number;
  /** Required if the user is being enrolled from another trusted account. The unique identifier for the user (sis_user_id) must also be accompanied by the root_account parameter. The user_id will be ignored. */
  'enrollment[sis_user_id]'?: string;
  /** Required if the user is being enrolled from another trusted account. The unique identifier for the user (integration_id) must also be accompanied by the root_account parameter. The user_id will be ignored. */
  'enrollment[integration_id]'?: string;
  /** The domain of the account to search for the user. Will be a no-op unless the sis_user_id or integration_id parameter is also included. */
  root_account?: string;
};

type CreateOptions = {
  course: Courses.Model;
  args: Parameters;
};

export async function create({ course, args }: CreateOptions) {
  const spinner = ora(
    `Creating ${Colors.value(args['enrollment[type]'])} in ${Colors.value(course.name)} for user ${Colors.value(args['enrollment[sis_user_id]'] || args['enrollment[user_id]'])}`
  ).start();
  const result = (await canvas().fetch(
    `/api/v1/courses/${course.id}/enrollments`,
    { method: 'POST', body: new URLSearchParams(stringify(args)) }
  )) as Model;
  if (isError(result) || !result.id) {
    spinner.fail(
      `Error creating ${Colors.value(args['enrollment[type]'])} in ${Colors.value(course.name)} for user ${Colors.value(args['enrollment[sis_user_id]'] || args['enrollment[user_id]'])}`
    );
    throw new Error(
      `Error creating enrollment: ${Log.syntaxColor({
        ...Courses.basic(course),
        args: stringify(args),
        error: result
      })}`
    );
  }
  spinner.succeed(
    `Enrollment created in ${Colors.value(course.name)} for user ${Colors.value(args['enrollment[sis_user_id]'] || args['enrollment[user_id]'])}`
  );
  return result;
}
