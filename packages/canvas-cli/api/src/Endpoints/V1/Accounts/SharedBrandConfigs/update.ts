import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { SharedBrandConfig } from '../../../../Resources/SharedBrandConfigs.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type updateSearchParameters = Masquerade;

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      strict: true;
    }
);

/**
 * Update a shared theme
 *
 * Update the specified shared_brand_config with a new name or to point to a new
 * brand_config. Uses same parameters as create.
 *
 * Nickname: update_shared_theme
 */
export async function update(options: Options) {
  const response = await client().fetchAs<SharedBrandConfig>(
    `/api/v1/accounts/{account_id}/shared_brand_configs/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
