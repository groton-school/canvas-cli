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
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/courses/{course_id}/features`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
