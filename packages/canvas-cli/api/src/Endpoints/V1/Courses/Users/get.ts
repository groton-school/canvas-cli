import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
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
  return await client().fetchAs<User>(
    `/api/v1/courses/{course_id}/users/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
}
