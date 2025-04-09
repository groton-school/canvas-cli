import { client } from '../../../../Client.js';
import { Report } from '../../../../Resources/AccountReports.js';

type status_of_reportPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  report: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: status_of_reportPathParameters;
};

/**
 * Status of a Report
 *
 * Returns the status of a report.
 *
 * Nickname: status_of_report
 */
export async function status_of_report({ pathParams }: Options) {
  return await client().fetchAs<Report>(
    `/v1/accounts/{account_id}/reports/{report}/{id}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
