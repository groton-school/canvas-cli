import { client } from '../../../../../Client.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
};

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
 * List enabled features
 *
 * A paginated list of all features that are enabled on a given Account, Course,
 * or User. Only the feature names are returned.
 *
 * Nickname: list_enabled_features_courses
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/features/enabled`,
    {
      method: 'GET',
      pathParams
    }
  );
}
