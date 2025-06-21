import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Course } from '../../../../Resources/Courses.js';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /**
   * The name of the course. If omitted, the course will be named "Unnamed
   * Course."
   */
  'course[name]': string;
  /** The course code for the course. */
  'course[course_code]': string;
  /**
   * Course start date in ISO8601 format, e.g. 2011-01-01T01:00Z This value is
   * ignored unless 'restrict_enrollments_to_course_dates' is set to true.
   *
   * Format: date-time
   */
  'course[start_at]': string;
  /**
   * Course end date in ISO8601 format. e.g. 2011-01-01T01:00Z This value is
   * ignored unless 'restrict_enrollments_to_course_dates' is set to true.
   *
   * Format: date-time
   */
  'course[end_at]': string;
  /**
   * The name of the licensing. Should be one of the following abbreviations
   * (a descriptive name is included in parenthesis for reference):
   *
   * - 'private' (Private Copyrighted)
   * - 'cc_by_nc_nd' (CC Attribution Non-Commercial No Derivatives)
   * - 'cc_by_nc_sa' (CC Attribution Non-Commercial Share Alike)
   * - 'cc_by_nc' (CC Attribution Non-Commercial)
   * - 'cc_by_nd' (CC Attribution No Derivatives)
   * - 'cc_by_sa' (CC Attribution Share Alike)
   * - 'cc_by' (CC Attribution)
   * - 'public_domain' (Public Domain).
   */
  'course[license]': string;
  /**
   * Set to true if course is public to both authenticated and unauthenticated
   * users.
   *
   * Type: boolean
   */
  'course[is_public]': boolean | string;
  /**
   * Set to true if course is public only to authenticated users.
   *
   * Type: boolean
   */
  'course[is_public_to_auth_users]': boolean | string;
  /**
   * Set to true to make the course syllabus public.
   *
   * Type: boolean
   */
  'course[public_syllabus]': boolean | string;
  /**
   * Set to true to make the course syllabus public for authenticated users.
   *
   * Type: boolean
   */
  'course[public_syllabus_to_auth]': boolean | string;
  /** A publicly visible description of the course. */
  'course[public_description]': string;
  /**
   * If true, students will be able to modify the course wiki.
   *
   * Type: boolean
   */
  'course[allow_student_wiki_edits]': boolean | string;
  /**
   * If true, course members will be able to comment on wiki pages.
   *
   * Type: boolean
   */
  'course[allow_wiki_comments]': boolean | string;
  /**
   * If true, students can attach files to forum posts.
   *
   * Type: boolean
   */
  'course[allow_student_forum_attachments]': boolean | string;
  /**
   * Set to true if the course is open enrollment.
   *
   * Type: boolean
   */
  'course[open_enrollment]': boolean | string;
  /**
   * Set to true if the course is self enrollment.
   *
   * Type: boolean
   */
  'course[self_enrollment]': boolean | string;
  /**
   * Set to true to restrict user enrollments to the start and end dates of
   * the course. This value must be set to true in order to specify a course
   * start date and/or end date.
   *
   * Type: boolean
   */
  'course[restrict_enrollments_to_course_dates]': boolean | string;
  /** The unique ID of the term to create to course in. */
  'course[term_id]': string;
  /** The unique SIS identifier. */
  'course[sis_course_id]': string;
  /** The unique Integration identifier. */
  'course[integration_id]': string;
  /**
   * If this option is set to true, the totals in student grades summary will
   * be hidden.
   *
   * Type: boolean
   */
  'course[hide_final_grades]': boolean | string;
  /**
   * Set to true to weight final grade based on assignment groups percentages.
   *
   * Type: boolean
   */
  'course[apply_assignment_group_weights]': boolean | string;
  /**
   * The time zone for the course. Allowed time zones are
   * {http://www.iana.org/time-zones IANA time zones} or friendlier
   * {http://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html Ruby on
   * Rails time zones}.
   */
  'course[time_zone]': string;
  /**
   * If this option is set to true, the course will be available to students
   * immediately.
   *
   * Type: boolean
   */
  offer: boolean | string;
  /**
   * Set to true to enroll the current user as the teacher.
   *
   * Type: boolean
   */
  enroll_me: boolean | string;
  /**
   * The type of page that users will see when they first visit the course
   * 'feed' Recent Activity Dashboard 'modules' Course Modules/Sections Page
   * 'assignments' Course Assignments List 'syllabus' Course Syllabus Page
   * other types may be added in the future
   */
  'course[default_view]': string;
  /** The syllabus body for the course */
  'course[syllabus_body]': string;
  /**
   * The grading standard id to set for the course. If no value is provided
   * for this argument the current grading_standard will be un-set from this
   * course.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'course[grading_standard_id]': number | string;
  /**
   * Optional. The grade_passback_setting for the course. Only 'nightly_sync',
   * 'disabled', and '' are allowed
   */
  'course[grade_passback_setting]': string;
  /**
   * Optional. Specifies the format of the course. (Should be 'on_campus',
   * 'online', or 'blended')
   */
  'course[course_format]': string;
  /**
   * Default is false. When true, all grades in the course must be posted
   * manually, and will not be automatically posted. When false, all grades in
   * the course will be automatically posted.
   *
   * Type: boolean
   */
  'course[post_manually]': boolean | string;
  /**
   * When true, will first try to re-activate a deleted course with matching
   * sis_course_id if possible.
   *
   * Type: boolean
   */
  enable_sis_reactivation: boolean | string;
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create a new course
 *
 * Create a new course
 *
 * Nickname: create_new_course
 */
export async function create(options: Options) {
  const response = await client().fetchAs<Course>(
    `/api/v1/accounts/{account_id}/courses`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
