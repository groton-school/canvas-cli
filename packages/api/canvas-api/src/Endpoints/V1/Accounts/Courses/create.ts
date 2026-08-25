import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { Course } from '../../../../Resources/Courses.js';

export type createPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  account_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /**
     * The name of the course. If omitted, the course will be named &quot;Unnamed
Course.&quot;
     *
     * 
     *
     * 
     */
  'course[name]': string;
  /**
   * The course code for the course.
   *
   *
   *
   *
   */
  'course[course_code]': string;
  /**
     * Course start date in ISO8601 format, e.g. 2011-01-01T01:00Z
This value is ignored unless &#x27;restrict_enrollments_to_course_dates&#x27; is set to true.
     *
     * format: date-time
     *
     * 
     */
  'course[start_at]': string;
  /**
     * Course end date in ISO8601 format. e.g. 2011-01-01T01:00Z
This value is ignored unless &#x27;restrict_enrollments_to_course_dates&#x27; is set to true.
     *
     * format: date-time
     *
     * 
     */
  'course[end_at]': string;
  /**
     * The name of the licensing. Should be one of the following abbreviations
(a descriptive name is included in parenthesis for reference):
- &#x27;private&#x27; (Private Copyrighted)
- &#x27;cc_by_nc_nd&#x27; (CC Attribution Non-Commercial No Derivatives)
- &#x27;cc_by_nc_sa&#x27; (CC Attribution Non-Commercial Share Alike)
- &#x27;cc_by_nc&#x27; (CC Attribution Non-Commercial)
- &#x27;cc_by_nd&#x27; (CC Attribution No Derivatives)
- &#x27;cc_by_sa&#x27; (CC Attribution Share Alike)
- &#x27;cc_by&#x27; (CC Attribution)
- &#x27;public_domain&#x27; (Public Domain).
     *
     * 
     *
     * 
     */
  'course[license]': string;
  /**
   * Set to true if course is public to both authenticated and unauthenticated users.
   *
   * type: boolean
   *
   *
   */
  'course[is_public]': boolean | string;
  /**
   * Set to true if course is public only to authenticated users.
   *
   * type: boolean
   *
   *
   */
  'course[is_public_to_auth_users]': boolean | string;
  /**
   * Set to true to make the course syllabus public.
   *
   * type: boolean
   *
   *
   */
  'course[public_syllabus]': boolean | string;
  /**
   * Set to true to make the course syllabus public for authenticated users.
   *
   * type: boolean
   *
   *
   */
  'course[public_syllabus_to_auth]': boolean | string;
  /**
   * A publicly visible description of the course.
   *
   *
   *
   *
   */
  'course[public_description]': string;
  /**
   * If true, students will be able to modify the course wiki.
   *
   * type: boolean
   *
   *
   */
  'course[allow_student_wiki_edits]': boolean | string;
  /**
   * If true, course members will be able to comment on wiki pages.
   *
   * type: boolean
   *
   *
   */
  'course[allow_wiki_comments]': boolean | string;
  /**
   * If true, students can attach files to forum posts.
   *
   * type: boolean
   *
   *
   */
  'course[allow_student_forum_attachments]': boolean | string;
  /**
   * Set to true if the course is open enrollment.
   *
   * type: boolean
   *
   *
   */
  'course[open_enrollment]': boolean | string;
  /**
   * Set to true if the course is self enrollment.
   *
   * type: boolean
   *
   *
   */
  'course[self_enrollment]': boolean | string;
  /**
     * Set to true to restrict user enrollments to the start and end dates of the
course. This value must be set to true
in order to specify a course start date and/or end date.
     *
     * type: boolean
     *
     * 
     */
  'course[restrict_enrollments_to_course_dates]': boolean | string;
  /**
   * The unique ID of the term to create to course in.
   *
   *
   *
   *
   */
  'course[term_id]': string;
  /**
   * The unique SIS identifier.
   *
   *
   *
   *
   */
  'course[sis_course_id]': string;
  /**
   * The unique Integration identifier.
   *
   *
   *
   *
   */
  'course[integration_id]': string;
  /**
     * If this option is set to true, the totals in student grades summary will
be hidden.
     *
     * type: boolean
     *
     * 
     */
  'course[hide_final_grades]': boolean | string;
  /**
   * Set to true to weight final grade based on assignment groups percentages.
   *
   * type: boolean
   *
   *
   */
  'course[apply_assignment_group_weights]': boolean | string;
  /**
     * The time zone for the course. Allowed time zones are
{http://www.iana.org/time-zones IANA time zones} or friendlier
{http://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html Ruby on Rails time zones}.
     *
     * 
     *
     * 
     */
  'course[time_zone]': string;
  /**
     * If this option is set to true, the course will be available to students
immediately.
     *
     * type: boolean
     *
     * 
     */
  offer: boolean | string;
  /**
   * Set to true to enroll the current user as the teacher.
   *
   * type: boolean
   *
   *
   */
  enroll_me: boolean | string;
  /**
     * If this option is set to true, the template of the account will not be applied to this course
It means copy_from_course_template will not be executed. This option is thought for a course copy.
     *
     * type: boolean
     *
     * 
     */
  skip_course_template: boolean | string;
  /**
     * The type of page that users will see when they first visit the course
* &#x27;feed&#x27; Recent Activity Dashboard
* &#x27;modules&#x27; Course Modules/Sections Page
* &#x27;assignments&#x27; Course Assignments List
* &#x27;syllabus&#x27; Course Syllabus Page
other types may be added in the future
     *
     * 
     *
     * 
     */
  'course[default_view]': string;
  /**
   * The syllabus body for the course
   *
   *
   *
   *
   */
  'course[syllabus_body]': string;
  /**
     * The grading standard id to set for the course.  If no value is provided for this argument the current grading_standard will be un-set from this course.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  'course[grading_standard_id]': number | string;
  /**
   * Optional. The grade_passback_setting for the course. Only &#x27;nightly_sync&#x27;, &#x27;disabled&#x27;, and &#x27;&#x27; are allowed
   *
   *
   *
   *
   */
  'course[grade_passback_setting]': string;
  /**
   * Optional. Specifies the format of the course. (Should be &#x27;on_campus&#x27;, &#x27;online&#x27;, or &#x27;blended&#x27;)
   *
   *
   *
   *
   */
  'course[course_format]': string;
  /**
     * Default is false.
When true, all grades in the course must be posted manually, and will not be automatically posted.
When false, all grades in the course will be automatically posted.
     *
     * type: boolean
     *
     * 
     */
  'course[post_manually]': boolean | string;
  /**
   * When true, will first try to re-activate a deleted course with matching sis_course_id if possible.
   *
   * type: boolean
   *
   *
   */
  enable_sis_reactivation: boolean | string;
};

type Options = (
  | {
      path: createPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: createPathParameters;
    }
) &
  (
    | {
        query?: Partial<createSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<createSearchParameters>;
        body?: Partial<createFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<createFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: createSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: createSearchParameters;
          }
      ) &
        (
          | {
              body: createFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: createFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Create a new course
 *
 * Create a new course
 *
 * nickname: create_new_course
 *
 *
 *
 *
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
