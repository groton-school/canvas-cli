import { GroupMembership } from '../../../../Resources/Groups.js';

type Parameters = {
  /** No description */
  user_id: string;
  /**
   * Bulk add multiple users to a differentiation tag
   *
   * Format: int64
   */
  members: string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Create a membership
 *
 * Join, or request to join, a group, depending on the join_level of the group.
 * If the membership or join request already exists, then it is simply returned
 *
 * Nickname: create_membership
 */
export async function create({
  parameters
}: Options): Promise<GroupMembership> {
  return await (
    await fetch(`/v1/groups/{group_id}/memberships`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
