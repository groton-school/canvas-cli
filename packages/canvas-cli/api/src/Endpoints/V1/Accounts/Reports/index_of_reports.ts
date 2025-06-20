import { Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Report } from '../../../../Resources/AccountReports.js';

export type index_of_reportsPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  report: string;
};

export type index_of_reportsSearchParameters = Paginated;

type Options = {
  pathParams: index_of_reportsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Index of Reports
 *
 * Shows all reports that have been run for the account of a specific type.
 *
 * Nickname: index_of_reports
 */
export async function index_of_reports(options: Options) {
  const response = await client().fetchAs<Report[]>(
    `/api/v1/accounts/{account_id}/reports/{report}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
