import { client } from '../../../../../Client.js';
import { AssignmentOverride } from '../../../../../Resources/Assignments.js';

type listPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
};

type Options = {
  pathParams: listPathParameters;
};

/**
 * List assignment overrides
 *
 * Returns the paginated list of overrides for this assignment that target
 * sections/groups/students visible to the current user.
 *
 * Nickname: list_assignment_overrides
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/assignments/{assignment_id}/overrides`,
    {
      method: 'GET',
      pathParams
    }
  );
}
