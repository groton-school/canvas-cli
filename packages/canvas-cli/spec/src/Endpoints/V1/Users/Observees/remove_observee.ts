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
export async function remove_observee({ parameters }: Options): Promise<User> {
  return await (
    await fetch(`/v1/users/{user_id}/observees/{observee_id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
