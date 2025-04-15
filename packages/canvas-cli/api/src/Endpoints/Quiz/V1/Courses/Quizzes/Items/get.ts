import { client } from '../../../../../../Client.js';
import { QuizItem } from '../../../../../../Resources/NewQuizItems.js';

export type getPathParameters = {
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
  /**
   * The id of the item associated with the quiz.
   *
   * Format: 'int64'
   */
  item_id: number;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get a quiz item
 *
 * Get details about a single item in a new quiz.
 *
 * Nickname: get_quiz_item
 */
export async function get(options: Options) {
  return await client().fetchAs<QuizItem>(
    `/api/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items/{item_id}`,
    {
      method: 'GET',
      ...options
    }
  );
}
