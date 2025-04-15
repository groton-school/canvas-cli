import { client } from '../../../../Client.js';

type Options =
  | {
      strict?: false;
    }
  | {
      strict: true;
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
export async function list(options: Options) {
  return await client().fetchAs<void>(`/api/v1/features/environment`, {
    method: 'GET',
    ...options
  });
}
