import { User } from './Users.js';

export type Grade = {
  /**
   * The URL to the Canvas web UI page for the user's grades, if this is a
   * student enrollment.
   */
  html_url: string;
  /**
   * The user's current grade in the class. Only included if user has
   * permissions to view this grade.
   */
  current_grade: string;
  /**
   * The user's final grade for the class. Only included if user has permissions
   * to view this grade.
   */
  final_grade: string;
  /**
   * The user's current score in the class. Only included if user has
   * permissions to view this score.
   */
  current_score: string;
  /**
   * The user's final score for the class. Only included if user has permissions
   * to view this score.
   */
  final_score: string;
  /**
   * The total points the user has earned in the class. Only included if user
   * has permissions to view this score and 'current_points' is passed in the
   * request's 'include' parameter.
   *
   * Type: integer
   */
  current_points: number;
  /**
   * The user's current grade in the class including muted/unposted assignments.
   * Only included if user has permissions to view this grade, typically
   * teachers, TAs, and admins.
   */
  unposted_current_grade: string;
  /**
   * The user's final grade for the class including muted/unposted assignments.
   * Only included if user has permissions to view this grade, typically
   * teachers, TAs, and admins..
   */
  unposted_final_grade: string;
  /**
   * The user's current score in the class including muted/unposted assignments.
   * Only included if user has permissions to view this score, typically
   * teachers, TAs, and admins..
   */
  unposted_current_score: string;
  /**
   * The user's final score for the class including muted/unposted assignments.
   * Only included if user has permissions to view this score, typically
   * teachers, TAs, and admins..
   */
  unposted_final_score: string;
  /**
   * The total points the user has earned in the class, including muted/unposted
   * assignments. Only included if user has permissions to view this score
   * (typically teachers, TAs, and admins) and 'current_points' is passed in the
   * request's 'include' parameter.
   *
   * Type: integer
   */
  unposted_current_points: number;
};

