import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

export type search_account_domainsSearchParameters = Masquerade &
  Partial<{
    /** Campus name */
    name: string;
    /** No description */
    domain: string;
    /**
     * No description
     *
     * Type: number
     *
     * Format: 'float'
     */
    latitude: number | string;
    /**
     * No description
     *
     * Type: number
     *
     * Format: 'float'
     */
    longitude: number | string;
  }>;

type Options =
  | {
      searchParams?: Partial<search_account_domainsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: search_account_domainsSearchParameters;
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
export async function search_account_domains(options: Options) {
  const response = await client().fetchAs<void>(`/api/v1/accounts/search`, {
    method: 'GET',
    ...options
  });
  return response;
}
