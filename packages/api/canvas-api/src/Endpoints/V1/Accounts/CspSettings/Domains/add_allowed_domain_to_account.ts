import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type add_allowed_domain_to_accountPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type add_allowed_domain_to_accountSearchParameters = Masquerade;

export type add_allowed_domain_to_accountFormParameters = Masquerade & {
  /** No description */
  domain: string;
};

type Options = (
  | {
      path: add_allowed_domain_to_accountPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: add_allowed_domain_to_accountPathParameters;
    }
) &
  (
    | {
        query?: Partial<add_allowed_domain_to_accountSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<add_allowed_domain_to_accountSearchParameters>;
        body?: Partial<add_allowed_domain_to_accountFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<add_allowed_domain_to_accountFormParameters>;
        strict?: false;
      }
    | {
        query?: Partial<add_allowed_domain_to_accountSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: add_allowed_domain_to_accountSearchParameters;
        body?: Partial<add_allowed_domain_to_accountFormParameters>;
        /** @deprecated Use {@link Options.body} */
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
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/accounts/{account_id}/csp_settings/domains`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
