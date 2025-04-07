import { FeatureFlag } from '../../../../../Resources/FeatureFlags.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
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
 * Nickname: remove_feature_flag_courses
 */
export async function remove_feature_flag_courses({
  parameters
}: Options): Promise<FeatureFlag> {
  return await (
    await fetch(`/v1/courses/{course_id}/features/flags/{feature}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
