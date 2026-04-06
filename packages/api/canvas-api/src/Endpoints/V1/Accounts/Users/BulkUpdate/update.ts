import { client, Masquerade } from '#client';
import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import { Progress } from '../../../../../Resources/CoursePace.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** [Array<Integer>] The IDs of the users to update. */
  user_ids: string;
  /**
   * The attributes to update for each user.
   *
   * Hash
   */
  user: JSONObject;
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
 * Update multiple users
 *
 * Updates multiple users in bulk.
 *
 * Nickname: update_multiple_users
 */
export async function update(options: Options) {
  const response = await client().fetchAs<Progress>(
    `/api/v1/accounts/{account_id}/users/bulk_update`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
