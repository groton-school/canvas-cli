import { JSONObject } from '@battis/typescript-tricks';

export type Progress = {
  /**
   * The ID of the Progress object
   *
   * Type: integer
   */
  id: number;
  /**
   * The context owning the job.
   *
   * Type: integer
   */
  context_id: number;
  context_type: string;
  /**
   * The id of the user who started the job
   *
   * Type: integer
   */
  user_id: number;
  /**
   * Percent completed
   *
   * Type: integer
   */
  completion: number;
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
  /**
   * For successfully completed jobs, this is a JSON object containing url of
   * the report and other details
   *
   * Object
   */
  results: JSONObject;
  /** Url where a progress update can be retrieved */
  url: string;
};
