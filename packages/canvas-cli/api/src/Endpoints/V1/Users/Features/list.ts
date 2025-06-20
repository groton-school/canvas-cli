import { Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Feature } from '../../../../Resources/FeatureFlags.js';

export type listPathParameters = {
  /** ID */
  user_id: string;
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
 * Nickname: list_features_users
 */
export async function list(options: Options) {
  const response = await client().fetchAs<Feature[]>(
    `/api/v1/users/{user_id}/features`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
