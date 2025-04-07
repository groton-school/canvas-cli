type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Select provisional grade
 *
 * Choose which provisional grade the student should receive for a submission.
 * The caller must be the final grader for the assignment or an admin with
 * :select_final_grade rights.
 *
 * Nickname: select_provisional_grade
 */
export async function select_provisional_grade({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/assignments/{assignment_id}/provisional_grades/{provisional_grade_id}/select`,
      { method: 'PUT', body: parameters }
    )
  ).json();
}
