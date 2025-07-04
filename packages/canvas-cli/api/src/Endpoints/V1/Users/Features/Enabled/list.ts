import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  user_id: string | number;
};

export type listSearchParameters = Masquerade;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List enabled features
 *
 * A paginated list of all features that are enabled on a given Account, Course,
 * or User. Only the feature names are returned.
 *
 * Nickname: list_enabled_features_users
 */
export async function list(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/users/{user_id}/features/enabled`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
