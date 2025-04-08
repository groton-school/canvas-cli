import { client } from '../../../../../Client.js';

type Parameters = {
  /**
   * The ID of the user we want to add assignment extensions for.
   *
   * Format: 'int64'
   */
  'assignment_extensions[user_id]': string[];
  /**
   * Number of times the student is allowed to re-take the assignment over the
   * limit.
   *
   * Format: 'int64'
   */
  'assignment_extensions[extra_attempts]': string[];
};

type Options = {
  parameters: Parameters;
};

/**
 * Set extensions for student assignment submissions
 *
 * <b>Responses</b>
 *
 * <b>200 OK</b> if the request was successful <b>403 Forbidden</b> if you are
 * not allowed to extend assignments for this course <b>400 Bad Request</b> if
 * any of the extensions are invalid
 *
 * Nickname: set_extensions_for_student_assignment_submissions
 */
export async function set_extensions_for_student_assignment_submissions({
  parameters
}: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/assignments/{assignment_id}/extensions`,
    { method: 'POST', params: parameters }
  );
}
