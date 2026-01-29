import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import { User } from './Users.js';

export type Group = {
  /**
   * The ID of the group.
   *
   * Type: integer
   */
  id: number | string;
  /** The display name of the group. */
  name: string;
  /** A description of the group. This is plain text. */
  description: string;
  /**
   * Whether or not the group is public. Currently only community groups can be
   * made public. Also, once a group has been set to public, it cannot be
   * changed back to private.
   *
   * Type: boolean
   */
  is_public: boolean | string;
  /**
   * Whether or not the current user is following this group.
   *
   * Type: boolean
   */
  followed_by_user: boolean | string;
  /**
   * How people are allowed to join the group. For all groups except for
   * community groups, the user must share the group's parent course or account.
   * For student organized or community groups, where a user can be a member of
   * as many or few as they want, the applicable levels are
   * 'parent_context_auto_join', 'parent_context_request', and
   * 'invitation_only'. For class groups, where students are divided up and
   * should only be part of one group of the category, this value will always be
   * 'invitation_only', and is not relevant. * If 'parent_context_auto_join',
   * anyone can join and will be automatically accepted. * If
   * 'parent_context_request', anyone can request to join, which must be
   * approved by a group moderator. * If 'invitation_only', only those how have
   * received an invitation my join the group, by accepting that invitation.
   */
  join_level: string;
  /**
   * The number of members currently in the group
   *
   * Type: integer
   */
  members_count: number | string;
  /** The url of the group's avatar */
  avatar_url: string;
  /**
   * The course or account that the group belongs to. The pattern here is that
   * whatever the context_type is, there will be an _id field named after that
   * type. So if instead context_type was 'account', the course_id field would
   * be replaced by an account_id field.
   */
  context_type: string;
  /** The course or account name that the group belongs to. */
  context_name: string;
  /** Type: integer */
  course_id: number | string;
  /**
   * Certain types of groups have special role designations. Currently, these
   * include: 'communities', 'student_organized', and 'imported'. Regular
   * course/account groups have a role of null.
   */
  role: string;
  /**
   * The ID of the group's category.
   *
   * Type: integer
   */
  group_category_id: number | string;
  /**
   * The SIS ID of the group. Only included if the user has permission to view
   * SIS information.
   */
  sis_group_id: string;
  /**
   * The id of the SIS import if created through SIS. Only included if the user
   * has permission to manage SIS information.
   *
   * Type: integer
   */
  sis_import_id: number | string;
  /**
   * The storage quota for the group, in megabytes
   *
   * Type: integer
   */
  storage_quota_mb: number | string;
  /**
   * Optional: the permissions the user has for the group. returned only for a
   * single group and include[]=permissions
   *
   * Object
   */
  permissions: JSONObject;
  /**
   * Optional: A list of users that are members in the group. Returned only if
   * include[]=users. WARNING: this collection's size is capped (if there are an
   * extremely large number of users in the group (thousands) not all of them
   * will be returned). If you need to capture all the users in a group with
   * certainty or experiencing slow response consider using the paginated
   * /api/v1/groups/<group_id>/users endpoint.
   */
  users: User[];
  /**
   * Indicates whether this group category is non-collaborative. A value of true
   * means these group categories rely on the manage_tags permissions and do not
   * have collaborative features
   *
   * Type: boolean
   */
  non_collaborative: boolean | string;
};

export type GroupMembership = {
  /**
   * The id of the membership object
   *
   * Type: integer
   */
  id: number | string;
  /**
   * The id of the group object to which the membership belongs
   *
   * Type: integer
   */
  group_id: number | string;
  /**
   * The id of the user object to which the membership belongs
   *
   * Type: integer
   */
  user_id: number | string;
  /**
   * The current state of the membership. Current possible values are
   * 'accepted', 'invited', and 'requested'
   */
  workflow_state: string;
  /**
   * Whether or not the user is a moderator of the group (the must also be an
   * active member of the group to moderate)
   *
   * Type: boolean
   */
  moderator: boolean | string;
  /**
   * Optional: whether or not the record was just created on a create call
   * (POST), i.e. was the user just added to the group, or was the user already
   * a member
   *
   * Type: boolean
   */
  just_created: boolean | string;
  /**
   * The id of the SIS import if created through SIS. Only included if the user
   * has permission to manage SIS information.
   *
   * Type: integer
   */
  sis_import_id: number | string;
};
