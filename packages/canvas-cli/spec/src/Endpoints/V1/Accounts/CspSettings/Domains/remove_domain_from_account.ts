type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Remove a domain from account
 *
 * Removes an allowed domain from the current account.
 *
 * Nickname: remove_domain_from_account
 */
export async function remove_domain_from_account({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/accounts/{account_id}/csp_settings/domains`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
