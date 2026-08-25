import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type listPathParameters = {
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

export type listSearchParameters = Masquerade &
  Partial<{
    /**
     * A list of entry ids to retrieve. Entries will be returned in id order,
smallest id first.
     *
     * 
     *
     * 
     */
    ids: string[];
  }>;

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
 * List entries
 *
 * Retrieve a paginated list of discussion entries, given a list of ids.

May require (depending on the topic) that the user has posted in the topic.
If it is required, and the user has not posted, will respond with a 403
Forbidden status and the body 'require_initial_post'.
 *
 * nickname: list_entries_courses
 *
 * 
 *
 * 
 */
export async function list(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}/entry_list`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
