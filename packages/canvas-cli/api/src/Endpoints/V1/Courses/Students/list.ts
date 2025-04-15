import { Paginated } from '@groton/canvas-cli.client';
import { client } from '../../../../Client.js';
import { User } from '../../../../Resources/Users.js';

export type listPathParameters = {
  /** ID */
  course_id: string;
};

export type listSearchParameters = Paginated;

type Options = {
  pathParams: listPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

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
export async function list(options: Options) {
  return await client().fetchAs<User[]>(
    `/api/v1/courses/{course_id}/students`,
    {
      method: 'GET',
      ...options
    }
  );
}
