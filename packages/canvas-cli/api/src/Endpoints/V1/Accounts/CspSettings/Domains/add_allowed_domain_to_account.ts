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
} & (
  | {
      params?: Partial<add_allowed_domain_to_accountFormParameters>;
      strict?: false;
    }
  | {
      params: add_allowed_domain_to_accountFormParameters;
      strict: true;
    }
);

/**
 * Add an allowed domain to account
 *
 * Adds an allowed domain for the current account. Note: this will not take
 * effect unless CSP is explicitly enabled on this account.
 *
 * Nickname: add_allowed_domain_to_account
 */
export async function add_allowed_domain_to_account(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/accounts/{account_id}/csp_settings/domains`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
