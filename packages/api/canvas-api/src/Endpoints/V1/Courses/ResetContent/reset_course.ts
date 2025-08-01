import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { Course } from '../../../../Resources/Courses.js';

export type reset_coursePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type reset_courseSearchParameters = Masquerade;

type Options = {
  pathParams: reset_coursePathParameters;
} & (
  | {
      searchParams?: Partial<reset_courseSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: reset_courseSearchParameters;
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
  const response = await client().fetchAs<Course>(
    `/api/v1/courses/{course_id}/reset_content`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
