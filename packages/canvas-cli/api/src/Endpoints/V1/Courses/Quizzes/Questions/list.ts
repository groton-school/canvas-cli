import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { QuizQuestion } from '../../../../../Resources/QuizQuestions.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  quiz_id: string | number;
};

export type listSearchParameters = Masquerade &
  Paginated &
  Partial<{
    /**
     * If specified, the endpoint will return the questions that were presented
     * for that submission. This is useful if the quiz has been modified after
     * the submission was created and the latest quiz version's set of questions
     * does not match the submission's. NOTE: you must specify
     * quiz_submission_attempt as well if you specify this parameter.
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    quiz_submission_id: number | string;
    /**
     * The attempt of the submission you want the questions for.
     *
     * Type: integer
     *
     * Format: 'int64'
     */
    quiz_submission_attempt: number | string;
  }>;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List questions in a quiz or a submission
 *
 * Returns the paginated list of QuizQuestions in this quiz.
 *
 * Nickname: list_questions_in_quiz_or_submission
 */
export async function list(options: Options) {
  const response = await client().fetchAs<QuizQuestion[]>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/questions`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
