import { client } from '../../../../../Client.js';

export type unsubscribe_from_topic_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  topic_id: string;
};

type Options = {
  pathParams: unsubscribe_from_topic_coursesPathParameters;
};

/**
 * Unsubscribe from a topic
 *
 * Unsubscribe from a topic to stop receiving notifications about new entries
 *
 * On success, the response will be 204 No Content with an empty body
 *
 * Nickname: unsubscribe_from_topic_courses
 */
export async function unsubscribe_from_topic_courses({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/discussion_topics/{topic_id}/subscribed`,
    {
      method: 'DELETE',
      pathParams
    }
  );
}
