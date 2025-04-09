import { client } from '../../../../../Client.js';

type mark_all_topic_as_read_coursesPathParameters = {
  /** ID */
  course_id: string;
};

type Options = {
  pathParams: mark_all_topic_as_read_coursesPathParameters;
};

/**
 * Mark all topic as read
 *
 * Mark the initial text of all the discussion topics as read in the context.
 *
 * No request fields are necessary.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_all_topic_as_read_courses
 */
export async function mark_all_topic_as_read_courses({ pathParams }: Options) {
  return await client().fetchAs<void>(
    `/v1/courses/{course_id}/discussion_topics/read_all`,
    {
      method: 'PUT',
      pathParams
    }
  );
}
