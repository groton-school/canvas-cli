import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
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

type Options = {
  pathParams: status_of_last_reportPathParameters;
} & (
  | {
      searchParams?: Partial<status_of_last_reportSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: status_of_last_reportSearchParameters;
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
