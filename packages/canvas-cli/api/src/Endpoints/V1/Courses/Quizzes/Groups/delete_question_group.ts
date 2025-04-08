import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

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
export async function delete_question_group({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/quizzes/{quiz_id}/groups/{id}`,
    { method: 'DELETE', params: parameters }
  );
}
