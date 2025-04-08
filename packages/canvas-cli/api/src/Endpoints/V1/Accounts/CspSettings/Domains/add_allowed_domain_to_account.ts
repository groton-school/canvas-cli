import { client } from '../../../../../Client.js';

type Parameters = {
  /** No description */
  domain: string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Add an allowed domain to account
 *
 * Adds an allowed domain for the current account. Note: this will not take
 * effect unless CSP is explicitly enabled on this account.
 *
 * Nickname: add_allowed_domain_to_account
 */
export async function add_allowed_domain_to_account({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/accounts/{account_id}/csp_settings/domains`,
    { method: 'POST', params: parameters }
  );
}
