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
  /** The type of operation */
  tag: string;
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
   * Format: 'date-time'
   */
  created_at: string;
  /**
   * The time the job was last updated
   *
   * Format: 'date-time'
   */
  updated_at: string;
  /** Optional details about the job */
  message: string;
  /** Optional results of the job. omitted when job is still pending */
  results: object;
  /** Url where a progress update can be retrieved with an LTI access token */
  url: string;
};
