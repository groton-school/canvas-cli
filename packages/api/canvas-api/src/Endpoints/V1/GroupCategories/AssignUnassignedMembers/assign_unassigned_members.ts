import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { GroupMembershipProgress } from '../../../../Overrides.js';

export type assign_unassigned_membersPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_category_id: string | number;
};

export type assign_unassigned_membersSearchParameters = Masquerade;

export type assign_unassigned_membersFormParameters = Masquerade & {
  /**
   * The assigning is done asynchronously by default. If you would like to
   * override this and have the assigning done synchronously, set this value
   * to true.
   *
   * Type: boolean
   */
  sync: boolean | string;
};

type Options = {
  pathParams: assign_unassigned_membersPathParameters;
} & (
  | {
      searchParams?: Partial<assign_unassigned_membersSearchParameters>;
      params?: Partial<assign_unassigned_membersFormParameters>;
      strict?: false;
    }
  | {
      searchParams: assign_unassigned_membersSearchParameters;
      params: assign_unassigned_membersFormParameters;
      strict: true;
    }
);

/**
 * Assign unassigned members
 *
 * Assign all unassigned members as evenly as possible among the existing
 * student groups.
 *
 * Nickname: assign_unassigned_members
 */
export async function assign_unassigned_members(options: Options) {
  const response = await client().fetchAs<GroupMembershipProgress>(
    `/api/v1/group_categories/{group_category_id}/assign_unassigned_members`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
