import { client } from '../../../../Client.js';
import { Report } from '../../../../Resources/AccountReports.js';

type Parameters = {
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
  'parameters[section_ids]': string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Start a Report
 *
 * Generates a report instance for the account. Note that "report" in the
 * request must match one of the available report names.
 *
 * Nickname: start_report
 */
export async function start_report({ parameters }: Options) {
  return await client().fetchAs<Report>(
    `/v1/courses/{course_id}/reports/{report_type}`,
    { method: 'POST', params: parameters }
  );
}
