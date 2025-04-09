import { client } from '../../../../Client.js';
import { Feature } from '../../../../Resources/FeatureFlags.js';

export type listPathParameters = {
  /** ID */
  user_id: string;
};

type Options = {
  pathParams: listPathParameters;
};

/**
 * List features
 *
 * A paginated list of all features that apply to a given Account, Course, or
 * User.
 *
 * Nickname: list_features_users
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<string[]>(`/v1/users/{user_id}/features`, {
    method: 'GET',
    pathParams
  });
}
