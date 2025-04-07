import { AssignmentGroup } from '../../../../Resources/AssignmentGroups.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List assignment groups
 *
 * Returns the paginated list of assignment groups for the current context. The
 * returned groups are sorted by their position field.
 *
 * Nickname: list_assignment_groups
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/courses/{course_id}/assignment_groups`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
