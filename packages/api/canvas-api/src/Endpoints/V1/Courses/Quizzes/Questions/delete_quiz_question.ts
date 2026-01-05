import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

export type delete_quiz_questionPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * The associated quiz's unique identifier
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  quiz_id: number | string;
  /**
   * The quiz question's unique identifier
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  id: number | string;
};

export type delete_quiz_questionSearchParameters = Masquerade;

type Options = {
  pathParams: delete_quiz_questionPathParameters;
} & (
  | {
      searchParams?: Partial<delete_quiz_questionSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_quiz_questionSearchParameters;
      strict: true;
    }
);

/**
 * Delete a quiz question
 *
 * <b>204 No Content</b> response code is returned if the deletion was
 * successful.
 *
 * Nickname: delete_quiz_question
 */
export async function delete_quiz_question(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/questions/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
