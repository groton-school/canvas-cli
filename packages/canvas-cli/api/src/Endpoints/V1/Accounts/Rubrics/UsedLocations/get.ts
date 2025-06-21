import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { UsedLocations } from '../../../../../Overrides.js';

export type getPathParameters = {
  /** ID */
  account_id: string;
  /** ID */
  id: string;
};

export type getSearchParameters = Masquerade;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get the courses and assignments for
 *
 * Returns the rubric with the given id.
 *
 * Nickname: get_courses_and_assignments_for_accounts
 */
export async function get(options: Options) {
  const response = await client().fetchAs<UsedLocations>(
    `/api/v1/accounts/{account_id}/rubrics/{id}/used_locations`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
