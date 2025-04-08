import { client } from '../../../../Client.js';
import { Assignment } from '../../../../Resources/Assignments.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List Missing Submissions
 *
 * A paginated list of past-due assignments for which the student does not have
 * a submission. The user sending the request must either be the student, an
 * admin or a parent observer using the parent app
 *
 * Nickname: list_missing_submissions
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(
    `/v1/users/{user_id}/missing_submissions`,
    { method: 'GET', params: parameters }
  );
}
