import { client } from '../../../../../../Client.js';

export type getPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  student_id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

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
export async function get(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/analytics/users/{student_id}/communication`,
    {
      method: 'GET',
      ...options
    }
  );
}
