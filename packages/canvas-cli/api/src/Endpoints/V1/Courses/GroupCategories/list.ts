import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { GroupCategory } from '../../../../Resources/GroupCategories.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
};

export type listSearchParameters = {
  /**
   * Filter group categories by their collaboration state:
   *
   * - "all": Return both collaborative and non-collaborative group categories
   * - "collaborative": Return only collaborative group categories (default)
   * - "non_collaborative": Return only non-collaborative group categories
   */
  collaboration_state: string;
} & Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      searchParams?: Partial<listSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: listSearchParameters;
      strict: true;
    }
);

/**
 * List group categories for a context
 *
 * Returns a paginated list of group categories in a context. The list returned
 * depends on the permissions of the current user and the specified
 * collaboration state.
 *
 * Nickname: list_group_categories_for_context_courses
 */
export async function list(options: Options) {
  return await client().fetchAs<GroupCategory[]>(
    `/api/v1/courses/{course_id}/group_categories`,
    {
      method: 'GET',
      ...options
    }
  );
}
