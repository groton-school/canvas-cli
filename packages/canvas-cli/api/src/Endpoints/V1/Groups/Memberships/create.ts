import { client } from '../../../../Client.js';
import { GroupMembership } from '../../../../Resources/Groups.js';

type createPathParameters = {
  /** ID */
  group_id: string;
};

type createFormParameters = {
  /** No description */
  user_id: string;
  /**
   * Bulk add multiple users to a differentiation tag
   *
   * Format: 'int64'
   */
  members: string[];
};

type Options = {
  pathParams: createPathParameters;
  params?: createFormParameters;
};

/**
 * Create a membership
 *
 * Join, or request to join, a group, depending on the join_level of the group.
 * If the membership or join request already exists, then it is simply returned
 *
 * Nickname: create_membership
 */
export async function create({ pathParams, params }: Options) {
  return await client().fetchAs<GroupMembership>(
    `/v1/groups/{group_id}/memberships`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
