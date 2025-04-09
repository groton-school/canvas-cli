import { client } from '../../../../Client.js';

type listPathParameters = {
  /** ID */
  account_id: string;
};

type Options = {
  pathParams: listPathParameters;
};

/**
 * List rubrics
 *
 * Returns the paginated list of active rubrics for the current context.
 *
 * Nickname: list_rubrics_accounts
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<void>(`/v1/accounts/{account_id}/rubrics`, {
    method: 'GET',
    pathParams
  });
}
