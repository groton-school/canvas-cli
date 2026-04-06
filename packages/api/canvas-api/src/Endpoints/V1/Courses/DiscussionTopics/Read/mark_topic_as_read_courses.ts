import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type mark_topic_as_read_coursesPathParameters = {
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

export type mark_topic_as_read_coursesSearchParameters = Masquerade;

type Options = (
  | {
      path: mark_topic_as_read_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: mark_topic_as_read_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<mark_topic_as_read_coursesSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<mark_topic_as_read_coursesSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: mark_topic_as_read_coursesSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: mark_topic_as_read_coursesSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Mark topic as read
 *
 * Mark the initial text of the discussion topic as read.
 *
 * No request fields are necessary.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_topic_as_read_courses
 */
export async function mark_topic_as_read_courses(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}/read`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
