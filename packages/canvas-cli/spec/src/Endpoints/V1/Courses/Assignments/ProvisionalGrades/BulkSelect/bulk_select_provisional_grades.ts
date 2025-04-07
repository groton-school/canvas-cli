type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Bulk select provisional grades
 *
 * Choose which provisional grades will be received by associated students for
 * an assignment. The caller must be the final grader for the assignment or an
 * admin with :select_final_grade rights.
 *
 * Nickname: bulk_select_provisional_grades
 */
export async function bulk_select_provisional_grades({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(
      `/v1/courses/{course_id}/assignments/{assignment_id}/provisional_grades/bulk_select`,
      { method: 'PUT', body: parameters }
    )
  ).json();
}
