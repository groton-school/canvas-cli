import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Account } from '../../../../Resources/Accounts.js';

export type delete_sub_accountPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_sub_accountSearchParameters = Masquerade;

type Options = {
  pathParams: delete_sub_accountPathParameters;
} & (
  | {
      searchParams?: Partial<delete_sub_accountSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_sub_accountSearchParameters;
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
