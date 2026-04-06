import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Profile } from '../../../../Resources/Users.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type getSearchParameters = Masquerade;

type Options = (
  | {
      path: getPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: getPathParameters;
    }
) &
  (
    | {
        query?: Partial<getSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<getSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: getSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: getSearchParameters;
          }
      ) & {
        strict: true;
      })
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
  const response = await client().fetchAs<Profile>(
    `/api/v1/users/{user_id}/profile`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
