import { client } from '../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get course-level assignment data
 *
 * Returns a list of assignments for the course sorted by due date. For each
 * assignment returns basic assignment information, the grade breakdown, and a
 * breakdown of on-time/late status of homework submissions.
 *
 * Nickname: get_course_level_assignment_data
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/analytics/assignments`,
    { method: 'GET', params: parameters }
  );
}
