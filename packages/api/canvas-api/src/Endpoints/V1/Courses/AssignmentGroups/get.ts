import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { AssignmentGroup } from '../../../../Resources/AssignmentGroups.js';

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
  assignment_group_id: string | number;
};

export type getSearchParameters = Masquerade &
  Partial<{
    /**
     * Associations to include with the group. &quot;discussion_topic&quot; and &quot;assignment_visibility&quot; and &quot;submission&quot;
are only valid if &quot;assignments&quot; is also included. &quot;score_statistics&quot; is only valid if &quot;submission&quot; and
&quot;assignments&quot; are also included. The &quot;assignment_visibility&quot; option additionally requires that the Differentiated Assignments
course feature be turned on.
     *
     * 
     *
     * 
     */
    include: string[];
    /**
     * Apply assignment overrides for each assignment, defaults to true.
     *
     * type: boolean
     *
     *
     */
    override_assignment_dates: boolean | string;
    /**
     * The id of the grading period in which assignment groups are being requested
(Requires grading periods to exist on the account)
     *
     * type: integer

format: 'int64'
     *
     * 
     */
    grading_period_id: number | string;
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
 * Get an Assignment Group
 *
 * Returns the assignment group with the given id.
 *
 * nickname: get_assignment_group
 *
 *
 *
 *
 */
export async function get(options: Options) {
  const response = await client().fetchAs<AssignmentGroup>(
    `/api/v1/courses/{course_id}/assignment_groups/{assignment_group_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
