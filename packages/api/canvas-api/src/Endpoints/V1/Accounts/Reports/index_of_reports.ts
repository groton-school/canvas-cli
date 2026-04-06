import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
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

type Options = (
  | {
      path: index_of_reportsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: index_of_reportsPathParameters;
    }
) &
  (
    | {
        query?: Partial<index_of_reportsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<index_of_reportsSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<index_of_reportsSearchParameters>;
        /** @deprecated Use {Options.query} */
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
