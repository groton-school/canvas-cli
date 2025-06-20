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
 * List Available Reports
 *
 * Returns a paginated list of reports for the current context.
 *
 * Nickname: list_available_reports
 */
export async function list(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/accounts/{account_id}/reports`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
