type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Remove tool from RCE Favorites
 *
 * Remove the specified external tool from a preferred location in the RCE for
 * the given account
 *
 * Nickname: remove_tool_from_rce_favorites
 */
export async function remove_tool_from_rce_favorites({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/accounts/{account_id}/external_tools/rce_favorites/{id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
