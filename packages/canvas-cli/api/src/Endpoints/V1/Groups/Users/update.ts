import { client } from '../../../../Client.js';
import { GroupMembership } from '../../../../Resources/Groups.js';

export type updatePathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  user_id: string;
};

export type updateFormParameters = {
  /** Currently, the only allowed value is "accepted" */
  workflow_state: string;
  /** No description */
  moderator: string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update a membership
 *
 * Accept a membership request, or add/remove moderator rights.
 *
 * Nickname: update_membership_users
 */
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<GroupMembership>(
    `/v1/groups/{group_id}/users/{user_id}`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
