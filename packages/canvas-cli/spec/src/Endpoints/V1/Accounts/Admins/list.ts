import { Integer } from '';
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
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/accounts/{account_id}/admins`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
