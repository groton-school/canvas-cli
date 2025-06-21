import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { FeatureFlag } from '../../../../../Resources/FeatureFlags.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
  /** ID */
  feature: string;
};

export type getSearchParameters = Masquerade;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

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
export async function get(options: Options) {
  const response = await client().fetchAs<FeatureFlag>(
    `/api/v1/users/{user_id}/features/flags/{feature}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
