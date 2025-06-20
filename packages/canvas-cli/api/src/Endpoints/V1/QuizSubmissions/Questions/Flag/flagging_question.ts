import { client } from '../../../../../Client.js';

export type flagging_questionPathParameters = {
  /** ID */
  quiz_submission_id: string;
  /** ID */
  id: string;
};

export type flagging_questionFormParameters = {
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
  pathParams: flagging_questionPathParameters;
} & (
  | {
      params?: Partial<flagging_questionFormParameters>;
      strict?: false;
    }
  | {
      params: flagging_questionFormParameters;
      strict: true;
    }
);

/**
 * Flagging a question.
 *
 * Set a flag on a quiz question to indicate that you want to return to it
 * later.
 *
 * Nickname: flagging_question
 */
export async function flagging_question(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/quiz_submissions/{quiz_submission_id}/questions/{id}/flag`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
