import { client } from '../../../../Client.js';
import { SharedBrandConfig } from '../../../../Resources/SharedBrandConfigs.js';

type Parameters = {
  /** Name to share this BrandConfig (theme) as. */
  'shared_brand_config[name]': string;
  /** MD5 of brand_config to share */
  'shared_brand_config[brand_config_md5]': string;
};

type Options = {
  parameters: Parameters;
};

/**
 * Share a BrandConfig (Theme)
 *
 * Create a SharedBrandConfig, which will give the given brand_config a name and
 * make it available to other users of this account.
 *
 * Nickname: share_brandconfig_theme
 */
export async function share_brandconfig_theme({ parameters }: Options) {
  return await client().fetchAs<SharedBrandConfig>(
    `/v1/accounts/{account_id}/shared_brand_configs`,
    { method: 'POST', params: parameters }
  );
}
