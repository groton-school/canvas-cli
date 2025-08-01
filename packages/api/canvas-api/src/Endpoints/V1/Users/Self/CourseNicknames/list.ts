import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { CourseNickname } from '../../../../../Resources/Users.js';

export type listSearchParameters = Masquerade & Paginated;

type Options =
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    };

/**
 * List course nicknames
 *
 * Returns all course nicknames you have set.
 *
 * Nickname: list_course_nicknames
 */
export async function list(options: Options) {
  const response = await client().fetchAs<CourseNickname[]>(
    `/api/v1/users/self/course_nicknames`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
