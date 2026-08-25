import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type search_account_domainsSearchParameters = Masquerade &
  Partial<{
    /**
     * campus name
     *
     *
     *
     *
     */
    name: string;
    /**
     * no description
     *
     *
     *
     *
     */
    domain: string;
    /**
     * no description
     *
     * type: number

format: 'float'
     *
     * 
     */
    latitude: number | string;
    /**
     * no description
     *
     * type: number

format: 'float'
     *
     * 
     */
    longitude: number | string;
  }>;

type Options =
  | {
      query?: Partial<search_account_domainsSearchParameters>;
      /** @deprecated Use {@link Options.query} */
      searchParams?: Partial<search_account_domainsSearchParameters>;
      strict?: false;
    }
  | ((
      | {
          query: search_account_domainsSearchParameters;
        }
      | {
          /** @deprecated Use {@link Options.query} */
          searchParams: search_account_domainsSearchParameters;
        }
    ) & {
      strict: true;
    });

/**
 * Search account domains
 *
 * Returns a list of up to 5 matching account domains

Partial match on name / domain are supported
 *
 * nickname: search_account_domains
 *
 * 
 *
 * 
 */
export async function search_account_domains(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/accounts/search`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
