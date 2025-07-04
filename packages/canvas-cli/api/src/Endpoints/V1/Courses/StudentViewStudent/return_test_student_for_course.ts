import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

export type return_test_student_for_coursePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type return_test_student_for_courseSearchParameters = Masquerade;

type Options = {
  pathParams: return_test_student_for_coursePathParameters;
} & (
  | {
      searchParams?: Partial<return_test_student_for_courseSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: return_test_student_for_courseSearchParameters;
      strict: true;
    }
);

/**
 * Return test student for course
 *
 * Returns information for a test student in this course. Creates a test student
 * if one does not already exist for the course. The caller must have permission
 * to access the course's student view.
 *
 * Nickname: return_test_student_for_course
 */
export async function return_test_student_for_course(options: Options) {
  const response = await client().fetchAs<User>(
    `/api/v1/courses/{course_id}/student_view_student`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
