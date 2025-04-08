import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a single quiz submission.
 *
 * Get a single quiz submission.
 *
 * <b>200 OK</b> response code is returned if the request was successful.
 *
 * Nickname: get_single_quiz_submission
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/quizzes/{quiz_id}/submissions/{id}`,
    { method: 'GET', params: parameters }
  );
}
