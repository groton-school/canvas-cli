import { SharedBrandConfig } from '../../../Resources/SharedBrandConfigs.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Un-share a BrandConfig (Theme)
 *
 * Delete a SharedBrandConfig, which will unshare it so you nor anyone else in
 * your account will see it as an option to pick from.
 *
 * Nickname: un_share_brandconfig_theme
 */
export async function un_share_brandconfig_theme({
  parameters
}: Options): Promise<SharedBrandConfig> {
  return await (
    await fetch(`/v1/shared_brand_configs/{id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
