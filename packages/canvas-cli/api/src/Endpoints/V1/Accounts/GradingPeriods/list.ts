import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List grading periods
 *
 * Returns the paginated list of grading periods for the current course.
 *
 * Nickname: list_grading_periods_accounts
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/accounts/{account_id}/grading_periods`,
    { method: 'GET', params: parameters }
  );
}
