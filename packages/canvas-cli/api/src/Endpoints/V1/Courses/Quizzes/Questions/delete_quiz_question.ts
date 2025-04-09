import { client } from '../../../../../Client.js';

export type delete_quiz_questionPathParameters = {
  /** ID */
  course_id: string;
  /**
   * The associated quiz's unique identifier
   *
   * Format: 'int64'
   */
  quiz_id: number;
  /**
   * The quiz question's unique identifier
   *
   * Format: 'int64'
   */
  id: number;
};

type Options = {
  pathParams: delete_quiz_questionPathParameters;
};

/**
 * Delete a quiz question
 *
 * <b>204 No Content</b> response code is returned if the deletion was
 * successful.
 *
 * Nickname: delete_quiz_question
 */
export async function delete_quiz_question({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/quizzes/{quiz_id}/questions/{id}`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
