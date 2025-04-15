import { client } from '../../../../../Client.js';

export type set_extensions_for_student_assignment_submissionsPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  assignment_id: string;
};

export type set_extensions_for_student_assignment_submissionsFormParameters = {
  /**
   * The ID of the user we want to add assignment extensions for.
   *
   * Format: 'int64'
   */
  'assignment_extensions[user_id]': number[];
  /**
   * Number of times the student is allowed to re-take the assignment over the
   * limit.
   *
   * Format: 'int64'
   */
  'assignment_extensions[extra_attempts]': number[];
};

type Options = {
  pathParams: set_extensions_for_student_assignment_submissionsPathParameters;
} & (
  | {
      params?: Partial<set_extensions_for_student_assignment_submissionsFormParameters>;
      strict?: false;
    }
  | {
      params: set_extensions_for_student_assignment_submissionsFormParameters;
      strict: true;
    }
);

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
export async function set_extensions_for_student_assignment_submissions(
  options: Options
) {
  return await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/extensions`,
    {
      method: 'POST',
      ...options
    }
  );
}
