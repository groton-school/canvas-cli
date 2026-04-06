import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { User } from '../../../../Resources/Users.js';

export type delete_user_from_root_accountPathParameters = {
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

export type delete_user_from_root_accountSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_user_from_root_accountPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_user_from_root_accountPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_user_from_root_accountSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<delete_user_from_root_accountSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_user_from_root_accountSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: delete_user_from_root_accountSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

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
export async function delete_user_from_root_account(options: Options) {
  const response = await client().fetchAs<User>(
    `/api/v1/accounts/{account_id}/users/{user_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
