type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete an external tool
 *
 * Remove the specified external tool
 *
 * Nickname: delete_external_tool_accounts
 */
export async function delete_external_tool_accounts({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/accounts/{account_id}/external_tools/{external_tool_id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
