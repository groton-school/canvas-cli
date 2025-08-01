import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type remove_domain_from_accountPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type remove_domain_from_accountSearchParameters = Masquerade &
  Partial<{
    /** No description */
    domain: string;
  }>;

type Options = {
  pathParams: remove_domain_from_accountPathParameters;
} & (
  | {
      searchParams?: Partial<remove_domain_from_accountSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: remove_domain_from_accountSearchParameters;
      strict: true;
    }
);

/**
 * Remove a domain from account
 *
 * Removes an allowed domain from the current account.
 *
 * Nickname: remove_domain_from_account
 */
export async function remove_domain_from_account(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/accounts/{account_id}/csp_settings/domains`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
