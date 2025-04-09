import { client } from '../../../../../Client.js';
import { FeatureFlag } from '../../../../../Resources/FeatureFlags.js';

type set_feature_flag_usersPathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  feature: string;
};

type set_feature_flag_usersFormParameters = {
  /**
   * "off":: The feature is not available for the course, user, or account and
   * sub-accounts. "allowed":: (valid only on accounts) The feature is off in
   * the account, but may be enabled in sub-accounts and courses by setting a
   * feature flag on the sub-account or course. "on":: The feature is turned
   * on unconditionally for the user, course, or account and sub-accounts.
   */
  state: string;
};

type Options = {
  pathParams: set_feature_flag_usersPathParameters;
  params?: set_feature_flag_usersFormParameters;
};

/**
 * Set feature flag
 *
 * Set a feature flag for a given Account, Course, or User. This call will fail
 * if a parent account sets a feature flag for the same feature in any state
 * other than "allowed".
 *
 * Nickname: set_feature_flag_users
 */
export async function set_feature_flag_users({ pathParams, params }: Options) {
  return await client().fetchAs<FeatureFlag>(
    `/v1/users/{user_id}/features/flags/{feature}`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
