import { client } from '../../../../../Client.js';

export type remove_domain_from_accountPathParameters = {
  /** ID */
  account_id: string;
};

export type remove_domain_from_accountSearchParameters = {
  /** No description */
  domain: string;
};

type Options = {
  pathParams: remove_domain_from_accountPathParameters;
} & (
  | {
      searchParams?: Partial<remove_domain_from_accountSearchParameters>;
      strict?: false;
    }
  | {
      searchParams?: remove_domain_from_accountSearchParameters;
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
export async function remove_domain_from_account({
  pathParams,
  searchParams
}: Options) {
  return await client().fetchAs<void>(
    `/v1/accounts/{account_id}/csp_settings/domains`,
    {
      method: 'DELETE',
      pathParams,
      searchParams
    }
  );
}
