import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * List students
 *
 * Returns the paginated list of students enrolled in this course.
 *
 * DEPRECATED: Please use the {api:CoursesController#users course users}
 * endpoint and pass "student" as the enrollment_type.
 *
 * Nickname: list_students
 */
export async function list({ parameters }: Options) {
  return await client().fetchAs<string[]>(`/v1/courses/{course_id}/students`, {
    method: 'GET',
    params: parameters
  });
}
