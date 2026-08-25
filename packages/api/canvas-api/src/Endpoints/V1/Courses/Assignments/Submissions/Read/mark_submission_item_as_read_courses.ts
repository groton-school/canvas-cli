import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type mark_submission_item_as_read_coursesPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  assignment_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  user_id: string | number;
  /**
   * ID
   *
   *
   *
   *
   */
  item: string;
};

export type mark_submission_item_as_read_coursesSearchParameters = Masquerade;

type Options = (
  | {
      path: mark_submission_item_as_read_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: mark_submission_item_as_read_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<mark_submission_item_as_read_coursesSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<mark_submission_item_as_read_coursesSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: mark_submission_item_as_read_coursesSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: mark_submission_item_as_read_coursesSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Mark submission item as read
 *
 * No request fields are necessary.

A submission item can be "grade", "comment" or "rubric"

On success, the response will be 204 No Content with an empty body.
 *
 * nickname: mark_submission_item_as_read_courses
 *
 * 
 *
 * 
 */
export async function mark_submission_item_as_read_courses(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/read/{item}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
