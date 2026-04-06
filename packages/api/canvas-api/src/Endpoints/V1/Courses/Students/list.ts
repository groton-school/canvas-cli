import { client, Masquerade, Paginated } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { User } from '../../../../Resources/Users.js';

export type listPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type listSearchParameters = Masquerade & Paginated;

type Options = (
  | {
      path: listPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: listPathParameters;
    }
) &
  (
    | {
        query?: Partial<listSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<listSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: listSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: listSearchParameters;
          }
      ) & {
        strict: true;
      })
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
  const response = await client().fetchAs<User[]>(
    `/api/v1/courses/{course_id}/students`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
