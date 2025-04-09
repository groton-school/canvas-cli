import { client } from '../../../../Client.js';

type listPathParameters = {
  /** ID */
  user_id: string;
};

type Options = {
  pathParams: listPathParameters;
};

/**
 * List user logins
 *
 * Given a user ID, return a paginated list of that user's logins for the given
 * account.
 *
 * Nickname: list_user_logins_users
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<void>(`/v1/users/{user_id}/logins`, {
    method: 'GET',
    pathParams
  });
}
