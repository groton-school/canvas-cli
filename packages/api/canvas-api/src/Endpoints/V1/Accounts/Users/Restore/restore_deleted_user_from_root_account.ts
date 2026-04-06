import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { User } from '../../../../../Resources/Users.js';

export type restore_deleted_user_from_root_accountPathParameters = {
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
  user_id: string | number;
};

export type restore_deleted_user_from_root_accountSearchParameters = Masquerade;

type Options = (
  | {
      path: restore_deleted_user_from_root_accountPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: restore_deleted_user_from_root_accountPathParameters;
    }
) &
  (
    | {
        query?: Partial<restore_deleted_user_from_root_accountSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<restore_deleted_user_from_root_accountSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: restore_deleted_user_from_root_accountSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: restore_deleted_user_from_root_accountSearchParameters;
          }
      ) & {
        strict: true;
      })
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
