import { client } from '../../../../Client.js';
import { Report } from '../../../../Resources/AccountReports.js';

export type status_of_last_reportPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  report_type: string;
};

type Options = {
  pathParams: status_of_last_reportPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
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
