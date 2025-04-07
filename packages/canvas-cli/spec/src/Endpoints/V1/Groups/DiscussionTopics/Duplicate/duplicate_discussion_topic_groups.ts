import { DiscussionTopic } from '../../../../../Resources/DiscussionTopics.js';

type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Duplicate discussion topic
 *
 * Duplicate a discussion topic according to context (Course/Group)
 *
 * Nickname: duplicate_discussion_topic_groups
 */
export async function duplicate_discussion_topic_groups({
  parameters
}: Options): Promise<DiscussionTopic> {
  return await (
    await fetch(
      `/v1/groups/{group_id}/discussion_topics/{topic_id}/duplicate`,
      { method: 'POST', body: parameters }
    )
  ).json();
}
