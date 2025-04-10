import { client } from '../../../../../../Client.js';

export type complete_quiz_submission_turn_it_inPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  quiz_id: string;
  /** ID */
  id: string;
};

export type complete_quiz_submission_turn_it_inFormParameters = {
  /**
   * The attempt number of the quiz submission that should be completed. Note
   * that this must be the latest attempt index, as earlier attempts can not
   * be modified.
   *
   * Format: 'int64'
   */
  attempt: number;
  /**
   * The unique validation token you received when this Quiz Submission was
   * created.
   */
  validation_token: string;
  /** Access code for the Quiz, if any. */
  access_code: string;
};

type Options = {
  pathParams: complete_quiz_submission_turn_it_inPathParameters;
} & (
  | {
      params?: Partial<complete_quiz_submission_turn_it_inFormParameters>;
      strict?: false;
    }
  | {
      params?: complete_quiz_submission_turn_it_inFormParameters;
      strict: true;
    }
);

/**
 * Complete the quiz submission (turn it in).
 *
 * Complete the quiz submission by marking it as complete and grading it. When
 * the quiz submission has been marked as complete, no further modifications
 * will be allowed.
 *
 * <b>Responses</b>
 *
 * <b>200 OK</b> if the request was successful <b>403 Forbidden</b> if an
 * invalid access code is specified <b>403 Forbidden</b> if the Quiz's IP filter
 * restriction does not pass <b>403 Forbidden</b> if an invalid token is
 * specified <b>400 Bad Request</b> if the QS is already complete <b>400 Bad
 * Request</b> if the attempt parameter is missing <b>400 Bad Request</b> if the
 * attempt parameter is not the latest attempt
 *
 * Nickname: complete_quiz_submission_turn_it_in
 */
export async function complete_quiz_submission_turn_it_in({
  pathParams,
  params
}: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/quizzes/{quiz_id}/submissions/{id}/complete`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
