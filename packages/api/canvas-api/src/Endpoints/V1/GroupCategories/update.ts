import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { GroupCategory } from '../../../Resources/GroupCategories.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  group_category_id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
   * Name of the group category
   *
   *
   *
   *
   */
  name: string;
  /**
     * Allow students to sign up for a group themselves (Course Only).
Valid values are:
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
      path: updatePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: updatePathParameters;
    }
) &
  (
    | {
        query?: Partial<updateSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<updateSearchParameters>;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<updateFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: updateSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: updateSearchParameters;
          }
      ) &
        (
          | {
              body: updateFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: updateFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Update a Group Category
 *
 * Modifies an existing group category.
 *
 * nickname: update_group_category
 *
 *
 *
 *
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
