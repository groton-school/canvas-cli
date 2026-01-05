import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

export type delete_question_groupPathParameters = {
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
  quiz_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_question_groupSearchParameters = Masquerade;

type Options = {
  pathParams: delete_question_groupPathParameters;
} & (
  | {
      searchParams?: Partial<delete_question_groupSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_question_groupSearchParameters;
      strict: true;
    }
);

/**
 * Delete a question group
 *
 * Delete a question group
 *
 * <b>204 No Content<b> response code is returned if the deletion was
 * successful.
 *
 * Nickname: delete_question_group
 */
export async function delete_question_group(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/quizzes/{quiz_id}/groups/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
