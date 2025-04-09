import { GroupMembershipProgress } from '';
import { client } from '../../../../Client.js';

type assign_unassigned_membersPathParameters = {
  /** ID */
  group_category_id: string;
};

type assign_unassigned_membersFormParameters = {
  /**
   * The assigning is done asynchronously by default. If you would like to
   * override this and have the assigning done synchronously, set this value
   * to true.
   */
  sync: boolean;
};

type Options = {
  pathParams: assign_unassigned_membersPathParameters;
  params?: assign_unassigned_membersFormParameters;
};

/**
 * Assign unassigned members
 *
 * Assign all unassigned members as evenly as possible among the existing
 * student groups.
 *
 * Nickname: assign_unassigned_members
 */
export async function assign_unassigned_members({
  pathParams,
  params
}: Options) {
  return await client().fetchAs<GroupMembershipProgress>(
    `/v1/group_categories/{group_category_id}/assign_unassigned_members`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
