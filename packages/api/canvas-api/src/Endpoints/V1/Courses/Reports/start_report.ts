import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Hash } from '../../../../Overrides.js';
import { Report } from '../../../../Resources/AccountReports.js';

export type start_reportPathParameters = {
  /**
   * The id of the course to report on.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  course_id: number | string;
  /** The type of report to generate. */
  report_type: string;
};

export type start_reportSearchParameters = Masquerade;

export type start_reportFormParameters = Masquerade & {
  /**
   * The parameters will vary for each report. A few example parameters have
   * been provided below. Note: the example parameters provided below may not
   * be valid for every report.
   */
  parameters: Hash[];
  /**
   * The sections of the course to report on. Note: this parameter has been
   * listed to serve as an example and may not be valid for every report.
   *
   * Format: 'int64'
   */
  'parameters[section_ids]': number | string[];
};

type Options = {
  pathParams: start_reportPathParameters;
} & (
  | {
      searchParams?: Partial<start_reportSearchParameters>;
      params?: Partial<start_reportFormParameters>;
      strict?: false;
    }
  | {
      searchParams: start_reportSearchParameters;
      params: start_reportFormParameters;
      strict: true;
    }
);

/**
 * Start a Report
 *
 * Generates a report instance for the account. Note that "report" in the
 * request must match one of the available report names.
 *
 * Nickname: start_report
 */
export async function start_report(options: Options) {
  const response = await client().fetchAs<Report>(
    `/api/v1/courses/{course_id}/reports/{report_type}`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
