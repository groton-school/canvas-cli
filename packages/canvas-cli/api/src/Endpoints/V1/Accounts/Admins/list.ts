import { Integer } from '';
import { client } from '../../../../Client.js';
import { Admin } from '../../../../Resources/Admins.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List account admins
 *
 * A paginated list of the admins in the account
 *
 * Nickname: list_account_admins
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/accounts/{account_id}/admins`, {
    method: 'GET',
    params: parameters
  });
}
