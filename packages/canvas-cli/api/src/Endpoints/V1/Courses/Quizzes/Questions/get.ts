import { client } from '../../../../../Client.js';
import { QuizQuestion } from '../../../../../Resources/QuizQuestions.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  quiz_id: string;
  /**
   * The quiz question unique identifier.
   *
   * Format: 'int64'
   */
  id: number;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get a single quiz question
 *
 * Returns the quiz question with the given id
 *
 * Nickname: get_single_quiz_question
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<QuizQuestion>(
    `/v1/courses/{course_id}/quizzes/{quiz_id}/questions/{id}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
