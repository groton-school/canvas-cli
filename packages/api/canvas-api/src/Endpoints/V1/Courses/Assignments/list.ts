import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { Assignment } from '../../../../Resources/Assignments.js';

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
     * Optional information to include with each assignment:
submission:: The current user&#x27;s current +Submission+
assignment_visibility:: An array of ids of students who can see the assignment
all_dates:: An array of +AssignmentDate+ structures, one for each override, and also a +base+ if the assignment has an &quot;Everyone&quot; / &quot;Everyone Else&quot; date
overrides:: An array of +AssignmentOverride+ structures
observed_users:: An array of submissions for observed users
can_edit:: an extra Boolean value will be included with each +Assignment+ (and +AssignmentDate+ if +all_dates+ is supplied) to indicate whether the caller can edit the assignment or date. Moderated grading and closed grading periods may restrict a user&#x27;s ability to edit an assignment.
score_statistics:: An object containing min, max, and mean score on this assignment. This will not be included for students if there are less than 5 graded assignments or if disabled by the instructor. Only valid if &#x27;submission&#x27; is also included.
ab_guid:: An array of guid strings for academic benchmarks
     *
     * 
     *
     * 
     */
    include: string[];
    /**
     * The partial title of the assignments to match and return.
     *
     *
     *
     *
     */
    search_term: string;
    /**
     * Apply assignment overrides for each assignment, defaults to true.
     *
     * type: boolean
     *
     *
     */
    override_assignment_dates: boolean | string;
    /**
     * Split up &quot;needs_grading_count&quot; by sections into the &quot;needs_grading_count_by_section&quot; key, defaults to false
     *
     * type: boolean
     *
     *
     */
    needs_grading_count_by_section: boolean | string;
    /**
     * If included, only return certain assignments depending on due date and submission status.
     *
     *
     *
     *
     */
    bucket: string;
    /**
     * if set, return only assignments specified
     *
     *
     *
     *
     */
    assignment_ids: string[];
    /**
     * Determines the order of the assignments. Defaults to &quot;position&quot;.
     *
     *
     *
     *
     */
    order_by: string;
    /**
     * Return only assignments that have post_to_sis set or not set.
     *
     * type: boolean
     *
     *
     */
    post_to_sis: boolean | string;
    /**
     * Return only New Quizzes assignments
     *
     * type: boolean
     *
     *
     */
    new_quizzes: boolean | string;
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
 * List assignments
 *
 * Returns the paginated list of assignments for the current course or assignment group.
 *
 * nickname: list_assignments_assignments
 *
 *
 *
 *
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Assignment[]>(
    `/api/v1/courses/{course_id}/assignments`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
