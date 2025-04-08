import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get the quiz submission.
 *
 * Get the submission for this quiz for the current user.
 *
 * <b>200 OK</b> response code is returned if the request was successful.
 *
 * Nickname: get_quiz_submission
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/quizzes/{quiz_id}/submission`,
    { method: 'GET', params: parameters }
  );
}
