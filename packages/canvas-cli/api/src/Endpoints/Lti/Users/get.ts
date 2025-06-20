import { client } from '../../../Client.js';
import { User } from '../../../Resources/Users.js';

export type getPathParameters = {
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
 * Get a single user (lti)
 *
 * Get a single Canvas user by Canvas id or LTI id. Tool providers may only
 * access users that have been assigned an assignment associated with their
 * tool.
 *
 * Nickname: get_single_user_lti
 */
export async function get(options: Options) {
  const response = await client().fetchAs<User>(`/api/lti/users/{id}`, {
    method: 'GET',
    ...options
  });
  return response;
}
