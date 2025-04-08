import { client } from '../../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get user-in-a-course-level participation data
 *
 * Returns page view hits grouped by hour, and participation details through the
 * entire history of the course.
 *
 * `page_views` are returned as a hash, where the keys are iso8601 dates,
 * bucketed by the hour. `participations` are returned as an array of hashes,
 * sorted oldest to newest.
 *
 * Nickname: get_user_in_a_course_level_participation_data
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/analytics/users/{student_id}/activity`,
    { method: 'GET', params: parameters }
  );
}
