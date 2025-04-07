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
export async function delete_assignment({
  parameters
}: Options): Promise<Assignment> {
  return await (
    await fetch(`/v1/courses/{course_id}/assignments/{id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
