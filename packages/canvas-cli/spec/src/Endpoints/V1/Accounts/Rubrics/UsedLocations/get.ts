import { UsedLocations } from '';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get the courses and assignments for
 *
 * Returns the rubric with the given id.
 *
 * Nickname: get_courses_and_assignments_for_accounts
 */
export async function get({ parameters }: Options): Promise<UsedLocations> {
  return await (
    await fetch(`/v1/accounts/{account_id}/rubrics/{id}/used_locations`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
