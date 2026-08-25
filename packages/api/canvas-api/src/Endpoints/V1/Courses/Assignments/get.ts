import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { Assignment } from '../../../../Resources/Assignments.js';

export type getPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type getSearchParameters = Masquerade &
  Partial<{
    /**
     * Associations to include with the assignment. The &quot;assignment_visibility&quot; option
requires that the Differentiated Assignments course feature be turned on. If
&quot;observed_users&quot; is passed, submissions for observed users will also be included.
For &quot;score_statistics&quot; to be included, the &quot;submission&quot; option must also be set.
The &quot;peer_review&quot; option requires that the Peer Review Allocation and Grading
course feature be turned on.
     *
     * 
     *
     * 
     */
    include: string[];
    /**
     * Apply assignment overrides to the assignment, defaults to true.
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
     * All dates associated with the assignment, if applicable
     *
     * type: boolean
     *
     *
     */
    all_dates: boolean | string;
  }>;

type Options = (
  | {
      path: getPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: getPathParameters;
    }
) &
  (
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: getSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: getSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Get a single assignment
 *
 * Returns the assignment with the given id.
 *
 * nickname: get_single_assignment
 *
 *
 *
 *
 */
export async function get(options: Options) {
  const response = await client().fetchAs<Assignment>(
    `/api/v1/courses/{course_id}/assignments/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
