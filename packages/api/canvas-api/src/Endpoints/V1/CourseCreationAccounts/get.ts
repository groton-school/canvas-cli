import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../Client.js';
import { Account } from '../../../Resources/Accounts.js';

export type getSearchParameters = Masquerade & Paginated;

type Options =
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    };

/**
 * Get accounts that users can create courses in
 *
 * A paginated list of accounts where the current user has permission to create
 * courses.
 *
 * Nickname: get_accounts_that_users_can_create_courses_in
 */
export async function get(options: Options) {
  const response = await client().fetchAs<Account[]>(
    `/api/v1/course_creation_accounts`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
