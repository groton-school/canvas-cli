import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a grading period
 *
 * <b>204 No Content</b> response code is returned if the deletion was
 * successful.
 *
 * Nickname: delete_grading_period_accounts
 */
export async function delete_grading_period_accounts({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/accounts/{account_id}/grading_periods/{id}`,
    { method: 'DELETE', params: parameters }
  );
}
