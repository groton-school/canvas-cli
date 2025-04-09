import { client } from '../../../../../Client.js';

type unsubscribe_from_topic_groupsPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  topic_id: string;
};

type Options = {
  pathParams: unsubscribe_from_topic_groupsPathParameters;
};

/**
 * Unsubscribe from a topic
 *
 * Unsubscribe from a topic to stop receiving notifications about new entries
 *
 * On success, the response will be 204 No Content with an empty body
 *
 * Nickname: unsubscribe_from_topic_groups
 */
export async function unsubscribe_from_topic_groups({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/groups/{group_id}/discussion_topics/{topic_id}/subscribed`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
