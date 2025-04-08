import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List environment features
 *
 * Return a hash of global feature options that pertain to the Canvas user
 * interface. This is the same information supplied to the web interface as
 * +ENV.FEATURES+.
 *
 * Nickname: list_environment_features
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/features/environment`, {
    method: 'GET',
    params: parameters
  });
}
