import { BasicUser } from '../../../../../../Resources/Assignments.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List group members for a student on an assignment
 *
 * Returns student ids and names for the group.
 *
 * Nickname: list_group_members_for_student_on_assignment
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/assignments/{assignment_id}/users/{user_id}/group_members`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
