import { client } from '../../../../../Client.js';

export type remove_tool_from_top_navigation_favoritesPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: remove_tool_from_top_navigation_favoritesPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
export async function remove_tool_from_top_navigation_favorites({
  pathParams
}: Options) {
  return await client().fetchAs<void>(
    `/v1/accounts/{account_id}/external_tools/top_nav_favorites/{id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
