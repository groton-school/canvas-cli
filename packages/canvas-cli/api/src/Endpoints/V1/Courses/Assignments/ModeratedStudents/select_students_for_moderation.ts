import { client } from '../../../../../Client.js';
import { User } from '../../../../../Resources/Users.js';

export type select_students_for_moderationPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
};

export type select_students_for_moderationFormParameters = {
  /** User ids for students to select for moderation */
  student_ids: string[];
};

type Options = {
  pathParams: select_students_for_moderationPathParameters;
  params?: select_students_for_moderationFormParameters;
};

/**
 * Select students for moderation
 *
 * Returns an array of users that were selected for moderation
 *
 * Nickname: select_students_for_moderation
 */
export async function select_students_for_moderation({
  pathParams,
  params
}: Options) {
  return await client().fetchAs<string[]>(
    `/v1/courses/{course_id}/assignments/{assignment_id}/moderated_students`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
