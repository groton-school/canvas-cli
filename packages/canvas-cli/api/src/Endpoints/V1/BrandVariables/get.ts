import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../Client.js';

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
 * Get the brand config variables that should be used for this domain
 *
 * Will redirect to a static json file that has all of the brand variables used
 * by this account. Even though this is a redirect, do not store the redirected
 * url since if the account makes any changes it will redirect to a new url.
 * Needs no authentication.
 *
 * Nickname: get_brand_config_variables_that_should_be_used_for_this_domain
 */
export async function get(options: Options) {
  const response = await client().fetchAs<void>(`/api/v1/brand_variables`, {
    method: 'GET',
    ...options
  });
  return response;
}
