import { JSONValue } from '@battis/typescript-tricks';

/**
 *
 */
export type MigrationIssue = {
  /**
   * the unique identifier for the issue
   *
   * type: integer
   */
  id: number | string;
  /**
   * API url to the content migration
   *
   *
   */
  content_migration_url: string;
  /**
   * Description of the issue for the end-user
   *
   *
   */
  description: string;
  /**
   * Current state of the issue: active, resolved
   *
   *
   */
  workflow_state: string;
  /**
   * HTML Url to the Canvas page to investigate the issue
   *
   *
   */
  fix_issue_html_url: string;
  /**
   * Severity of the issue: todo, warning, error
   *
   *
   */
  issue_type: string;
  /**
   * Link to a Canvas error report if present (If the requesting user has permissions)
   *
   *
   */
  error_report_html_url: string;
  /**
   * Site administrator error message (If the requesting user has permissions)
   *
   *
   */
  error_message: string;
  /**
   * timestamp
   *
   * format: date-time
   */
  created_at: string;
  /**
   * timestamp
   *
   * format: date-time
   */
  updated_at: string;
};

/**
 *
 */
export type ContentMigration = {
  /**
   * the unique identifier for the migration
   *
   * type: integer
   */
  id: number | string;
  /**
   * the type of content migration
   *
   *
   */
  migration_type: string;
  /**
   * the name of the content migration type
   *
   *
   */
  migration_type_title: string;
  /**
   * API url to the content migration's issues
   *
   *
   */
  migration_issues_url: string;
  /**
   * attachment api object for the uploaded file may not be present for all migrations
   *
   *
   */
  attachment: string;
  /**
   * The api endpoint for polling the current progress
   *
   *
   */
  progress_url: string;
  /**
   * The user who started the migration
   *
   * type: integer
   */
  user_id: number | string;
  /**
   * Current state of the content migration: pre_processing, pre_processed, running, waiting_for_select, completed, failed
   *
   *
   */
  workflow_state: string;
  /**
   * timestamp
   *
   * format: date-time
   */
  started_at: string;
  /**
   * timestamp
   *
   * format: date-time
   */
  finished_at: string;
  /**
   * file uploading data, see {file:file.file_uploads.html File Upload Documentation} for file upload workflow This works a little differently in that all the file data is in the pre_attachment hash if there is no upload_url then there was an attachment pre-processing error, the error message will be in the message key This data will only be here after a create or update call
   *
   *
   */
  pre_attachment: string;
};

/**
 *
 */
export type Migrator = {
  /**
   * The value to pass to the create endpoint
   *
   *
   */
  type: string;
  /**
   * Whether this endpoint requires a file upload
   *
   * type: boolean
   */
  requires_file_upload: boolean | string;
  /**
   * Description of the package type expected
   *
   *
   */
  name: string;
  /**
   * A list of fields this system requires
   *
   *
   */
  required_settings: string[];
};
