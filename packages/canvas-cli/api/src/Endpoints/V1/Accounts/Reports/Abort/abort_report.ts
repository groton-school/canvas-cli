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
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Abort a Report
 *
 * Abort a report in progress
 *
 * Nickname: abort_report
 */
export async function abort_report(options: Options) {
  const response = await client().fetchAs<Report>(
    `/api/v1/accounts/{account_id}/reports/{report}/{id}/abort`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
