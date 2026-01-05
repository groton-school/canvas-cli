import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

export type getPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
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
 * Get bulk user progress
 *
 * Returns progress information for all users enrolled in the given course.
 *
 * You must be a user who has permission to view all grades in the course (such
 * as a teacher or administrator).
 *
 * Nickname: get_bulk_user_progress
 */
export async function get(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/bulk_user_progress`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
