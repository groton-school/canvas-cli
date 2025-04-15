import { client } from '../../../../Client.js';
import { Course } from '../../../../Resources/Courses.js';

export type reset_coursePathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: reset_coursePathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Reset a course
 *
 * Deletes the current course, and creates a new equivalent course with no
 * content, but all sections and users moved over.
 *
 * Nickname: reset_course
 */
export async function reset_course(options: Options) {
  return await client().fetchAs<Course>(
    `/api/v1/courses/{course_id}/reset_content`,
    {
      method: 'POST',
      ...options
    }
  );
}
