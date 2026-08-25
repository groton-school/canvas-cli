import { JSONValue } from '@battis/typescript-tricks';
import { User } from './Users.js';

/**
 *
 */
export type Grade = {
  /**
   * The URL to the Canvas web UI page for the user's grades, if this is a student enrollment.
   *
   *
   */
  html_url: string;
  /**
   * The user's current grade in the class. Only included if user has permissions to view this grade.
   *
   *
   */
  current_grade: string;
  /**
   * The user's final grade for the class. Only included if user has permissions to view this grade.
   *
   *
   */
  final_grade: string;
  /**
   * The user's current score in the class. Only included if user has permissions to view this score.
   *
   *
   */
  current_score: string;
  /**
   * The user's final score for the class. Only included if user has permissions to view this score.
   *
   *
   */
  final_score: string;
  /**
   * The total points the user has earned in the class. Only included if user has permissions to view this score and 'current_points' is passed in the request's 'include' parameter.
   *
   * type: integer
   */
  current_points: number | string;
  /**
   * The user's current grade in the class including muted/unposted assignments. Only included if user has permissions to view this grade, typically teachers, TAs, and admins.
   *
   *
   */
  unposted_current_grade: string;
  /**
   * The user's final grade for the class including muted/unposted assignments. Only included if user has permissions to view this grade, typically teachers, TAs, and admins..
   *
   *
   */
  unposted_final_grade: string;
  /**
   * The user's current score in the class including muted/unposted assignments. Only included if user has permissions to view this score, typically teachers, TAs, and admins..
   *
   *
   */
  unposted_current_score: string;
  /**
   * The user's final score for the class including muted/unposted assignments. Only included if user has permissions to view this score, typically teachers, TAs, and admins..
   *
   *
   */
  unposted_final_score: string;
  /**
   * The total points the user has earned in the class, including muted/unposted assignments. Only included if user has permissions to view this score (typically teachers, TAs, and admins) and 'current_points' is passed in the request's 'include' parameter.
   *
   * type: integer
   */
  unposted_current_points: number | string;
};

/**
 *
 */
