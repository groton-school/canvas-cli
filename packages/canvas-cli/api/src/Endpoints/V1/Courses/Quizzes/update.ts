import { client } from '../../../../Client.js';
import { Quiz } from '../../../../Resources/Quizzes.js';

export type updatePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

export type updateFormParameters = {
  /** If true, notifies users that the quiz has changed. Defaults to true */
  'quiz[notify_of_update]': boolean;
};

type Options = {
  pathParams: updatePathParameters;
  params?: updateFormParameters;
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
export async function update({ pathParams, params }: Options) {
  return await client().fetchAs<Quiz>(`/v1/courses/{course_id}/quizzes/{id}`, {
    method: 'PUT',
    pathParams,
    params
  });
}
