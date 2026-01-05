import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../../Client.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
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
 * Get department-level participation data
 *
 * Returns page view hits summed across all courses in the department. Two
 * groupings of these counts are returned; one by day (+by_date+), the other by
 * category (+by_category+). The possible categories are announcements,
 * assignments, collaborations, conferences, discussions, files, general,
 * grades, groups, modules, other, pages, and quizzes.
 *
 * This and the other department-level endpoints have three variations which all
 * return the same style of data but for different subsets of courses. All share
 * the prefix /api/v1/accounts/<account_id>/analytics. The possible suffixes
 * are:
 *
 * /current: includes all available courses in the default term /completed:
 * includes all concluded courses in the default term /terms/<term_id>: includes
 * all available or concluded courses in the given term.
 *
 * Courses not yet offered or which have been deleted are never included.
 *
 * /current and /completed are intended for use when the account has only one
 * term. /terms/<term_id> is intended for use when the account has multiple
 * terms.
 *
 * The action follows the suffix.
 *
 * Nickname: get_department_level_participation_data_completed
 */
export async function get(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/accounts/{account_id}/analytics/completed/activity`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
