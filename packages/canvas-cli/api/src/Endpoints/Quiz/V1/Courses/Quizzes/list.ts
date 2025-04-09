import { client } from '../../../../../Client.js';
import { NewQuiz } from '../../../../../Resources/NewQuizzes.js';

export type listPathParameters = {
  /**
   * No description
   *
   * Format: 'int64'
   */
  course_id: number;
};

type Options = {
  pathParams: listPathParameters;
};

/**
 * List new quizzes
 *
 * Get a list of new quizzes.
 *
 * Nickname: list_new_quizzes
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<string[]>(
    `/quiz/v1/courses/{course_id}/quizzes`,
    {
      method: 'GET',
      pathParams
    }
  );
}
