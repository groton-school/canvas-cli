import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../../../Client.js';
import { QuizItem } from '../../../../../../Resources/NewQuizItems.js';

export type listPathParameters = {
  /**
   * No description
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  course_id: number | string;
  /**
   * No description
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  assignment_id: number | string;
};

export type listSearchParameters = Masquerade & Paginated;

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
 * List quiz items
 *
 * Get a list of items in a new quiz.
 *
 * Nickname: list_quiz_items
 */
export async function list(options: Options) {
  const response = await client().fetchAs<QuizItem[]>(
    `/api/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
