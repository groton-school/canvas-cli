import { client } from '../../../../Client.js';
import { Quiz } from '../../../../Resources/Quizzes.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a quiz
 *
 * Nickname: delete_quiz
 */
export async function delete_quiz({ parameters }: Options) {
  return await client().fetchAs<Quiz>(`/v1/courses/{course_id}/quizzes/{id}`, {
    method: 'DELETE',
    params: parameters
  });
}
