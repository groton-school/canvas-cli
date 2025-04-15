import { client } from '../../../../Client.js';
import { Report } from '../../../../Resources/AccountReports.js';

export type delete_reportPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  report: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_reportPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Delete a Report
 *
 * Deletes a generated report instance.
 *
 * Nickname: delete_report
 */
export async function delete_report(options: Options) {
  return await client().fetchAs<Report>(
    `/api/v1/accounts/{account_id}/reports/{report}/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
}
