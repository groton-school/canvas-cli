type Parameters = {
  /** No description */
  domains: string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Add multiple allowed domains to an account
 *
 * Adds multiple allowed domains for the current account. Note: this will not
 * take effect unless CSP is explicitly enabled on this account.
 *
 * Nickname: add_multiple_allowed_domains_to_account
 */
export async function add_multiple_allowed_domains_to_account({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/accounts/{account_id}/csp_settings/domains/batch_create`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
