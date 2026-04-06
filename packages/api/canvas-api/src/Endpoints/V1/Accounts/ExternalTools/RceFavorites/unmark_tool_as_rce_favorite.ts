import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type unmark_tool_as_rce_favoritePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /**
   * ID
   *
   * Type: string
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
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<unmark_tool_as_rce_favoriteSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<unmark_tool_as_rce_favoriteSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: unmark_tool_as_rce_favoriteSearchParameters;
        strict: true;
      }
  );

/**
 * Unmark tool as RCE Favorite
 *
 * Unmark the specified external tool as a favorite in the RCE editor for the
 * given account. The tool will remain available but will no longer appear in
 * the preferred favorites location.
 *
 * Nickname: unmark_tool_as_rce_favorite
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
