import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { Role } from '../../../../Resources/Roles.js';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /** Label for the role. */
  label: string;
  /** Deprecated alias for label. */
  role: string;
  /**
   * Specifies the role type that will be used as a base for the permissions
   * granted to this role.
   *
   * Defaults to 'AccountMembership' if absent
   */
  base_role_type: string;
  /**
   * No description
   *
   * Type: boolean
   */
  'permissions[<X>][explicit]': boolean | string;
  /**
   * If explicit is 1 and enabled is 1, permission <X> will be explicitly
   * granted to this role. If explicit is 1 and enabled has any other value
   * (typically 0), permission <X> will be explicitly denied to this role. If
   * explicit is any other value (typically 0) or absent, or if enabled is
   * absent, the value for permission <X> will be inherited from upstream.
   * Ignored if permission <X> is locked upstream (in an ancestor account).
   *
   * May occur multiple times with unique values for <X>. Recognized
   * permission names for <X> can be found on the {file:file.permissions.html
   * Permissions list page}.
   *
   * Some of these permissions are applicable only for roles on the site admin
   * account, on a root account, or for course-level roles with a particular
   * base role type; if a specified permission is inapplicable, it will be
   * ignored.
   *
   * Additional permissions may exist based on installed plugins.
   *
   * A comprehensive list of all permissions are available:
   *
   * Course Permissions PDF: http://bit.ly/cnvs-course-permissions
   *
   * Account Permissions PDF: http://bit.ly/cnvs-acct-permissions
   *
   * Type: boolean
   */
  'permissions[<X>][enabled]': boolean | string;
  /**
   * If the value is 1, permission <X> will be locked downstream (new roles in
   * subaccounts cannot override the setting). For any other value, permission
   * <X> is left unlocked. Ignored if permission <X> is already locked
   * upstream. May occur multiple times with unique values for <X>.
   *
   * Type: boolean
   */
  'permissions[<X>][locked]': boolean | string;
  /**
   * If the value is 1, permission <X> applies to the account this role is in.
   * The default value is 1. Must be true if applies_to_descendants is false.
   * This value is only returned if enabled is true.
   *
   * Type: boolean
   */
  'permissions[<X>][applies_to_self]': boolean | string;
  /**
   * If the value is 1, permission <X> cascades down to sub accounts of the
   * account this role is in. The default value is 1. Must be true if
   * applies_to_self is false.This value is only returned if enabled is true.
   *
   * Type: boolean
   */
  'permissions[<X>][applies_to_descendants]': boolean | string;
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
 * Create a new role
 *
 * Create a new course-level or account-level role.
 *
 * Nickname: create_new_role
 */
export async function create(options: Options) {
  const response = await client().fetchAs<Role>(
    `/api/v1/accounts/{account_id}/roles`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
