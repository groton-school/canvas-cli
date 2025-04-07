import { GroupMembership } from '../../../../Resources/Groups.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List group memberships
 *
 * A paginated list of the members of a group.
 *
 * Nickname: list_group_memberships
 */
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/groups/{group_id}/memberships`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
