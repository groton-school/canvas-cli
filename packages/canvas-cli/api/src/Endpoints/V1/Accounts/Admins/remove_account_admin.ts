import { client } from '../../../../Client.js';
import { Admin } from '../../../../Resources/Admins.js';

export type remove_account_adminPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  user_id: string;
};

export type remove_account_adminSearchParameters = {
  /** [DEPRECATED] Account role to remove from the user. */
  role: string;
  /**
   * The id of the role representing the user's admin relationship with the
   * account.
   *
   * Format: 'int64'
   */
  role_id: number;
};

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
export async function remove_account_admin({
  pathParams,
  searchParams
}: Options) {
  return await client().fetchAs<Admin>(
    `/v1/accounts/{account_id}/admins/{user_id}`,
    {
      method: 'DELETE',
      pathParams,
      searchParams
    }
  );
}
