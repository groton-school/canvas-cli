import { client } from '../../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Get user-in-a-course-level messaging data
 *
 * Returns messaging "hits" grouped by day through the entire history of the
 * course. Returns a hash containing the number of instructor-to-student
 * messages, and student-to-instructor messages, where the hash keys are dates
 * in the format "YYYY-MM-DD". Message hits include Conversation messages and
 * comments on homework submissions.
 *
 * Nickname: get_user_in_a_course_level_messaging_data
 */
export async function get({ parameters }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/analytics/users/{student_id}/communication`,
    { method: 'GET', params: parameters }
  );
}
