import { JSONObject } from '@battis/typescript-tricks';

export type Poll = {
  /**
   * The unique identifier for the poll.
   *
   * Type: integer
   */
  id: number | string;
  /** The question/title of the poll. */
  question: string;
  /** A short description of the poll. */
  description: string;
  /**
   * The time at which the poll was created.
   *
   * Format: 'date-time'
   */
  created_at: string;
  /**
   * The unique identifier for the user that created the poll.
   *
   * Type: integer
   */
  user_id: number | string;
  /**
   * An aggregate of the results of all associated poll sessions, with the poll
   * choice id as the key, and the aggregated submission count as the value.
   *
   * Object
   */
  total_results: JSONObject;
};
