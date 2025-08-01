import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { QuizSubmissionQuestion } from '../../../../Resources/QuizSubmissionQuestions.js';

export type answering_questionsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  quiz_submission_id: string | number;
};

export type answering_questionsSearchParameters = Masquerade & Paginated;

export type answering_questionsFormParameters = Masquerade & {
  /**
   * The attempt number of the quiz submission being taken. Note that this
   * must be the latest attempt index, as questions for earlier attempts can
   * not be modified.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  attempt: number | string;
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
  quiz_questions: QuizSubmissionQuestion[];
};

type Options = {
  pathParams: answering_questionsPathParameters;
} & (
  | {
      searchParams?: Partial<answering_questionsSearchParameters>;
      params?: Partial<answering_questionsFormParameters>;
      strict?: false;
    }
  | {
      searchParams: answering_questionsSearchParameters;
      params: answering_questionsFormParameters;
      strict: true;
    }
);

/**
 * Answering questions
 *
 * Provide or update an answer to one or more QuizQuestions.
 *
 * Nickname: answering_questions
 */
export async function answering_questions(options: Options) {
  const response = await client().fetchAs<QuizSubmissionQuestion[]>(
    `/api/v1/quiz_submissions/{quiz_submission_id}/questions`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
