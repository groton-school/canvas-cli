import { JSONObject, JSONValue } from '@battis/typescript-tricks';

export type Progress = {
  /**
   * The ID of the Progress object
   *
   * Type: integer
   */
  id: number | string;
  /**
   * The context owning the job.
   *
   * Type: integer
   */
  context_id: number | string;
  context_type: string;
  /**
   * The id of the user who started the job
   *
   * Type: integer
   */
  user_id: number | string;
  /** The type of operation */
  tag: string;
  /**
   * Percent completed
   *
   * Type: integer
   */
  completion: number | string;
  /** The state of the job one of 'queued', 'running', 'completed', 'failed' */
  workflow_state: string;
  /**
   * The time the job was created
   *
   * Format: date-time
   */
  created_at: string;
  /**
   * The time the job was last updated
   *
   * Format: date-time
   */
  updated_at: string;
  /** Optional details about the job */
  message: string;
  /**
   * Optional results of the job. omitted when job is still pending
   *
   * Object
   */
  results: JSONObject;
  /** Url where a progress update can be retrieved with an LTI access token */
  url: string;
};
