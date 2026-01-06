import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

export type subscribe_to_topic_coursesPathParameters = {
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

export type subscribe_to_topic_coursesSearchParameters = Masquerade;

type Options = {
  pathParams: subscribe_to_topic_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<subscribe_to_topic_coursesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: subscribe_to_topic_coursesSearchParameters;
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
 * Nickname: subscribe_to_topic_courses
 */
export async function subscribe_to_topic_courses(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}/subscribed`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
