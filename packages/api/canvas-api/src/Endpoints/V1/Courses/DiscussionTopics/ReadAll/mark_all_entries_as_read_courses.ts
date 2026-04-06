import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type mark_all_entries_as_read_coursesPathParameters = {
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
  topic_id: string | number;
};

export type mark_all_entries_as_read_coursesSearchParameters = Masquerade;

export type mark_all_entries_as_read_coursesFormParameters = Masquerade & {
  /**
   * A boolean value to set all of the entries' forced_read_state. No change
   * is made if this argument is not specified.
   *
   * Type: boolean
   */
  forced_read_state: boolean | string;
};

type Options = (
  | {
      path: mark_all_entries_as_read_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: mark_all_entries_as_read_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<mark_all_entries_as_read_coursesSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<mark_all_entries_as_read_coursesSearchParameters>;
        body?: Partial<mark_all_entries_as_read_coursesFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<mark_all_entries_as_read_coursesFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: mark_all_entries_as_read_coursesSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: mark_all_entries_as_read_coursesSearchParameters;
          }
      ) &
        (
          | {
              body: mark_all_entries_as_read_coursesFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: mark_all_entries_as_read_coursesFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Mark all entries as read
 *
 * Mark the discussion topic and all its entries as read.
 *
 * No request fields are necessary.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_all_entries_as_read_courses
 */
export async function mark_all_entries_as_read_courses(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}/read_all`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
