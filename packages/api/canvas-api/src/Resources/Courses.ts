import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import { Enrollment } from './Enrollments.js';
import { GradingPeriod } from './GradingPeriods.js';

/**
 *
 */
export type Term = {
  /**
   *
   *
   * type: integer
   */
  id: number | string;
  /**
   *
   *
   *
   */
  name: string;
  /**
   *
   *
   * format: date-time
   */
  start_at: string;
  /**
   *
   *
   * format: date-time
   */
  end_at: string;
};

/**
 *
 */
export type CourseProgress = {
  /**
   * total number of requirements from all modules
   *
   * type: integer
   */
  requirement_count: number | string;
  /**
   * total number of requirements the user has completed from all modules
   *
   * type: integer
   */
  requirement_completed_count: number | string;
  /**
   * url to next module item that has an unmet requirement. null if the user has completed the course or the current module does not require sequential progress
   *
   *
   */
  next_requirement_url: string;
  /**
   * date the course was completed. null if the course has not been completed by this user
   *
   * format: date-time
   */
  completed_at: string;
};

/**
 *
 */
export type Course = {
  /**
   * the unique identifier for the course
   *
   * type: integer
   */
  id: number | string;
  /**
   * the SIS identifier for the course, if defined. This field is only included if the user has permission to view SIS information.
   *
   *
   */
  sis_course_id: string;
  /**
   * the UUID of the course
   *
   *
   */
  uuid: string;
  /**
   * the integration identifier for the course, if defined. This field is only included if the user has permission to view SIS information.
   *
   *
   */
  integration_id: string;
  /**
   * the unique identifier for the SIS import. This field is only included if the user has permission to manage SIS information.
   *
   * type: integer
   */
  sis_import_id: number | string;
  /**
   * the full name of the course. If the requesting user has set a nickname for the course, the nickname will be shown here.
   *
   *
   */
  name: string;
  /**
   * the course code
   *
   *
   */
  course_code: string;
  /**
   * the actual course name. This field is returned only if the requesting user has set a nickname for the course.
   *
   *
   */
  original_name: string;
  /**
   * the current state of the course, also known as ‘status’.  The value will be one of the following values: 'unpublished', 'available', 'completed', or 'deleted'.  NOTE: When fetching a singular course that has a 'deleted' workflow state value, an error will be returned with a message of 'The specified resource does not exist.'
   *
   *
   */
  workflow_state: string;
  /**
   * the account associated with the course
   *
   * type: integer
   */
  account_id: number | string;
  /**
   * the root account associated with the course
   *
   * type: integer
   */
  root_account_id: number | string;
  /**
   * the enrollment term associated with the course
   *
   * type: integer
   */
  enrollment_term_id: number | string;
  /**
   * A list of grading periods associated with the course
   *
   *
   */
  grading_periods: GradingPeriod[];
  /**
   * the grading standard associated with the course
   *
   * type: integer
   */
  grading_standard_id: number | string;
  /**
   * the grade_passback_setting set on the course
   *
   *
   */
  grade_passback_setting: string;
  /**
   * the date the course was created.
   *
   * format: date-time
   */
  created_at: string;
  /**
   * the start date for the course, if applicable
   *
   * format: date-time
   */
  start_at: string;
  /**
   * the end date for the course, if applicable
   *
   * format: date-time
   */
  end_at: string;
  /**
   * the course-set locale, if applicable
   *
   *
   */
  locale: string;
  /**
   * A list of enrollments linking the current user to the course. for student enrollments, grading information may be included if include[]=total_scores
   *
   *
   */
  enrollments: Enrollment[];
  /**
   * optional: the total number of active and invited students in the course
   *
   * type: integer
   */
  total_students: number | string;
  /**
   * course calendar
   *
   *
   */
  calendar: CalendarLink;
  /**
   * the type of page that users will see when they first visit the course - 'feed': Recent Activity Dashboard - 'wiki': Wiki Front Page - 'modules': Course Modules/Sections Page - 'assignments': Course Assignments List - 'syllabus': Course Syllabus Page other types may be added in the future
   *
   *
   */
  default_view: string;
  /**
   * optional: user-generated HTML for the course syllabus
   *
   *
   */
  syllabus_body: string;
  /**
   * optional: the number of submissions needing grading returned only if the current user has grading rights and include[]=needs_grading_count
   *
   * type: integer
   */
  needs_grading_count: number | string;
  /**
   * optional: the enrollment term object for the course returned only if include[]=term
   *
   *
   */
  term: Term;
  /**
   * optional: information on progress through the course returned only if include[]=course_progress
   *
   *
   */
  course_progress: CourseProgress;
  /**
   * weight final grade based on assignment group percentages
   *
   * type: boolean
   */
  apply_assignment_group_weights: boolean | string;
  /**
   * optional: the permissions the user has for the course. returned only for a single course and include[]=permissions
   *
   * object
   */
  permissions: JSONObject;
  /**
   *
   *
   * type: boolean
   */
  is_public: boolean | string;
  /**
   *
   *
   * type: boolean
   */
  is_public_to_auth_users: boolean | string;
  /**
   *
   *
   * type: boolean
   */
  public_syllabus: boolean | string;
  /**
   *
   *
   * type: boolean
   */
  public_syllabus_to_auth: boolean | string;
  /**
   * optional: the public description of the course
   *
   *
   */
  public_description: string;
  /**
   *
   *
   * type: integer
   */
  storage_quota_mb: number | string;
  /**
   *
   *
   * type: number
   */
  storage_quota_used_mb: number | string;
  /**
   *
   *
   * type: boolean
   */
  hide_final_grades: boolean | string;
  /**
   *
   *
   *
   */
  license: string;
  /**
   *
   *
   * type: boolean
   */
  allow_student_assignment_edits: boolean | string;
  /**
   *
   *
   * type: boolean
   */
  allow_wiki_comments: boolean | string;
  /**
   *
   *
   * type: boolean
   */
  allow_student_forum_attachments: boolean | string;
  /**
   *
   *
   * type: boolean
   */
  open_enrollment: boolean | string;
  /**
   *
   *
   * type: boolean
   */
  self_enrollment: boolean | string;
  /**
   *
   *
   * type: boolean
   */
  restrict_enrollments_to_course_dates: boolean | string;
  /**
   *
   *
   *
   */
  course_format: string;
  /**
   * optional: this will be true if this user is currently prevented from viewing the course because of date restriction settings
   *
   * type: boolean
   */
  access_restricted_by_date: boolean | string;
  /**
   * The course's IANA time zone name.
   *
   *
   */
  time_zone: string;
  /**
   * optional: whether the course is set as a Blueprint Course (blueprint fields require the Blueprint Courses feature)
   *
   * type: boolean
   */
  blueprint: boolean | string;
  /**
   * optional: Set of restrictions applied to all locked course objects
   *
   * object
   */
  blueprint_restrictions: JSONObject;
  /**
   * optional: Sets of restrictions differentiated by object type applied to locked course objects
   *
   * object
   */
  blueprint_restrictions_by_object_type: JSONObject;
  /**
   * optional: whether the course is set as a template (requires the Course Templates feature)
   *
   * type: boolean
   */
  template: boolean | string;
};

/**
 *
 */
export type CalendarLink = {
  /**
   * The URL of the calendar in ICS format
   *
   *
   */
  ics: string;
};
