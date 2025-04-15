import { client } from '../../../../../../Client.js';

export type add_multiple_allowed_domains_to_accountPathParameters = {
  /** ID */
  account_id: string;
};

export type add_multiple_allowed_domains_to_accountFormParameters = {
  /**
   * No description
   *
   * Array
   */
  domains: string[];
};

type Options = {
  pathParams: add_multiple_allowed_domains_to_accountPathParameters;
} & (
  | {
      params?: Partial<add_multiple_allowed_domains_to_accountFormParameters>;
      strict?: false;
    }
  | {
      params: add_multiple_allowed_domains_to_accountFormParameters;
      strict: true;
    }
);

/**
 * Add multiple allowed domains to an account
 *
 * Adds multiple allowed domains for the current account. Note: this will not
 * take effect unless CSP is explicitly enabled on this account.
 *
 * Nickname: add_multiple_allowed_domains_to_account
 */
export async function add_multiple_allowed_domains_to_account(
  options: Options
) {
  return await client().fetchAs<void>(
    `/api/v1/accounts/{account_id}/csp_settings/domains/batch_create`,
    {
      method: 'POST',
      ...options
    }
  );
}
