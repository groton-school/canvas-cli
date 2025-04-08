import { client } from '../../../../Client.js';
import { Report } from '../../../../Resources/AccountReports.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Status of last Report
 *
 * Returns the status of the last report initiated by the current user.
 *
 * Nickname: status_of_last_report
 */
export async function status_of_last_report({ parameters }: Options) {
  return await client().fetchAs<Report>(
    `/v1/courses/{course_id}/reports/{report_type}`,
    { method: 'GET', params: parameters }
  );
}
