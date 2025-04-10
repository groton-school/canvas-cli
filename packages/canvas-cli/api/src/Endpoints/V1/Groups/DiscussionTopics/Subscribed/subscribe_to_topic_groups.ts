import { client } from '../../../../../Client.js';

export type subscribe_to_topic_groupsPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  topic_id: string;
};

type Options = {
  pathParams: subscribe_to_topic_groupsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
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
export async function subscribe_to_topic_groups({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/groups/{group_id}/discussion_topics/{topic_id}/subscribed`,
    {
      method: 'PUT',
      pathParams
    }
  );
}
