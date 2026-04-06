import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Report } from '../../../../../Resources/AccountReports.js';

export type abort_reportPathParameters = {
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

export type abort_reportSearchParameters = Masquerade;

type Options = (
  | {
      path: abort_reportPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: abort_reportPathParameters;
    }
) &
  (
    | {
        query?: Partial<abort_reportSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<abort_reportSearchParameters>;
        strict?: false;
      }
    | {
        query?: Partial<abort_reportSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: abort_reportSearchParameters;
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
