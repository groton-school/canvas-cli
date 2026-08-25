import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { Admin } from '../../../../Resources/Admins.js';

export type remove_account_adminPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  account_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  user_id: string | number;
};

export type remove_account_adminSearchParameters = Masquerade &
  Partial<{
    /**
     * [DEPRECATED] Account role to remove from the user.
     *
     *
     *
     *
     */
    role: string;
    /**
     * The id of the role representing the user&#x27;s admin relationship with the account.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
    role_id: number | string;
  }>;

type Options = (
  | {
      path: remove_account_adminPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: remove_account_adminPathParameters;
    }
) &
  (
    | {
        query?: Partial<remove_account_adminSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<remove_account_adminSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: remove_account_adminSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: remove_account_adminSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Remove account admin
 *
 * Remove the rights associated with an account admin role from a user.
 *
 * nickname: remove_account_admin
 *
 *
 *
 *
 */
export async function remove_account_admin(options: Options) {
  const response = await client().fetchAs<Admin>(
    `/api/v1/accounts/{account_id}/admins/{user_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
