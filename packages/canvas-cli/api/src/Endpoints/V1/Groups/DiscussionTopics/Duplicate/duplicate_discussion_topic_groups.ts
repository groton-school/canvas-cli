import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';
import { DiscussionTopic } from '../../../../../Resources/DiscussionTopics.js';

export type duplicate_discussion_topic_groupsPathParameters = {
  /** ID */
  group_id: string;
  /** ID */
  topic_id: string;
};

export type duplicate_discussion_topic_groupsSearchParameters = Masquerade;

type Options = {
  pathParams: duplicate_discussion_topic_groupsPathParameters;
} & (
  | {
      searchParams?: Partial<duplicate_discussion_topic_groupsSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: duplicate_discussion_topic_groupsSearchParameters;
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
  const response = await client().fetchAs<DiscussionTopic>(
    `/api/v1/groups/{group_id}/discussion_topics/{topic_id}/duplicate`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
