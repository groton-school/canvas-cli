import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { Feature } from '../../../../Resources/FeatureFlags.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
};

export type listSearchParameters = Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * List features
 *
 * A paginated list of all features that apply to a given Account, Course, or
 * User.
 *
 * Nickname: list_features_courses
 */
export async function list(options: Options) {
  return await client().fetchAs<Feature[]>(
    `/api/v1/courses/{course_id}/features`,
    {
      method: 'GET',
      ...options
    }
  );
}
