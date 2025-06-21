import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Admin } from '../../../../Resources/Admins.js';

export type make_account_adminPathParameters = {
  /** ID */
  account_id: string;
};

export type make_account_adminSearchParameters = Masquerade;

export type make_account_adminFormParameters = Masquerade & {
  /**
   * The id of the user to promote.
   *
   * Format: 'int64'
   */
  user_id: number;
  /**
   * [DEPRECATED] The user's admin relationship with the account will be
   * created with the given role. Defaults to 'AccountAdmin'.
   */
  role: string;
  /**
   * The user's admin relationship with the account will be created with the
   * given role. Defaults to the built-in role for 'AccountAdmin'.
   *
   * Format: 'int64'
   */
  role_id: number;
  /** Send a notification email to the new admin if true. Default is true. */
  send_confirmation: boolean;
};

type Options = {
  pathParams: make_account_adminPathParameters;
} & (
  | {
      searchParams?: Partial<make_account_adminSearchParameters>;
      params?: Partial<make_account_adminFormParameters>;
      strict?: false;
    }
  | {
      searchParams: make_account_adminSearchParameters;
      params: make_account_adminFormParameters;
      strict: true;
    }
);

/**
 * Make an account admin
 *
 * Flag an existing user as an admin within the account.
 *
 * Nickname: make_account_admin
 */
export async function make_account_admin(options: Options) {
  const response = await client().fetchAs<Admin>(
    `/api/v1/accounts/{account_id}/admins`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