export type Enrollment = {
  /**
   * The ID of the enrollment.
   *
   * Type: integer
   */
  id: number;
  /**
   * The unique id of the course.
   *
   * Type: integer
   */
  course_id: number;
  /**
   * The SIS Course ID in which the enrollment is associated. Only displayed if
   * present. This field is only included if the user has permission to view SIS
   * information.
   */
  sis_course_id: string;
  /**
   * The Course Integration ID in which the enrollment is associated. This field
   * is only included if the user has permission to view SIS information.
   */
  course_integration_id: string;
  /**
   * The unique id of the user's section.
   *
   * Type: integer
   */
  course_section_id: number;
  /**
   * The Section Integration ID in which the enrollment is associated. This
   * field is only included if the user has permission to view SIS information.
   */
  section_integration_id: string;
  /**
   * The SIS Account ID in which the enrollment is associated. Only displayed if
   * present. This field is only included if the user has permission to view SIS
   * information.
   */
  sis_account_id: string;
  /**
   * The SIS Section ID in which the enrollment is associated. Only displayed if
   * present. This field is only included if the user has permission to view SIS
   * information.
   */
  sis_section_id: string;
  /**
   * The SIS User ID in which the enrollment is associated. Only displayed if
   * present. This field is only included if the user has permission to view SIS
   * information.
   */
  sis_user_id: string;
  /** The state of the user's enrollment in the course. */
  enrollment_state: string;
  /** User can only access his or her own course section. */
  limit_privileges_to_course_section: boolean;
  /**
   * The unique identifier for the SIS import. This field is only included if
   * the user has permission to manage SIS information.
   *
   * Type: integer
   */
  sis_import_id: number;
  /**
   * The unique id of the user's account.
   *
   * Type: integer
   */
  root_account_id: number;
  /**
   * The enrollment type. One of 'StudentEnrollment', 'TeacherEnrollment',
   * 'TaEnrollment', 'DesignerEnrollment', 'ObserverEnrollment'.
   */
  type: string;
  /**
   * The unique id of the user.
   *
   * Type: integer
   */
  user_id: number;
  /**
   * The unique id of the associated user. Will be null unless type is
   * ObserverEnrollment.
   *
   * Type: integer
   */
  associated_user_id: number;
  /**
   * The enrollment role, for course-level permissions. This field will match
   * `type` if the enrollment role has not been customized.
   */
  role: string;
  /**
   * The id of the enrollment role.
   *
   * Type: integer
   */
  role_id: number;
  /**
   * The created time of the enrollment, in ISO8601 format.
   *
   * Format: 'date-time'
   */
  created_at: string;
  /**
   * The updated time of the enrollment, in ISO8601 format.
   *
   * Format: 'date-time'
   */
  updated_at: string;
  /**
   * The start time of the enrollment, in ISO8601 format.
   *
   * Format: 'date-time'
   */
  start_at: string;
  /**
   * The end time of the enrollment, in ISO8601 format.
   *
   * Format: 'date-time'
   */
  end_at: string;
  /**
   * The last activity time of the user for the enrollment, in ISO8601 format.
   *
   * Format: 'date-time'
   */
  last_activity_at: string;
  /**
   * The last attended date of the user for the enrollment in a course, in
   * ISO8601 format.
   *
   * Format: 'date-time'
   */
  last_attended_at: string;
  /**
   * The total activity time of the user for the enrollment, in seconds.
   *
   * Type: integer
   */
  total_activity_time: number;
  /** The URL to the Canvas web UI page for this course enrollment. */
  html_url: string;
  /**
   * The URL to the Canvas web UI page containing the grades associated with
   * this enrollment.
   */
  grades: Grade;
  /** A description of the user. */
  user: User;
  /** The user's override grade for the course. */
  override_grade: string;
  /** The user's override score for the course. */
  override_score: number;
  /**
   * The user's current grade in the class including muted/unposted assignments.
   * Only included if user has permissions to view this grade, typically
   * teachers, TAs, and admins.
   */
  unposted_current_grade: string;
  /**
   * The user's final grade for the class including muted/unposted assignments.
   * Only included if user has permissions to view this grade, typically
   * teachers, TAs, and admins..
   */
  unposted_final_grade: string;
  /**
   * The user's current score in the class including muted/unposted assignments.
   * Only included if user has permissions to view this score, typically
   * teachers, TAs, and admins..
   */
  unposted_current_score: string;
  /**
   * The user's final score for the class including muted/unposted assignments.
   * Only included if user has permissions to view this score, typically
   * teachers, TAs, and admins..
   */
  unposted_final_score: string;
  /**
   * Optional: Indicates whether the course the enrollment belongs to has
   * grading periods set up. (applies only to student enrollments, and only
   * available in course endpoints)
   */
  has_grading_periods: boolean;
  /**
   * Optional: Indicates whether the course the enrollment belongs to has the
   * Display Totals for 'All Grading Periods' feature enabled. (applies only to
   * student enrollments, and only available in course endpoints)
   */
  totals_for_all_grading_periods_option: boolean;
  /**
   * Optional: The name of the currently active grading period, if one exists.
   * If the course the enrollment belongs to does not have grading periods, or
   * if no currently active grading period exists, the value will be null.
   * (applies only to student enrollments, and only available in course
   * endpoints)
   */
  current_grading_period_title: string;
  /**
   * Optional: The id of the currently active grading period, if one exists. If
   * the course the enrollment belongs to does not have grading periods, or if
   * no currently active grading period exists, the value will be null. (applies
   * only to student enrollments, and only available in course endpoints)
   *
   * Type: integer
   */
  current_grading_period_id: number;
  /** The user's override grade for the current grading period. */
  current_period_override_grade: string;
  /** The user's override score for the current grading period. */
  current_period_override_score: number;
  /**
   * Optional: The student's score in the course for the current grading period,
   * including muted/unposted assignments. Only included if user has permission
   * to view this score, typically teachers, TAs, and admins. If the course the
   * enrollment belongs to does not have grading periods, or if no currently
   * active grading period exists, the value will be null. (applies only to
   * student enrollments, and only available in course endpoints)
   */
  current_period_unposted_current_score: number;
  /**
   * Optional: The student's score in the course for the current grading period,
   * including muted/unposted assignments and including ungraded assignments
   * with a score of 0. Only included if user has permission to view this score,
   * typically teachers, TAs, and admins. If the course the enrollment belongs
   * to does not have grading periods, or if no currently active grading period
   * exists, the value will be null. (applies only to student enrollments, and
   * only available in course endpoints)
   */
  current_period_unposted_final_score: number;
  /**
   * Optional: The letter grade equivalent of
   * current_period_unposted_current_score, if available. Only included if user
   * has permission to view this grade, typically teachers, TAs, and admins. If
   * the course the enrollment belongs to does not have grading periods, or if
   * no currently active grading period exists, the value will be null. (applies
   * only to student enrollments, and only available in course endpoints)
   */
  current_period_unposted_current_grade: string;
  /**
   * Optional: The letter grade equivalent of
   * current_period_unposted_final_score, if available. Only included if user
   * has permission to view this grade, typically teachers, TAs, and admins. If
   * the course the enrollment belongs to does not have grading periods, or if
   * no currently active grading period exists, the value will be null. (applies
   * only to student enrollments, and only available in course endpoints)
   */
  current_period_unposted_final_grade: string;
};
