import { client } from '../../../Client.js';
import { User } from '../../../Resources/Users.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single user (lti)
 *
 * Get a single Canvas user by Canvas id or LTI id. Tool providers may only
 * access users that have been assigned an assignment associated with their
 * tool.
 *
 * Nickname: get_single_user_lti
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<User>(`/lti/users/{id}`, {
    method: 'GET',
    params: parameters
  });
}
