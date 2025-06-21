import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { NewQuiz } from '../../../../../Resources/NewQuizzes.js';

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
};

export type getSearchParameters = Masquerade;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get a new quiz
 *
 * Get details about a single new quiz.
 *
 * Nickname: get_new_quiz
 */
export async function get(options: Options) {
  const response = await client().fetchAs<NewQuiz>(
    `/api/quiz/v1/courses/{course_id}/quizzes/{assignment_id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
