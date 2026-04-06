import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
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

type Options = (
  | {
      path: answering_questionsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: answering_questionsPathParameters;
    }
) &
  (
    | {
        query?: Partial<answering_questionsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<answering_questionsSearchParameters>;
        body?: Partial<answering_questionsFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<answering_questionsFormParameters>;
        strict?: false;
      }
    | {
        query?: Partial<answering_questionsSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: answering_questionsSearchParameters;
        body?: Partial<answering_questionsFormParameters>;
        /** @deprecated Use {@link Options.body} */
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
