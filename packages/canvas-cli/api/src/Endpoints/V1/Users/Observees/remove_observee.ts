import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Remove an observee
 *
 * Unregisters a user as being observed by the given user.
 *
 * Nickname: remove_observee
 */
export async function remove_observee({ parameters }: Options) {
  return await client().fetchAs<User>(
    `/v1/users/{user_id}/observees/{observee_id}`,
    { method: 'DELETE', params: parameters }
  );
}
