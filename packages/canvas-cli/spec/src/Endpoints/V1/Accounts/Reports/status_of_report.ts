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
export async function status_of_report({
  parameters
}: Options): Promise<Report> {
  return await (
    await fetch(`/v1/accounts/{account_id}/reports/{report}/{id}`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
