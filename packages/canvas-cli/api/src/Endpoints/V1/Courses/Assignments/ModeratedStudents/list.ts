import { client } from '../../../../../Client.js';
import { User } from '../../../../../Resources/Users.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List students selected for moderation
 *
 * Returns a paginated list of students selected for moderation
 *
 * Nickname: list_students_selected_for_moderation
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/assignments/{assignment_id}/moderated_students`,
    { method: 'GET', params: parameters }
  );
}
