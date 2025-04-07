import { User } from '../../../../Resources/Users.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get all users in a group (lti)
 *
 * Get all Canvas users in a group. Tool providers may only access groups that
 * belong to the context the tool is installed in.
 *
 * Nickname: get_all_users_in_group_lti
 */
export async function get({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/lti/groups/{group_id}/users`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
