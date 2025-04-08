import { client } from '../../../../../Client.js';
import { Report } from '../../../../../Resources/AccountReports.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Abort a Report
 *
 * Abort a report in progress
 *
 * Nickname: abort_report
 */
export async function abort_report({ parameters }: Options) {
  return await client().fetchAs<Report>(
    `/v1/accounts/{account_id}/reports/{report}/{id}/abort`,
    { method: 'PUT', params: parameters }
  );
}
