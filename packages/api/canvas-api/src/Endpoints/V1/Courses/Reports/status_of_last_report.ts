import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Report } from '../../../../Resources/AccountReports.js';

export type status_of_last_reportPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /** ID */
  report_type: string;
};

export type status_of_last_reportSearchParameters = Masquerade;

type Options = (
  | {
      path: status_of_last_reportPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: status_of_last_reportPathParameters;
    }
) &
  (
    | {
        query?: Partial<status_of_last_reportSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<status_of_last_reportSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: status_of_last_reportSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: status_of_last_reportSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Status of last Report
 *
 * Returns the status of the last report initiated by the current user.
 *
 * Nickname: status_of_last_report
 */
export async function status_of_last_report(options: Options) {
  const response = await client().fetchAs<Report>(
    `/api/v1/courses/{course_id}/reports/{report_type}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
