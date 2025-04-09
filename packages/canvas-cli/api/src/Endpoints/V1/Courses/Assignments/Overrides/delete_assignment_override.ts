import { client } from '../../../../../Client.js';
import { AssignmentOverride } from '../../../../../Resources/Assignments.js';

export type delete_assignment_overridePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_assignment_overridePathParameters;
};

/**
 * Delete an assignment override
 *
 * Deletes an override and returns its former details.
 *
 * Nickname: delete_assignment_override
 */
export async function delete_assignment_override({ pathParams }: Options) {
  return await client().fetchAs<AssignmentOverride>(
    `/v1/courses/{course_id}/assignments/{assignment_id}/overrides/{id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
