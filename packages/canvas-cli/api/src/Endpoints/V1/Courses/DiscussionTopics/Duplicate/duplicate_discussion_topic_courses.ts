import { client } from '../../../../../Client.js';
import { DiscussionTopic } from '../../../../../Resources/DiscussionTopics.js';

export type duplicate_discussion_topic_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  topic_id: string;
};

type Options = {
  pathParams: duplicate_discussion_topic_coursesPathParameters;
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
 * Nickname: duplicate_discussion_topic_courses
 */
export async function duplicate_discussion_topic_courses(options: Options) {
  const response = await client().fetchAs<DiscussionTopic>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}/duplicate`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
