import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

export type listSearchParameters = Masquerade;

type Options =
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
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
  const response = await client().fetchAs<void>(
    `/api/v1/features/environment`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
