import { client } from '../../../../Client.js';
import { Feature } from '../../../../Resources/FeatureFlags.js';

type listPathParameters = {
  /** ID */
  account_id: string;
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
 * Nickname: list_features_accounts
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/accounts/{account_id}/features`,
    {
      method: 'GET',
      pathParams
    }
  );
}
