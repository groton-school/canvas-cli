import { client } from '../../../../../../Client.js';
import { QuizItem } from '../../../../../../Resources/NewQuizItems.js';

export type listPathParameters = {
  /**
   * No description
   *
   * Format: 'int64'
   */
  course_id: number;
  /**
   * No description
   *
   * Format: 'int64'
   */
  assignment_id: number;
};

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * List quiz items
 *
 * Get a list of items in a new quiz.
 *
 * Nickname: list_quiz_items
 */
export async function list({ pathParams }: Options) {
  return await client().fetchAs<string[]>(
    `/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items`,
    {
      method: 'GET',
      pathParams
    }
  );
}
