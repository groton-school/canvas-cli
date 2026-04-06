import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type unsubscribe_from_topic_groupsPathParameters = {
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

export type unsubscribe_from_topic_groupsSearchParameters = Masquerade;

type Options = (
  | {
      path: unsubscribe_from_topic_groupsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: unsubscribe_from_topic_groupsPathParameters;
    }
) &
  (
    | {
        query?: Partial<unsubscribe_from_topic_groupsSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<unsubscribe_from_topic_groupsSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: unsubscribe_from_topic_groupsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: unsubscribe_from_topic_groupsSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Unsubscribe from a topic
 *
 * Unsubscribe from a topic to stop receiving notifications about new entries
 *
 * On success, the response will be 204 No Content with an empty body
 *
 * Nickname: unsubscribe_from_topic_groups
 */
export async function unsubscribe_from_topic_groups(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/subscribed`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
