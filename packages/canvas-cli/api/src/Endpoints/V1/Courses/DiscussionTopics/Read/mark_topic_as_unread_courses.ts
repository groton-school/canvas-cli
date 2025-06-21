import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type mark_topic_as_unread_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  topic_id: string;
};

export type mark_topic_as_unread_coursesSearchParameters = Masquerade;

type Options = {
  pathParams: mark_topic_as_unread_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<mark_topic_as_unread_coursesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: mark_topic_as_unread_coursesSearchParameters;
      strict: true;
    }
);

/**
 * Mark topic as unread
 *
 * Mark the initial text of the discussion topic as unread.
 *
 * No request fields are necessary.
 *
 * On success, the response will be 204 No Content with an empty body.
 *
 * Nickname: mark_topic_as_unread_courses
 */
export async function mark_topic_as_unread_courses(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}/read`,
    {
      method: 'DELETE',
      ...options
    }
  );
  return response;
}
