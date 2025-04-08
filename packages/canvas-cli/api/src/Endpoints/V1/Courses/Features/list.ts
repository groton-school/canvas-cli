import { client } from '../../../../Client.js';
import { Feature } from '../../../../Resources/FeatureFlags.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List features
 *
 * A paginated list of all features that apply to a given Account, Course, or
 * User.
 *
 * Nickname: list_features_courses
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/courses/{course_id}/features`, {
    method: 'GET',
    params: parameters
  });
}
