import { client } from '../../../../../Client.js';

export type add_tool_to_top_navigation_favoritesPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: add_tool_to_top_navigation_favoritesPathParameters;
};

/**
 * Add tool to Top Navigation Favorites
 *
 * Adds a dedicated button in Top Navigation for the specified tool for the
 * given account. Cannot set more than 2 top_navigation Favorites.
 *
 * Nickname: add_tool_to_top_navigation_favorites
 */
export async function add_tool_to_top_navigation_favorites({
  pathParams
}: Options) {
  return await client().fetchAs<void>(
    `/v1/accounts/{account_id}/external_tools/top_nav_favorites/{id}`,
    {
      method: 'POST',
      pathParams
    }
  );
}
