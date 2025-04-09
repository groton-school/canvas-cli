import { client } from '../../../../Client.js';
import { GroupMembership } from '../../../../Resources/Groups.js';

type getPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  user_id: string;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get a single group membership
 *
 * Returns the group membership with the given membership id or user id.
 *
 * Nickname: get_single_group_membership_users
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<GroupMembership>(
    `/v1/groups/{group_id}/users/{user_id}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
