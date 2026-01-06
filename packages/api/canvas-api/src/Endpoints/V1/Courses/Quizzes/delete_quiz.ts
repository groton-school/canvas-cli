import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { Quiz } from '../../../../Resources/Quizzes.js';

export type delete_quizPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
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
 * Deletes a quiz and returns the deleted quiz object.
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
