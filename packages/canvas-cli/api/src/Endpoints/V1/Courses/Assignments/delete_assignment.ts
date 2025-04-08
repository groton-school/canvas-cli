import { client } from '../../../../Client.js';
import { Assignment } from '../../../../Resources/Assignments.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete an assignment
 *
 * Delete the given assignment.
 *
 * Nickname: delete_assignment
 */
export async function delete_assignment({ parameters }: Options) {
  return await client().fetchAs<Assignment>(
    `/v1/courses/{course_id}/assignments/{id}`,
    { method: 'DELETE', params: parameters }
  );
}
