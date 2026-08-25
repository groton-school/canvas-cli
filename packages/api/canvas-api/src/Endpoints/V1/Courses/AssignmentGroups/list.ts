import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade, Paginated } from '#client';
import { AssignmentGroup } from '../../../../Resources/AssignmentGroups.js';

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
     * Associations to include with the group. &quot;discussion_topic&quot;, &quot;all_dates&quot;, &quot;can_edit&quot;,
&quot;assignment_visibility&quot; &amp; &quot;submission&quot; are only valid if &quot;assignments&quot; is also included.
&quot;score_statistics&quot; requires that the &quot;assignments&quot; and &quot;submission&quot; options are included.
The &quot;assignment_visibility&quot; option additionally requires that the Differentiated Assignments course feature be turned on.
If &quot;observed_users&quot; is passed along with &quot;assignments&quot; and &quot;submission&quot;, submissions for observed users will also be included as an array.
The &quot;peer_review&quot; option requires that the Peer Review Grading course feature be turned on and that &quot;assignments&quot; is included.
     *
     * 
     *
     * 
     */
    include: string[];
    /**
     * If &quot;assignments&quot; are included, optionally return only assignments having their ID in this array. This argument may also be passed as
a comma separated string.
     *
     * 
     *
     * 
     */
    assignment_ids: string[];
    /**
     * If &quot;assignments&quot; are included, those with the specified submission types
will be excluded from the assignment groups.
     *
     * 
     *
     * 
     */
    exclude_assignment_submission_types: string[];
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
(Requires grading periods to exist.)
     *
     * type: integer

format: 'int64'
     *
     * 
     */
    grading_period_id: number | string;
    /**
     * If true, all assignments returned will apply to the current user in the
specified grading period. If assignments apply to other students in the
specified grading period, but not the current user, they will not be
returned. (Requires the grading_period_id argument and grading periods to
exist. In addition, the current user must be a student.)
     *
     * type: boolean
     *
     * 
     */
    scope_assignments_to_student: boolean | string;
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
 * List assignment groups
 *
 * Returns the paginated list of assignment groups for the current context.
The returned groups are sorted by their position field.
 *
 * nickname: list_assignment_groups
 *
 * 
 *
 * 
 */
export async function list(options: Options) {
  const response = await client().fetchAs<AssignmentGroup[]>(
    `/api/v1/courses/{course_id}/assignment_groups`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
