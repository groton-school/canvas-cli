import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Report } from '../../../../Resources/AccountReports.js';

export type delete_reportPathParameters = {
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

export type delete_reportSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_reportPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_reportPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_reportSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<delete_reportSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_reportSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: delete_reportSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete a Report
 *
 * Deletes a generated report instance.
 *
 * Nickname: delete_report
 */
export async function delete_report(options: Options) {
  const response = await client().fetchAs<Report>(
    `/api/v1/accounts/{account_id}/reports/{report}/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
