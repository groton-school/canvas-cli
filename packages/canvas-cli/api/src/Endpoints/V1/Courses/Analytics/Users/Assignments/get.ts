import { client } from '../../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get user-in-a-course-level assignment data
 *
 * Returns a list of assignments for the course sorted by due date. For each
 * assignment returns basic assignment information, the grade breakdown
 * (including the student's actual grade), and the basic submission information
 * for the student's submission if it exists.
 *
 * Nickname: get_user_in_a_course_level_assignment_data
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/analytics/users/{student_id}/assignments`,
    { method: 'GET', params: parameters }
  );
}
