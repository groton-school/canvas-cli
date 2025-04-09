import { client } from '../../../../Client.js';
import { Quiz } from '../../../../Resources/Quizzes.js';

export type delete_quizPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: delete_quizPathParameters;
};

/**
 * Delete a quiz
 *
 * Nickname: delete_quiz
 */
export async function delete_quiz({ pathParams }: Options) {
  return await client().fetchAs<Quiz>(`/v1/courses/{course_id}/quizzes/{id}`, {
    method: 'DELETE',
    pathParams
  });
}
