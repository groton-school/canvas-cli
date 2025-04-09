import { client } from '../../../../Client.js';
import { Profile } from '../../../../Resources/Users.js';

type getPathParameters = {
  /** ID */
  user_id: string;
};

type Options = {
  pathParams: getPathParameters;
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
export async function get({ pathParams }: Options) {
  return await client().fetchAs<Profile>(`/v1/users/{user_id}/profile`, {
    method: 'GET',
    pathParams
  });
}
