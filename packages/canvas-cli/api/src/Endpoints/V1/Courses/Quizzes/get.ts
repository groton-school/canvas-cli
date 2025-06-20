import { client } from '../../../../Client.js';
import { Quiz } from '../../../../Resources/Quizzes.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
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
 * Get a single quiz
 *
 * Returns the quiz with the given id.
 *
 * Nickname: get_single_quiz
 */
export async function get(options: Options) {
  const response = await client().fetchAs<Quiz>(
    `/api/v1/courses/{course_id}/quizzes/{id}`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
