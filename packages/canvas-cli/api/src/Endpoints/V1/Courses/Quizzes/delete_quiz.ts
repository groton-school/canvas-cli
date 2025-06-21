import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Quiz } from '../../../../Resources/Quizzes.js';

export type delete_quizPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

export type delete_quizSearchParameters = Masquerade;

type Options = {
  pathParams: delete_quizPathParameters;
} & (
  | {
      searchParams?: Partial<delete_quizSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_quizSearchParameters;
      strict: true;
    }
);

/**
 * Delete a quiz
 *
 * Nickname: delete_quiz
 */
export async function delete_quiz(options: Options) {
  const response = await client().fetchAs<Quiz>(
    `/api/v1/courses/{course_id}/quizzes/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
