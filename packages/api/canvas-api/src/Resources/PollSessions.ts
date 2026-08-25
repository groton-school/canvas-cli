import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import { PollSubmission } from './PollSubmissions.js';

/**
 *
 */
export type PollSession = {
  /**
   * The unique identifier for the poll session.
   *
   * type: integer
   */
  id: number | string;
  /**
   * The id of the Poll this poll session is associated with
   *
   * type: integer
   */
  poll_id: number | string;
  /**
   * The id of the Course this poll session is associated with
   *
   * type: integer
   */
  course_id: number | string;
  /**
   * The id of the Course Section this poll session is associated with
   *
   * type: integer
   */
  course_section_id: number | string;
  /**
   * Specifies whether or not this poll session has been published for students to participate in.
   *
   * type: boolean
   */
  is_published: boolean | string;
  /**
   * Specifies whether the results are viewable by students.
   *
   * type: boolean
   */
  has_public_results: boolean | string;
  /**
   * The time at which the poll session was created.
   *
   * 

format: 'date-time'
   */
  created_at: string;
  /**
   * The results of the submissions of the poll. Each key is the poll choice id, and the value is the count of submissions.
   *
   * object
   */
  results: JSONObject;
  /**
   * If the poll session has public results, this will return an array of all submissions, viewable by both students and teachers. If the results are not public, for students it will return their submission only.
   *
   *
   */
  poll_submissions: PollSubmission;
};
