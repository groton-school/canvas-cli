import { client } from '../../../../../../Client.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Show provisional grade status for a student
 *
 * Tell whether the student's submission needs one or more provisional grades.
 *
 * Nickname: show_provisional_grade_status_for_student
 */
export async function show_provisional_grade_status_for_student({
  parameters
}: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/assignments/{assignment_id}/provisional_grades/status`,
    { method: 'GET', params: parameters }
  );
}
