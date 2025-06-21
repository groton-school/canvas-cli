import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { GroupMembership } from '../../../../Resources/Groups.js';

export type updatePathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  user_id: string;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** Currently, the only allowed value is "accepted" */
  workflow_state: string;
  /** No description */
  moderator: string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
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
export async function update(options: Options) {
  const response = await client().fetchAs<GroupMembership>(
    `/api/v1/groups/{group_id}/users/{user_id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
