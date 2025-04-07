import { Submission } from '../../../../Resources/PlagiarismDetectionSubmissions.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get a users most recently graded submissions
 *
 * Nickname: get_users_most_recently_graded_submissions
 */
export async function get({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/users/{id}/graded_submissions`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
