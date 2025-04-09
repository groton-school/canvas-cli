import { client } from '../../../../../Client.js';

export type add_allowed_domain_to_accountPathParameters = {
  /** ID */
  account_id: string;
};

export type add_allowed_domain_to_accountFormParameters = {
  /** No description */
  domain: string;
};

type Options = {
  pathParams: add_allowed_domain_to_accountPathParameters;
  params?: add_allowed_domain_to_accountFormParameters;
};

/**
 * Add an allowed domain to account
 *
 * Adds an allowed domain for the current account. Note: this will not take
 * effect unless CSP is explicitly enabled on this account.
 *
 * Nickname: add_allowed_domain_to_account
 */
export async function add_allowed_domain_to_account({
  pathParams,
  params
}: Options) {
  return await client().fetchAs<void>(
    `/v1/accounts/{account_id}/csp_settings/domains`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
