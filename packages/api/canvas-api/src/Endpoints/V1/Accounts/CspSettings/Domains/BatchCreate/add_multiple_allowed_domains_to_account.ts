import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type add_multiple_allowed_domains_to_accountPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
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

type Options = (
  | {
      path: add_multiple_allowed_domains_to_accountPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: add_multiple_allowed_domains_to_accountPathParameters;
    }
) &
  (
    | {
        query?: Partial<add_multiple_allowed_domains_to_accountSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<add_multiple_allowed_domains_to_accountSearchParameters>;
        body?: Partial<add_multiple_allowed_domains_to_accountFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<add_multiple_allowed_domains_to_accountFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: add_multiple_allowed_domains_to_accountSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: add_multiple_allowed_domains_to_accountSearchParameters;
          }
      ) &
        (
          | {
              body: add_multiple_allowed_domains_to_accountFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: add_multiple_allowed_domains_to_accountFormParameters;
            }
        ) & {
          strict: true;
        })
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
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/accounts/{account_id}/csp_settings/domains/batch_create`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
