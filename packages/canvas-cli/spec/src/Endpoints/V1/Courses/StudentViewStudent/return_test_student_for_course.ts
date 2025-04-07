import { User } from '../../../../Resources/Users.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Return test student for course
 *
 * Returns information for a test student in this course. Creates a test student
 * if one does not already exist for the course. The caller must have permission
 * to access the course's student view.
 *
 * Nickname: return_test_student_for_course
 */
export async function return_test_student_for_course({
  parameters
}: Options): Promise<User> {
  return await (
    await fetch(`/v1/courses/{course_id}/student_view_student`, {
      method: 'GET',
      body: parameters
    })
  ).json();
}
