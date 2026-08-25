import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { Role } from '../../../../Resources/Roles.js';

export type createPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  account_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /**
   * Label for the role.
   *
   *
   *
   *
   */
  label: string;
  /**
   * Deprecated alias for label.
   *
   *
   *
   *
   */
  role: string;
  /**
     * Specifies the role type that will be used as a base
for the permissions granted to this role.

Defaults to &#x27;AccountMembership&#x27; if absent
     *
     * 
     *
     * 
     */
  base_role_type: string;
  /**
   * no description
   *
   * type: boolean
   *
   *
   */
  'permissions[<X>][explicit]': boolean | string;
  /**
     * If explicit is 1 and enabled is 1, permission &lt;X&gt; will be explicitly
granted to this role. If explicit is 1 and enabled has any other value
(typically 0), permission &lt;X&gt; will be explicitly denied to this role. If
explicit is any other value (typically 0) or absent, or if enabled is
absent, the value for permission &lt;X&gt; will be inherited from upstream.
Ignored if permission &lt;X&gt; is locked upstream (in an ancestor account).

May occur multiple times with unique values for &lt;X&gt;. Recognized
permission names for &lt;X&gt; can be found on the
{file:file.permissions.html Permissions list page}.

Some of these permissions are applicable only for roles on the site admin
account, on a root account, or for course-level roles with a particular base role type;
if a specified permission is inapplicable, it will be ignored.

Additional permissions may exist based on installed plugins.

A comprehensive list of all permissions are available:

Course Permissions PDF: http://bit.ly/cnvs-course-permissions

Account Permissions PDF: http://bit.ly/cnvs-acct-permissions
     *
     * type: boolean
     *
     * 
     */
  'permissions[<X>][enabled]': boolean | string;
  /**
     * If the value is 1, permission &lt;X&gt; will be locked downstream (new roles in
subaccounts cannot override the setting). For any other value, permission
&lt;X&gt; is left unlocked. Ignored if permission &lt;X&gt; is already locked
upstream. May occur multiple times with unique values for &lt;X&gt;.
     *
     * type: boolean
     *
     * 
     */
  'permissions[<X>][locked]': boolean | string;
  /**
     * If the value is 1, permission &lt;X&gt; applies to the account this role is in.
The default value is 1. Must be true if applies_to_descendants is false.
This value is only returned if enabled is true.
     *
     * type: boolean
     *
     * 
     */
  'permissions[<X>][applies_to_self]': boolean | string;
  /**
     * If the value is 1, permission &lt;X&gt; cascades down to sub accounts of the
account this role is in. The default value is 1.  Must be true if
applies_to_self is false.This value is only returned if enabled is true.
     *
     * type: boolean
     *
     * 
     */
  'permissions[<X>][applies_to_descendants]': boolean | string;
};

type Options = (
  | {
      path: createPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: createPathParameters;
    }
) &
  (
    | {
        query?: Partial<createSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<createSearchParameters>;
        body?: Partial<createFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<createFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: createSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: createSearchParameters;
          }
      ) &
        (
          | {
              body: createFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: createFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Create a new role
 *
 * Create a new course-level or account-level role.
 *
 * nickname: create_new_role
 *
 *
 *
 *
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
