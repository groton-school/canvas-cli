import { client } from '../../../../../Client.js';
import { AssignmentOverride } from '../../../../../Resources/Assignments.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete an assignment override
 *
 * Deletes an override and returns its former details.
 *
 * Nickname: delete_assignment_override
 */
export async function delete_assignment_override({ parameters }: Options) {
  return await client().fetchAs<AssignmentOverride>(
    `/v1/courses/{course_id}/assignments/{assignment_id}/overrides/{id}`,
    { method: 'DELETE', params: parameters }
  );
}
