import { client } from '../../../../../Client.js';
import { AccommodationResponse } from '../../../../../Resources/NewQuizzesAccommodations.js';

export type set_course_level_accommodationsPathParameters = {
  /** The ID of the course where accommodations should be applied. */
  course_id: string;
};

export type set_course_level_accommodationsFormParameters = {
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
   * If 'true', applies the accommodation to currently <b>in-progress</b> quiz
   * sessions.
   */
  apply_to_in_progress_quiz_sessions: boolean;
  /**
   * If 'true', removes <b>one incorrect answer</b> from multiple-choice
   * questions with <b>4 or more options</b>.
   */
  reduce_choices_enabled: boolean;
};

type Options = {
  pathParams: set_course_level_accommodationsPathParameters;
} & (
  | {
      params?: Partial<set_course_level_accommodationsFormParameters>;
      strict?: false;
    }
  | {
      params?: set_course_level_accommodationsFormParameters;
      strict: true;
    }
);

/**
 * Set Course-Level Accommodations
 *
 * Apply accommodations at the <b>course level</b> for students enrolled in a
 * given course.
 *
 * <b>Request Body Format:</b> [{ "user_id": 3, "extra_time": 60,
 * "apply_to_in_progress_quiz_sessions": true, "reduce_choices_enabled": true
 * }]
 *
 * <b>Responses</b>
 *
 * <code>200 OK</code>: Accommodations were processed with some successes and
 * failures <code>401 Unauthorized</code>: User does not have permission to
 * update accommodations <code>404 Not Found</code>: The course was not found
 * <code>400 Bad Request</code>: Validation error (e.g., invalid JSON, missing
 * user IDs)
 *
 * Nickname: set_course_level_accommodations
 */
export async function set_course_level_accommodations({
  pathParams,
  params
}: Options) {
  return await client().fetchAs<AccommodationResponse>(
    `/quiz/v1/courses/{course_id}/accommodations`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
