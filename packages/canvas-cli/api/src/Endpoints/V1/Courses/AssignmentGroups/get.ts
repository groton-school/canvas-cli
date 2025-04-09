import { client } from '../../../../Client.js';
import { AssignmentGroup } from '../../../../Resources/AssignmentGroups.js';

type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_group_id: string;
};

type getSearchParameters = {
  /**
   * Associations to include with the group. "discussion_topic" and
   * "assignment_visibility" and "submission" are only valid if "assignments"
   * is also included. "score_statistics" is only valid if "submission" and
   * "assignments" are also included. The "assignment_visibility" option
   * additionally requires that the Differentiated Assignments course feature
   * be turned on.
   */
  include: string[];
  /** Apply assignment overrides for each assignment, defaults to true. */
  override_assignment_dates: boolean;
  /**
   * The id of the grading period in which assignment groups are being
   * requested (Requires grading periods to exist on the account)
   *
   * Format: 'int64'
   */
  grading_period_id: number;
};

type Options = {
  pathParams: getPathParameters;
  searchParams?: getSearchParameters;
};

/**
 * Get an Assignment Group
 *
 * Returns the assignment group with the given id.
 *
 * Nickname: get_assignment_group
 */
export async function get({ pathParams, searchParams }: Options) {
  return await client().fetchAs<AssignmentGroup>(
    `/v1/courses/{course_id}/assignment_groups/{assignment_group_id}`,
    {
      method: 'GET',
      pathParams,
      searchParams
    }
  );
}
