import { client } from '../../../../Client.js';

type disable_assignments_currently_enabled_for_grade_export_to_sisPathParameters =
  {
    /**
     * The ID of the course.
     *
     * Format: 'int64'
     */
    course_id: number;
  };

type disable_assignments_currently_enabled_for_grade_export_to_sisFormParameters =
  {
    /**
     * The ID of the grading period.
     *
     * Format: 'int64'
     */
    grading_period_id: number;
  };

type Options = {
  pathParams: disable_assignments_currently_enabled_for_grade_export_to_sisPathParameters;
  params?: disable_assignments_currently_enabled_for_grade_export_to_sisFormParameters;
};

/**
 * Disable assignments currently enabled for grade export to SIS
 *
 * Disable all assignments flagged as "post_to_sis", with the option of making
 * it specific to a grading period, in a course.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * On failure, the response will be 400 Bad Request with a body of a specific
 * message.
 *
 * For disabling assignments in a specific grading period
 *
 * Nickname: disable_assignments_currently_enabled_for_grade_export_to_sis
 */
export async function disable_assignments_currently_enabled_for_grade_export_to_sis({
  pathParams,
  params
}: Options) {
  return await client().fetchAs<void>(
    `/sis/courses/{course_id}/disable_post_to_sis`,
    {
      method: 'PUT',
      pathParams,
      params
    }
  );
}
