import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';
import { User } from '../../../../../Resources/Users.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
};

export type listSearchParameters = Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * List students selected for moderation
 *
 * Returns a paginated list of students selected for moderation
 *
 * Nickname: list_students_selected_for_moderation
 */
export async function list(options: Options) {
  return await client().fetchAs<User[]>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/moderated_students`,
    {
      method: 'GET',
      ...options
    }
  );
}
