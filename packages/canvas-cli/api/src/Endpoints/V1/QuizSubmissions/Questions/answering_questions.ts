import { client } from '../../../../Client.js';
import { QuizSubmissionQuestion } from '../../../../Resources/QuizSubmissionQuestions.js';

export type answering_questionsPathParameters = {
  /** ID */
  quiz_submission_id: string;
};

export type answering_questionsFormParameters = {
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
  /**
   * Set of question IDs and the answer value.
   *
   * See {Appendix: Question Answer Formats} for the accepted answer formats
   * for each question type.
   */
  quiz_questions: string[];
};

type Options = {
  pathParams: answering_questionsPathParameters;
  params?: answering_questionsFormParameters;
};

/**
 * Answering questions
 *
 * Provide or update an answer to one or more QuizQuestions.
 *
 * Nickname: answering_questions
 */
export async function answering_questions({ pathParams, params }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/quiz_submissions/{quiz_submission_id}/questions`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
