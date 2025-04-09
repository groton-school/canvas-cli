import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

type delete_user_from_root_accountPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  user_id: string;
};

type Options = {
  pathParams: delete_user_from_root_accountPathParameters;
};

/**
 * Delete a user from the root account
 *
 * Delete a user record from a Canvas root account. If a user is associated with
 * multiple root accounts (in a multi-tenant instance of Canvas), this action
 * will NOT remove them from the other accounts.
 *
 * WARNING: This API will allow a user to remove themselves from the account. If
 * they do this, they won't be able to make API calls or log into Canvas at that
 * account.
 *
 * Nickname: delete_user_from_root_account
 */
export async function delete_user_from_root_account({ pathParams }: Options) {
  return await client().fetchAs<User>(
    `/v1/accounts/{account_id}/users/{user_id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
