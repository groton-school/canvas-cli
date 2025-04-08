import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List grading period sets
 *
 * Returns the paginated list of grading period sets
 *
 * Nickname: list_grading_period_sets
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/accounts/{account_id}/grading_period_sets`,
    { method: 'GET', params: parameters }
  );
}
