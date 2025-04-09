import { client } from '../../../../Client.js';

type listPathParameters = {
  /** ID */
  account_id: string;
};

type Options = {
  pathParams: listPathParameters;
};

/**
 * List grading period sets
 *
 * Returns the paginated list of grading period sets
 *
 * Nickname: list_grading_period_sets
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/accounts/{account_id}/grading_period_sets`,
    {
      method: 'GET',
      pathParams
    }
  );
}
