import { client } from '../../../../Client.js';
import { Quiz } from '../../../../Resources/Quizzes.js';

type edit_quizPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

type edit_quizFormParameters = {
  /** If true, notifies users that the quiz has changed. Defaults to true */
  'quiz[notify_of_update]': boolean;
};

type Options = {
  pathParams: edit_quizPathParameters;
  params?: edit_quizFormParameters;
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
export async function edit_quiz({ pathParams, params }: Options) {
  return await client().fetchAs<Quiz>(`/v1/courses/{course_id}/quizzes/{id}`, {
    method: 'PUT',
    pathParams,
    params
  });
}
