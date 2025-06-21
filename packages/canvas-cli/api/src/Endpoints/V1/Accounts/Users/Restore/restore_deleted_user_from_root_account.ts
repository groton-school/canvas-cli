import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { User } from '../../../../../Resources/Users.js';

export type restore_deleted_user_from_root_accountPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  user_id: string;
};

export type restore_deleted_user_from_root_accountSearchParameters = Masquerade;

type Options = {
  pathParams: restore_deleted_user_from_root_accountPathParameters;
} & (
  | {
      searchParams?: Partial<restore_deleted_user_from_root_accountSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: restore_deleted_user_from_root_accountSearchParameters;
      strict: true;
    }
);

/**
 * Restore a deleted user from a root account
 *
 * Restore a user record along with the most recently deleted pseudonym from a
 * Canvas root account.
 *
 * Nickname: restore_deleted_user_from_root_account
 */
export async function restore_deleted_user_from_root_account(options: Options) {
  const response = await client().fetchAs<User>(
    `/api/v1/accounts/{account_id}/users/{user_id}/restore`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
