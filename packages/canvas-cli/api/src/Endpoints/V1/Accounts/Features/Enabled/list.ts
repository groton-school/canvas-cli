import { client } from '../../../../../Client.js';

export type listPathParameters = {
  /** ID */
  account_id: string;
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
 * Nickname: list_enabled_features_accounts
 */
export async function list(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/accounts/{account_id}/features/enabled`,
    {
      method: 'GET',
      ...options
    }
  );
}
