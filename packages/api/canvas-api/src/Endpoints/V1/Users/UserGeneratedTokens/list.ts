import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Token } from '../../../../Resources/AccessTokens.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * The number of results to return per page. Defaults to 10. Maximum of 100.
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    per_page: number | string;
  }>;

type Options = (
  | {
      path: listPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: listPathParameters;
    }
) &
  (
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: listSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: listSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * List access tokens for a user
 *
 * Returns a list of manually generated access tokens for the specified user.
 * Note that the actual token values are only returned when the token is first
 * created.
 *
 * Nickname: list_access_tokens_for_user
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Token[]>(
    `/api/v1/users/{user_id}/user_generated_tokens`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
