import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

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

type Options = {
  pathParams: remove_tool_from_top_navigation_favoritesPathParameters;
} & (
  | {
      searchParams?: Partial<remove_tool_from_top_navigation_favoritesSearchParameters>;
      strict?: false;
    }
  | {
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
  const response = await client().fetchAs<void>(
    `/api/v1/accounts/{account_id}/external_tools/top_nav_favorites/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
