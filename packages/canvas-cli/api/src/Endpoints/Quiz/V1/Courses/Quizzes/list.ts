import { Masquerade, Paginated } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { NewQuiz } from '../../../../../Resources/NewQuizzes.js';

export type listPathParameters = {
  /**
   * No description
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  course_id: number | string;
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
 * List new quizzes
 *
 * Get a list of new quizzes.
 *
 * Nickname: list_new_quizzes
 */
export async function list(options: Options) {
  const response = await client().fetchAs<NewQuiz[]>(
    `/api/quiz/v1/courses/{course_id}/quizzes`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
