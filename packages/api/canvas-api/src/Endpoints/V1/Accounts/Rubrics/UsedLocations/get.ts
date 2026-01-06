import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { UsedLocations } from '../../../../../Overrides.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
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
 * Get the courses and assignments for a rubric
 *
 * Returns the courses and assignments where a rubric is being used
 *
 * Nickname: get_courses_and_assignments_for_rubric_accounts
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
