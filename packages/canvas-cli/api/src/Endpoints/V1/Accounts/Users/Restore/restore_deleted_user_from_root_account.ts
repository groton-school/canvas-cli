import { client } from '../../../../../Client.js';
import { User } from '../../../../../Resources/Users.js';

type restore_deleted_user_from_root_accountPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  user_id: string;
};

type Options = {
  pathParams: restore_deleted_user_from_root_accountPathParameters;
};

/**
 * Restore a deleted user from a root account
 *
 * Restore a user record along with the most recently deleted pseudonym from a
 * Canvas root account.
 *
 * Nickname: restore_deleted_user_from_root_account
 */
export async function restore_deleted_user_from_root_account({
  pathParams
}: Options) {
  return await client().fetchAs<User>(
    `/v1/accounts/{account_id}/users/{user_id}/restore`,
    {
      method: 'PUT',
      pathParams
    }
  );
}
