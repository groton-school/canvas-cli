import { Masquerade } from '@groton/canvas-cli.client.base';
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

export type status_of_reportSearchParameters = Masquerade;

type Options = {
  pathParams: status_of_reportPathParameters;
} & (
  | {
      searchParams?: Partial<status_of_reportSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: status_of_reportSearchParameters;
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
export async function status_of_report(options: Options) {
  const response = await client().fetchAs<Report>(
    `/api/v1/courses/{course_id}/reports/{report_type}/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
