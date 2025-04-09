import { UsedLocations } from '';
import { client } from '../../../../../Client.js';

type getPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

type Options = {
  pathParams: getPathParameters;
};

/**
 * Get the courses and assignments for
 *
 * Returns the rubric with the given id.
 *
 * Nickname: get_courses_and_assignments_for_accounts
 */
export async function get({ pathParams }: Options) {
  return await client().fetchAs<UsedLocations>(
    `/v1/accounts/{account_id}/rubrics/{id}/used_locations`,
    {
      method: 'GET',
      pathParams
    }
  );
}
