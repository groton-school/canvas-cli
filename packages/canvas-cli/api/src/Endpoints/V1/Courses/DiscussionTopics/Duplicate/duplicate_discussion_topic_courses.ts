import { client } from '../../../../../Client.js';
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
 * Nickname: duplicate_discussion_topic_courses
 */
export async function duplicate_discussion_topic_courses({
  parameters
}: Options) {
  return await client().fetchAs<DiscussionTopic>(
    `/v1/courses/{course_id}/discussion_topics/{topic_id}/duplicate`,
    { method: 'POST', params: parameters }
  );
}
