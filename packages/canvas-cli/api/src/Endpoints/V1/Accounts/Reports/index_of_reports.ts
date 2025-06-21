import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Report } from '../../../../Resources/AccountReports.js';

export type index_of_reportsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /** ID */
  report: string;
};

export type index_of_reportsSearchParameters = Masquerade & Paginated;

type Options = {
  pathParams: index_of_reportsPathParameters;
} & (
  | {
      searchParams?: Partial<index_of_reportsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: index_of_reportsSearchParameters;
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
