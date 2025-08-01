import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

export type getSearchParameters = Masquerade;

type Options =
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    };

/**
 * Get Kaltura config
 *
 * Return the config information for the Kaltura plugin in json format.
 *
 * Nickname: get_kaltura_config
 */
export async function get(options: Options) {
  const response = await client().fetchAs<void>(`/api/v1/services/kaltura`, {
    method: 'GET',
    ...options
  });
  return response;
}
