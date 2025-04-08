import { client } from '../../../../Client.js';
import { Course } from '../../../../Resources/Courses.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List active courses in an account
 *
 * Retrieve a paginated list of courses in this account.
 *
 * Nickname: list_active_courses_in_account
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/accounts/{account_id}/courses`, {
    method: 'GET',
    params: parameters
  });
}
