import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../Client.js';
import { GroupCategory } from '../../../Resources/GroupCategories.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_category_id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** Name of the group category */
  name: string;
  /**
   * Allow students to sign up for a group themselves (Course Only). Valid
   * values are: "enabled":: allows students to self sign up for any group in
   * course "restricted":: allows students to self sign up only for groups in
   * the same section null disallows self sign up
   */
  self_signup: string;
  /**
   * Assigns group leaders automatically when generating and allocating
   * students to groups Valid values are: "first":: the first student to be
   * allocated to a group is the leader "random":: a random student from all
   * members is chosen as the leader
   */
  auto_leader: string;
  /**
   * Limit the maximum number of users in each group (Course Only). Requires
   * self signup.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  group_limit: number | string;
  /** The unique SIS identifier. */
  sis_group_category_id: string;
  /**
   * Create this number of groups (Course Only).
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  create_group_count: number | string;
  /**
   * (Deprecated) Create this number of groups, and evenly distribute students
   * among them. not allowed with "enable_self_signup". because the group
   * assignment happens synchronously, it's recommended that you instead use
   * the assign_unassigned_members endpoint. (Course Only)
   */
  split_group_count: string;
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
 * Update a Group Category
 *
 * Modifies an existing group category.
 *
 * Nickname: update_group_category
 */
export async function update(options: Options) {
  const response = await client().fetchAs<GroupCategory>(
    `/api/v1/group_categories/{group_category_id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
