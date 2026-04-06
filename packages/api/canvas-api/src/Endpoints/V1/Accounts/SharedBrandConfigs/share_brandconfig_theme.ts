import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { SharedBrandConfig } from '../../../../Resources/SharedBrandConfigs.js';

export type share_brandconfig_themePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
};

export type share_brandconfig_themeSearchParameters = Masquerade;

export type share_brandconfig_themeFormParameters = Masquerade & {
  /** Name to share this BrandConfig (theme) as. */
  'shared_brand_config[name]': string;
  /** MD5 of brand_config to share */
  'shared_brand_config[brand_config_md5]': string;
};

type Options = (
  | {
      path: share_brandconfig_themePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: share_brandconfig_themePathParameters;
    }
) &
  (
    | {
        query?: Partial<share_brandconfig_themeSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<share_brandconfig_themeSearchParameters>;
        body?: Partial<share_brandconfig_themeFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<share_brandconfig_themeFormParameters>;
        strict?: false;
      }
    | {
        query?: Partial<share_brandconfig_themeSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: share_brandconfig_themeSearchParameters;
        body?: Partial<share_brandconfig_themeFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params: share_brandconfig_themeFormParameters;
        strict: true;
      }
  );

/**
 * Share a BrandConfig (Theme)
 *
 * Create a SharedBrandConfig, which will give the given brand_config a name and
 * make it available to other users of this account.
 *
 * Nickname: share_brandconfig_theme
 */
export async function share_brandconfig_theme(options: Options) {
  const response = await client().fetchAs<SharedBrandConfig>(
    `/api/v1/accounts/{account_id}/shared_brand_configs`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
