import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Report } from '../../../../Resources/AccountReports.js';

export type status_of_reportPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /** ID */
  report: string;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type status_of_reportSearchParameters = Masquerade;

type Options = (
  | {
      path: status_of_reportPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: status_of_reportPathParameters;
    }
) &
  (
    | {
        query?: Partial<status_of_reportSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<status_of_reportSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: status_of_reportSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: status_of_reportSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Status of a Report
 *
 * Returns the status of a report.
 *
 * Nickname: status_of_report
 */
export async function status_of_report(options: Options) {
  const response = await client().fetchAs<Report>(
    `/api/v1/accounts/{account_id}/reports/{report}/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
