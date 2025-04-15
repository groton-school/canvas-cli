import { client } from '../../../../Client.js';

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
 * List user logins
 *
 * Given a user ID, return a paginated list of that user's logins for the given
 * account.
 *
 * Nickname: list_user_logins_accounts
 */
export async function list(options: Options) {
  return await client().fetchAs<void>(`/api/v1/accounts/{account_id}/logins`, {
    method: 'GET',
    ...options
  });
}
