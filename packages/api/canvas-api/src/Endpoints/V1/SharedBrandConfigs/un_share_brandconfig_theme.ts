import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../Client.js';
import { SharedBrandConfig } from '../../../Resources/SharedBrandConfigs.js';

export type un_share_brandconfig_themePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type un_share_brandconfig_themeSearchParameters = Masquerade;

type Options = {
  pathParams: un_share_brandconfig_themePathParameters;
} & (
  | {
      searchParams?: Partial<un_share_brandconfig_themeSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: un_share_brandconfig_themeSearchParameters;
      strict: true;
    }
);

/**
 * Un-share a BrandConfig (Theme)
 *
 * Delete a SharedBrandConfig, which will unshare it so you nor anyone else in
 * your account will see it as an option to pick from.
 *
 * Nickname: un_share_brandconfig_theme
 */
export async function un_share_brandconfig_theme(options: Options) {
  const response = await client().fetchAs<SharedBrandConfig>(
    `/api/v1/shared_brand_configs/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
