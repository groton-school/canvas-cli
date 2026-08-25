import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type unmark_tool_as_rce_favoritePathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  account_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type unmark_tool_as_rce_favoriteSearchParameters = Masquerade;

type Options = (
  | {
      path: unmark_tool_as_rce_favoritePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: unmark_tool_as_rce_favoritePathParameters;
    }
) &
  (
    | {
        query?: Partial<unmark_tool_as_rce_favoriteSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<unmark_tool_as_rce_favoriteSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: unmark_tool_as_rce_favoriteSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: unmark_tool_as_rce_favoriteSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Unmark tool as RCE Favorite
 *
 * Unmark the specified external tool as a favorite in the RCE editor
for the given account. The tool will remain available but will no longer
appear in the preferred favorites location.
 *
 * nickname: unmark_tool_as_rce_favorite
 *
 * 
 *
 * 
 */
export async function unmark_tool_as_rce_favorite(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/accounts/{account_id}/external_tools/rce_favorites/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
