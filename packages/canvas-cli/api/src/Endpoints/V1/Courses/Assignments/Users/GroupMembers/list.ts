import { client } from '../../../../../../Client.js';
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
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/assignments/{assignment_id}/users/{user_id}/group_members`,
    { method: 'GET', params: parameters }
  );
}
