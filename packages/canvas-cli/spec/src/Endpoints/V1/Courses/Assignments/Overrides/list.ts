import { AssignmentOverride } from '../../../../../Resources/Assignments.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List assignment overrides
 *
 * Returns the paginated list of overrides for this assignment that target
 * sections/groups/students visible to the current user.
 *
 * Nickname: list_assignment_overrides
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/assignments/{assignment_id}/overrides`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
