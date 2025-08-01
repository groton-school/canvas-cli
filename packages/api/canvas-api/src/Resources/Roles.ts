import { JSONObject } from '@battis/typescript-tricks';
import { Account } from './Accounts.js';

export type RolePermissions = {
  /**
   * Whether the role has the permission
   *
   * Type: boolean
   */
  enabled: boolean | string;
  /**
   * Whether the permission is locked by this role
   *
   * Type: boolean
   */
  locked: boolean | string;
  /**
   * Whether the permission applies to the account this role is in. Only present
   * if enabled is true
   *
   * Type: boolean
   */
  applies_to_self: boolean | string;
  /**
   * Whether the permission cascades down to sub accounts of the account this
   * role is in. Only present if enabled is true
   *
   * Type: boolean
   */
  applies_to_descendants: boolean | string;
  /**
   * Whether the permission can be modified in this role (i.e. whether the
   * permission is locked by an upstream role).
   *
   * Type: boolean
   */
  readonly: boolean | string;
  /**
   * Whether the value of enabled is specified explicitly by this role, or
   * inherited from an upstream role.
   *
   * Type: boolean
   */
  explicit: boolean | string;
  /**
   * The value that would have been inherited from upstream if the role had not
   * explicitly set a value. Only present if explicit is true.
   *
   * Type: boolean
   */
  prior_default: boolean | string;
};

export type Role = {
  /**
   * The id of the role
   *
   * Type: integer
   */
  id: number | string;
  /** The label of the role. */
  label: string;
  /** The label of the role. (Deprecated alias for 'label') */
  role: string;
  /**
   * The role type that is being used as a base for this role. For account-level
   * roles, this is 'AccountMembership'. For course-level roles, it is an
   * enrollment type.
   */
  base_role_type: string;
  /**
   * Whether this role applies to account memberships (i.e., not linked to an
   * enrollment in a course).
   *
   * Type: boolean
   */
  is_account_role: boolean | string;
  /** JSON representation of the account the role is defined in. */
  account: Account;
  /** The state of the role: 'active', 'inactive', or 'built_in' */
  workflow_state: string;
  /**
   * The date and time the role was created.
   *
   * Format: date-time
   */
  created_at: string;
  /**
   * The date and time the role was last updated.
   *
   * Format: date-time
   */
  last_updated_at: string;
  /**
   * A dictionary of permissions keyed by name (see permissions input parameter
   * in the 'Create a role' API).
   *
   * Object
   */
  permissions: JSONObject;
};
