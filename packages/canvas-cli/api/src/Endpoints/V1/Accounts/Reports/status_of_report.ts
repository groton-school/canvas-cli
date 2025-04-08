import { client } from '../../../../Client.js';
import { Report } from '../../../../Resources/AccountReports.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Status of a Report
 *
 * Returns the status of a report.
 *
 * Nickname: status_of_report
 */
export async function status_of_report({ parameters }: Options) {
  return await client().fetchAs<Report>(
    `/v1/accounts/{account_id}/reports/{report}/{id}`,
    { method: 'GET', params: parameters }
  );
}
