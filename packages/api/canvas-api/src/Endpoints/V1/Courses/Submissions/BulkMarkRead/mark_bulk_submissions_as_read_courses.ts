import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type mark_bulk_submissions_as_read_coursesPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type mark_bulk_submissions_as_read_coursesSearchParameters = Masquerade;

export type mark_bulk_submissions_as_read_coursesFormParameters = Masquerade & {
  /** No description */
  submissionIds: string[];
};

type Options = (
  | {
      path: mark_bulk_submissions_as_read_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: mark_bulk_submissions_as_read_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<mark_bulk_submissions_as_read_coursesSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<mark_bulk_submissions_as_read_coursesSearchParameters>;
        body?: Partial<mark_bulk_submissions_as_read_coursesFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<mark_bulk_submissions_as_read_coursesFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: mark_bulk_submissions_as_read_coursesSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: mark_bulk_submissions_as_read_coursesSearchParameters;
          }
      ) &
        (
          | {
              body: mark_bulk_submissions_as_read_coursesFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: mark_bulk_submissions_as_read_coursesFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Mark bulk submissions as read
 *
 * Accepts a string array of submission ids. Loops through and marks each
 * submission as read
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_bulk_submissions_as_read_courses
 */
export async function mark_bulk_submissions_as_read_courses(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/submissions/bulk_mark_read`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
