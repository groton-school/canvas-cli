import { client } from '../../../../Client.js';

type getPathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: getPathParameters;
};

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
export async function get({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/bulk_user_progress`,
    {
      method: 'GET',
      pathParams
    }
  );
}
