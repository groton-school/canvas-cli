import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade, Paginated } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { HashAmappingofuserIDstoarraysoftaggroupIDsExample35579345 } from '../../../../Overrides.js';

export type bulk_fetch_user_tags_for_multiple_users_in_coursePathParameters = {
  /**
   * The ID of the course context (from the route).
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  course_id: number | string;
};

export type bulk_fetch_user_tags_for_multiple_users_in_courseSearchParameters =
  Masquerade &
    Paginated &
    Partial<{
      /**
       * An array of user IDs to fetch tags for.
       *
       * Format: 'int64'
       */
      user_ids: number | string[];
    }>;

type Options = {
  pathParams: bulk_fetch_user_tags_for_multiple_users_in_coursePathParameters;
} & (
  | {
      searchParams?: Partial<bulk_fetch_user_tags_for_multiple_users_in_courseSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: bulk_fetch_user_tags_for_multiple_users_in_courseSearchParameters;
      strict: true;
    }
);

/**
 * Bulk fetch user tags for multiple users in a course
 *
 * Returns a mapping of user IDs to arrays of non-collaborative group (tag) IDs
 * for each user in the given course.
 *
 * Nickname: bulk_fetch_user_tags_for_multiple_users_in_course
 */
export async function bulk_fetch_user_tags_for_multiple_users_in_course(
  options: Options
) {
  const response = await client().fetchAs<
    HashAmappingofuserIDstoarraysoftaggroupIDsExample35579345[]
  >(`/api/v1/courses/{course_id}/bulk_user_tags`, {
    method: 'GET',
    ...options
  });
  return response;
}
