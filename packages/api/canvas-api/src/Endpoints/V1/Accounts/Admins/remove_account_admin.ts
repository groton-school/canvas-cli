import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { Admin } from '../../../../Resources/Admins.js';

export type remove_account_adminPathParameters = {
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

export type remove_account_adminSearchParameters = Masquerade &
  Partial<{
    /** [DEPRECATED] Account role to remove from the user. */
    role: string;
    /**
     * The id of the role representing the user's admin relationship with the
     * account.
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    role_id: number | string;
  }>;

type Options = {
  pathParams: remove_account_adminPathParameters;
} & (
  | {
      searchParams?: Partial<remove_account_adminSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: remove_account_adminSearchParameters;
      strict: true;
    }
);

/**
 * Remove account admin
 *
 * Remove the rights associated with an account admin role from a user.
 *
 * Nickname: remove_account_admin
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
