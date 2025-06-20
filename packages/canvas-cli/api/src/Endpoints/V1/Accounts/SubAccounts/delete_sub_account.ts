import { client } from '../../../../Client.js';
import { Account } from '../../../../Resources/Accounts.js';

export type delete_sub_accountPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_sub_accountPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Delete a sub-account
 *
 * Cannot delete an account with active courses or active sub_accounts. Cannot
 * delete a root_account
 *
 * Nickname: delete_sub_account
 */
export async function delete_sub_account(options: Options) {
  const response = await client().fetchAs<Account>(
    `/api/v1/accounts/{account_id}/sub_accounts/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
