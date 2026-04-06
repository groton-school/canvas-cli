import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type delete_grading_period_coursesPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type delete_grading_period_coursesSearchParameters = Masquerade;

type Options = (
  | {
      path: delete_grading_period_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: delete_grading_period_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<delete_grading_period_coursesSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<delete_grading_period_coursesSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: delete_grading_period_coursesSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: delete_grading_period_coursesSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Delete a grading period
 *
 * <b>204 No Content</b> response code is returned if the deletion was
 * successful.
 *
 * Nickname: delete_grading_period_courses
 */
export async function delete_grading_period_courses(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/grading_periods/{id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
