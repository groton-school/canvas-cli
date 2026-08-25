import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type mark_topic_as_unread_coursesPathParameters = {
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
  topic_id: string | number;
};

export type mark_topic_as_unread_coursesSearchParameters = Masquerade;

type Options = (
  | {
      path: mark_topic_as_unread_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: mark_topic_as_unread_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<mark_topic_as_unread_coursesSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<mark_topic_as_unread_coursesSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: mark_topic_as_unread_coursesSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: mark_topic_as_unread_coursesSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Mark topic as unread
 *
 * Mark the initial text of the discussion topic as unread.

No request fields are necessary.

On success, the response will be 204 No Content with an empty body.
 *
 * nickname: mark_topic_as_unread_courses
 *
 * 
 *
 * 
 */
export async function mark_topic_as_unread_courses(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}/read`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
