import { client } from '../../../../Client.js';
import { GroupCategory } from '../../../../Resources/GroupCategories.js';

type createPathParameters = {
  /** ID */
  course_id: string;
};

type createFormParameters = {
  /** Name of the group category */
  name: string;
  /**
   * Can only be set by users with the Differentiated Tag Add permission
   *
   * If set to true, groups in this category will be only be visible to users
   * with the Differentiated Tag Manage permission.
   */
  non_collaborative: boolean;
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
   * Format: 'int64'
   */
  group_limit: number;
  /** The unique SIS identifier. */
  sis_group_category_id: string;
  /**
   * Create this number of groups (Course Only).
   *
   * Format: 'int64'
   */
  create_group_count: number;
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
  params?: createFormParameters;
};

/**
 * Create a Group Category
 *
 * Create a new group category
 *
 * Nickname: create_group_category_courses
 */
export async function create({ pathParams, params }: Options) {
  return await client().fetchAs<GroupCategory>(
    `/v1/courses/{course_id}/group_categories`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
