import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';

export type post_entry_coursesPathParameters = {
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

export type post_entry_coursesSearchParameters = Masquerade;

export type post_entry_coursesFormParameters = Masquerade & {
  /** The body of the entry. */
  message: string;
  /**
   * A multipart/form-data form-field-style attachment. Attachments larger
   * than 1 kilobyte are subject to quota restrictions.
   */
  attachment: string;
};

type Options = {
  pathParams: post_entry_coursesPathParameters;
} & (
  | {
      searchParams?: Partial<post_entry_coursesSearchParameters>;
      params?: Partial<post_entry_coursesFormParameters>;
      strict?: false;
    }
  | {
      searchParams: post_entry_coursesSearchParameters;
      params: post_entry_coursesFormParameters;
      strict: true;
    }
);

/**
 * Post an entry
 *
 * Create a new entry in a discussion topic. Returns a json representation of
 * the created entry (see documentation for 'entries' method) on success.
 *
 * Nickname: post_entry_courses
 */
export async function post_entry_courses(options: Options) {
  const response = await client().fetchAs<void>(
    `/api/v1/courses/{course_id}/discussion_topics/{topic_id}/entries`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
