import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { FeatureFlag } from '../../../../../Resources/FeatureFlags.js';

export type remove_feature_flag_accountsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /** ID */
  feature: string;
};

export type remove_feature_flag_accountsSearchParameters = Masquerade;

type Options = {
  pathParams: remove_feature_flag_accountsPathParameters;
} & (
  | {
      searchParams?: Partial<remove_feature_flag_accountsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: remove_feature_flag_accountsSearchParameters;
      strict: true;
    }
);

/**
 * Remove feature flag
 *
 * Remove feature flag for a given Account, Course, or User. (Note that the flag
 * must be defined on the Account, Course, or User directly.) The object will
 * then inherit the feature flags from a higher account, if any exist. If this
 * flag was 'on' or 'off', then lower-level account flags that were masked by
 * this one will apply again.
 *
 * Nickname: remove_feature_flag_accounts
 */
export async function remove_feature_flag_accounts(options: Options) {
  const response = await client().fetchAs<FeatureFlag>(
    `/api/v1/accounts/{account_id}/features/flags/{feature}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
