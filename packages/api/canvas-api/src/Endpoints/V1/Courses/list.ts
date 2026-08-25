import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { Course } from '../../../Resources/Courses.js';

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * When set, only return courses where the user is enrolled as this type. For
example, set to &quot;teacher&quot; to return only courses where the user is
enrolled as a Teacher.  This argument is ignored if enrollment_role is given.
     *
     * 
     *
     * 
     */
    enrollment_type: string;
    /**
     * Deprecated
When set, only return courses where the user is enrolled with the specified
course-level role.  This can be a role created with the
{api:RoleOverridesController#add_role Add Role API} or a base role type of
&#x27;StudentEnrollment&#x27;, &#x27;TeacherEnrollment&#x27;, &#x27;TaEnrollment&#x27;, &#x27;ObserverEnrollment&#x27;,
or &#x27;DesignerEnrollment&#x27;.
     *
     * 
     *
     * 
     */
    enrollment_role: string;
    /**
     * When set, only return courses where the user is enrolled with the specified
course-level role.  This can be a role created with the
{api:RoleOverridesController#add_role Add Role API} or a built_in role type of
&#x27;StudentEnrollment&#x27;, &#x27;TeacherEnrollment&#x27;, &#x27;TaEnrollment&#x27;, &#x27;ObserverEnrollment&#x27;,
or &#x27;DesignerEnrollment&#x27;.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
    enrollment_role_id: number | string;
    /**
     * When set, only return courses where the user has an enrollment with the given state.
This will respect section/course/term date overrides.
     *
     * 
     *
     * 
     */
    enrollment_state: string;
    /**
     * When set, only return courses that are not configured as blueprint courses.
     *
     * type: boolean
     *
     *
     */
    exclude_blueprint_courses: boolean | string;
    /**
     * - &quot;needs_grading_count&quot;: Optional information to include with each Course.
  When needs_grading_count is given, and the current user has grading
  rights, the total number of submissions needing grading for all
  assignments is returned.
- &quot;syllabus_body&quot;: Optional information to include with each Course.
  When syllabus_body is given the user-generated html for the course
  syllabus is returned.
- &quot;public_description&quot;: Optional information to include with each Course.
  When public_description is given the user-generated text for the course
  public description is returned.
- &quot;total_scores&quot;: Optional information to include with each Course.
  When total_scores is given, any student enrollments will also
  include the fields &#x27;computed_current_score&#x27;, &#x27;computed_final_score&#x27;,
  &#x27;computed_current_grade&#x27;, and &#x27;computed_final_grade&#x27;, as well as (if
  the user has permission) &#x27;unposted_current_score&#x27;,
  &#x27;unposted_final_score&#x27;, &#x27;unposted_current_grade&#x27;, and
  &#x27;unposted_final_grade&#x27; (see Enrollment documentation for more
  information on these fields). This argument is ignored if the course is
  configured to hide final grades.
- &quot;current_grading_period_scores&quot;: Optional information to include with
  each Course. When current_grading_period_scores is given and total_scores
  is given, any student enrollments will also include the fields
  &#x27;has_grading_periods&#x27;,
  &#x27;totals_for_all_grading_periods_option&#x27;, &#x27;current_grading_period_title&#x27;,
  &#x27;current_grading_period_id&#x27;, current_period_computed_current_score&#x27;,
  &#x27;current_period_computed_final_score&#x27;,
  &#x27;current_period_computed_current_grade&#x27;, and
  &#x27;current_period_computed_final_grade&#x27;, as well as (if the user has permission)
  &#x27;current_period_unposted_current_score&#x27;,
  &#x27;current_period_unposted_final_score&#x27;,
  &#x27;current_period_unposted_current_grade&#x27;, and
  &#x27;current_period_unposted_final_grade&#x27; (see Enrollment documentation for
  more information on these fields). In addition, when this argument is
  passed, the course will have a &#x27;has_grading_periods&#x27; attribute
  on it. This argument is ignored if the total_scores argument is not
  included. If the course is configured to hide final grades, the
  following fields are not returned:
  &#x27;totals_for_all_grading_periods_option&#x27;,
  &#x27;current_period_computed_current_score&#x27;,
  &#x27;current_period_computed_final_score&#x27;,
  &#x27;current_period_computed_current_grade&#x27;,
  &#x27;current_period_computed_final_grade&#x27;,
  &#x27;current_period_unposted_current_score&#x27;,
  &#x27;current_period_unposted_final_score&#x27;,
  &#x27;current_period_unposted_current_grade&#x27;, and
  &#x27;current_period_unposted_final_grade&#x27;
- &quot;grading_periods&quot;: Optional information to include with each Course. When
  grading_periods is given, a list of the grading periods associated with
  each course is returned.
- &quot;term&quot;: Optional information to include with each Course. When
  term is given, the information for the enrollment term for each course
  is returned.
- &quot;account&quot;: Optional information to include with each Course. When
  account is given, the account json for each course is returned.
- &quot;course_progress&quot;: Optional information to include with each Course.
  When course_progress is given, each course will include a
  &#x27;course_progress&#x27; object with the fields: &#x27;requirement_count&#x27;, an integer
  specifying the total number of requirements in the course,
  &#x27;requirement_completed_count&#x27;, an integer specifying the total number of
  requirements in this course that have been completed, and
  &#x27;next_requirement_url&#x27;, a string url to the next requirement item, and
  &#x27;completed_at&#x27;, the date the course was completed (null if incomplete).
  &#x27;next_requirement_url&#x27; will be null if all requirements have been
  completed or the current module does not require sequential progress.
  &quot;course_progress&quot; will return an error message if the course is not
  module based or the user is not enrolled as a student in the course.
- &quot;sections&quot;: Section enrollment information to include with each Course.
  Returns an array of hashes containing the section ID (id), section name
  (name), start and end dates (start_at, end_at), as well as the enrollment
  type (enrollment_role, e.g. &#x27;StudentEnrollment&#x27;).
- &quot;storage_quota_used_mb&quot;: The amount of storage space used by the files in this course
- &quot;total_students&quot;: Optional information to include with each Course.
  Returns an integer for the total amount of active and invited students.
- &quot;passback_status&quot;: Include the grade passback_status
- &quot;favorites&quot;: Optional information to include with each Course.
  Indicates if the user has marked the course as a favorite course.
- &quot;teachers&quot;: Teacher information to include with each Course.
  Returns an array of hashes containing the {api:Users:UserDisplay UserDisplay} information
  for each teacher in the course.
- &quot;observed_users&quot;: Optional information to include with each Course.
  Will include data for observed users if the current user has an
  observer enrollment.
- &quot;tabs&quot;: Optional information to include with each Course.
  Will include the list of tabs configured for each course.  See the
  {api:TabsController#index List available tabs API} for more information.
- &quot;course_image&quot;: Optional information to include with each Course. Returns course
  image url if a course image has been set.
- &quot;banner_image&quot;: Optional information to include with each Course. Returns course
  banner image url if the course is a Canvas for Elementary subject and a banner
  image has been set.
- &quot;concluded&quot;: Optional information to include with each Course. Indicates whether
  the course has been concluded, taking course and term dates into account.
- &quot;post_manually&quot;: Optional information to include with each Course. Returns true if
  the course post policy is set to Manually post grades. Returns false if the the course
  post policy is set to Automatically post grades.
     *
     * 
     *
     * 
     */
    include: string[];
    /**
     * If set, only return courses that are in the given state(s).
By default, &quot;available&quot; is returned for students and observers, and
anything except &quot;deleted&quot;, for all other enrollment types
     *
     * 
     *
     * 
     */
    state: string[];
  }>;

type Options =
  | {
      query?: Partial<listSearchParameters>;
      /** @deprecated Use {@link Options.query} */
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | ((
      | {
          query: listSearchParameters;
        }
      | {
          /** @deprecated Use {@link Options.query} */
          searchParams: listSearchParameters;
        }
    ) & {
      strict: true;
    });

/**
 * List your courses
 *
 * Returns the paginated list of active courses for the current user.
 *
 * nickname: list_your_courses
 *
 *
 *
 *
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Course[]>(`/api/v1/courses`, {
    method: 'GET',
    ...options
  });
  return response;
}
