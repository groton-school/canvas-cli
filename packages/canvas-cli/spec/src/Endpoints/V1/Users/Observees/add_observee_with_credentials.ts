import { User } from '../../../../Resources/Users.js';

type Parameters = {
  /**
   * The login id for the user to observe. Required if access_token is
   * omitted.
   */
  'observee[unique_id]': string;
  /**
   * The password for the user to observe. Required if access_token is
   * omitted.
   */
  'observee[password]': string;
  /**
   * The access token for the user to observe. Required if
   * <tt>observee[unique_id]</tt> or <tt>observee[password]</tt> are omitted.
   */
  access_token: string;
  /**
   * A generated pairing code for the user to observe. Required if the
   * Observer pairing code feature flag is enabled
   */
  pairing_code: string;
  /**
   * The ID for the root account to associate with the observation link.
   * Defaults to the current domain account. If 'all' is specified, a link
   * will be created for each root account associated to both the observer and
   * observee.
   *
   * Format: int64
   */
  root_account_id: number;
};

type Options = {
  parameters: Parameters;
};

/**
 * Add an observee with credentials
 *
 * Register the given user to observe another user, given the observee's
 * credentials.
 *
 * Note:* all users are allowed to add their own observees, given the observee's
 * credentials or access token are provided. Administrators can add observees
 * given credentials, access token or the {api:UserObserveesController#update
 * observee's id}.
 *
 * Nickname: add_observee_with_credentials
 */
export async function add_observee_with_credentials({
  parameters
}: Options): Promise<User> {
  return await (
    await fetch(`/v1/users/{user_id}/observees`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
