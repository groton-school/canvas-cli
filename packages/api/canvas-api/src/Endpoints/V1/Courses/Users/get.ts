import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { User } from '../../../../Resources/Users.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
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
 * Get single user
 *
 * Return information on a single user.
 *
 * Accepts the same include[] parameters as the :users: action, and returns a
 * single user with the same fields as that action.
 *
 * Nickname: get_single_user
 */
export async function get(options: Options) {
  const response = await client().fetchAs<User>(
    `/api/v1/courses/{course_id}/users/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
