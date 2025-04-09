import { client } from '../../../../../Client.js';
import { OriginalityReport } from '../../../../../Resources/OriginalityReports.js';

type createPathParameters = {
  /** ID */
  assignment_id: string;
  /** ID */
  submission_id: string;
};

type createFormParameters = {
  /**
   * The id of the file being given an originality score. Required if creating
   * a report associated with a file.
   *
   * Format: 'int64'
   */
  'originality_report[file_id]': number;
  /**
   * A number between 0 and 100 representing the measure of the specified
   * file's originality.
   *
   * Format: 'float'
   */
  'originality_report[originality_score]': number;
  /** The URL where the originality report for the specified file may be found. */
  'originality_report[originality_report_url]': string;
  /**
   * The ID of the file within Canvas that contains the originality report for
   * the submitted file provided in the request URL.
   *
   * Format: 'int64'
   */
  'originality_report[originality_report_file_id]': number;
  /**
   * The resource type code of the resource handler Canvas should use for the
   * LTI launch for viewing originality reports. If set Canvas will launch to
   * the message with type 'basic-lti-launch-request' in the specified
   * resource handler rather than using the originality_report_url.
   */
  'originality_report[tool_setting][resource_type_code]': string;
  /**
   * The URL Canvas should launch to when showing an LTI originality report.
   * Note that this value is inferred from the specified resource handler's
   * message "path" value (See `resource_type_code`) unless it is specified.
   * If this parameter is used a `resource_type_code` must also be specified.
   */
  'originality_report[tool_setting][resource_url]': string;
  /**
   * May be set to "pending", "error", or "scored". If an originality score is
   * provided a workflow state of "scored" will be inferred.
   */
  'originality_report[workflow_state]': string;
  /**
   * A message describing the error. If set, the "workflow_state" will be set
   * to "error."
   */
  'originality_report[error_message]': string;
  /**
   * If no `file_id` is given, and no file is required for the assignment
   * (that is, the assignment allows an online text entry), this parameter may
   * be given to clarify which attempt number the report is for (in the case
   * of resubmissions). If this field is omitted and no `file_id` is given,
   * the report will be created (or updated, if it exists) for the first
   * submission attempt with no associated file.
   *
   * Format: 'int64'
   */
  'originality_report[attempt]': number;
};

type Options = {
  pathParams: createPathParameters;
  params?: createFormParameters;
};

/**
 * Create an Originality Report
 *
 * Create a new OriginalityReport for the specified file
 *
 * Nickname: create_originality_report
 */
export async function create({ pathParams, params }: Options) {
  return await client().fetchAs<OriginalityReport>(
    `/lti/assignments/{assignment_id}/submissions/{submission_id}/originality_report`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
