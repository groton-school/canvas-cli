import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Progress } from '../../../../Resources/CoursePace.js';

export type delete_multiple_users_from_root_accountPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type delete_multiple_users_from_root_accountSearchParameters =
  Masquerade;

type Options = {
  pathParams: delete_multiple_users_from_root_accountPathParameters;
} & (
  | {
      searchParams?: Partial<delete_multiple_users_from_root_accountSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_multiple_users_from_root_accountSearchParameters;
      strict: true;
    }
);

/**
 * Delete multiple users from the root account
 *
 * Delete multiple users from a Canvas root account. If a user is associated
 * with multiple root accounts (in a multi-tenant instance of Canvas), this
 * action will NOT remove them from the other accounts.
 *
 * WARNING: This API will allow a user to remove themselves from the account. If
 * they do this, they won't be able to make API calls or log into Canvas at that
 * account.
 *
 * Nickname: delete_multiple_users_from_root_account
 */
export async function delete_multiple_users_from_root_account(
  options: Options
) {
  const response = await client().fetchAs<Progress>(
    `/api/v1/accounts/{account_id}/users`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
