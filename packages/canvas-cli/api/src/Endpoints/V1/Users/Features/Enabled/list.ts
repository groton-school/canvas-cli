import { client } from '../../../../../Client.js';

type listPathParameters = {
  /** ID */
  user_id: string;
};

type Options = {
  pathParams: listPathParameters;
};

/**
 * List enabled features
 *
 * A paginated list of all features that are enabled on a given Account, Course,
 * or User. Only the feature names are returned.
 *
 * Nickname: list_enabled_features_users
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<void>(`/v1/users/{user_id}/features/enabled`, {
    method: 'GET',
    pathParams
  });
}
