import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List rubrics
 *
 * Returns the paginated list of active rubrics for the current context.
 *
 * Nickname: list_rubrics_accounts
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/accounts/{account_id}/rubrics`, {
    method: 'GET',
    params: parameters
  });
}
