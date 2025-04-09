import { client } from '../../../../../../Client.js';
import { QuizItem } from '../../../../../../Resources/NewQuizItems.js';

export type delete_quiz_itemPathParameters = {
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
  pathParams: delete_quiz_itemPathParameters;
};

/**
 * Delete a quiz item
 *
 * Delete a single quiz item in a new quiz.
 *
 * Nickname: delete_quiz_item
 */
export async function delete_quiz_item({ pathParams }: Options) {
  return await client().fetchAs<QuizItem>(
    `/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items/{item_id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
