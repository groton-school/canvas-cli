import { client } from '../../../../Client.js';
import { Assignment } from '../../../../Resources/Assignments.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single assignment
 *
 * Returns the assignment with the given id.
 *
 * Nickname: get_single_assignment
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<Assignment>(
    `/v1/courses/{course_id}/assignments/{id}`,
    { method: 'GET', params: parameters }
  );
}
