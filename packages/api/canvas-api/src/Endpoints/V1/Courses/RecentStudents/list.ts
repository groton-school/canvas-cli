import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
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
 * List recently logged in students
 *
 * Returns the paginated list of users in this course, ordered by how recently
 * they have logged in. The records include the 'last_login' field which
 * contains a timestamp of the last time that user logged into canvas. The
 * querying user must have the 'View usage reports' permission.
 *
 * Nickname: list_recently_logged_in_students
 */
export async function list(options: Options) {
  const response = await client().fetchAs<User[]>(
    `/api/v1/courses/{course_id}/recent_students`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
