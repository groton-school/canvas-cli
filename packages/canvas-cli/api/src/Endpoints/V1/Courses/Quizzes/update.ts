import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Quiz } from '../../../../Resources/Quizzes.js';

export type updatePathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  id: string;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /** If true, notifies users that the quiz has changed. Defaults to true */
  'quiz[notify_of_update]': boolean;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Edit a quiz
 *
 * Modify an existing quiz. See the documentation for quiz creation.
 *
 * Additional arguments:
 *
 * Nickname: edit_quiz
 */
export async function update(options: Options) {
  const response = await client().fetchAs<Quiz>(
    `/api/v1/courses/{course_id}/quizzes/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
