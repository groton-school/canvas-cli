import { client } from '../../../Client.js';
import { Account } from '../../../Resources/Accounts.js';

type Options =
  | {
      strict?: false;
    }
  | {
      strict: true;
    };

/**
 * Get accounts that admins can manage
 *
 * A paginated list of accounts where the current user has permission to create
 * or manage courses. List will be empty for students and teachers as only
 * admins can view which accounts they are in.
 *
 * Nickname: get_accounts_that_admins_can_manage
 */
export async function get({}: Options) {
  return await client().fetchAs<string[]>(`/v1/manageable_accounts`, {
    method: 'GET'
  });
}
