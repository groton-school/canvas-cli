import { client } from '../../../Client.js';
import { Account } from '../../../Resources/Accounts.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get accounts that users can create courses in
 *
 * A paginated list of accounts where the current user has permission to create
 * courses.
 *
 * Nickname: get_accounts_that_users_can_create_courses_in
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/course_creation_accounts`, {
    method: 'GET',
    params: parameters
  });
}
