import { client } from '../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
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
export async function get({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/bulk_user_progress`,
    { method: 'GET', params: parameters }
  );
}
