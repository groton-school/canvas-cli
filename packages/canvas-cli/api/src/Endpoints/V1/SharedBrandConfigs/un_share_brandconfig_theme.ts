import { client } from '../../../Client.js';
import { SharedBrandConfig } from '../../../Resources/SharedBrandConfigs.js';

export type un_share_brandconfig_themePathParameters = {
  /** ID */
  id: string;
};

type Options = {
  pathParams: un_share_brandconfig_themePathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
  return await client().fetchAs<SharedBrandConfig>(
    `/api/v1/shared_brand_configs/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
}
