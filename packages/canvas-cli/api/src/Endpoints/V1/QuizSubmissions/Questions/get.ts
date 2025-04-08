import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get all quiz submission questions.
 *
 * Get a list of all the question records for this quiz submission.
 *
 * <b>200 OK</b> response code is returned if the request was successful.
 *
 * Nickname: get_all_quiz_submission_questions
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/quiz_submissions/{quiz_submission_id}/questions`,
    { method: 'GET', params: parameters }
  );
}
