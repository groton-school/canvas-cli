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
 * List grading periods
 *
 * Returns the paginated list of grading periods for the current course.
 *
 * Nickname: list_grading_periods_accounts
 */
export async function list(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/accounts/{account_id}/grading_periods`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
