import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { Course } from '../../../../Resources/Courses.js';

export type listPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  account_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * If true, include only courses with at least one enrollment.  If false,
include only courses with no enrollments.  If not present, do not filter
on course enrollment status.
     *
     * type: boolean
     *
     * 
     */
    with_enrollments: boolean | string;
    /**
     * If set, only return courses that have at least one user enrolled in
in the course with one of the specified enrollment types.
     *
     * 
     *
     * 
     */
    enrollment_type: string[];
    /**
     * If set, only return courses that have at least one user enrolled in
in the course with one of the specified enrollment workflow states.
     *
     * 
     *
     * 
     */
    enrollment_workflow_state: string[];
    /**
     * If true, include only published courses.  If false, exclude published
courses.  If not present, do not filter on published status.
     *
     * type: boolean
     *
     * 
     */
    published: boolean | string;
    /**
     * If true, include only completed courses (these may be in state
&#x27;completed&#x27;, or their enrollment term may have ended).  If false, exclude
completed courses.  If not present, do not filter on completed status.
     *
     * type: boolean
     *
     * 
     */
    completed: boolean | string;
    /**
     * If true, include only blueprint courses. If false, exclude them.
If not present, do not filter on this basis.
     *
     * type: boolean
     *
     * 
     */
    blueprint: boolean | string;
    /**
     * If true, include only courses that inherit content from a blueprint course.
If false, exclude them. If not present, do not filter on this basis.
     *
     * type: boolean
     *
     * 
     */
    blueprint_associated: boolean | string;
    /**
     * If true, include only public courses. If false, exclude them.
If not present, do not filter on this basis.
     *
     * type: boolean
     *
     * 
     */
    public: boolean | string;
    /**
     * List of User IDs of teachers; if supplied, include only courses taught by
one of the referenced users.
     *
     * 

format: 'int64'
     *
     * 
     */
    by_teachers: number | string[];
    /**
     * List of Account IDs; if supplied, include only courses associated with one
of the referenced subaccounts.
     *
     * 

format: 'int64'
     *
     * 
     */
    by_subaccounts: number | string[];
    /**
     * If present, only return courses that have at least one enrollment.
Equivalent to &#x27;with_enrollments&#x3D;true&#x27;; retained for compatibility.
     *
     * type: boolean
     *
     * 
     */
    hide_enrollmentless_courses: boolean | string;
    /**
     * If set, only return courses that are in the given state(s). By default,
all states but &quot;deleted&quot; are returned.
     *
     * 
     *
     * 
     */
    state: string[];
    /**
     * If set, only includes courses from the specified term.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
    enrollment_term_id: number | string;
    /**
     * The partial course name, code, or full ID to match and return in the results list. Must be at least 3 characters.
     *
     *
     *
     *
     */
    search_term: string;
    /**
     * - All explanations can be seen in the {api:CoursesController#index Course API index documentation}
- &quot;sections&quot;, &quot;needs_grading_count&quot; and &quot;total_scores&quot; are not valid options at the account level
     *
     * 
     *
     * 
     */
    include: string[];
    /**
     * The column to sort results by.
     *
     *
     *
     *
     */
    sort: string;
    /**
     * The order to sort the given column by.
     *
     *
     *
     *
     */
    order: string;
    /**
     * The filter to search by. &quot;course&quot; searches for course names, course codes,
and SIS IDs. &quot;teacher&quot; searches for teacher names
     *
     * 
     *
     * 
     */
    search_by: string;
    /**
     * If set, only return courses that start before the value (inclusive)
or their enrollment term starts before the value (inclusive)
or both the course&#x27;s start_at and the enrollment term&#x27;s start_at are set to null.
The value should be formatted as: yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ.
     *
     * format: date
     *
     * 
     */
    starts_before: string;
    /**
     * If set, only return courses that end after the value (inclusive)
or their enrollment term ends after the value (inclusive)
or both the course&#x27;s end_at and the enrollment term&#x27;s end_at are set to null.
The value should be formatted as: yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ.
     *
     * format: date
     *
     * 
     */
    ends_after: string;
    /**
     * If set, only return homeroom courses.
     *
     * type: boolean
     *
     *
     */
    homeroom: boolean | string;
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
 * List active courses in an account
 *
 * Retrieve a paginated list of courses in this account.
 *
 * nickname: list_active_courses_in_account
 *
 *
 *
 *
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Course[]>(
    `/api/v1/accounts/{account_id}/courses`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
