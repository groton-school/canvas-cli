type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List multiple assignments gradeable students
 *
 * A paginated list of students eligible to submit a list of assignments. The
 * caller must have permission to view grades for the requested course.
 *
 * Section-limited instructors will only see students in their own sections.
 *
 * Nickname: list_multiple_assignments_gradeable_students
 */
export async function list({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/assignments/gradeable_students`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
