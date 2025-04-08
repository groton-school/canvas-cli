import { client } from '../../../../Client.js';
import { Report } from '../../../../Resources/AccountReports.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a Report
 *
 * Deletes a generated report instance.
 *
 * Nickname: delete_report
 */
export async function delete_report({ parameters }: Options) {
  return await client().fetchAs<Report>(
    `/v1/accounts/{account_id}/reports/{report}/{id}`,
    { method: 'DELETE', params: parameters }
  );
}
