import { client } from '../../../../../Client.js';
import { Report } from '../../../../../Resources/AccountReports.js';

export type abort_reportPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  report: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: abort_reportPathParameters;
};

/**
 * Abort a Report
 *
 * Abort a report in progress
 *
 * Nickname: abort_report
 */
export async function abort_report({ pathParams }: Options) {
  return await client().fetchAs<Report>(
    `/v1/accounts/{account_id}/reports/{report}/{id}/abort`,
    {
      method: 'PUT',
      pathParams
    }
  );
}
