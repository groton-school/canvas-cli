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
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/assignments/{assignment_id}/moderated_students`,
      { method: 'GET', body: parameters }
    )
  ).json();
}
