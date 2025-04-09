import { client } from '../../../../../Client.js';
import { User } from '../../../../../Resources/Users.js';

type listPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
};

type Options = {
  pathParams: listPathParameters;
};

/**
 * List students selected for moderation
 *
 * Returns a paginated list of students selected for moderation
 *
 * Nickname: list_students_selected_for_moderation
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/assignments/{assignment_id}/moderated_students`,
    {
      method: 'GET',
      pathParams
    }
  );
}
