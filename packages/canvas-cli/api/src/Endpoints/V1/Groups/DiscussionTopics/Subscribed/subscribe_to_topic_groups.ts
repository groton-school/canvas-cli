import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type subscribe_to_topic_groupsPathParameters = {
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

export type subscribe_to_topic_groupsSearchParameters = Masquerade;

type Options = {
  pathParams: subscribe_to_topic_groupsPathParameters;
} & (
  | {
      searchParams?: Partial<subscribe_to_topic_groupsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: subscribe_to_topic_groupsSearchParameters;
      strict: true;
    }
);

/**
 * Subscribe to a topic
 *
 * Subscribe to a topic to receive notifications about new entries
 *
 * On success, the response will be 204 No Content with an empty body
 *
 * Nickname: subscribe_to_topic_groups
 */
export async function subscribe_to_topic_groups(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/subscribed`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
