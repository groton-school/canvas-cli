import { JSONObject, JSONValue } from '@battis/typescript-tricks';

/**
 *
 */
export type Progress = {
  /**
   * the ID of the Progress object
   *
   * type: integer
   */
  id: number | string;
  /**
   * the context owning the job.
   *
   * type: integer
   */
  context_id: number | string;
  /**
   *
   *
   *
   */
  context_type: string;
  /**
   * the id of the user who started the job
   *
   * type: integer
   */
  user_id: number | string;
  /**
   * the type of operation
   *
   *
   */
  tag: string;
  /**
   * percent completed
   *
   * type: integer
   */
  completion: number | string;
  /**
   * the state of the job one of 'queued', 'running', 'completed', 'failed'
   *
   *
   */
  workflow_state: string;
  /**
   * the time the job was created
   *
   * format: date-time
   */
  created_at: string;
  /**
   * the time the job was last updated
   *
   * format: date-time
   */
  updated_at: string;
  /**
   * optional details about the job
   *
   *
   */
  message: string;
  /**
   * optional results of the job. omitted when job is still pending
   *
   * object
   */
  results: JSONObject;
  /**
   * url where a progress update can be retrieved with an LTI access token
   *
   *
   */
  url: string;
};
