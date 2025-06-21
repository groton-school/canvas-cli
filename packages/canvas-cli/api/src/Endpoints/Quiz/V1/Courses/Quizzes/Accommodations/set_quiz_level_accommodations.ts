import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../Client.js';
import { AccommodationResponse } from '../../../../../../Resources/NewQuizzesAccommodations.js';

export type set_quiz_level_accommodationsPathParameters = {
  /** The ID of the course where the quiz is located. */
  course_id: string;
  /**
   * The ID of the assignment/quiz that needs accommodations.
   *
   * Format: 'int64'
   */
  assignment_id: number;
};

export type set_quiz_level_accommodationsSearchParameters = Masquerade;

export type set_quiz_level_accommodationsFormParameters = Masquerade & {
  /**
   * The Canvas user ID of the student receiving accommodations.
   *
   * Format: 'int64'
   */
  user_id: number;
  /**
   * Amount of extra time in <b>minutes</b> granted for quiz submission.
   * Allowed range: 0 to 10080 minutes (168 hours).
   *
   * Format: 'int64'
   */
  extra_time: number;
  /**
   * Number of times the student is allowed to re-take the quiz over the
   * multiple-attempt limit.
   *
   * Format: 'int64'
   */
  extra_attempts: number;
  /**
   * If 'true', removes <b>one incorrect answer</b> from multiple-choice
   * questions with <b>4 or more options</b>.
   */
  reduce_choices_enabled: boolean;
};

type Options = {
  pathParams: set_quiz_level_accommodationsPathParameters;
} & (
  | {
      searchParams?: Partial<set_quiz_level_accommodationsSearchParameters>;
      params?: Partial<set_quiz_level_accommodationsFormParameters>;
      strict?: false;
    }
  | {
      searchParams: set_quiz_level_accommodationsSearchParameters;
      params: set_quiz_level_accommodationsFormParameters;
      strict: true;
    }
);

/**
 * Set Quiz-Level Accommodations
 *
 * Apply accommodations at the <b>quiz level</b> for students in a specific
 * assignment.
 *
 * <b>Request Body Format:</b> [{ "user_id": 3, "extra_time": 60,
 * "extra_attempts": 1, "reduce_choices_enabled": true }]
 *
 * <b>Responses</b>
 *
 * <code>200 OK</code>: Accommodations were processed with some successes and
 * failures <code>401 Unauthorized</code>: User does not have permission to
 * update accommodations <code>404 Not Found</code>: The course or assignment
 * was not found <code>400 Bad Request</code>: Validation error (e.g., invalid
 * JSON, missing user IDs)
 *
 * Nickname: set_quiz_level_accommodations
 */
export async function set_quiz_level_accommodations(options: Options) {
  const response = await client().fetchAs<AccommodationResponse>(
    `/api/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/accommodations`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
