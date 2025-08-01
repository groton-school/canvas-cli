import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { OriginalityReport } from '../../../../../Resources/OriginalityReports.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  assignment_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  submission_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
   * A number between 0 and 100 representing the measure of the specified
   * file's originality.
   *
   * Type: number
   *
   * Format: 'float'
   */
  'originality_report[originality_score]': number | string;
  /** The URL where the originality report for the specified file may be found. */
  'originality_report[originality_report_url]': string;
  /**
   * The ID of the file within Canvas that contains the originality report for
   * the submitted file provided in the request URL.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  'originality_report[originality_report_file_id]': number | string;
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
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Edit an Originality Report
 *
 * Modify an existing originality report. An alternative to this endpoint is to
 * POST the same parameters listed below to the CREATE endpoint.
 *
 * Nickname: edit_originality_report_submissions
 */
export async function update(options: Options) {
  const response = await client().fetchAs<OriginalityReport>(
    `/api/lti/assignments/{assignment_id}/submissions/{submission_id}/originality_report/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
