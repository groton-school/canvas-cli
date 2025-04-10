import { JSONObject } from '@battis/typescript-tricks';
import { Enrollment } from './Enrollments.js';
import { GradingPeriod } from './GradingPeriods.js';

export type Term = {
  /** Type: integer */
  id: number;
  name: string;
  /** Format: date-time */
  start_at: string;
  /** Format: date-time */
  end_at: string;
};

export type CourseProgress = {
  /**
   * Total number of requirements from all modules
   *
   * Type: integer
   */
  requirement_count: number;
  /**
   * Total number of requirements the user has completed from all modules
   *
   * Type: integer
   */
  requirement_completed_count: number;
  /**
   * Url to next module item that has an unmet requirement. null if the user has
   * completed the course or the current module does not require sequential
   * progress
   */
  next_requirement_url: string;
  /**
   * Date the course was completed. null if the course has not been completed by
   * this user
   *
   * Format: date-time
   */
  completed_at: string;
};

export type Course = {
  /**
   * The unique identifier for the course
   *
   * Type: integer
   */
  id: number;
  /**
   * The SIS identifier for the course, if defined. This field is only included
   * if the user has permission to view SIS information.
   */
  sis_course_id: string;
  /** The UUID of the course */
  uuid: string;
  /**
   * The integration identifier for the course, if defined. This field is only
   * included if the user has permission to view SIS information.
   */
  integration_id: string;
  /**
   * The unique identifier for the SIS import. This field is only included if
   * the user has permission to manage SIS information.
   *
   * Type: integer
   */
  sis_import_id: number;
  /**
   * The full name of the course. If the requesting user has set a nickname for
   * the course, the nickname will be shown here.
   */
  name: string;
  /** The course code */
  course_code: string;
  /**
   * The actual course name. This field is returned only if the requesting user
   * has set a nickname for the course.
   */
  original_name: string;
  /**
   * The current state of the course, also known as ‘status’. The value will be
   * one of the following values: 'unpublished', 'available', 'completed', or
   * 'deleted'. NOTE: When fetching a singular course that has a 'deleted'
   * workflow state value, an error will be returned with a message of 'The
   * specified resource does not exist.'
   */
  workflow_state: string;
  /**
   * The account associated with the course
   *
   * Type: integer
   */
  account_id: number;
  /**
   * The root account associated with the course
   *
   * Type: integer
   */
  root_account_id: number;
  /**
   * The enrollment term associated with the course
   *
   * Type: integer
   */
  enrollment_term_id: number;
  /** A list of grading periods associated with the course */
  grading_periods: GradingPeriod[];
  /**
   * The grading standard associated with the course
   *
   * Type: integer
   */
  grading_standard_id: number;
  /** The grade_passback_setting set on the course */
  grade_passback_setting: string;
  /**
   * The date the course was created.
   *
   * Format: date-time
   */
  created_at: string;
  /**
   * The start date for the course, if applicable
   *
   * Format: date-time
   */
  start_at: string;
  /**
   * The end date for the course, if applicable
   *
   * Format: date-time
   */
  end_at: string;
  /** The course-set locale, if applicable */
  locale: string;
  /**
   * A list of enrollments linking the current user to the course. for student
   * enrollments, grading information may be included if include[]=total_scores
   */
  enrollments: Enrollment[];
  /**
   * Optional: the total number of active and invited students in the course
   *
   * Type: integer
   */
  total_students: number;
  /** Course calendar */
  calendar: CalendarLink;
  /**
   * The type of page that users will see when they first visit the course -
   * 'feed': Recent Activity Dashboard - 'wiki': Wiki Front Page - 'modules':
   * Course Modules/Sections Page - 'assignments': Course Assignments List -
   * 'syllabus': Course Syllabus Page other types may be added in the future
   */
  default_view: string;
  /** Optional: user-generated HTML for the course syllabus */
  syllabus_body: string;
  /**
   * Optional: the number of submissions needing grading returned only if the
   * current user has grading rights and include[]=needs_grading_count
   *
   * Type: integer
   */
  needs_grading_count: number;
  /**
   * Optional: the enrollment term object for the course returned only if
   * include[]=term
   */
  term: Term;
  /**
   * Optional: information on progress through the course returned only if
   * include[]=course_progress
   */
  course_progress: CourseProgress;
  /** Weight final grade based on assignment group percentages */
  apply_assignment_group_weights: boolean;
  /**
   * Optional: the permissions the user has for the course. returned only for a
   * single course and include[]=permissions
   *
   * Object
   */
  permissions: JSONObject;
  is_public: boolean;
  is_public_to_auth_users: boolean;
  public_syllabus: boolean;
  public_syllabus_to_auth: boolean;
  /** Optional: the public description of the course */
  public_description: string;
  /** Type: integer */
  storage_quota_mb: number;
  storage_quota_used_mb: number;
  hide_final_grades: boolean;
  license: string;
  allow_student_assignment_edits: boolean;
  allow_wiki_comments: boolean;
  allow_student_forum_attachments: boolean;
  open_enrollment: boolean;
  self_enrollment: boolean;
  restrict_enrollments_to_course_dates: boolean;
  course_format: string;
  /**
   * Optional: this will be true if this user is currently prevented from
   * viewing the course because of date restriction settings
   */
  access_restricted_by_date: boolean;
  /** The course's IANA time zone name. */
  time_zone: string;
  /**
   * Optional: whether the course is set as a Blueprint Course (blueprint fields
   * require the Blueprint Courses feature)
   */
  blueprint: boolean;
  /**
   * Optional: Set of restrictions applied to all locked course objects
   *
   * Object
   */
  blueprint_restrictions: JSONObject;
  /**
   * Optional: Sets of restrictions differentiated by object type applied to
   * locked course objects
   *
   * Object
   */
  blueprint_restrictions_by_object_type: JSONObject;
  /**
   * Optional: whether the course is set as a template (requires the Course
   * Templates feature)
   */
  template: boolean;
};

export type CalendarLink = {
  /** The URL of the calendar in ICS format */
  ics: string;
};
