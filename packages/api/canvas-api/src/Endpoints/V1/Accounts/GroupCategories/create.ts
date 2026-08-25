import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { GroupCategory } from '../../../../Resources/GroupCategories.js';

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
   * Name of the group category
   *
   *
   *
   *
   */
  name: string;
  /**
     * Can only be set by users with the Differentiation Tag - Add permission

If set to true, groups in this category will be only be visible to users with the
Differentiation Tag - Manage permission.
     *
     * type: boolean
     *
     * 
     */
  non_collaborative: boolean | string;
  /**
     * Allow students to sign up for a group themselves (Course Only).
valid values are:
&quot;enabled&quot;:: allows students to self sign up for any group in course
&quot;restricted&quot;:: allows students to self sign up only for groups in the
               same section null disallows self sign up
     *
     * 
     *
     * 
     */
  self_signup: string;
  /**
     * Assigns group leaders automatically when generating and allocating students to groups
Valid values are:
&quot;first&quot;:: the first student to be allocated to a group is the leader
&quot;random&quot;:: a random student from all members is chosen as the leader
     *
     * 
     *
     * 
     */
  auto_leader: string;
  /**
     * Limit the maximum number of users in each group (Course Only). Requires
self signup.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  group_limit: number | string;
  /**
   * The unique SIS identifier.
   *
   *
   *
   *
   */
  sis_group_category_id: string;
  /**
     * Create this number of groups (Course Only).
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  create_group_count: number | string;
  /**
     * (Deprecated)
Create this number of groups, and evenly distribute students
among them. not allowed with &quot;enable_self_signup&quot;. because
the group assignment happens synchronously, it&#x27;s recommended
that you instead use the assign_unassigned_members endpoint.
(Course Only)
     *
     * 
     *
     * 
     */
  split_group_count: string;
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
 * Create a Group Category
 *
 * Create a new group category
 *
 * nickname: create_group_category_accounts
 *
 *
 *
 *
 */
export async function create(options: Options) {
  const response = await client().fetchAs<GroupCategory>(
    `/api/v1/accounts/{account_id}/group_categories`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
