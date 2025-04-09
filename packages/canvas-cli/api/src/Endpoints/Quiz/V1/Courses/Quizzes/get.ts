import { client } from '../../../../../Client.js';
import { NewQuiz } from '../../../../../Resources/NewQuizzes.js';

type getPathParameters = {
  /**
   * No description
   *
   * Format: 'int64'
   */
  course_id: number;
  /**
   * The id of the assignment associated with the quiz.
   *
   * Format: 'int64'
   */
  assignment_id: number;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get a new quiz
 *
 * Get details about a single new quiz.
 *
 * Nickname: get_new_quiz
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<NewQuiz>(
    `/quiz/v1/courses/{course_id}/quizzes/{assignment_id}`,
    {
      method: 'GET',
      pathParams
    }
  );
}
