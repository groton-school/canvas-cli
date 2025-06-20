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
 * List grading period sets
 *
 * Returns the paginated list of grading period sets
 *
 * Nickname: list_grading_period_sets
 */
export async function list(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/accounts/{account_id}/grading_period_sets`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
