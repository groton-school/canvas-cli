import { client } from '../../../../Client.js';
import { GroupMembershiporaJSONresponsedetailingpartialfailuresifsomemembershipscouldnotbecreated } from '../../../../Overrides.js';

export type createPathParameters = {
  /** ID */
  group_id: string;
};

export type createFormParameters = {
  /** - The ID of the user for individual membership creation. */
  user_id: string;
  /**
   * - Bulk add multiple users to a differentiation tag.
   *
   * Format: 'int64'
   */
  members: number[];
  /** - If true, add all enrolled students from the course. */
  all_in_group_course: boolean;
  /**
   * - An array of user IDs to exclude when using all_in_group_course.
   *
   * Format: 'int64'
   */
  exclude_user_ids: number[];
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create a membership
 *
 * Join, or request to join, a group, depending on the join_level of the group.
 * If the membership or join request already exists, then it is simply
 * returned.
 *
 * For differentiation tags, you can bulk add users using one of two methods:
 *
 * 1. Provide an array of user IDs via the `members[]` parameter.
 * 2. Use the course-wide option with the following parameters:
 *
 *    - `all_in_group_course` [Boolean]: If set to true, the endpoint will add every
 *         currently enrolled student (from the course context) to the
 *         differentiation tag.
 *    - `exclude_user_ids[]` [Integer]: When using `all_in_group_course`, you can
 *         optionally exclude specific users by providing their IDs in this
 *         parameter.
 *
 * In this context, these parameters only apply to differentiation tag
 * memberships.
 *
 * Nickname: create_membership
 */
export async function create(options: Options) {
  return await client().fetchAs<GroupMembershiporaJSONresponsedetailingpartialfailuresifsomemembershipscouldnotbecreated>(
    `/api/v1/groups/{group_id}/memberships`,
    {
      method: 'POST',
      ...options
    }
  );
}
