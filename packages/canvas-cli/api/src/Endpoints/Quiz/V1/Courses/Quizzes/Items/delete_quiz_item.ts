import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../../Client.js';
import { QuizItem } from '../../../../../../Resources/NewQuizItems.js';

export type delete_quiz_itemPathParameters = {
  /**
   * No description
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  course_id: number | string;
  /**
   * The id of the assignment associated with the quiz.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  assignment_id: number | string;
  /**
   * The id of the item associated with the quiz.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  item_id: number | string;
};

export type delete_quiz_itemSearchParameters = Masquerade;

type Options = {
  pathParams: delete_quiz_itemPathParameters;
} & (
  | {
      searchParams?: Partial<delete_quiz_itemSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_quiz_itemSearchParameters;
      strict: true;
    }
);

/**
 * Delete a quiz item
 *
 * Delete a single quiz item in a new quiz.
 *
 * Nickname: delete_quiz_item
 */
export async function delete_quiz_item(options: Options) {
  const response = await client().fetchAs<QuizItem>(
    `/api/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items/{item_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
