import { client } from '../../../../../Client.js';

export type mark_topic_as_read_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  topic_id: string;
};

type Options = {
  pathParams: mark_topic_as_read_coursesPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Mark topic as read
 *
 * Mark the initial text of the discussion topic as read.
 *
 * No request fields are necessary.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_topic_as_read_courses
 */
export async function mark_topic_as_read_courses(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}/read`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
