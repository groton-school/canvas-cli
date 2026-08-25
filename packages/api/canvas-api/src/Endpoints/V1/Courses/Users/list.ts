import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { User } from '../../../../Resources/Users.js';

export type listPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * The partial name or full ID of the users to match and return in the results list.
     *
     *
     *
     *
     */
    search_term: string;
    /**
     * When set, sort the results of the search based on the given field.
     *
     *
     *
     *
     */
    sort: string;
    /**
     * When set, only return users where the user is enrolled as this type.
&quot;student_view&quot; implies include[]&#x3D;test_student.
This argument is ignored if enrollment_role is given.
     *
     * 
     *
     * 
     */
    enrollment_type: string[];
    /**
     * Deprecated
When set, only return users enrolled with the specified course-level role.  This can be
a role created with the {api:RoleOverridesController#add_role Add Role API} or a
base role type of &#x27;StudentEnrollment&#x27;, &#x27;TeacherEnrollment&#x27;, &#x27;TaEnrollment&#x27;,
&#x27;ObserverEnrollment&#x27;, or &#x27;DesignerEnrollment&#x27;.
     *
     * 
     *
     * 
     */
    enrollment_role: string;
    /**
     * When set, only return courses where the user is enrolled with the specified
course-level role.  This can be a role created with the
{api:RoleOverridesController#add_role Add Role API} or a built_in role id with type
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
     * When set, only return users who are enrolled in the given section(s).
     *
     * 

format: 'int64'
     *
     * 
     */
    section_ids: number | string[];
    /**
     * - &quot;enrollments&quot;:
Optionally include with each Course the user&#x27;s current and invited
enrollments. If the user is enrolled as a student, and the account has
permission to manage or view all grades, each enrollment will include a
&#x27;grades&#x27; key with &#x27;current_score&#x27;, &#x27;final_score&#x27;, &#x27;current_grade&#x27; and
&#x27;final_grade&#x27; values.
- &quot;locked&quot;: Optionally include whether an enrollment is locked.
- &quot;avatar_url&quot;: Optionally include avatar_url.
- &quot;bio&quot;: Optionally include each user&#x27;s bio.
- &quot;test_student&quot;: Optionally include the course&#x27;s Test Student,
if present. Default is to not include Test Student.
- &quot;custom_links&quot;: Optionally include plugin-supplied custom links for each student,
such as analytics information
- &quot;current_grading_period_scores&quot;: if enrollments is included as
well as this directive, the scores returned in the enrollment
will be for the current grading period if there is one. A
&#x27;grading_period_id&#x27; value will also be included with the
scores. if grading_period_id is nil there is no current grading
period and the score is a total score.
- &quot;uuid&quot;: Optionally include the users uuid
     *
     * 
     *
     * 
     */
    include: string[];
    /**
     * If this parameter is given and it corresponds to a user in the course,
the +page+ parameter will be ignored and the page containing the specified user
will be returned instead.
     *
     * 
     *
     * 
     */
    user_id: string;
    /**
     * If included, the course users set will only include users with IDs
specified by the param. Note: this will not work in conjunction
with the &quot;user_id&quot; argument but multiple user_ids can be included.
     *
     * 

format: 'int64'
     *
     * 
     */
    user_ids: number | string[];
    /**
     * When set, only return users where the enrollment workflow state is of one of the given types.
&quot;active&quot; and &quot;invited&quot; enrollments are returned by default.
     *
     * 
     *
     * 
     */
    enrollment_state: string[];
  }>;

type Options = (
  | {
      path: listPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: listPathParameters;
    }
) &
  (
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
      })
  );

/**
 * List users in course
 *
 * Returns the paginated list of users in this course. And optionally the user's enrollments in the course.
 *
 * nickname: list_users_in_course_users
 *
 *
 *
 *
 */
export async function list(options: Options) {
  const response = await client().fetchAs<User[]>(
    `/api/v1/courses/{course_id}/users`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
