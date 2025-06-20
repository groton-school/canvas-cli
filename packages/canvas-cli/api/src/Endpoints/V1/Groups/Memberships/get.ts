import { client } from '../../../../Client.js';
import { GroupMembership } from '../../../../Resources/Groups.js';

export type getPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  membership_id: string;
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
 * Get a single group membership
 *
 * Returns the group membership with the given membership id or user id.
 *
 * Nickname: get_single_group_membership_memberships
 */
export async function get(options: Options) {
  const response = await client().fetchAs<GroupMembership>(
    `/api/v1/groups/{group_id}/memberships/{membership_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
