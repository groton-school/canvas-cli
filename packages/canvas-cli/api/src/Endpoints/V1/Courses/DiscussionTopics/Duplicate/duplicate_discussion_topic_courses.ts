import { client } from '../../../../../Client.js';
import { DiscussionTopic } from '../../../../../Resources/DiscussionTopics.js';

type duplicate_discussion_topic_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  topic_id: string;
};

type Options = {
  pathParams: duplicate_discussion_topic_coursesPathParameters;
};

/**
 * Duplicate discussion topic
 *
 * Duplicate a discussion topic according to context (Course/Group)
 *
 * Nickname: duplicate_discussion_topic_courses
 */
export async function duplicate_discussion_topic_courses({
  pathParams
}: Options) {
  return await client().fetchAs<DiscussionTopic>(
    `/v1/courses/{course_id}/discussion_topics/{topic_id}/duplicate`,
    {
      method: 'POST',
      pathParams
    }
  );
}
