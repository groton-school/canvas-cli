import { client } from '../../../../Client.js';
import { Course } from '../../../../Resources/Courses.js';

export type reset_coursePathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: reset_coursePathParameters;
};

/**
 * Reset a course
 *
 * Deletes the current course, and creates a new equivalent course with no
 * content, but all sections and users moved over.
 *
 * Nickname: reset_course
 */
export async function reset_course({ pathParams }: Options) {
  return await client().fetchAs<Course>(
    `/v1/courses/{course_id}/reset_content`,
    {
      method: 'POST',
      pathParams
    }
  );
}
