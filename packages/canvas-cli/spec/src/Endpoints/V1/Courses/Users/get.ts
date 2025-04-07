import { User } from '../../../../Resources/Users.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get single user
 *
 * Return information on a single user.
 *
 * Accepts the same include[] parameters as the :users: action, and returns a
 * single user with the same fields as that action.
 *
 * Nickname: get_single_user
 */
export async function get({ parameters }: Options): Promise<User> {
  return await (
    await fetch(`/v1/courses/{course_id}/users/{id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
