import { client } from '../../../../Client.js';
import { Report } from '../../../../Resources/AccountReports.js';

export type start_reportPathParameters = {
  /**
   * The id of the course to report on.
   *
   * Format: 'int64'
   */
  course_id: number;
  /** The type of report to generate. */
  report_type: string;
};

export type start_reportFormParameters = {
  /**
   * The parameters will vary for each report. Note that the example
   * parameters provided below may not be valid for every report.
   */
  parameters: string;
  /**
   * The sections of the course to report on. Note: this parameter has been
   * listed to serve as an example and may not be valid for every report.
   *
   * Format: 'int64'
   */
  'parameters[section_ids]': number[];
};

type Options = {
  pathParams: start_reportPathParameters;
} & (
  | {
      params?: Partial<start_reportFormParameters>;
      strict?: false;
    }
  | {
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
  return await client().fetchAs<Report>(
    `/api/v1/courses/{course_id}/reports/{report_type}`,
    {
      method: 'POST',
      ...options
    }
  );
}
