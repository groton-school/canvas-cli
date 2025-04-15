import { client } from '../../../../../Client.js';

export type unsubscribe_from_topic_groupsPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  topic_id: string;
};

type Options = {
  pathParams: unsubscribe_from_topic_groupsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
  return await client().fetchAs<void>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/subscribed`,
    {
      method: 'DELETE',
      ...options
    }
  );
}
