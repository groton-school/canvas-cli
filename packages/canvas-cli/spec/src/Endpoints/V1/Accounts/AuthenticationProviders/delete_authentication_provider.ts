type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete authentication provider
 *
 * Delete the config
 *
 * Nickname: delete_authentication_provider
 */
export async function delete_authentication_provider({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/accounts/{account_id}/authentication_providers/{id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
