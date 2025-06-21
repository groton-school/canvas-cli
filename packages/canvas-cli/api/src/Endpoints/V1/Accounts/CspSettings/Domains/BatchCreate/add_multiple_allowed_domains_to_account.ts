import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../Client.js';

export type add_multiple_allowed_domains_to_accountPathParameters = {
  /** ID */
  account_id: string;
};

export type add_multiple_allowed_domains_to_accountSearchParameters =
  Masquerade;

export type add_multiple_allowed_domains_to_accountFormParameters =
  Masquerade & {
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
      searchParams?: Partial<add_multiple_allowed_domains_to_accountSearchParameters>;
      params?: Partial<add_multiple_allowed_domains_to_accountFormParameters>;
      strict?: false;
    }
  | {
      searchParams: add_multiple_allowed_domains_to_accountSearchParameters;
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
  const response = await client().fetchAs<void>(
    `/api/v1/accounts/{account_id}/csp_settings/domains/batch_create`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
