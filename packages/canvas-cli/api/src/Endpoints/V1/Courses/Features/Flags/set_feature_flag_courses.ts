import { client } from '../../../../../Client.js';
import { FeatureFlag } from '../../../../../Resources/FeatureFlags.js';

export type set_feature_flag_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  feature: string;
};

export type set_feature_flag_coursesFormParameters = {
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
  pathParams: set_feature_flag_coursesPathParameters;
  params?: set_feature_flag_coursesFormParameters;
};

/**
 * Set feature flag
 *
 * Set a feature flag for a given Account, Course, or User. This call will fail
 * if a parent account sets a feature flag for the same feature in any state
 * other than "allowed".
 *
 * Nickname: set_feature_flag_courses
 */
export async function set_feature_flag_courses({
  pathParams,
  params
}: Options) {
  return await client().fetchAs<FeatureFlag>(
    `/v1/courses/{course_id}/features/flags/{feature}`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
