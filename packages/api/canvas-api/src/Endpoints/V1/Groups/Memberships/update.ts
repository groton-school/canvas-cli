import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { GroupMembership } from '../../../../Resources/Groups.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  membership_id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** Currently, the only allowed value is "accepted" */
  workflow_state: string;
  /** No description */
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
        /** @deprecated Use {Options.query} */
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
            /** @deprecated Use {Options.query} */
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
 * Nickname: update_membership_memberships
 */
export async function update(options: Options) {
  const response = await client().fetchAs<GroupMembership>(
    `/api/v1/groups/{group_id}/memberships/{membership_id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
