import { Course } from '../../../../Resources/Courses.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Reset a course
 *
 * Deletes the current course, and creates a new equivalent course with no
 * content, but all sections and users moved over.
 *
 * Nickname: reset_course
 */
export async function reset_course({ parameters }: Options): Promise<Course> {
  return await (
    await fetch(`/v1/courses/{course_id}/reset_content`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
