import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

type getPathParameters = {
  /** ID */
  group_id: string;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get all users in a group (lti)
 *
 * Get all Canvas users in a group. Tool providers may only access groups that
 * belong to the context the tool is installed in.
 *
 * Nickname: get_all_users_in_group_lti
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<string[]>(`/lti/groups/{group_id}/users`, {
    method: 'GET',
    pathParams
  });
}
