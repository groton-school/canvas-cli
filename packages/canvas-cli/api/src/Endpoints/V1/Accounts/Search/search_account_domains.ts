import { client } from '../../../../Client.js';

export type search_account_domainsSearchParameters = {
  /** Campus name */
  name: string;
  /** No description */
  domain: string;
  /**
   * No description
   *
   * Format: 'float'
   */
  latitude: number;
  /**
   * No description
   *
   * Format: 'float'
   */
  longitude: number;
};

type Options =
  | {
      searchParams?: Partial<search_account_domainsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams?: search_account_domainsSearchParameters;
      strict: true;
    };

/**
 * Search account domains
 *
 * Returns a list of up to 5 matching account domains
 *
 * Partial match on name / domain are supported
 *
 * Nickname: search_account_domains
 */
export async function search_account_domains({ searchParams }: Options) {
  return await client().fetchAs<void>(`/v1/accounts/search`, {
    method: 'GET',
    searchParams
  });
}
