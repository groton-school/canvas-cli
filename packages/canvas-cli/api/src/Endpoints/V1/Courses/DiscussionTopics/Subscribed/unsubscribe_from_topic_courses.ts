import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type unsubscribe_from_topic_coursesPathParameters = {
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

export type unsubscribe_from_topic_coursesSearchParameters = Masquerade;

type Options = {
  pathParams: unsubscribe_from_topic_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<unsubscribe_from_topic_coursesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: unsubscribe_from_topic_coursesSearchParameters;
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
 * Nickname: unsubscribe_from_topic_courses
 */
export async function unsubscribe_from_topic_courses(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}/subscribed`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
