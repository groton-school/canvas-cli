import { client } from '../../../../../Client.js';
import { AssignmentOverride } from '../../../../../Resources/Assignments.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single assignment override
 *
 * Returns details of the the override with the given id.
 *
 * Nickname: get_single_assignment_override
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<AssignmentOverride>(
    `/v1/courses/{course_id}/assignments/{assignment_id}/overrides/{id}`,
    { method: 'GET', params: parameters }
  );
}
