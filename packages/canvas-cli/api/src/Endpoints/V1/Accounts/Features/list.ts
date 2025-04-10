import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { Feature } from '../../../../Resources/FeatureFlags.js';

export type listPathParameters = {
  /** ID */
  account_id: string;
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
 * Nickname: list_features_accounts
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<Feature[]>(
    `/v1/accounts/{account_id}/features`,
    {
      method: 'GET',
      pathParams
    }
  );
}
