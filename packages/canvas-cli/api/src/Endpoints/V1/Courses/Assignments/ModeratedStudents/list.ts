import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { User } from '../../../../../Resources/Users.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
};

export type listSearchParameters = Masquerade & Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
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
  const response = await client().fetchAs<User[]>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/moderated_students`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
