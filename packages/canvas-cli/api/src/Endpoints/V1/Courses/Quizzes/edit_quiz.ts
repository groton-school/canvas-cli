import { client } from '../../../../Client.js';
import { Quiz } from '../../../../Resources/Quizzes.js';

type Parameters = {
  /** If true, notifies users that the quiz has changed. Defaults to true */
  'quiz[notify_of_update]': boolean;
};

type Options = {
  parameters: Parameters;
};

/**
 * Edit a quiz
 *
 * Modify an existing quiz. See the documentation for quiz creation.
 *
 * Additional arguments:
 *
 * Nickname: edit_quiz
 */
export async function edit_quiz({ parameters }: Options) {
  return await client().fetchAs<Quiz>(`/v1/courses/{course_id}/quizzes/{id}`, {
    method: 'PUT',
    params: parameters
  });
}
