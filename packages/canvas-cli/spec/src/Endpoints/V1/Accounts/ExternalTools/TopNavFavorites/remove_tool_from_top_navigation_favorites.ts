type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Remove tool from Top Navigation Favorites
 *
 * Removes the dedicated button in Top Navigation for the specified tool for the
 * given account.
 *
 * Nickname: remove_tool_from_top_navigation_favorites
 */
export async function remove_tool_from_top_navigation_favorites({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(
      `/v1/accounts/{account_id}/external_tools/top_nav_favorites/{id}`,
      { method: 'DELETE', body: parameters }
    )
  ).json();
}
