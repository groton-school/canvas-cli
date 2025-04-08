import { client } from '../../../Client.js';
import { Account } from '../../../Resources/Accounts.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List accounts
 *
 * A paginated list of accounts that the current user can view or manage.
 * Typically, students and even teachers will get an empty list in response,
 * only account admins can view the accounts that they are in.
 *
 * Nickname: list_accounts
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/accounts`, {
    method: 'GET',
    params: parameters
  });
}
