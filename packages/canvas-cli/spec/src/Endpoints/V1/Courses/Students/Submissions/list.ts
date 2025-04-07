type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List submissions for multiple assignments
 *
 * A paginated list of all existing submissions for a given set of students and
 * assignments.
 *
 * Nickname: list_submissions_for_multiple_assignments_courses
 */
export async function list({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/students/submissions`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
