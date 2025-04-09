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
};

/**
 * Delete a Report
 *
 * Deletes a generated report instance.
 *
 * Nickname: delete_report
 */
export async function delete_report({ pathParams }: Options) {
  return await client().fetchAs<Report>(
    `/v1/accounts/{account_id}/reports/{report}/{id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
