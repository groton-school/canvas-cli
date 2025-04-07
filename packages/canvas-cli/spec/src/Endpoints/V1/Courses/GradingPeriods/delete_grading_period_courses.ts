type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Delete a grading period
 *
 * <b>204 No Content</b> response code is returned if the deletion was
 * successful.
 *
 * Nickname: delete_grading_period_courses
 */
export async function delete_grading_period_courses({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/grading_periods/{id}`, {
      method: 'DELETE',
      body: parameters
    })
  ).json();
}
