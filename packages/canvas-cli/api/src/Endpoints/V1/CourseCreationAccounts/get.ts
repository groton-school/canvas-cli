import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../Client.js';
import { Account } from '../../../Resources/Accounts.js';

export type getSearchParameters = Paginated;

type Options =
  | {
      strict?: false;
    }
  | {
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
export async function get({}: Options) {
  return await client().fetchAs<Account[]>(`/v1/course_creation_accounts`, {
    method: 'GET'
  });
}
