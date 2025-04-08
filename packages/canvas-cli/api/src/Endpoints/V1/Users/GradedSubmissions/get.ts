import { client } from '../../../../Client.js';
import { Submission } from '../../../../Resources/Submissions.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a users most recently graded submissions
 *
 * Nickname: get_users_most_recently_graded_submissions
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/users/{id}/graded_submissions`, {
    method: 'GET',
    params: parameters
  });
}
