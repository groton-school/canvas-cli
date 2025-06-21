import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';

export type set_extensions_for_student_quiz_submissionsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type set_extensions_for_student_quiz_submissionsSearchParameters =
  Masquerade;

export type set_extensions_for_student_quiz_submissionsFormParameters =
  Masquerade & {
    /**
     * The ID of the user we want to add quiz extensions for.
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    user_id: number | string;
    /**
     * Number of times the student is allowed to re-take the quiz over the
     * multiple-attempt limit. This is limited to 1000 attempts or less.
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    extra_attempts: number | string;
    /**
     * The number of extra minutes to allow for all attempts. This will add to
     * the existing time limit on the submission. This is limited to 10080
     * minutes (1 week)
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    extra_time: number | string;
    /**
     * Allow the student to take the quiz even if it's locked for everyone else.
     *
     * Type: boolean
     */
    manually_unlocked: boolean | string;
    /**
     * The number of minutes to extend the quiz from the current time. This is
     * mutually exclusive to extend_from_end_at. This is limited to 1440 minutes
     * (24 hours)
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    extend_from_now: number | string;
    /**
     * The number of minutes to extend the quiz beyond the quiz's current ending
     * time. This is mutually exclusive to extend_from_now. This is limited to
     * 1440 minutes (24 hours)
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    extend_from_end_at: number | string;
  };

type Options = {
  pathParams: set_extensions_for_student_quiz_submissionsPathParameters;
} & (
  | {
      searchParams?: Partial<set_extensions_for_student_quiz_submissionsSearchParameters>;
      params?: Partial<set_extensions_for_student_quiz_submissionsFormParameters>;
      strict?: false;
    }
  | {
      searchParams: set_extensions_for_student_quiz_submissionsSearchParameters;
      params: set_extensions_for_student_quiz_submissionsFormParameters;
      strict: true;
    }
);

/**
 * Set extensions for student quiz submissions
 *
 * <b>Responses</b>
 *
 * <b>200 OK</b> if the request was successful <b>403 Forbidden</b> if you are
 * not allowed to extend quizzes for this course
 *
 * Nickname: set_extensions_for_student_quiz_submissions
 */
export async function set_extensions_for_student_quiz_submissions(
  options: Options
) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/quiz_extensions`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
