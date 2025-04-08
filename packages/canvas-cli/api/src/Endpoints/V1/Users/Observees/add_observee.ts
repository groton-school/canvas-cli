import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

type Parameters = {
  /**
   * The ID for the root account to associate with the observation link. If
   * not specified, a link will be created for each root account associated to
   * both the observer and observee.
   *
   * Format: 'int64'
   */
  root_account_id: number;
};

type Options = {
  parameters: Parameters;
};

/**
 * Add an observee
 *
 * Registers a user as being observed by the given user.
 *
 * Nickname: add_observee
 */
export async function add_observee({ parameters }: Options) {
  return await client().fetchAs<User>(
    `/v1/users/{user_id}/observees/{observee_id}`,
    { method: 'PUT', params: parameters }
  );
}
