import { client } from '../../../../Client.js';
import { Profile } from '../../../../Resources/Users.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get user profile
 *
 * Returns user profile data, including user id, name, and profile pic.
 *
 * When requesting the profile for the user accessing the API, the user's
 * calendar feed URL and LTI user id will be returned as well.
 *
 * Nickname: get_user_profile
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<Profile>(`/v1/users/{user_id}/profile`, {
    method: 'GET',
    params: parameters
  });
}
