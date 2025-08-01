import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';

export type delete_topic_coursesPathParameters = {
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

export type delete_topic_coursesSearchParameters = Masquerade;

type Options = {
  pathParams: delete_topic_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<delete_topic_coursesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: delete_topic_coursesSearchParameters;
      strict: true;
    }
);

/**
 * Delete a topic
 *
 * Deletes the discussion topic. This will also delete the assignment, if it's
 * an assignment discussion.
 *
 * Nickname: delete_topic_courses
 */
export async function delete_topic_courses(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