export type Enrollment = {
  /**
   * The ID of the enrollment.
   *
   * type: integer
   */
  id: number | string;
  /**
   * The unique id of the course.
   *
   * type: integer
   */
  course_id: number | string;
  /**
   * The SIS Course ID in which the enrollment is associated. Only displayed if present. This field is only included if the user has permission to view SIS information.
   *
   *
   */
  sis_course_id: string;
  /**
   * The Course Integration ID in which the enrollment is associated. This field is only included if the user has permission to view SIS information.
   *
   *
   */
  course_integration_id: string;
  /**
   * The unique id of the user's section.
   *
   * type: integer
   */
  course_section_id: number | string;
  /**
   * The Section Integration ID in which the enrollment is associated. This field is only included if the user has permission to view SIS information.
   *
   *
   */
  section_integration_id: string;
  /**
   * The SIS Account ID in which the enrollment is associated. Only displayed if present. This field is only included if the user has permission to view SIS information.
   *
   *
   */
  sis_account_id: string;
  /**
   * The SIS Section ID in which the enrollment is associated. Only displayed if present. This field is only included if the user has permission to view SIS information.
   *
   *
   */
  sis_section_id: string;
  /**
   * The SIS User ID in which the enrollment is associated. Only displayed if present. This field is only included if the user has permission to view SIS information.
   *
   *
   */
  sis_user_id: string;
  /**
   * The state of the user's enrollment in the course.
   *
   *
   */
  enrollment_state: string;
  /**
   * User can only access his or her own course section.
   *
   * type: boolean
   */
  limit_privileges_to_course_section: boolean | string;
  /**
   * The unique identifier for the SIS import. This field is only included if the user has permission to manage SIS information.
   *
   * type: integer
   */
  sis_import_id: number | string;
  /**
   * The unique id of the user's account.
   *
   * type: integer
   */
  root_account_id: number | string;
  /**
   * The enrollment type. One of 'StudentEnrollment', 'TeacherEnrollment', 'TaEnrollment', 'DesignerEnrollment', 'ObserverEnrollment'.
   *
   *
   */
  type: string;
  /**
   * The unique id of the user.
   *
   * type: integer
   */
  user_id: number | string;
  /**
   * The unique id of the associated user. Will be null unless type is ObserverEnrollment.
   *
   * type: integer
   */
  associated_user_id: number | string;
  /**
   * The enrollment role, for course-level permissions. This field will match `type` if the enrollment role has not been customized.
   *
   *
   */
  role: string;
  /**
   * The id of the enrollment role.
   *
   * type: integer
   */
  role_id: number | string;
  /**
   * The created time of the enrollment, in ISO8601 format.
   *
   * format: date-time
   */
  created_at: string;
  /**
   * The updated time of the enrollment, in ISO8601 format.
   *
   * format: date-time
   */
  updated_at: string;
  /**
   * The start time of the enrollment, in ISO8601 format.
   *
   * format: date-time
   */
  start_at: string;
  /**
   * The end time of the enrollment, in ISO8601 format.
   *
   * format: date-time
   */
  end_at: string;
  /**
   * The last activity time of the user for the enrollment, in ISO8601 format.
   *
   * format: date-time
   */
  last_activity_at: string;
  /**
   * The last attended date of the user for the enrollment in a course, in ISO8601 format.
   *
   * format: date-time
   */
  last_attended_at: string;
  /**
   * The total activity time of the user for the enrollment, in seconds.
   *
   * type: integer
   */
  total_activity_time: number | string;
  /**
   * The URL to the Canvas web UI page for this course enrollment.
   *
   *
   */
  html_url: string;
  /**
   * The URL to the Canvas web UI page containing the grades associated with this enrollment.
   *
   *
   */
  grades: Grade;
  /**
   * A description of the user.
   *
   *
   */
  user: User;
  /**
   * The user's override grade for the course.
   *
   *
   */
  override_grade: string;
  /**
   * The user's override score for the course.
   *
   * type: number
   */
  override_score: number | string;
  /**
   * The user's current grade in the class including muted/unposted assignments. Only included if user has permissions to view this grade, typically teachers, TAs, and admins.
   *
   *
   */
  unposted_current_grade: string;
  /**
   * The user's final grade for the class including muted/unposted assignments. Only included if user has permissions to view this grade, typically teachers, TAs, and admins..
   *
   *
   */
  unposted_final_grade: string;
  /**
   * The user's current score in the class including muted/unposted assignments. Only included if user has permissions to view this score, typically teachers, TAs, and admins..
   *
   *
   */
  unposted_current_score: string;
  /**
   * The user's final score for the class including muted/unposted assignments. Only included if user has permissions to view this score, typically teachers, TAs, and admins..
   *
   *
   */
  unposted_final_score: string;
  /**
   * optional: Indicates whether the course the enrollment belongs to has grading periods set up. (applies only to student enrollments, and only available in course endpoints)
   *
   * type: boolean
   */
  has_grading_periods: boolean | string;
  /**
   * optional: Indicates whether the course the enrollment belongs to has the Display Totals for 'All Grading Periods' feature enabled. (applies only to student enrollments, and only available in course endpoints)
   *
   * type: boolean
   */
  totals_for_all_grading_periods_option: boolean | string;
  /**
   * optional: The name of the currently active grading period, if one exists. If the course the enrollment belongs to does not have grading periods, or if no currently active grading period exists, the value will be null. (applies only to student enrollments, and only available in course endpoints)
   *
   *
   */
  current_grading_period_title: string;
  /**
   * optional: The id of the currently active grading period, if one exists. If the course the enrollment belongs to does not have grading periods, or if no currently active grading period exists, the value will be null. (applies only to student enrollments, and only available in course endpoints)
   *
   * type: integer
   */
  current_grading_period_id: number | string;
  /**
   * The user's override grade for the current grading period.
   *
   *
   */
  current_period_override_grade: string;
  /**
   * The user's override score for the current grading period.
   *
   * type: number
   */
  current_period_override_score: number | string;
  /**
   * optional: The student's score in the course for the current grading period, including muted/unposted assignments. Only included if user has permission to view this score, typically teachers, TAs, and admins. If the course the enrollment belongs to does not have grading periods, or if no currently active grading period exists, the value will be null. (applies only to student enrollments, and only available in course endpoints)
   *
   * type: number
   */
  current_period_unposted_current_score: number | string;
  /**
   * optional: The student's score in the course for the current grading period, including muted/unposted assignments and including ungraded assignments with a score of 0. Only included if user has permission to view this score, typically teachers, TAs, and admins. If the course the enrollment belongs to does not have grading periods, or if no currently active grading period exists, the value will be null. (applies only to student enrollments, and only available in course endpoints)
   *
   * type: number
   */
  current_period_unposted_final_score: number | string;
  /**
   * optional: The letter grade equivalent of current_period_unposted_current_score, if available. Only included if user has permission to view this grade, typically teachers, TAs, and admins. If the course the enrollment belongs to does not have grading periods, or if no currently active grading period exists, the value will be null. (applies only to student enrollments, and only available in course endpoints)
   *
   *
   */
  current_period_unposted_current_grade: string;
  /**
   * optional: The letter grade equivalent of current_period_unposted_final_score, if available. Only included if user has permission to view this grade, typically teachers, TAs, and admins. If the course the enrollment belongs to does not have grading periods, or if no currently active grading period exists, the value will be null. (applies only to student enrollments, and only available in course endpoints)
   *
   *
   */
  current_period_unposted_final_grade: string;
};
