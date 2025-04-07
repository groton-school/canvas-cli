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
export async function get({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/course_creation_accounts`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
