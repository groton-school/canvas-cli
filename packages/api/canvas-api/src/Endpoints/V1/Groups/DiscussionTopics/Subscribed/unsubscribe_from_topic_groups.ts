import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

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

type Options = {
  pathParams: unsubscribe_from_topic_groupsPathParameters;
} & (
  | {
      searchParams?: Partial<unsubscribe_from_topic_groupsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: unsubscribe_from_topic_groupsSearchParameters;
      strict: true;
    }
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
  const response = await client().fetchAs<void>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/subscribed`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
