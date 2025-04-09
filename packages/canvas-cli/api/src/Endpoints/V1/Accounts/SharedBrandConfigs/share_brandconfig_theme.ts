import { client } from '../../../../Client.js';
import { SharedBrandConfig } from '../../../../Resources/SharedBrandConfigs.js';

type share_brandconfig_themePathParameters = {
  /** ID */
  account_id: string;
};

type share_brandconfig_themeFormParameters = {
  /** Name to share this BrandConfig (theme) as. */
  'shared_brand_config[name]': string;
  /** MD5 of brand_config to share */
  'shared_brand_config[brand_config_md5]': string;
};

type Options = {
  pathParams: share_brandconfig_themePathParameters;
  params?: share_brandconfig_themeFormParameters;
};

/**
 * Share a BrandConfig (Theme)
 *
 * Create a SharedBrandConfig, which will give the given brand_config a name and
 * make it available to other users of this account.
 *
 * Nickname: share_brandconfig_theme
 */
export async function share_brandconfig_theme({ pathParams, params }: Options) {
  return await client().fetchAs<SharedBrandConfig>(
    `/v1/accounts/{account_id}/shared_brand_configs`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
