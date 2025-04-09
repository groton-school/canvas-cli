import { client } from '../../../../Client.js';

export type listPathParameters = {
  /** ID */
  account_id: string;
};

type Options = {
  pathParams: listPathParameters;
};

/**
 * List Available Reports
 *
 * Returns a paginated list of reports for the current context.
 *
 * Nickname: list_available_reports
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<void>(`/v1/accounts/{account_id}/reports`, {
    method: 'GET',
    pathParams
  });
}
