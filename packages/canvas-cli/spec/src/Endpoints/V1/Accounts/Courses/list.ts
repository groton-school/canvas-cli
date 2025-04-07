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
export async function list({ parameters }: Options): Promise<string[]> {
  return await (
    await fetch(`/v1/accounts/{account_id}/courses`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
