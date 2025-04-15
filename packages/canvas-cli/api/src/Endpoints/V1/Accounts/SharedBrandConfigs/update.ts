import { client } from '../../../../Client.js';
import { SharedBrandConfig } from '../../../../Resources/SharedBrandConfigs.js';

export type updatePathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
  return await client().fetchAs<SharedBrandConfig>(
    `/api/v1/accounts/{account_id}/shared_brand_configs/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
}
