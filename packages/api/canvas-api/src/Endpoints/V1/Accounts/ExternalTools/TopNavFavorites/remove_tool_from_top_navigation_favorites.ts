import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type remove_tool_from_top_navigation_favoritesPathParameters = {
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

export type remove_tool_from_top_navigation_favoritesSearchParameters =
  Masquerade;

type Options = (
  | {
      path: remove_tool_from_top_navigation_favoritesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: remove_tool_from_top_navigation_favoritesPathParameters;
    }
) &
  (
    | {
        query?: Partial<remove_tool_from_top_navigation_favoritesSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<remove_tool_from_top_navigation_favoritesSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<remove_tool_from_top_navigation_favoritesSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: remove_tool_from_top_navigation_favoritesSearchParameters;
        strict: true;
      }
  );

/**
 * Remove tool from Top Navigation Favorites
 *
 * Removes the dedicated button in Top Navigation for the specified tool for the
 * given account.
 *
 * Nickname: remove_tool_from_top_navigation_favorites
 */
export async function remove_tool_from_top_navigation_favorites(
  options: Options
) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/accounts/{account_id}/external_tools/top_nav_favorites/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
