import { JSONValue } from '@battis/typescript-tricks';

export type ToolSetting = {
  /**
   * The resource type code of the resource handler to use to display
   * originality reports
   */
  resource_type_code: string;
  /**
   * A URL that may be used to override the launch URL inferred by the specified
   * resource_type_code. If used a 'resource_type_code' must also be specified.
   */
  resource_url: string;
};

export type OriginalityReport = {
  /**
   * The id of the OriginalityReport
   *
   * Type: integer
   */
  id: number | string;
  /**
   * The id of the file receiving the originality score
   *
   * Type: integer
   */
  file_id: number | string;
  /**
   * A number between 0 and 100 representing the originality score
   *
   * Type: number
   */
  originality_score: number | string;
  /**
   * The ID of the file within Canvas containing the originality report document
   * (if provided)
   *
   * Type: integer
   */
  originality_report_file_id: number | string;
  /** A non-LTI launch URL where the originality score of the file may be found. */
  originality_report_url: string;
  /**
   * A ToolSetting object containing optional 'resource_type_code' and
   * 'resource_url'
   */
  tool_setting: ToolSetting;
  /**
   * A message describing the error. If set, the workflow_state will become
   * 'error.'
   */
  error_report: string;
  /**
   * The submitted_at date time of the submission.
   *
   * Format: date-time
   */
  submission_time: string;
  /**
   * The id of the root Account associated with the OriginalityReport
   *
   * Type: integer
   */
  root_account_id: number | string;
};
