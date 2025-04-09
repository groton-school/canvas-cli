import { client } from '../../../../../Client.js';

export type set_extensions_for_student_quiz_submissionsPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  quiz_id: string;
};

export type set_extensions_for_student_quiz_submissionsFormParameters = {
  /**
   * The ID of the user we want to add quiz extensions for.
   *
   * Format: 'int64'
   */
  'quiz_extensions[user_id]': string[];
  /**
   * Number of times the student is allowed to re-take the quiz over the
   * multiple-attempt limit. This is limited to 1000 attempts or less.
   *
   * Format: 'int64'
   */
  'quiz_extensions[extra_attempts]': string[];
  /**
   * The number of extra minutes to allow for all attempts. This will add to
   * the existing time limit on the submission. This is limited to 10080
   * minutes (1 week)
   *
   * Format: 'int64'
   */
  'quiz_extensions[extra_time]': string[];
  /** Allow the student to take the quiz even if it's locked for everyone else. */
  'quiz_extensions[manually_unlocked]': string[];
  /**
   * The number of minutes to extend the quiz from the current time. This is
   * mutually exclusive to extend_from_end_at. This is limited to 1440 minutes
   * (24 hours)
   *
   * Format: 'int64'
   */
  'quiz_extensions[extend_from_now]': string[];
  /**
   * The number of minutes to extend the quiz beyond the quiz's current ending
   * time. This is mutually exclusive to extend_from_now. This is limited to
   * 1440 minutes (24 hours)
   *
   * Format: 'int64'
   */
  'quiz_extensions[extend_from_end_at]': string[];
};

type Options = {
  pathParams: set_extensions_for_student_quiz_submissionsPathParameters;
  params?: set_extensions_for_student_quiz_submissionsFormParameters;
};

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
export async function set_extensions_for_student_quiz_submissions({
  pathParams,
  params
}: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/quizzes/{quiz_id}/extensions`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
