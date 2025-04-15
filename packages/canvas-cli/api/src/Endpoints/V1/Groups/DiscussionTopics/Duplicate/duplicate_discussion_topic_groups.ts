import { client } from '../../../../../Client.js';
import { DiscussionTopic } from '../../../../../Resources/DiscussionTopics.js';

export type duplicate_discussion_topic_groupsPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  topic_id: string;
};

type Options = {
  pathParams: duplicate_discussion_topic_groupsPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Duplicate discussion topic
 *
 * Duplicate a discussion topic according to context (Course/Group)
 *
 * Nickname: duplicate_discussion_topic_groups
 */
export async function duplicate_discussion_topic_groups(options: Options) {
  return await client().fetchAs<DiscussionTopic>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/duplicate`,
    {
      method: 'POST',
      ...options
    }
  );
}
