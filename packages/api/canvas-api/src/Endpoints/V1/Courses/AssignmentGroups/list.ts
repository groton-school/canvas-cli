import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { AssignmentGroup } from '../../../../Resources/AssignmentGroups.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * Associations to include with the group. "discussion_topic", "all_dates",
     * "can_edit", "assignment_visibility" & "submission" are only valid if
     * "assignments" is also included. "score_statistics" requires that the
     * "assignments" and "submission" options are included. The
     * "assignment_visibility" option additionally requires that the
     * Differentiated Assignments course feature be turned on. If
     * "observed_users" is passed along with "assignments" and "submission",
     * submissions for observed users will also be included as an array. The
     * "peer_review" option requires that the Peer Review Grading course feature
     * be turned on and that "assignments" is included.
     */
    include: string[];
    /**
     * If "assignments" are included, optionally return only assignments having
     * their ID in this array. This argument may also be passed as a comma
     * separated string.
     */
    assignment_ids: string[];
    /**
     * If "assignments" are included, those with the specified submission types
     * will be excluded from the assignment groups.
     */
    exclude_assignment_submission_types: string[];
    /**
     * Apply assignment overrides for each assignment, defaults to true.
     *
     * Type: boolean
     */
    override_assignment_dates: boolean | string;
    /**
     * The id of the grading period in which assignment groups are being
     * requested (Requires grading periods to exist.)
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    grading_period_id: number | string;
    /**
     * If true, all assignments returned will apply to the current user in the
     * specified grading period. If assignments apply to other students in the
     * specified grading period, but not the current user, they will not be
     * returned. (Requires the grading_period_id argument and grading periods to
     * exist. In addition, the current user must be a student.)
     *
     * Type: boolean
     */
    scope_assignments_to_student: boolean | string;
  }>;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List assignment groups
 *
 * Returns the paginated list of assignment groups for the current context. The
 * returned groups are sorted by their position field.
 *
 * Nickname: list_assignment_groups
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
