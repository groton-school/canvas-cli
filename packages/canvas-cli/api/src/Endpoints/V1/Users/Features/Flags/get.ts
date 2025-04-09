import { client } from '../../../../../Client.js';
import { FeatureFlag } from '../../../../../Resources/FeatureFlags.js';

export type getPathParameters = {
  /** ID */
  user_id: string;
  /** ID */
  feature: string;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get feature flag
 *
 * Get the feature flag that applies to a given Account, Course, or User. The
 * flag may be defined on the object, or it may be inherited from a parent
 * account. You can look at the context_id and context_type of the returned
 * object to determine which is the case. If these fields are missing, then the
 * object is the global Canvas default.
 *
 * Nickname: get_feature_flag_users
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<FeatureFlag>(
    `/v1/users/{user_id}/features/flags/{feature}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
