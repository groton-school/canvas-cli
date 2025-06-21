import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../../../Client.js';

export type mark_all_topic_as_read_coursesPathParameters = {
  /** ID */
  course_id: string;
};

export type mark_all_topic_as_read_coursesSearchParameters = Masquerade;

type Options = {
  pathParams: mark_all_topic_as_read_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<mark_all_topic_as_read_coursesSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: mark_all_topic_as_read_coursesSearchParameters;
      strict: true;
    }
);

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
export async function mark_all_topic_as_read_courses(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/discussion_topics/read_all`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
