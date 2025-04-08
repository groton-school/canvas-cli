import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List environment settings
 *
 * Return a hash of global settings for the root account This is the same
 * information supplied to the web interface as +ENV.SETTINGS+.
 *
 * Nickname: list_environment_settings
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/settings/environment`, {
    method: 'GET',
    params: parameters
  });
}
