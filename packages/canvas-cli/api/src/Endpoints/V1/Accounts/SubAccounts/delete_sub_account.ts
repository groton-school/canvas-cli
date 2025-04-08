import { client } from '../../../../Client.js';
import { Account } from '../../../../Resources/Accounts.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a sub-account
 *
 * Cannot delete an account with active courses or active sub_accounts. Cannot
 * delete a root_account
 *
 * Nickname: delete_sub_account
 */
export async function delete_sub_account({ parameters }: Options) {
  return await client().fetchAs<Account>(
    `/v1/accounts/{account_id}/sub_accounts/{id}`,
    { method: 'DELETE', params: parameters }
  );
}
