import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { DiscussionTopic } from '../../../../../Resources/DiscussionTopics.js';

export type duplicate_discussion_topic_coursesPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  topic_id: string | number;
};

export type duplicate_discussion_topic_coursesSearchParameters = Masquerade;

type Options = {
  pathParams: duplicate_discussion_topic_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<duplicate_discussion_topic_coursesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: duplicate_discussion_topic_coursesSearchParameters;
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
