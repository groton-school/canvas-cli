import { client } from '../../../../../Client.js';

export type unflagging_questionPathParameters = {
  /** ID */
  quiz_submission_id: string;
  /** ID */
  id: string;
};

export type unflagging_questionFormParameters = {
  /**
   * The attempt number of the quiz submission being taken. Note that this
   * must be the latest attempt index, as questions for earlier attempts can
   * not be modified.
   *
   * Format: 'int64'
   */
  attempt: number;
  /**
   * The unique validation token you received when the Quiz Submission was
   * created.
   */
  validation_token: string;
  /** Access code for the Quiz, if any. */
  access_code: string;
};

type Options = {
  pathParams: unflagging_questionPathParameters;
} & (
  | {
      params?: Partial<unflagging_questionFormParameters>;
      strict?: false;
    }
  | {
      params: unflagging_questionFormParameters;
      strict: true;
    }
);

/**
 * Unflagging a question.
 *
 * Remove the flag that you previously set on a quiz question after you've
 * returned to it.
 *
 * Nickname: unflagging_question
 */
export async function unflagging_question(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/quiz_submissions/{quiz_submission_id}/questions/{id}/unflag`,
    {
      method: 'PUT',
      ...options
    }
  );
}
