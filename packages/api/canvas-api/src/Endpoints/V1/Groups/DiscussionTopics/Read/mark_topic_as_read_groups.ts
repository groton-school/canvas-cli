import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type mark_topic_as_read_groupsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  group_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  topic_id: string | number;
};

export type mark_topic_as_read_groupsSearchParameters = Masquerade;

type Options = (
  | {
      path: mark_topic_as_read_groupsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: mark_topic_as_read_groupsPathParameters;
    }
) &
  (
    | {
        query?: Partial<mark_topic_as_read_groupsSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<mark_topic_as_read_groupsSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: mark_topic_as_read_groupsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: mark_topic_as_read_groupsSearchParameters;
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
 * Nickname: mark_topic_as_read_groups
 */
export async function mark_topic_as_read_groups(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/read`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
