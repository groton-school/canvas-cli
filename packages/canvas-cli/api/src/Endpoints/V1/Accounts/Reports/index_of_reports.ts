import { client } from '../../../../Client.js';
import { Report } from '../../../../Resources/AccountReports.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Index of Reports
 *
 * Shows all reports that have been run for the account of a specific type.
 *
 * Nickname: index_of_reports
 */
export async function index_of_reports({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/accounts/{account_id}/reports/{report}`,
    { method: 'GET', params: parameters }
  );
}
