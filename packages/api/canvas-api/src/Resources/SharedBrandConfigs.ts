import { JSONValue } from '@battis/typescript-tricks';

/**
 *
 */
export type SharedBrandConfig = {
  /**
   * The shared_brand_config identifier.
   *
   * type: integer
   */
  id: number | string;
  /**
   * The id of the account it should be shared within.
   *
   *
   */
  account_id: string;
  /**
   * The md5 (since BrandConfigs are identified by MD5 and not numeric id) of the BrandConfig to share.
   *
   *
   */
  brand_config_md5: string;
  /**
   * The name to share this theme as
   *
   *
   */
  name: string;
  /**
   * When this was created
   *
   * format: date-time
   */
  created_at: string;
  /**
   * When this was last updated
   *
   * format: date-time
   */
  updated_at: string;
};
