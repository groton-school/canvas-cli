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
export async function get({
  parameters
}: Options): Promise<AssignmentOverride> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/assignments/{assignment_id}/overrides/{id}`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
