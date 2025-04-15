import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../../Client.js';
import { QuizQuestion } from '../../../../../Resources/QuizQuestions.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  quiz_id: string;
};

export type listSearchParameters = {
  /**
   * If specified, the endpoint will return the questions that were presented
   * for that submission. This is useful if the quiz has been modified after
   * the submission was created and the latest quiz version's set of questions
   * does not match the submission's. NOTE: you must specify
   * quiz_submission_attempt as well if you specify this parameter.
   *
   * Format: 'int64'
   */
  quiz_submission_id: number;
  /**
   * The attempt of the submission you want the questions for.
   *
   * Format: 'int64'
   */
  quiz_submission_attempt: number;
} & Paginated;

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
  return await client().fetchAs<QuizQuestion[]>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/questions`,
    {
      method: 'GET',
      ...options
    }
  );
}
