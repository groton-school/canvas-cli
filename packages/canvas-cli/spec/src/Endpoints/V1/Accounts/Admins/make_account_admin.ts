import { Admin } from '../../../../Resources/Admins.js';

type Parameters = {
  /**
   * The id of the user to promote.
   *
   * Format: int64
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
   * Format: int64
   */
  role_id: number;
  /** Send a notification email to the new admin if true. Default is true. */
  send_confirmation: boolean;
};

type Options = {
  parameters: Parameters;
};

/**
 * Make an account admin
 *
 * Flag an existing user as an admin within the account.
 *
 * Nickname: make_account_admin
 */
export async function make_account_admin({
  parameters
}: Options): Promise<Admin> {
  return await (
    await fetch(`/v1/accounts/{account_id}/admins`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
