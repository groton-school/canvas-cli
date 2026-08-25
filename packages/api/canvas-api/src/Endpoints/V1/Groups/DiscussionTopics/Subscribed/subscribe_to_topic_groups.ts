import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type subscribe_to_topic_groupsPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  group_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  topic_id: string | number;
};

export type subscribe_to_topic_groupsSearchParameters = Masquerade;

type Options = (
  | {
      path: subscribe_to_topic_groupsPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: subscribe_to_topic_groupsPathParameters;
    }
) &
  (
    | {
        query?: Partial<subscribe_to_topic_groupsSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<subscribe_to_topic_groupsSearchParameters>;
        strict?: false;
      }
    | ((
        | {
            query: subscribe_to_topic_groupsSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: subscribe_to_topic_groupsSearchParameters;
          }
      ) & {
        strict: true;
      })
  );

/**
 * Subscribe to a topic
 *
 * Subscribe to a topic to receive notifications about new entries

On success, the response will be 204 No Content with an empty body
 *
 * nickname: subscribe_to_topic_groups
 *
 * 
 *
 * 
 */
export async function subscribe_to_topic_groups(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/subscribed`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
