import { client } from '../../../../Client.js';
import { GroupMembership } from '../../../../Resources/Groups.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single group membership
 *
 * Returns the group membership with the given membership id or user id.
 *
 * Nickname: get_single_group_membership_memberships
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<GroupMembership>(
    `/v1/groups/{group_id}/memberships/{membership_id}`,
    { method: 'GET', params: parameters }
  );
}
