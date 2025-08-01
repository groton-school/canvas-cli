import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { GroupCategory } from '../../../../Resources/GroupCategories.js';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /** Name of the group category */
  name: string;
  /**
   * Can only be set by users with the Differentiation Tag - Add permission
   *
   * If set to true, groups in this category will be only be visible to users
   * with the Differentiation Tag - Manage permission.
   *
   * Type: boolean
   */
  non_collaborative: boolean | string;
  /**
   * Allow students to sign up for a group themselves (Course Only). valid
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
  pathParams: createPathParameters;
} & (
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create a Group Category
 *
 * Create a new group category
 *
 * Nickname: create_group_category_courses
 */
export async function create(options: Options) {
  const response = await client().fetchAs<GroupCategory>(
    `/api/v1/courses/{course_id}/group_categories`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
