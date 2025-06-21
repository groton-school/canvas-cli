import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Report } from '../../../../Resources/AccountReports.js';

export type start_reportPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  report: string;
};

export type start_reportSearchParameters = Masquerade;

export type start_reportFormParameters = Masquerade & {
  /**
   * The parameters will vary for each report. To fetch a list of available
   * parameters for each report, see
   * {api:AccountReportsController#available_reports List Available Reports}.
   * A few example parameters have been provided below. Note that the example
   * parameters provided below may not be valid for every report.
   */
  parameters: string;
  /**
   * If true, no message will be sent to the user upon completion of the
   * report.
   */
  'parameters[skip_message]': boolean;
  /**
   * The id of the course to report on. Note: this parameter has been listed
   * to serve as an example and may not be valid for every report.
   *
   * Format: 'int64'
   */
  'parameters[course_id]': number;
  /**
   * If true, user data will be included. If false, user data will be omitted.
   * Note: this parameter has been listed to serve as an example and may not
   * be valid for every report.
   */
  'parameters[users]': boolean;
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
 * request must match one of the available report names. To fetch a list of
 * available report names and parameters for each report (including whether or
 * not those parameters are required), see
 * {api:AccountReportsController#available_reports List Available Reports}.
 *
 * Nickname: start_report
 */
export async function start_report(options: Options) {
  const response = await client().fetchAs<Report>(
    `/api/v1/accounts/{account_id}/reports/{report}`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
