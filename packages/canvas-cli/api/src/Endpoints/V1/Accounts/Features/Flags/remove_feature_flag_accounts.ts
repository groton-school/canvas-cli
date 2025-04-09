import { client } from '../../../../../Client.js';
import { FeatureFlag } from '../../../../../Resources/FeatureFlags.js';

type remove_feature_flag_accountsPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  feature: string;
};

type Options = {
  pathParams: remove_feature_flag_accountsPathParameters;
};

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
export async function remove_feature_flag_accounts({ pathParams }: Options) {
  return await client().fetchAs<FeatureFlag>(
    `/v1/accounts/{account_id}/features/flags/{feature}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
