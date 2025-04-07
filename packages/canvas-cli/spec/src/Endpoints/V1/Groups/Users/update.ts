import { GroupMembership } from '../../../../Resources/Groups.js';

type Parameters = {
  /** Currently, the only allowed value is "accepted" */
  workflow_state: string;
  /** No description */
  moderator: string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Update a membership
 *
 * Accept a membership request, or add/remove moderator rights.
 *
 * Nickname: update_membership_users
 */
export async function update({
  parameters
}: Options): Promise<GroupMembership> {
  return await (
    await fetch(`/v1/groups/{group_id}/users/{user_id}`, {
      method: 'PUT',
      body: parameters
    })
  ).json();
}
