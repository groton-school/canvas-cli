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
export async function delete_assignment_override({
  parameters
}: Options): Promise<AssignmentOverride> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/assignments/{assignment_id}/overrides/{id}`,
      { method: 'DELETE', body: parameters }
    )
  ).json();
}
