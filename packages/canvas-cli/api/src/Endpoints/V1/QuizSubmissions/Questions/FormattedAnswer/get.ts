import { Numeric } from '';
import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a formatted student numerical answer.
 *
 * Matches the intended behavior of the UI when a numerical answer is entered
 * and returns the resulting formatted number
 *
 * Nickname: get_formatted_student_numerical_answer
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/quiz_submissions/{quiz_submission_id}/questions/{id}/formatted_answer`,
    { method: 'GET', params: parameters }
  );
}
