import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List Available Reports
 *
 * Returns a paginated list of reports for the current context.
 *
 * Nickname: list_available_reports
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<void>(`/v1/accounts/{account_id}/reports`, {
    method: 'GET',
    params: parameters
  });
}
