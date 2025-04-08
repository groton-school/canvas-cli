import { client } from '../../../../../Client.js';
import { User } from '../../../../../Resources/Users.js';

type Parameters = {
  /** User ids for students to select for moderation */
  student_ids: string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Select students for moderation
 *
 * Returns an array of users that were selected for moderation
 *
 * Nickname: select_students_for_moderation
 */
export async function select_students_for_moderation({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/assignments/{assignment_id}/moderated_students`,
    { method: 'POST', params: parameters }
  );
}
