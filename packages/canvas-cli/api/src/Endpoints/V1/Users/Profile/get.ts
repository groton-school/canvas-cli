import { client } from '../../../../Client.js';
import { Profile } from '../../../../Resources/Users.js';

export type getPathParameters = {
  /** ID */
  user_id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

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
export async function get(options: Options) {
  return await client().fetchAs<Profile>(`/api/v1/users/{user_id}/profile`, {
    method: 'GET',
    ...options
  });
}
