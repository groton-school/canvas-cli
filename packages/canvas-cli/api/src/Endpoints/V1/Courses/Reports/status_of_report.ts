import { client } from '../../../../Client.js';
import { Report } from '../../../../Resources/AccountReports.js';

export type status_of_reportPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  report_type: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: status_of_reportPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Status of a Report
 *
 * Returns the status of a report.
 *
 * Nickname: status_of_report
 */
export async function status_of_report({ pathParams }: Options) {
  return await client().fetchAs<Report>(
    `/v1/courses/{course_id}/reports/{report_type}/{id}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
