import { client } from '../../../../Client.js';

export type listPathParameters = {
  /** ID */
  account_id: string;
};

type Options = {
  pathParams: listPathParameters;
};

/**
 * List grading periods
 *
 * Returns the paginated list of grading periods for the current course.
 *
 * Nickname: list_grading_periods_accounts
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/accounts/{account_id}/grading_periods`,
    {
      method: 'GET',
      pathParams
    }
  );
}
