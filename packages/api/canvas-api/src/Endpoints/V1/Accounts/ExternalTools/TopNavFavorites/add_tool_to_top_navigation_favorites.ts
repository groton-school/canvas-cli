import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

export type add_tool_to_top_navigation_favoritesPathParameters = {
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

export type add_tool_to_top_navigation_favoritesSearchParameters = Masquerade;

type Options = {
  pathParams: add_tool_to_top_navigation_favoritesPathParameters;
} & (
  | {
      searchParams?: Partial<add_tool_to_top_navigation_favoritesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: add_tool_to_top_navigation_favoritesSearchParameters;
      strict: true;
    }
);

/**
 * Add tool to Top Navigation Favorites
 *
 * Adds a dedicated button in Top Navigation for the specified tool for the
 * given account. Cannot set more than 2 top_navigation Favorites.
 *
 * Nickname: add_tool_to_top_navigation_favorites
 */
export async function add_tool_to_top_navigation_favorites(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/accounts/{account_id}/external_tools/top_nav_favorites/{id}`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
