import { PollSubmission } from './PollSubmissions.js';

export type PollSession = {
  /**
   * The unique identifier for the poll session.
   *
   * Type: integer
   */
  id: number;
  /**
   * The id of the Poll this poll session is associated with
   *
   * Type: integer
   */
  poll_id: number;
  /**
   * The id of the Course this poll session is associated with
   *
   * Type: integer
   */
  course_id: number;
  /**
   * The id of the Course Section this poll session is associated with
   *
   * Type: integer
   */
  course_section_id: number;
  /**
   * Specifies whether or not this poll session has been published for students
   * to participate in.
   */
  is_published: boolean;
  /** Specifies whether the results are viewable by students. */
  has_public_results: boolean;
  /**
   * The time at which the poll session was created.
   *
   * Format: date-time
   */
  created_at: string;
  /**
   * The results of the submissions of the poll. Each key is the poll choice id,
   * and the value is the count of submissions.
   */
  results: object;
  /**
   * If the poll session has public results, this will return an array of all
   * submissions, viewable by both students and teachers. If the results are not
   * public, for students it will return their submission only.
   */
  poll_submissions: PollSubmission;
};
