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
export async function list({ pathParams }: Options) {
  return await client().fetchAs<string[]>(`/v1/courses/{course_id}/students`, {
    method: 'GET',
    pathParams
  });
}
