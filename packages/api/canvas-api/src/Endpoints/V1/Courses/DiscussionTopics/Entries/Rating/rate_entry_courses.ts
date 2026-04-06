import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type rate_entry_coursesPathParameters = {
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
  /**
   * ID
   *
   * Type: string
   */
  entry_id: string | number;
};

export type rate_entry_coursesSearchParameters = Masquerade;

export type rate_entry_coursesFormParameters = Masquerade & {
  /**
   * A rating to set on this entry. Only 0 and 1 are accepted.
   *
   * Type: integer
   *
   * Format: 'int64'
   */
  rating: number | string;
};

type Options = (
  | {
      path: rate_entry_coursesPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: rate_entry_coursesPathParameters;
    }
) &
  (
    | {
        query?: Partial<rate_entry_coursesSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<rate_entry_coursesSearchParameters>;
        body?: Partial<rate_entry_coursesFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<rate_entry_coursesFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: rate_entry_coursesSearchParameters;
          }
        | {
            /** @deprecated Use {Options.query} */
            searchParams: rate_entry_coursesSearchParameters;
          }
      ) &
        (
          | {
              body: rate_entry_coursesFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: rate_entry_coursesFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Rate entry
 *
 * Rate a discussion entry.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: rate_entry_courses
 */
export async function rate_entry_courses(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}/entries/{entry_id}/rating`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
