import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { GroupMembership } from '../../../../Resources/Groups.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  group_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  user_id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
   * Currently, the only allowed value is &quot;accepted&quot;
   *
   *
   *
   *
   */
  workflow_state: string;
  /**
   * no description
   *
   *
   *
   *
   */
  moderator: string;
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
 * Update a membership
 *
 * Accept a membership request, or add/remove moderator rights.
 *
 * nickname: update_membership_users
 *
 *
 *
 *
 */
export async function update(options: Options) {
  const response = await client().fetchAs<GroupMembership>(
    `/api/v1/groups/{group_id}/users/{user_id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
