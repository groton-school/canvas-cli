import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../../Client.js';

export type post_reply_coursesPathParameters = {
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
  /**
   * ID
   *
   * Type: string
   */
  entry_id: string | number;
};

export type post_reply_coursesSearchParameters = Masquerade;

export type post_reply_coursesFormParameters = Masquerade & {
  /** The body of the entry. */
  message: string;
  /**
   * A multipart/form-data form-field-style attachment. Attachments larger
   * than 1 kilobyte are subject to quota restrictions.
   */
  attachment: string;
};

type Options = {
  pathParams: post_reply_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<post_reply_coursesSearchParameters>;
      params?: Partial<post_reply_coursesFormParameters>;
      strict?: false;
    }
  | {
      searchParams: post_reply_coursesSearchParameters;
      params: post_reply_coursesFormParameters;
      strict: true;
    }
);

/**
 * Post a reply
 *
 * Add a reply to an entry in a discussion topic. Returns a json representation
 * of the created reply (see documentation for 'replies' method) on success.
 *
 * May require (depending on the topic) that the user has posted in the topic.
 * If it is required, and the user has not posted, will respond with a 403
 * Forbidden status and the body 'require_initial_post'.
 *
 * Nickname: post_reply_courses
 */
export async function post_reply_courses(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}/entries/{entry_id}/replies`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
