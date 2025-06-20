import { client } from '../../../../../Client.js';

export type post_entry_coursesPathParameters = {
  /** ID */
  course_id: string;
  /** ID */
  topic_id: string;
};

export type post_entry_coursesFormParameters = {
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
      params?: Partial<post_entry_coursesFormParameters>;
      strict?: false;
    }
  | {
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
