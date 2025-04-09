import { client } from '../../../../Client.js';

type Options = {};

/**
 * Get Kaltura config
 *
 * Return the config information for the Kaltura plugin in json format.
 *
 * Nickname: get_kaltura_config
 */
export async function get({}: Options) {
  return await client().fetchAs<void>(`/v1/services/kaltura`, {
    method: 'GET'
  });
}
