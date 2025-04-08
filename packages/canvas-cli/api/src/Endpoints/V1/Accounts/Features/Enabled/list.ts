import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List enabled features
 *
 * A paginated list of all features that are enabled on a given Account, Course,
 * or User. Only the feature names are returned.
 *
 * Nickname: list_enabled_features_accounts
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/accounts/{account_id}/features/enabled`,
    { method: 'GET', params: parameters }
  );
}
